import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function readAll(query: any) {
  const rows: any[] = [];
  const pageSize = 1000;
  for (let from = 0; ; from += pageSize) {
    const { data, error } = await query.range(from, from + pageSize - 1);
    if (error) throw error;
    rows.push(...(data ?? []));
    if (!data || data.length < pageSize) break;
  }
  return rows;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "GET") return json({ error: "Method not allowed" }, 405);

  try {
    const url = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const profileSlug = new URL(req.url).searchParams.get("profile");
    const players = await readAll(
      supabase.from("players")
        .select("id,player_name,show_username,leaderboard_opt_in,public_slug,share_stats")
        .eq("share_stats", true)
        .order("last_submitted_at", { ascending: false })
    );
    const playerIds = new Set(players.map((p) => p.id));

    if (profileSlug) {
      const player = players.find((p) =>
        p.public_slug === profileSlug && p.show_username === true
      );
      if (!player) return json({ profile: null });
      const [{ data: profileRow, error: profileError }, itemRows] =
          await Promise.all([
            supabase.from("player_profiles").select("data").eq("player_id", player.id).maybeSingle(),
            readAll(
              supabase.from("player_items")
                .select("item_id,status")
                .eq("player_id", player.id)
                .order("item_id", { ascending: true })
                .order("status", { ascending: true })
            ),
          ]);

      if (profileError) throw profileError;
      const rows = itemRows;
      return json({
        profile: {
          name: player.player_name,
          player: {
            levels: profileRow?.data?.player?.levels ?? {},
            quests: profileRow?.data?.player?.quests ?? {},
            questPoints: profileRow?.data?.player?.questPoints ?? 0,
          },
          rolledCount: rows.filter((r) => r.status === "rolled").length,
          obtainedCount: rows.filter((r) => r.status === "obtained").length,
          recentRolls: [],
        },
      });
    }

    const items = await readAll(
      supabase.from("player_items").select("player_id,item_id,status")
    );
    const rolledCounts = new Map<number, number>();
    const obtainedCounts = new Map<number, number>();
    const perPlayer = new Map<string, { rolled: number; obtained: number }>();

    for (const row of items) {
      if (!playerIds.has(row.player_id)) continue;
      const target = row.status === "rolled" ? rolledCounts : obtainedCounts;
      target.set(row.item_id, (target.get(row.item_id) ?? 0) + 1);
      const totals = perPlayer.get(row.player_id) ?? { rolled: 0, obtained: 0 };
      if (row.status === "rolled") totals.rolled++;
      if (row.status === "obtained") totals.obtained++;
      perPlayer.set(row.player_id, totals);
    }

    const pick = (counts: Map<number, number>, mode: "max" | "min") => {
      const entries = [...counts.entries()].filter(([, count]) => count > 0);
      if (!entries.length) return null;
      entries.sort((a, b) => mode === "max"
        ? b[1] - a[1] || a[0] - b[0]
        : a[1] - b[1] || a[0] - b[0]);
      return { itemId: entries[0][0], count: entries[0][1] };
    };

    const profileRows = await readAll(
      supabase.from("player_profiles").select("player_id,data")
    );
    const profiles = new Map(profileRows.map((row) => [row.player_id, row.data?.player ?? {}]));
    const hiscores = players
      .filter((p) => p.leaderboard_opt_in === true)
      .map((p) => {
        const player = profiles.get(p.id) ?? {};
        const levels = player.levels ?? {};
        const totalLevel = Object.values(levels).reduce((sum: number, value: unknown) =>
          sum + (Number.isFinite(Number(value)) ? Number(value) : 0), 0);
        const counts = perPlayer.get(p.id) ?? { rolled: 0, obtained: 0 };
        return {
          name: p.show_username ? p.player_name : "Anonymous",
          profileUrl: p.show_username && p.public_slug ? `/chancebook/${p.public_slug}` : null,
          rolledCount: counts.rolled,
          obtainedCount: counts.obtained,
          questPoints: Number(player.questPoints) || 0,
          totalLevel,
        };
      })
      .sort((a, b) => b.obtainedCount - a.obtainedCount || b.rolledCount - a.rolledCount)
      .slice(0, 10);

    return json({
      contributorCount: players.length,
      mostRolled: pick(rolledCounts, "max"),
      mostObtained: pick(obtainedCounts, "max"),
      leastRolled: pick(rolledCounts, "min"),
      leastObtained: pick(obtainedCounts, "min"),
      hiscores,
    });
  } catch (error) {
    console.error("Chancebook public data error:", error);
    return json({ error: "Could not load Chancebook data." }, 500);
  }
});
