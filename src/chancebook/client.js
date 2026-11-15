import {
    CHANCEBOOK_SUPABASE_URL,
    CHANCEBOOK_SUPABASE_ANON_KEY
} from "./config.js";

let clientPromise = null;

export async function getChancebookClient() {
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