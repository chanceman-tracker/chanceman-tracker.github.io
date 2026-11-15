// Chancebook uses the public Supabase project URL and publishable (anon) key.
// Set these as Vite environment variables in .env.local; never put a service-role key here.
export const CHANCEBOOK_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
export const CHANCEBOOK_SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
