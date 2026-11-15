-- Chancebook public profile URLs.
-- Existing player rows remain private until the player explicitly opts in.
ALTER TABLE public.players
ADD COLUMN IF NOT EXISTS public_slug text;

CREATE UNIQUE INDEX IF NOT EXISTS idx_players_public_slug
ON public.players (public_slug)
WHERE public_slug IS NOT NULL;

-- Keep the existing RLS and grants unchanged. These columns are only written
-- by the service-role Edge Function; they are not directly exposed to clients.
