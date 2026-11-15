# Chancebook setup notes

Chancebook is a separate, optional feature. It does not change the local tracker storage or RuneLite import flow.

## Frontend configuration

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_SUPABASE_URL` to the existing Chancebook Supabase project URL.
3. Set `VITE_SUPABASE_ANON_KEY` to the project's publishable/anon key. Never use the service-role key in the website.
4. Rebuild with `npm run build`.

## Database migration

Run `supabase/migrations/20261114_chancebook_public_profiles.sql` in the Supabase SQL editor. This adds a unique public profile slug. It does not expose any table to anon/authenticated clients or change the existing RLS rules.

## Edge Functions

Deploy the updated `submit-player-data` source from `supabase/functions/submit-player-data/index.ts` over the existing function. It continues to call the existing `submit_player_data` SQL function, then saves the two separate public preferences using the authenticated user's server-verified identity.

Deploy:
- `supabase/functions/chancebook-public-data/index.ts`
- `supabase/functions/withdraw-player-data/index.ts`

For `chancebook-public-data`, disable JWT verification (or deploy with the included `supabase/config.toml` setting). This endpoint is deliberately read-only and returns only aggregate item counts, opted-in hiscores, or a profile whose owner opted into public username display. It uses the service-role key only inside the Edge Function.

Keep JWT verification enabled for `submit-player-data` and `withdraw-player-data`.

## Data limitations to resolve before public launch

- The existing `player_items` table stores item membership, not the chronological time each item was rolled. The profile therefore currently shows a clear “history unavailable” message instead of guessing which three items were most recent. A future plugin/data-format update should supply timestamped roll history.
- Public profile URLs use a readable name slug plus a short unique suffix, for example `/chancebook/randomhexii-a1b2c3`, so duplicate RuneScape names cannot collide.
- The current temporary browser anonymous-auth identity is not a permanent RuneScape identity. Until the RuneLite sync plugin supplies a stable account identifier, clearing browser storage or switching browsers may create a separate contribution.
- Hiscores are currently ranked by obtained-item count, then rolled-item count. Anonymous hiscores entries display as “Anonymous”.
- The public endpoint reads the database using the service role but never returns raw `player_profiles` JSON beyond the specific opted-in profile's player data. Do not grant anon/authenticated direct access to the tables.

## Consent behavior

- `shareStats` is required to submit.
- `showUsername` and `leaderboardOptIn` are independent and default to false.
- Withdrawal deletes the player's Chancebook row; foreign-key cascades remove its profile and item records. The anonymous Auth identity remains and can submit again later.
