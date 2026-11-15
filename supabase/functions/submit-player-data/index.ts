
import { withSupabase } from "npm:@supabase/server@1";

const MAX_BODY_BYTES = 2 * 1024 * 1024;
const MAX_ITEMS_PER_LIST = 50000;

function makeSlug(name: string, playerId: string) {
  const base = name.toLowerCase().normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40) || "player";
  return `${base}-${playerId.slice(0, 6)}`;
}

export default {
  fetch: withSupabase({ auth: "user" }, async (req, ctx) => {
    if (req.method !== "POST") return Response.json({ error: "Method not allowed" }, { status: 405 });

    try {
      const contentLength = Number(req.headers.get("content-length") ?? 0);
      if (contentLength > MAX_BODY_BYTES) return Response.json({ error: "Submission is too large" }, { status: 413 });
      const rawBody = await req.text();
      if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) return Response.json({ error: "Submission is too large" }, { status: 413 });

      const body = JSON.parse(rawBody);
      const { rolledIds, obtainedIds, profile, shareStats, showUsername, leaderboardOptIn } = body;
      const claims = ctx.userClaims as Record<string, unknown> | undefined;
      const authUserId = typeof claims?.sub === "string" ? claims.sub : typeof claims?.id === "string" ? claims.id : null;
      if (!authUserId) return Response.json({ error: "Could not identify authenticated user" }, { status: 401 });
      if (shareStats !== true) return Response.json({ error: "Statistics sharing consent is required" }, { status: 400 });
      const validItemArray = (value: unknown) => Array.isArray(value) && value.length <= MAX_ITEMS_PER_LIST && value.every((id) => Number.isSafeInteger(id) && id >= 0);
      if (!validItemArray(rolledIds) || !validItemArray(obtainedIds)) return Response.json({ error: "Invalid rolled or obtained item list" }, { status: 400 });
      if (!profile || typeof profile !== "object" || Array.isArray(profile) || !profile.player || typeof profile.player !== "object" || Array.isArray(profile.player) || typeof profile.player.name !== "string" || !profile.player.name.trim()) {
        return Response.json({ error: "Invalid player profile" }, { status: 400 });
      }

      // Fail closed: clear any previous public listing before saving this submission.
      const { error: privacyResetError } = await ctx.supabaseAdmin
        .from("players")
        .update({ show_username: false, leaderboard_opt_in: false, public_slug: null })
        .eq("auth_user_id", authUserId);
      if (privacyResetError) {
        console.error("Chancebook privacy reset failed:", privacyResetError);
        return Response.json({ error: "Could not safely update your privacy preferences" }, { status: 500 });
      }

      const { data: playerId, error } = await ctx.supabaseAdmin.rpc("submit_player_data", {
        p_auth_user_id: authUserId,
        p_rolled_ids: rolledIds,
        p_obtained_ids: obtainedIds,
        p_profile: profile,
        p_share_stats: true,
      });
      if (error) {
        console.error("Chancebook database submission failed:", error);
        return Response.json({ error: "Could not save player data" }, { status: 500 });
      }

      const playerName = profile.player.name.trim();
      const publicSlug = showUsername === true ? makeSlug(playerName, String(playerId)) : null;
      const { error: preferenceError } = await ctx.supabaseAdmin
        .from("players")
        .update({
          show_username: showUsername === true,
          leaderboard_opt_in: leaderboardOptIn === true,
          public_slug: publicSlug,
        })
        .eq("id", playerId)
        .eq("auth_user_id", authUserId);

      if (preferenceError) {
        console.error("Chancebook preference update failed:", preferenceError);
        return Response.json({ error: "Statistics were saved, but public preferences could not be saved. Please retry." }, { status: 500 });
      }

      return Response.json({ success: true, playerId, publicSlug });
    } catch (error) {
      console.error("Chancebook submission error:", error);
      return Response.json({ error: "Invalid submission" }, { status: 400 });
    }
  }),
};
