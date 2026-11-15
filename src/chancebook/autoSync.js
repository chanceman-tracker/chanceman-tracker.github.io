import { fileStore } from "../storage/fileStore.js";
import { getChancebookClient } from "./client.js";

const RULESET_STORAGE_KEY = "chancebookRulesets";

let clientPromise = null;

async function getClient() {
    if (!CHANCEBOOK_SUPABASE_URL || !CHANCEBOOK_SUPABASE_ANON_KEY) {
        return null;
    }

    if (!clientPromise) {
        clientPromise = import("https://esm.sh/@supabase/supabase-js@2")
            .then(({ createClient }) => createClient(
                CHANCEBOOK_SUPABASE_URL,
                CHANCEBOOK_SUPABASE_ANON_KEY,
                {
                    auth: {
                        persistSession: true,
                        autoRefreshToken: true,
                        detectSessionInUrl: true
                    }
                }
            ));
    }

    return clientPromise;
}

function getSavedRulesets() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(RULESET_STORAGE_KEY) || "{}"
        );

        return {
            pluginSettings: Array.isArray(saved.pluginSettings)
                ? saved.pluginSettings
                : [],
            customRules: Array.isArray(saved.customRules)
                ? saved.customRules
                : []
        };
    } catch {
        return {
            pluginSettings: [],
            customRules: []
        };
    }
}

export async function syncChancebookContribution() {
    try {
        const supabase = await getChancebookClient();
        if (!supabase) return false;

        // Never create a new anonymous session during an automatic update.
        const { data: authData, error: authError } =
            await supabase.auth.getSession();

        if (authError) throw authError;

        if (!authData?.session) return false;

        // Confirm that this account still has an active contribution.
        const { data: statusData, error: statusError } =
            await supabase.functions.invoke("withdraw-player-data", {
                body: { action: "status" }
            });

        if (statusError) throw statusError;
        if (statusData?.hasContribution !== true) return false;

        const rolledIds = fileStore.rolled;
        const obtainedIds = fileStore.obtained;

        if (!Array.isArray(rolledIds) || !Array.isArray(obtainedIds)) {
            throw new Error("Tracker item data is not available.");
        }

        if (typeof fileStore.playerBlobText !== "string" ||
            !fileStore.playerBlobText.trim()) {
            throw new Error("Player profile data is not available.");
        }

        const profile = JSON.parse(fileStore.playerBlobText);

        if (!profile?.player?.name) {
            throw new Error("Player profile is missing a player name.");
        }

        const { data, error } = await supabase.functions.invoke(
            "submit-player-data",
            {
                body: {
                    rolledIds,
                    obtainedIds,
                    profile,
                    chancebookRulesets: getSavedRulesets(),
                    shareStats: true,
                    automaticUpdate: true
                }
            }
        );

        if (error) throw error;

        if (data?.success !== true) {
            throw new Error("Chancebook did not confirm the automatic update.");
        }

        console.info("Chancebook statistics automatically updated.");
        return true;
    } catch (error) {
        console.error(
            "Could not automatically update Chancebook statistics:",
            error
        );

        if (error?.context) {
            try {
                const responseText = await error.context.clone().text();

                console.error(
                    "Chancebook Edge Function response:",
                    error.context.status,
                    responseText
                );
            } catch (responseError) {
                console.error(
                    "Could not read Chancebook error response:",
                    responseError
                );
            }
        }

        return false;
    }
}