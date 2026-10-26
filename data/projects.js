window.PROJECTS = [
 {
  "id": "sail-together",
  "title": "Sail Together",
  "oneLiner": "A 3 to 4 player co-op sailing comedy in the browser where the cargo is physical, the deck is slippery and your friend is more dangerous than the sea.",
  "category": "game",
  "stack": [
   "Three.js",
   "TypeScript",
   "Vite",
   "PeerJS",
   "WebAudio"
  ],
  "status": "live",
  "liveUrl": "https://l0x3n.github.io/sail-coop/",
  "github": {
   "repo": "L0x3n/sail-coop",
   "visibility": "public"
  },
  "period": "Jun 2026",
  "metrics": [
   "53 commits in 4 days",
   "about 10,400 lines of code",
   "33 TypeScript modules",
   "3 to 4 player co-op",
   "4 delivery routes"
  ],
  "highlights": [
   "Host-authoritative star-topology co-op for up to 4 players over PeerJS, hardened by an adversarial exploit audit that fixed a NaN-poisoning netcode bug and several soft-locks.",
   "Real-time Tessendorf FFT ocean: Phillips spectrum evolved in frequency space every frame with a hand-written radix-2 inverse FFT, with the water shoreline-faded so waves never wash over land.",
   "Physical sailing model with a 40 degree no-go zone, speed-dependent rudder authority and heel from crosswind, while crew slide, stumble and fall overboard on a pitching deck.",
   "A full game loop around the physics: job board and cargo deliveries, NPC shops with hats and hull upgrades, cannon and barge, day/night cycle, weather and procedurally built cartoon pirates."
  ],
  "score": 5,
  "shots": [
   "assets/shots/sail-together-1.webp",
   "assets/shots/sail-together-2.webp",
   "assets/shots/sail-together-3.webp"
  ],
  "icon": ""
 },
 {
  "id": "pixelfall",
  "title": "Pixelfall",
  "oneLiner": "An incremental mining game where thousands of balls chew through a 104-million-pixel procedural world in Unity, hunting the one golden pixel.",
  "category": "game",
  "stack": [
   "Unity 6",
   "C#",
   "Burst",
   "Compute shaders",
   ".NET 9",
   "xunit"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug 2026",
  "metrics": [
   "104,857,600 pixels (10,240 x 10,240)",
   "25,000 balls in 1.55 ms/frame on 12 threads",
   "238 tests",
   "12 ball kinds",
   "70 commits in 5 days"
  ],
  "highlights": [
   "The whole world is one R8_UInt texture drawn by a single quad, kept current by two compute dispatches whose cost does not scale with world size.",
   "One physical copy of the simulation source compiles under Unity Burst and under plain .NET 9, so dotnet test runs in about 6 seconds with the editor closed and a headless renderer writes PNG proofs in about one second.",
   "Bit-deterministic from a seed: IEEE-exact operations only, order-independent chunk worldgen and damage applied in sorted order, so parallel workers cannot change the result.",
   "Saves store the seed plus only the chunks you broke into: a few hundred KB after an hour instead of a 200 MB dump."
  ],
  "score": 5,
  "shots": [
   "assets/shots/pixelfall-1.webp",
   "assets/shots/pixelfall-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "hemvik",
  "title": "Hemvik",
  "oneLiner": "A cozy first-person fishing game on a low-poly island where every model is a Blender script and one in ten bites is a talking fish with opinions.",
  "category": "game",
  "stack": [
   "Godot 4.6",
   "GDScript",
   "Blender 4.4 (Python)",
   "glTF",
   "ElevenLabs"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug 2026",
  "metrics": [
   "103 commits in 8 days",
   "12.8k lines of GDScript",
   "5 rod tiers",
   "6 personality fish",
   "14 scripted screenshot vantages"
  ],
  "highlights": [
   "Stylised low-poly water with lapping shore foam, a wet-sheen pass limited to specular, and a moon the water reacts to, tuned against A Short Hike and DREDGE with blind critic passes.",
   "Every 3D asset (house kit, five rods, fish, boat, trading post, pine hero) is a headless Blender Python script exported to glTF, so re-running the script is the iteration loop.",
   "Fighting was rebuilt as 'the pull': a sweeping timing window with pips where a miss never costs anything, with the player's own forged rod as tier 0 in the viewmodel.",
   "Ten percent of bites roll one of six personality fish (Angry, Tax, Fake, Exploding, Old Man, Depressed), each with its own model, props and scripted moment, plus a deterministic --dbg-auto harness that must stay green before every commit."
  ],
  "score": 4,
  "shots": [
   "assets/shots/hemvik-1.webp",
   "assets/shots/hemvik-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "creature-stage",
  "title": "Creature Stage",
  "oneLiner": "A Spore-inspired multiplayer open world where you hatch small, eat for DNA and rebuild your body into a predator or a fugitive, with permadeath.",
  "category": "game",
  "stack": [
   "Three.js",
   "TypeScript",
   "Vite",
   "Node",
   "ws",
   "WebAudio",
   "pnpm workspaces"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jul 2026",
  "metrics": [
   "15 commits in one day",
   "about 11,500 lines of code",
   "plan phases 0 to 9 complete",
   "10,368 loadouts swept for balance",
   "client deploy-ready"
  ],
  "highlights": [
   "Simulation package with zero dependencies, no DOM, no clock and no Math.random, enforced by a purity-check script so it can be transliterated to C# for the locked Unity port.",
   "Procedural legged locomotion with leg IK on an extendable 3 to 8 segment spine, with terrain parameters tuned by measurement rather than guesswork.",
   "Server-authoritative multiplayer with client prediction, an interest grid and PvP lag compensation that rolls swaps back by the interpolation delay; PvP is resolved on the server only.",
   "Balance proven by sweeping all 10,368 builds for dominated loadouts, and a rule that every strong ability has at least a 250 ms telegraph is enforced as a test instead of a comment."
  ],
  "score": 4,
  "shots": [
   "assets/shots/creature-stage-1.webp",
   "assets/shots/creature-stage-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "refract",
  "title": "REFRACT",
  "oneLiner": "An incremental game about routing light: drag mirrors, prisms and filters to bend one beam into colour-hungry collectors, with no imported art at all.",
  "category": "game",
  "stack": [
   "Godot 4.6",
   "GDScript",
   "Shaders",
   "ElevenLabs"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug 2026",
  "metrics": [
   "12 commits in one session",
   "211 headless assertions",
   "59.5 fps at 44 optics and 192 rays",
   "8.7k lines of GDScript",
   "0 imported art assets"
  ],
  "highlights": [
   "Every visual is a shader, a draw call or a system font; the beam solver handles mirrors, splitters, prisms, lenses, six colour filters, a combiner, a polariser and a second source at 59.5 fps on a 192-ray stress board.",
   "A headless session simulator caught three design failures (a zero-income trap, a three-minute prestige and a 93x dominant strategy), and each was fixed in the game rules rather than in the test.",
   "A graded CRITIC.md checklist (sections A to H) drove the build via the gauntlet loop until every item was green, with zero errors and zero GDScript warnings.",
   "Prestige is a Collapse that buys a permanent Spectrum tree, plus a contextual guidance system and constellations so a second run is not the first run again."
  ],
  "score": 4,
  "shots": [
   "assets/shots/refract-1.webp",
   "assets/shots/refract-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "pixelcannon",
  "title": "Pixelcannon",
  "oneLiner": "A Terraria-style sandbox where you dig with a cannon that fires bouncing balls, with every tile, light and effect generated in code.",
  "category": "game",
  "stack": [
   "Unity 6",
   "C#",
   "Procedural pixel art",
   "Custom mesh renderer",
   "Unity MCP"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug 2026",
  "metrics": [
   "94 commits in 3 days",
   "35k lines of C#",
   "9 cannon tiers",
   "30 crafting recipes",
   "2 three-phase bosses",
   "28 structures per world",
   "35 audio clips"
  ],
  "highlights": [
   "A tile-grid simulation in plain C# with no MonoBehaviour in the hot path, a chunked mesh renderer instead of Unity Tilemap and a custom swept AABB instead of Rigidbody2D, chosen because Tilemap stalls under constant destruction.",
   "A headless simcheck harness runs the real checks in two seconds where Unity's test runner takes minutes; each agent writes its own Checks file and the harness globs them.",
   "Survival layers on top of mining: depth-driven darkness (a filter, so torches are a survival tool), drowning, burial, heat and chill, six shop NPCs gated on different axes, and saves that carry the whole run.",
   "Traced editor stalls (845 s project load) to a 99 percent full system drive and fixed it by moving the Unity cache behind a directory junction, cutting load to 38 s."
  ],
  "score": 4,
  "shots": [
   "assets/shots/pixelcannon-1.webp",
   "assets/shots/pixelcannon-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "potionlite",
  "title": "Potionlite",
  "oneLiner": "A top-down dungeon-crawler roguelite whose entire pixel art is hand-authored in Python and PIL, with no image generation and no asset packs.",
  "category": "game",
  "stack": [
   "Godot 4.7",
   "GDScript",
   "Python",
   "PIL"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep 2026",
  "metrics": [
   "61 commits in 4 days",
   "28.9k lines of GDScript",
   "38 Python sprite generators",
   "30 authored rooms",
   "8 headless test scenes"
  ],
  "highlights": [
   "All sprites, UI and effects are drawn by code in spritegen: a numeric diff tool printed our sprite beside the reference as pixel grids, taking character matching from 12 of 26 rows to 23 of 26 after six failed visual passes.",
   "Effects follow a measured law from a reference sheet: born white, full size in 3 to 5 frames, bounding box held while the colour walks down its ramp and pixels dissolve, never an alpha fade.",
   "The whole UI is asset-free: a generated bitmap font, a code-built theme and bevelled frames on one 384 by 216 pixel grid upscaled 6x with integer scaling.",
   "Regression tests probe the physics space at every doorway after an invisible-wall bug survived teleporting tests, and a Telemetry autoload logs per-room damage and cause of death for balance tuning."
  ],
  "score": 4,
  "shots": [
   "assets/shots/potionlite-1.webp",
   "assets/shots/potionlite-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "omerta",
  "title": "Omerta",
  "oneLiner": "An online bluffing card game for 2 to 6 players with a mafia theme, invite codes instead of sign-up and a server that referees every move.",
  "category": "game",
  "stack": [
   "React",
   "TypeScript",
   "Vite",
   "Tailwind",
   "Supabase",
   "Vercel",
   "WebAudio",
   "PWA"
  ],
  "status": "live",
  "liveUrl": "https://omerta-phi.vercel.app",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jul to Aug 2026",
  "metrics": [
   "about 72 tests",
   "1000 simulated bot matches",
   "19 rules edge cases tested",
   "cheat test 15/15",
   "14 PixelLab art assets",
   "about 10,100 lines of code"
  ],
  "highlights": [
   "Rules engine is pure functions, reduce(state, event, rng), with a per-event RNG stream and event timestamps so the engine never reads a clock; deterministic replay reproduces a 42-line game log identically.",
   "Server-authoritative on Supabase: Postgres with row-level security, an Edge Function with idempotent client op ids, rate limiting and a cron sweep that finishes abandoned games, plus realtime subscriptions.",
   "Found and fixed a genuine RLS recursion bug and documented a cheat-test suite (15 of 15 attacks rejected) in SECURITY.md.",
   "Mobile-first PWA verified at 375 px with no scroll, animation queue driven by the game log, WebAudio-synthesised sound, deployed with a custom prebuilt Vercel script."
  ],
  "score": 4,
  "shots": [
   "assets/shots/omerta-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "sviten-special",
  "title": "Sviten Special",
  "oneLiner": "Multiplayer Drawmaha poker for playing with friends, with an authoritative server, provably fair shuffles, bots and accounts, live on the web.",
  "category": "game",
  "stack": [
   "TypeScript",
   "Vite",
   "Socket.IO",
   "Express",
   "Postgres",
   "Vitest",
   "Render",
   "pnpm workspaces"
  ],
  "status": "live",
  "liveUrl": "https://sviten.onrender.com",
  "github": {
   "repo": "L0x3n/sviten",
   "visibility": "private"
  },
  "period": "May to Jul 2026",
  "metrics": [
   "119 test cases (shared engine + server)",
   "20 commits over 8 weeks",
   "up to 5 bots per table",
   "6 rank levels",
   "about 12,000 lines of code"
  ],
  "highlights": [
   "Pure TypeScript rules engine shared by server and client: pot-limit betting with side pots, split pot between an Omaha hand and a dark five-card hand, and the single-card draw rule.",
   "Authoritative Socket.IO server that never leaks hole cards; a systematic security audit led to input validation hardening, one-room-per-socket guards and XSS-safe rendering verified in the browser.",
   "Provably fair commit-reveal shuffle with SHA-256, server-side bots driven by hand-strength heuristics, accounts with scrypt hashes and a persisted bankroll, plus an equity calculator.",
   "Open-table lobby with free seat choice around a visual oval table, auto-starting hands, live member banner, landscape-forced mobile layout and a neon redesign with a landing page."
  ],
  "score": 4,
  "shots": [
   "assets/shots/sviten-special-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "sunspire",
  "title": "Sunspire",
  "oneLiner": "A bright, cheerful Slay the Spire style deckbuilder with a full run loop, 142 sprites and 114 passing tests.",
  "category": "game",
  "stack": [
   "TypeScript",
   "Vite",
   "Vitest",
   "DOM/CSS rendering",
   "WebAudio",
   "PixelLab"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "May 2026",
  "metrics": [
   "114 tests in 11 files",
   "800+ headless-bot full runs with zero console errors",
   "207 art files (142 sprites, 56 icons, 9 backgrounds)",
   "18 cards, 7 enemy defs, 8 relics, 5 potions",
   "about 7,300 lines of code"
  ],
  "highlights": [
   "Clean split between a framework-free logic core (combat state machine, effect engine, status system, seeded RNG) and a DOM/CSS rendering layer, so the full headless combat is unit-tested.",
   "Branching DAG map generator with guarantees verified over 200 seeds: first row monsters, lone boss on top, rest before the boss, at least one shop, elite cap.",
   "Full meta loop: weighted card rewards, relics, potions, shop, rest, events and treasure, boss King Custard with two phases, victory and defeat screens.",
   "All art generated with PixelLab under a locked style spec, then an epic Sun Temple remake with splash-art character select and procedural WebAudio sound."
  ],
  "score": 4,
  "shots": [
   "assets/shots/sunspire-1.webp",
   "assets/shots/sunspire-2.webp",
   "assets/shots/sunspire-3.webp"
  ],
  "icon": ""
 },
 {
  "id": "norrsken",
  "title": "Norrsken: The Long Blue Hour",
  "oneLiner": "A procedural first-person walk across a frozen highland lake under a ray-marched aurora, in a single HTML file with no textures or models.",
  "category": "game",
  "stack": [
   "Three.js",
   "GLSL",
   "WebGL",
   "JavaScript"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jul 2026",
  "metrics": [
   "about 3,900 lines in one index.html",
   "0 textures, 0 models, 0 audio samples",
   "4 quality tiers",
   "built in one session"
  ],
  "highlights": [
   "The aurora is ray-marched through an emitting slab 900 to 3000 m up instead of painted on a sky dome, which gives real parallax; step count (8 to 22) is the first quality dial.",
   "Ice reflects the sky analytically, aurora included, so there is no planar reflection pass at all.",
   "Snowfall is fully GPU-driven: fixed random points in a camera-following box, advected and wrapped with mod() in the vertex shader for zero CPU cost per flake.",
   "Ridge silhouettes and their pine treelines are cut in the fragment shader against an analytic profile, so one ridge costs about 400 triangles."
  ],
  "score": 4,
  "shots": [
   "assets/shots/norrsken-1.webp",
   "assets/shots/norrsken-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "cosmos-universe-sandbox",
  "title": "COSMOS: A Universe Sandbox",
  "oneLiner": "A continuous 3D zoom from quarks to the edge of the observable universe, 45 orders of magnitude, procedurally generated in the browser.",
  "category": "game",
  "stack": [
   "Three.js",
   "TypeScript",
   "Vite",
   "UnrealBloom post-processing"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "45 orders of magnitude (1e-18 m to 1e27 m)",
   "8 scale layers",
   "over 1 million procedural points",
   "about 2,400 lines of code",
   "built in one session"
  ],
  "highlights": [
   "Logarithmic powers-of-ten engine: one continuous zoom value drives everything, each layer is authored in local units and rescaled by 10^(pivot - zoom) so coordinates never lose float precision.",
   "Eight scale layers from quantum fields and DNA to a 700k-point spiral galaxy and a 300k-galaxy cosmic web, cross-faded across 0.7-decade overlaps.",
   "Solved point-sprite blobbing off-pivot by scaling each point layer's sizes with the same factor as its group.",
   "Clickable powers-of-ten scale bar, bloom and an autoplay tour of the universe, with a deterministic debug hook for headless verification."
  ],
  "score": 4,
  "shots": [
   "assets/shots/cosmos-universe-sandbox-1.webp",
   "assets/shots/cosmos-universe-sandbox-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "eightfall",
  "title": "Eightfall",
  "oneLiner": "A 3D pixel-art action roguelite with Hades-style combat feel, snap-to-45-degree camera rotation and permadeath.",
  "category": "game",
  "stack": [
   "Three.js",
   "TypeScript",
   "Vite",
   "PixelLab",
   "WebAudio"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "milestones M1 to M6 complete",
   "about 4,150 lines of code",
   "5 enemy archetypes incl. boss",
   "7 equipment slots",
   "built in one day"
  ],
  "highlights": [
   "Real 3D world rendered through 8-direction billboard sprites: a direction resolver maps facing minus camera yaw to one of 8 frames, so characters stay correct as the camera snaps in 45 degree steps.",
   "Combat feel stack: buffered 3-hit sword combo, dodge i-frames, hit-stop, screen shake, white hit-flash, knockback, plus a fire staff with projectile, burn damage-over-time and explosion VFX.",
   "Telegraphed enemies and a boss with cleave, radial slam and charge moves that enrages at 50% HP; a full run goes title to four shuffled rooms to boss to victory or permadeath.",
   "Paper-doll inventory with drag-and-drop, rarity-rolled gear that drives combat stats, and synthesised WebAudio SFX for every combat and UI event."
  ],
  "score": 4,
  "shots": [
   "assets/shots/eightfall-1.webp",
   "assets/shots/eightfall-2.webp",
   "assets/shots/eightfall-3.webp"
  ],
  "icon": ""
 },
 {
  "id": "maw",
  "title": "MAW",
  "oneLiner": "A reverse roguelike where you are the dungeon: spend Essence on monsters, traps and darkness to break a knight's nerve before he reaches your Heart.",
  "category": "game",
  "stack": [
   "TypeScript",
   "Vite",
   "Canvas 2D",
   "WebAudio",
   "PixelLab"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "May 2026",
  "metrics": [
   "5 escalating nights",
   "7 dread cards",
   "9 commits in one day",
   "48 KB production build (16.6 KB gzipped)",
   "about 3,000 lines of code"
  ],
  "highlights": [
   "Design built by inverting every genre instinct: courage replaces hit points, so the win condition is making an AI invader flee, not killing him.",
   "A* pathing invader descends a procedurally generated snake dungeon with branch shafts; monster standoffs stack into kill corridors, and balance was verified with scripted playtests (no action loses night 1, strong play wins all 5).",
   "Meta layer of 5 nights from Squire to Champion with a pick-1-of-3 Grudge between nights, turn-based with an explicit Send Them On button.",
   "No audio files: WebAudio synthesises heartbeat, scares, traps and the break stinger; juice includes particles, screenshake and hit-stop."
  ],
  "score": 4,
  "shots": [
   "assets/shots/maw-1.webp",
   "assets/shots/maw-2.webp",
   "assets/shots/maw-3.webp"
  ],
  "icon": ""
 },
 {
  "id": "multiworld-varlden",
  "title": "Multiworld",
  "oneLiner": "A shared multiplayer 3D world in the browser where every character gets a key and an API, so people and Claude can build objects into the live world.",
  "category": "game",
  "stack": [
   "Three.js",
   "TypeScript",
   "Vite",
   "Node",
   "ws",
   "Model Context Protocol"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug 2026",
  "metrics": [
   "120 x 120 platform",
   "unlimited players in one world",
   "7 object shapes",
   "about 3,000 lines of code",
   "built in one session"
  ],
  "highlights": [
   "Single shared world with name gate, blocky avatars, chat bubbles above heads and no player cap; the world server is hooked into Vite's own HTTP server so dev is one command.",
   "Key-based creator API: each character gets a personal key (mw_...) and can build data-driven objects with spin, bob, orbit and attach behaviours, and solid objects you can stand on.",
   "A stdio MCP server wraps the HTTP API so Claude Code can build inside the live world.",
   "Deliberate design choice, documented in docs/BYGGA.md: data-driven objects instead of running arbitrary user JavaScript."
  ],
  "score": 4,
  "shots": [
   "assets/shots/multiworld-varlden-1.webp",
   "assets/shots/multiworld-varlden-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "infinite-dungeon",
  "title": "Infinite Dungeon",
  "oneLiner": "A top-down roguelike on an infinite open world with a procedurally infinite hex talent tree, one-spell-per-item gear and boss fights.",
  "category": "game",
  "stack": [
   "Phaser 3",
   "TypeScript",
   "Vite",
   "WebAudio"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "May 2026",
  "metrics": [
   "MASTERPLAN phases 0 to 11 complete",
   "101-node talent pool",
   "8 biomes",
   "5 monster kinds",
   "about 6,900 lines of code"
  ],
  "highlights": [
   "Infinite deterministic world: 24-tile cells with 8 handmade patterns picked by hashSeed(seed, cx, cy), 3x3 chunk streaming with wall-body culling and depth tiers that scale monster level.",
   "Navigable point-spend hex talent tree generated procedurally forever, with a 101-node effect pool (25 authored plus 76 generated by a pool-builder script) and a runtime effect engine.",
   "Gear grants one spell per item and spells stack across all equipped slots; armour passives auto-cast on a timer within each spell's own reach.",
   "Crafting from material drops, bosses with their own music, permadeath with run summary and records, audio mixer with biome music and an options panel."
  ],
  "score": 3,
  "shots": [
   "assets/shots/infinite-dungeon-1.webp",
   "assets/shots/infinite-dungeon-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "alraune",
  "title": "Alraune",
  "oneLiner": "A Unity 6 top-down roguelite built to prove that hitstop, light, shake and sound in the right order inside 200 ms make a game feel expensive.",
  "category": "game",
  "stack": [
   "Unity 6",
   "URP 2D",
   "C#",
   "Cinemachine 3",
   "ScriptableObjects",
   "Unity MCP"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug 2026",
  "metrics": [
   "16 commits in one day",
   "16k lines of C#",
   "67 EditMode and PlayMode tests",
   "13 feedback step types",
   "144 generated palette variants"
  ],
  "highlights": [
   "A FeedbackChain ScriptableObject system with 13 step types (hitstop, shake, slow motion, flash, squash, afterimage, damage numbers and more) and a global juice-off flag that doubles as a regression test.",
   "A deterministic 60 Hz simulation with seeded xorshift RNG and custom grid collision, kept separate from presentation so the whole combat layer is testable without a scene.",
   "An import pipeline that configures 370 sprites automatically and derives 112 animation clips and 50 AnimatorControllers from the frame naming pattern.",
   "A palette-remap variant generator that turns 22 monsters into 132 enemies across six hue families, using only the 66 colours the art pack contains."
  ],
  "score": 3,
  "shots": [],
  "icon": ""
 },
 {
  "id": "map500x500",
  "title": "Voxel Island Builder",
  "oneLiner": "A Unity URP voxel island generator driven entirely through MCP, with custom shaders for terraced cliffs, shore foam and waterfalls.",
  "category": "game",
  "stack": [
   "Unity 6.1",
   "URP",
   "HLSL",
   "C#",
   "Unity MCP"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "3 custom URP shaders",
   "14 split terrain pieces",
   "13 mesa sections",
   "about 3.5k terrain block instances",
   "86 screenshots"
  ],
  "highlights": [
   "A C# parser reads a merged OBJ kit and splits it into 14 re-centred piece meshes, with handedness fixed by flipping X and reversing winding.",
   "Terrain is a Voronoi partition into 13 grass mesas ringed by water channels, with grey columnar cliff shading and waterfalls placed by reading the built terrain grid.",
   "A water shader samples a baked top-down shore mask (chamfer distance transform) for foam and shallow-to-deep colour, since scene-depth foam does not work with an orthographic camera.",
   "Found a silent shader bug (Vector4 packed in the wrong components collapsed the V axis, breaking roads and foam) by forcing a debug tint with no gates."
  ],
  "score": 3,
  "shots": [
   "assets/shots/map500x500-1.webp",
   "assets/shots/map500x500-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "tiny-farm",
  "title": "Tiny Farm to Huge Empire",
  "oneLiner": "A top-down farming sim that grows into an agricultural corporation, built phase by phase behind a written kill gate that decides whether it continues.",
  "category": "game",
  "stack": [
   "Godot 4.6",
   "GDScript",
   "JSON data tables",
   "PixelLab"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug 2026",
  "metrics": [
   "201 tests",
   "0.020 ms p95 sim tick",
   "60 fps",
   "177-section design document",
   "about 90 PixelLab generations"
  ],
  "highlights": [
   "A sim-purity checker script enforces that simulation code never touches rendering, and a fixed-tick harness with seeded RNG makes every day replayable.",
   "Verification is inverted for Godot: the game prints single-line DBG JSON to stdout and each phase gate asserts on it, so visual claims are checked with a scripted screenshot rather than by eye.",
   "Two balance bugs found by exact numbers: a soil modifier that silently made carrots take 5 days instead of 4, and a dawn-order dependency that stopped the first sale from coming out at exactly 4.70 dollars.",
   "Crop stages are derived from the mature art via object states, not generated separately, so the field reads as a real growth progression."
  ],
  "score": 3,
  "shots": [
   "assets/shots/tiny-farm-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "base-concept",
  "title": "Highway Base",
  "oneLiner": "A procedural 3D concept scene of a motorway passing straight through a concrete bunker base with steel blast doors and stair towers, built from a hand sketch.",
  "category": "game",
  "stack": [
   "Three.js",
   "JavaScript",
   "Vite"
  ],
  "status": "concept",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jul 2026",
  "metrics": [
   "5 camera angles",
   "0 external models",
   "about 1,000 lines of code",
   "built in one session"
  ],
  "highlights": [
   "All geometry is procedural code driven by a handful of named dimensions (road width, opening, base width, depth and height), so the whole structure rescales from the top of main.js.",
   "Interactive toggles for blast doors open or closed, outline edges and dusk versus daylight, plus five authored camera views including through the portal.",
   "Verification workflow for a pane that cannot composite WebGL: a dev middleware renders 1500x860 frames and posts them to disk so the result can be inspected as images."
  ],
  "score": 3,
  "shots": [
   "assets/shots/base-concept-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "valheim-hugins-tunic",
  "title": "Hugin's Tunic",
  "oneLiner": "A custom Valheim armour mod, modelled and textured entirely by scripts and swapped in at runtime by a BepInEx plugin.",
  "category": "game",
  "stack": [
   "C#",
   "Blender 4.4 (Python)",
   "numpy",
   "UnityPy",
   "Valheim 1.0.16"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Oct 2026",
  "metrics": [
   "2 days",
   "53-bone rig",
   "2048 px texture atlas",
   "male and female fits",
   "2 release zips"
  ],
  "highlights": [
   "A scripted pipeline from game files to armour: UnityPy extracts the player rig, Blender builds a procedural tunic, jerkin, fur collar and raven-feather capelet, and numpy paints every material in real-world units.",
   "Wool with tablet-weave borders, stitched and tooled leather, patinated bronze, fur and feathers are all generated per pixel, and a cloth underlayer hides body clipping.",
   "The mesh is skinned to Valheim's 53-bone skeleton with body-transfer weights, then a Harmony postfix on VisEquipment.AttachArmor swaps it in with no Unity editor or asset bundles.",
   "The plugin photographs its own armour for verification, running a throwaway daylight world with saving disabled."
  ],
  "score": 3,
  "shots": [
   "assets/shots/valheim-hugins-tunic-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "deeper-infinite-descent",
  "title": "Deeper",
  "oneLiner": "A Next.js roguelite where Claude Haiku writes the flavour of each room on top of a deterministic structure, with validation, repair and fallbacks.",
  "category": "ai",
  "stack": [
   "Next.js 14",
   "React",
   "TypeScript",
   "Tailwind",
   "Zustand",
   "Framer Motion",
   "Anthropic SDK",
   "Vitest",
   "Zod"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "May 2026",
  "metrics": [
   "274 test cases in 19 files",
   "about 7,800 lines of code",
   "built in one day",
   "Haiku room generation with 2 retries"
  ],
  "highlights": [
   "Hybrid generation pipeline: deterministic structure builder, LLM-written flavour text, Zod schema validation, a flavour validator, auto-repair, retries, cache, rate limit and a hardcoded fallback room when the model fails.",
   "Pure seeded combat logic (formulas, status effects, archetypes) built test-first, with a console player script for headless play.",
   "Game-feel React components: floating damage numbers, screen shake, death camera, room transitions and HP bars, with Combat, Event, Loot and Rest room types."
  ],
  "score": 3,
  "shots": [],
  "icon": ""
 },
 {
  "id": "general-tactics",
  "title": "General",
  "oneLiner": "A grid tactics deckbuilder where the general never fights: you play spells and summon troops, and if the general dies the run is over.",
  "category": "game",
  "stack": [
   "TypeScript",
   "Vite",
   "Canvas 2D"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "one full vertical-slice fight",
   "7x7 grid",
   "3 enemy archetypes",
   "about 1,900 lines of code",
   "built in one session"
  ],
  "highlights": [
   "Every enemy telegraphs its exact next move with an arrow and damage badge; moves are planned in act order so the telegraph always equals the outcome.",
   "AI archetypes: rushers that bee-line along a distance field and route around walls, tanks, and ranged snipers that ignore walls and kite into range.",
   "Balance pass driven by exploiting the game: a lazy wall strategy won too easily, so a 5-unit cap and wall-ignoring snipers made the general bleed 30 to 18 HP.",
   "Code mirrors Godot modules (grid, ai, battle, effects, data) so the planned Godot 4 port is a translation."
  ],
  "score": 2,
  "shots": [
   "assets/shots/general-tactics-1.webp",
   "assets/shots/general-tactics-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "tag-scramble",
  "title": "Tag Scramble",
  "oneLiner": "A two-player platformer tag game with 4-letter room codes and peer-to-peer netcode, playable locally or across browsers.",
  "category": "game",
  "stack": [
   "TypeScript",
   "Vite",
   "PeerJS",
   "Canvas 2D"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "about 1,250 lines of code",
   "3 modes: local, host, join",
   "60 s rounds",
   "built in one session"
  ],
  "highlights": [
   "Fixed 60 Hz simulation shared by host and guest, with the host sending state, the joiner sending input, and client-side prediction plus smoothing on the joiner.",
   "Host and join flow with readable 4-letter room codes (no I or O) over PeerJS, plus a local two-player mode and rematch.",
   "Round flow with countdown, timed rounds, pickups and speed boosts, synthesised sound effects."
  ],
  "score": 2,
  "shots": [
   "assets/shots/tag-scramble-1.webp",
   "assets/shots/tag-scramble-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "galactic-storm",
  "title": "Galactic Storm",
  "oneLiner": "A two-player local R-Type style space shooter with charge shots, bombs, power-ups and five bosses, all drawn procedurally in one HTML file.",
  "category": "game",
  "stack": [
   "JavaScript",
   "Canvas 2D",
   "HTML"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "May 2026",
  "metrics": [
   "1,169 lines in one index.html",
   "5 bosses",
   "5 power-up types",
   "2 players on one keyboard"
  ],
  "highlights": [
   "Hold-to-charge weapons with glow that scales with charge, plus smart bombs, on a shared keyboard for two players.",
   "Five hand-drawn canvas bosses (Iron Claw, Serpent, Fortress, Hive Queen, CHAOS) with phase changes.",
   "Entire game, sprites included, is code on a single canvas with no assets."
  ],
  "score": 2,
  "shots": [
   "assets/shots/galactic-storm-1.webp",
   "assets/shots/galactic-storm-2.webp",
   "assets/shots/galactic-storm-3.webp"
  ],
  "icon": ""
 },
 {
  "id": "angler",
  "title": "Angler",
  "oneLiner": "A third-person low-poly fishing game built in one day, with a tension-based reeling minigame, synthesised audio and a shipped Windows build.",
  "category": "game",
  "stack": [
   "Unity 6",
   "URP",
   "C#",
   "Blender",
   "Unity MCP",
   "Higgsfield"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "Phases 1 to 9 built in one session",
   "1.1k lines of C#",
   "3 fish species",
   "90 MB Windows build"
  ],
  "highlights": [
   "The reeling minigame is a real tension system (fish energy, line tension, distance) driven by a fish AI that cycles rest, pull and burst, not a random timer.",
   "All sound effects are synthesised in code with no audio files, and the character is a procedural primitive rig with a walk cycle and a hold-the-rod pose, no skeletal animator.",
   "A custom URP water shader with vertex waves, fresnel depth gradient, sun glint and animated shoreline foam replaced a flat blue disc.",
   "The whole toolchain ran through MCP servers: Blender models exported via a validated FBX pipeline into Unity, which was then built to Windows through the build tool."
  ],
  "score": 2,
  "shots": [
   "assets/shots/angler-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "mirefall",
  "title": "Mirefall",
  "oneLiner": "A turn-based tactical survival RPG prototype where every action costs time, so faster actions literally earn you more turns than your enemies.",
  "category": "game",
  "stack": [
   "Unity 6",
   "2D URP",
   "C#",
   "Unity MCP"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "7 commits in one day",
   "960 lines of C#",
   "Phases 0 to 4 done"
  ],
  "highlights": [
   "An energy scheduler as the core: the actor with the lowest next-action time acts, so a fast step (0.5x cost) gives the player exactly twice the turns, verified by a scripted run against an enemy.",
   "8-direction A* pathfinding plus Bresenham line of sight, with enemies that hunt around walls and stay aware for a few turns after losing sight.",
   "Fatigue is wired into the action economy: below a threshold every action costs up to 1.6x time, which hands enemies relatively more turns.",
   "A staged master plan with a hard stop-and-evaluate gate ('is it fun without art?') before any content or art gets added."
  ],
  "score": 2,
  "shots": [],
  "icon": ""
 },
 {
  "id": "pixel-hero",
  "title": "Pixel Hero",
  "oneLiner": "A top-down pixel game where equipment is real in-hand art: the sword is drawn into the hero's grip in all four directions instead of pasted on as an overlay.",
  "category": "game",
  "stack": [
   "Godot 4.6",
   "GDScript",
   "PixelLab",
   "Godot MCP"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "Built in one day",
   "142 lines of GDScript",
   "71 art frames",
   "4 directions",
   "6-frame walk",
   "7-frame slash"
  ],
  "highlights": [
   "Paper-doll equipment through PixelLab character states: each look (unarmed, sword) is its own sprite set built into a SpriteFrames resource by scanning frame folders, so adding armour is one new folder and one dictionary entry.",
   "A 320 by 180 integer-scaled viewport with nearest filtering for pixel-perfect output, with input actions defined in code.",
   "Scrapped a hand-pixelled overlay sword that read as stuck-on, especially facing up, in favour of generated in-hand art.",
   "Verified by running through the Godot MCP and reading debug output with zero errors; stalled AI animation jobs fall back to the south frames."
  ],
  "score": 2,
  "shots": [
   "assets/shots/pixel-hero-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "potion-dealer",
  "title": "Potion Dealer",
  "oneLiner": "A roguelite about brewing, selling and experimenting your way to the truth about what is in the bottle, where discovery happens only by trying.",
  "category": "game",
  "stack": [
   "TypeScript",
   "Vite",
   "Phaser",
   "Vitest",
   "JSON data-driven content",
   "PixelLab"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "May 2026",
  "metrics": [
   "35 tests",
   "17 mechanically distinct potion effects",
   "5 biomes with a weakness each",
   "about 11,500 lines of code",
   "30-day plan completed"
  ],
  "highlights": [
   "Ingredient tags are hidden from the player, so brewing is discovery by experiment, with a recipe book and knowledge system as the only guide.",
   "Closed the brew-to-combat loop: each biome has a damage-axis weakness that gives a 1.75x multiplier, so what you brew decides how you fight.",
   "Interactive shop with a customer queue (needs and generosity per portrait), match bonus pricing, gold-sink upgrades and delayed gossip toasts as the consequence system.",
   "Combat built from telegraphed enemy archetypes (charger, shooter, exploder), a dash with i-frames, day-scaled difficulty, save versioning and data-driven JSON content."
  ],
  "score": 3,
  "shots": [
   "assets/shots/potion-dealer-1.webp",
   "assets/shots/potion-dealer-2.webp",
   "assets/shots/potion-dealer-3.webp"
  ],
  "icon": ""
 },
 {
  "id": "candygame",
  "title": "CandyGame",
  "oneLiner": "A browser voxel survival prototype with a chunk-streamed world, crafting, inventory and gateway progression.",
  "category": "game",
  "stack": [
   "TypeScript",
   "Three.js 0.180",
   "Vite 7"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "L0x3n/CandyGame",
   "visibility": "public"
  },
  "period": "Apr 2026",
  "metrics": [
   "About 24 TypeScript modules in the lalala/ game folder",
   "Procedural chunk-based voxel world with a streaming manager",
   "Built in one day"
  ],
  "highlights": [
   "Voxel world with a world generator, chunk class and a chunk streaming manager that loads and unloads terrain around the player.",
   "Survival loop with status panel, hotbar, inventory, crafting recipes and block interaction controllers.",
   "A gateway progression controller, an ambient audio controller and a save store for persistence."
  ],
  "score": 2,
  "shots": [],
  "icon": ""
 },
 {
  "id": "rapidzero",
  "title": "RapidZero",
  "oneLiner": "A privacy-first Windows browser on Electron with a built-in blocker, a fingerprint shield, an encrypted vault and an embedded Tor mode.",
  "category": "app",
  "stack": [
   "Electron 44",
   "Widevine",
   "Ghostery adblocker",
   "Tor",
   "Node.js",
   "NSIS",
   "DNS over HTTPS"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep to Oct 2026",
  "metrics": [
   "36k lines of JavaScript (vendor code excluded)",
   "v0.5.2 installed 2026-10-14",
   "196 unit tests, 426 self-test checks, 102 anonymous-mode checks",
   "139-finding agent audit turned into a 9-phase fix list",
   "74 commits over 40 days"
  ],
  "highlights": [
   "Widevine DRM works in a privacy browser: castLabs Electron build with VMP signing, proven in dev and in the packaged installer, so streaming sites keep working.",
   "Fingerprint shield injected through CDP into every frame, including srcdoc, blob and data frames, reporting a common desktop to trackers; checked against EFF's Cover Your Tracks.",
   "Encrypted vault for history, bookmarks and tab sessions with optional Windows Hello unlock, plus a separate Anonym window that routes through a bundled Tor with one circuit per first-party site.",
   "Blocking engine on Ghostery's adblocker with 19 lists, malware and phishing lists (13.9 MB compiled), per-site JavaScript switch, element hiding by right click and local-network protection."
  ],
  "score": 5,
  "shots": [],
  "icon": "assets/icons/rapidzero.svg"
 },
 {
  "id": "rapidtracker",
  "title": "RapidTracker",
  "oneLiner": "A local-first poker tracker that imports hand histories from five networks, replays hands on an animated table and finds leaks.",
  "category": "app",
  "stack": [
   "Rust",
   "Tauri 2",
   "React 18",
   "TypeScript",
   "SQLite",
   "Vite"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Oct 2026",
  "metrics": [
   "63k lines of Rust and TypeScript",
   "392 Rust tests plus 111 Node tests",
   "5 hand-history importers",
   "16,715 hands parsed with 0 errors in the original engine",
   "English and Swedish UI",
   "v0.3.0 with installer"
  ],
  "highlights": [
   "Rust workspace (parse, store, analyze, equity, replay, api, i18n) behind a Tauri shell and a typed React UI; a real HTTP API (rt-serve) lets the front end run against a database copy in dev.",
   "Importers for five poker networks sit behind one split and parse interface with per-site id namespaces, live folder watching across several directories, and derived tournament results that never overwrite real summaries.",
   "Tournament luck chart plots, per tournament, cumulative actual minus all-in EV in chips, big blinds or money, with all-ins won, busts as favourite and knockout stats.",
   "Typed English and Swedish string tables per feature folder (TypeScript flags a missing key) with the Rust side following the same language; a demo mode with invented data drives the site's screenshots, product film and clickable demo."
  ],
  "score": 5,
  "shots": [
   "assets/shots/rapidtracker-1.webp",
   "assets/shots/rapidtracker-2.webp"
  ],
  "icon": "assets/icons/rapidtracker.webp"
 },
 {
  "id": "spingold-solver",
  "title": "RapidSolver",
  "oneLiner": "An offline Spin & Gold 6-max study solver where every strategy carries an epsilon-Nash proof certificate checked by two independent programs.",
  "category": "app",
  "stack": [
   "Rust",
   "Tauri 2",
   "React",
   "TypeScript",
   "Python",
   "numpy",
   "SQLite"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "L0x3n/spingold-solver",
   "visibility": "private"
  },
  "period": "Sep to Oct 2026",
  "metrics": [
   "237k lines of Rust, TypeScript and Python",
   "800+ Rust tests, 262 numpy verifier tests, 119 app tests",
   "567 commits in 17 days on main",
   "9 Rust crates",
   "30 reference screenshots under test",
   "certificate threshold 0.02 percent of the buy-in"
  ],
  "highlights": [
   "Each solved spot carries a certificate: an epsilon-Nash bound from exact best response, recomputed by two independent programs (a dependency-free Rust verifier and a numpy verifier) and accepted only within 0.02 percent of the buy-in.",
   "Exact maths underneath: preflop equity tables (two-way in minutes, three-way in hours), ICM payouts, heads-up endgame tables, and flop, turn and river solves capped at three players so every showdown is exact.",
   "Tauri 2 study app with Study, Practice, Analyze, Progress and Workshop views, a range grid with the proof panel, and a Workshop that queues overnight jobs; a memory-aware lane scheduler keeps heavy solves one at a time.",
   "Built at speed with parallel agents in separate git worktrees (up to seven at once) behind a written plan and gates, which is why 237k lines landed in 17 days."
  ],
  "score": 5,
  "shots": [
   "assets/shots/spingold-solver-1.webp",
   "assets/shots/spingold-solver-2.webp"
  ],
  "icon": "assets/icons/spingold-solver.svg"
 },
 {
  "id": "cryptocat",
  "title": "CryptoCat",
  "oneLiner": "A pixel-art desktop cat that mines a toy cryptocurrency from every key you press, in any program.",
  "category": "app",
  "stack": [
   "Electron 43",
   "uiohook-napi",
   "JavaScript",
   "CoinGecko API",
   "PixelLab"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug 2026",
  "metrics": [
   "2.1k lines of JavaScript",
   "18 tests including a 1000-keypress golden run",
   "11 automated screenshot states",
   "5 unlockable coins (ETH, DOGE, SOL, LTC, BTC)",
   "built in one day, no git repo"
  ],
  "highlights": [
   "Global keyboard hook turns every keypress into a hash: combo multiplier from 1.0x to 3.0x over 120 keys, a block every 250 hashes, and mood (laser eyes or crying) driven by the coin's 24-hour change.",
   "Zero dependencies beyond the key hook; all game maths lives in one shared module that both the main process and the renderer load, which made the simulation testable with a deterministic golden run.",
   "npm run selftest launches the real overlay against an empty wallet, feeds synthetic keystrokes and real mouse events, photographs the window in 11 states and prints JSON; the screenshots exposed two bugs unit tests could not (a display:flex rule beating the hidden attribute, a missing coinId in the mine event).",
   "Live prices from CoinGecko every 60 s in USD and SEK with disk cache and an offline marker; all sprites are pixel art generated and edited in PixelLab, with the paw poses derived from one base cat."
  ],
  "score": 4,
  "shots": [
   "assets/shots/cryptocat-1.webp",
   "assets/shots/cryptocat-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "200bbs-stream",
  "title": "200bbs Stream Control",
  "oneLiner": "A one-PC control room for a poker Twitch channel: OBS overlays, a results graph, chat alerts and a dashboard for the third screen.",
  "category": "app",
  "stack": [
   "Node.js",
   "koffi",
   "obs-websocket 5",
   "Twitch IRC",
   "HTML/CSS/SVG overlays"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep to Oct 2026",
  "metrics": [
   "23k lines of JavaScript",
   "145 tests",
   "22 commits in 12 days",
   "10 OBS scenes in 2 themes",
   "overlay and dashboard on port 5360"
  ],
  "highlights": [
   "Hand-history and tournament-summary parser plus a results database with duplicate protection and per-import undo; every parsed hand is checked to balance to zero before it counts.",
   "OBS is driven over obs-websocket 5 (password read from OBS's own config): three browser-source overlay layers, ten scenes in a Poker and a Gaming theme that follows the OBS scene, camera on/off across all scenes, and a green-screen key tuned to the measured colour.",
   "Frame-rate decision made from data: all three sources at 60 fps skipped 1.8 percent of frames, while HUD at 60 with background at 30 skipped 0 to 0.2 percent, so the mix is locked.",
   "Built-in window tiling (koffi plus Win32 hotkeys, F1 to F4) ported from GGSnap, anonymous Twitch chat with sub, gift, raid and bits alerts, live check through the preview CDN and title editing through Twitch's device-code OAuth."
  ],
  "score": 4,
  "shots": [],
  "icon": "assets/icons/200bbs-stream.svg"
 },
 {
  "id": "rapidhub",
  "title": "RapidHub",
  "oneLiner": "A tray launcher that starts, finds and monitors every Rapid app from one search box.",
  "category": "app",
  "stack": [
   "Electron 43",
   "Node.js",
   "PowerShell"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Oct 2026",
  "metrics": [
   "1.9k lines of JavaScript",
   "11 unit tests plus a smoke test that launches the real app",
   "7 apps managed",
   "built in one day"
  ],
  "highlights": [
   "Detects which apps are running by executable path through PowerShell Get-Process, because several Rapid apps share electron.exe; shows memory use per app.",
   "Global Ctrl+Alt+Space summons it from anywhere, with type-to-search, arrow keys, F2 rename, drag to reorder and a tray menu; it can add any exe, lnk, bat or cmd.",
   "Default app list lives in one file; new defaults appear for the user but an app they removed never comes back (seenDefaults).",
   "Strict CSP caught inline styles; the smoke test verifies every app entry and its icon, search filtering and Esc handling, then writes a screenshot."
  ],
  "score": 3,
  "shots": [],
  "icon": "assets/icons/rapidhub.svg"
 },
 {
  "id": "rapidxscreener",
  "title": "RapidxScreener",
  "oneLiner": "A Windows screenshot and screen-recording tool with an annotation editor, privacy pixelation and drag-into-chat sharing.",
  "category": "app",
  "stack": [
   "Electron 43",
   "uiohook-napi",
   "MediaRecorder",
   "electron-packager"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug to Oct 2026",
  "metrics": [
   "3.3k lines of JavaScript, no bundler",
   "MP4 H.264 + AAC at 60 fps and 12 Mbps",
   "13 commits",
   "smoke test covers region capture, recording, drawing, undo and save"
  ],
  "highlights": [
   "Screen recording to MP4 with system-audio loopback and optional microphone; MediaRecorder runs in a hidden worker window so the main window can hide during capture, and stop waits until the write queue is empty and has stopped growing.",
   "Drawing is an operation list with exact undo and redo instead of raster snapshots, which fixed a race where slow image decoding painted the wrong picture's colours.",
   "Privacy by design: random file names with no dates, PNG metadata scrubbing that fails closed (it refuses to write an unvalidated file), pixelation redrawn from the original at coarse resolution, sandbox plus CSP.",
   "Electron's globalShortcut for PrintScreen never fires on Windows, so capture hooks the key with uiohook-napi; Win+Shift+S is detected and its clipboard result is pulled into the gallery."
  ],
  "score": 3,
  "shots": [],
  "icon": "assets/icons/rapidxscreener.svg"
 },
 {
  "id": "multitwitch",
  "title": "MultiTwitch",
  "oneLiner": "A desktop app that watches many Twitch and Kick streams in one grid, with follow lists and per-stream audio focus.",
  "category": "app",
  "stack": [
   "Electron 43",
   "Node.js",
   "Twitch embed and Helix API",
   "OAuth device flow",
   "electron-builder"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug 2026",
  "metrics": [
   "3.9k lines of JavaScript, no frontend framework",
   "2 platforms in one grid",
   "NSIS installer, per-user",
   "built over 2 days, no git repo"
  ],
  "highlights": [
   "Twitch's embedded player only works with parent=localhost over plain http and refuses file://, so the Electron main process starts its own local HTTP server and loads the UI from it; the same UI also runs in a normal browser.",
   "Kick support through its undocumented site endpoints, reached with Electron's net module (Chromium's network stack) because plain fetch is blocked by Cloudflare while the official API demands registered OAuth.",
   "Twitch sign-in with the OAuth device code flow, so there is no client secret or redirect URL; a separate real twitch.tv login window shares the session so Turbo subscribers see no ads.",
   "Debugged Electron traps: frozen contextBridge objects, iframes reloading when a node moves in the DOM (fixed with CSS order), a setQuality feedback loop, and a game launcher squatting ports 5300 to 5319 (fallback to a random port)."
  ],
  "score": 3,
  "shots": [],
  "icon": ""
 },
 {
  "id": "vibed-games",
  "title": "vibed.games",
  "oneLiner": "An itch.io-style platform where people publish, play and remix browser games built with AI coding agents.",
  "category": "web",
  "stack": [
   "React 19",
   "TypeScript",
   "Vite",
   "Tailwind v4",
   "Supabase",
   "Cloudflare Workers",
   "Render",
   "Vitest",
   "MCP"
  ],
  "status": "live",
  "liveUrl": "https://vibed-games.onrender.com",
  "github": {
   "repo": "L0x3n/vibed-games",
   "visibility": "private"
  },
  "period": "Jul to Aug 2026",
  "metrics": [
   "88 commits in four weeks",
   "About 18,000 lines in src, 30 routed pages",
   "692-line Postgres schema with row-level security",
   "Terminal publisher published on npm as game-catapult-mcp",
   "Vitest suite plus a worker-side scanner test"
  ],
  "highlights": [
   "Games run in a sandboxed iframe on a separate Cloudflare Worker origin, and a postMessage save bridge replaces localStorage so saves survive opaque origins.",
   "Publishing happens from the terminal: a zero-dependency CLI and an MCP server (game-catapult-mcp, on npm) let an AI agent upload or update a game in one message.",
   "Remix layer where every game is forkable and forks link back, plus follows, notifications, a jam engine whose lifecycle is derived from timestamps, friends and direct messages.",
   "Three-agent adversarial security audit followed by four fix waves: DOMPurify allowlist, RLS hardening, isolated game origin and a published takedown runbook."
  ],
  "score": 5,
  "shots": [
   "assets/shots/vibed-games-1.webp",
   "assets/shots/vibed-games-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "myflow",
  "title": "MyFlow",
  "oneLiner": "A calm second-brain PWA for people with ADHD or burnout that shrinks the day to what their energy allows.",
  "category": "web",
  "stack": [
   "React 19",
   "TypeScript",
   "Vite",
   "Tailwind v4",
   "Supabase",
   "Claude structured outputs",
   "vite-plugin-pwa",
   "Open-Meteo"
  ],
  "status": "live",
  "liveUrl": "https://l0x3n.github.io/myflow/",
  "github": {
   "repo": "L0x3n/myflow",
   "visibility": "public"
  },
  "period": "Jul 2026",
  "metrics": [
   "About 2,900 lines in src, five views",
   "Installable PWA with scheduled notifications",
   "Dual-mode data layer: localStorage or Supabase",
   "Weeks 1 to 3 of a four-week masterplan shipped"
  ],
  "highlights": [
   "An energy level from 1 to 3 controls the Today view: one task at level 1, the day's top three at level 2, plus weather and optional errands at level 3.",
   "The Flow chat calls a Supabase Edge Function using Claude structured outputs, so every reply is a valid {reply, actions} object that can add tasks or reorder the day through accept or decline cards.",
   "Without keys the app runs fully on localStorage; with Supabase env vars it switches to cloud storage and magic-link login behind the same interface.",
   "Medication and activity notifications were verified end to end with a stubbed Notification API, and a one-command script deploys to GitHub Pages."
  ],
  "score": 4,
  "shots": [
   "assets/shots/myflow-1.webp",
   "assets/shots/myflow-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "idea-studio",
  "title": "Idéstudio",
  "oneLiner": "A Notion-meets-whiteboard studio with live collaborative text pages and infinite drawing boards.",
  "category": "web",
  "stack": [
   "React",
   "TypeScript",
   "Vite",
   "Supabase",
   "Yjs",
   "Liveblocks",
   "tldraw 5",
   "TipTap 3",
   "PWA"
  ],
  "status": "live",
  "liveUrl": "https://l0x3n.github.io/idea-studio/",
  "github": {
   "repo": "L0x3n/idea-studio",
   "visibility": "public"
  },
  "period": "Jun 2026",
  "metrics": [
   "Phases 0 to 6 of a seven-phase masterplan built",
   "Two-client realtime round-trip verified for text and board",
   "Installable PWA with offline app shell",
   "Dual mode: runs with no keys, upgrades to Supabase and Liveblocks"
  ],
  "highlights": [
   "Each project holds tabs that are either a rich text page (TipTap v3) or an infinite whiteboard (tldraw v5), both bound to Yjs documents synced through Liveblocks with live cursors.",
   "Storage sits behind a ProjectStore interface with a local implementation and a Supabase implementation using Auth, Postgres and row-level security.",
   "Invite links use a share_links table and a redeem RPC, and uploads go to Supabase Storage with a data-URL fallback.",
   "Found and fixed an RLS pitfall where INSERT ... RETURNING failed under a members-only select policy, and documented tldraw 5 store-listener and StrictMode quirks."
  ],
  "score": 4,
  "shots": [
   "assets/shots/idea-studio-1.webp",
   "assets/shots/idea-studio-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "liveroll",
  "title": "LiveRoll",
  "oneLiner": "A mobile-first poker bankroll tracker that works offline with no account.",
  "category": "web",
  "stack": [
   "React 19",
   "Vite 7",
   "lucide-react",
   "Service worker",
   "node:test",
   "Render static site"
  ],
  "status": "live",
  "liveUrl": "https://liveroll.onrender.com",
  "github": {
   "repo": "L0x3n/liveroll",
   "visibility": "private"
  },
  "period": "Sep 2026",
  "metrics": [
   "About 6,900 lines of JSX, JS and CSS",
   "9 automated tests including an offline build check",
   "No backend, no analytics, no external font calls",
   "Built in one day"
  ],
  "highlights": [
   "Tracks tournaments and cash games: buy-ins, re-entries, add-ons, bounties, stakes, session time, ROI, in-the-money rate, hourly result and largest drawdown, with all money stored as integer ore.",
   "Live mode starts a session now and lets the player add rebuys until it ends, or sessions can be logged afterwards.",
   "Validated JSON backup and restore, CSV export for Google Sheets, a demo mode that never mixes with real data and a hide-amounts switch.",
   "Installable offline web app with a version-stamped service worker produced at build time and covered by a test, plus a Swedish calendar picker."
  ],
  "score": 3,
  "shots": [
   "assets/shots/liveroll-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "smaka",
  "title": "Smaka",
  "oneLiner": "A phone-sized prototype of a recipe video feed with search-focused ranking, saved lists, creator profiles and a barcode nutrition tool.",
  "category": "web",
  "stack": [
   "Vanilla JavaScript",
   "CSS",
   "Node",
   "node:test"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "L0x3n/smaka-app",
   "visibility": "private"
  },
  "period": "Sep 2026",
  "metrics": [
   "8 commits in 3 days, version 0.3.1-rc.3",
   "About 1,900 lines of JS and CSS in dist",
   "9 automated tests",
   "18 demo recipes from 5 fictional creators",
   "18 planning documents (market, revenue, backend, GDPR, phased plan P0 to P7)"
  ],
  "highlights": [
   "Short-video recipe feed with a cover image before the video, a step-by-step cooking mode, ingredient tick-off, likes, comments and save-to-list.",
   "Deterministic local ranking: interests, likes, saves and swipe or dwell signals reorder unseen cards; a search shows up to six direct hits, three adjacent dishes, then returns to the normal feed, with a 'why am I seeing this' explanation.",
   "Creator profiles with follow, highlighted public lists, private-by-default lists and a simulated notification inbox.",
   "Barcode (GTIN) entry with camera scanning where the browser supports it, and a gram to kcal calculator for one invented product."
  ],
  "score": 3,
  "shots": [],
  "icon": ""
 },
 {
  "id": "remnantcrafting",
  "title": "Remnantcrafting",
  "oneLiner": "A static wiki and theorycrafting site for Soul's Remnant with a recursive material planner and a Monte Carlo crafting simulator.",
  "category": "web",
  "stack": [
   "Vite",
   "TypeScript",
   "Static site",
   "Node.js",
   "Render"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "L0x3n/remnantcrafting",
   "visibility": "public"
  },
  "period": "Aug 2026",
  "metrics": [
   "38 tests",
   "500 items",
   "563 unique recipes",
   "99 monsters",
   "87 maps",
   "592 mirrored sprites",
   "3.6k lines of TypeScript"
  ],
  "highlights": [
   "Found that the community wiki keeps its whole game database in Lua modules, and wrote a Lua table-literal parser (lua2json) so one command refetches and rebuilds every dataset.",
   "A material planner breaks 'make 2 Copper Bows' down to raw materials in craft order, with profession levels, farm locations and owned items subtracted.",
   "A pure, seedable crafting-minigame engine (32 tests) models the 'close the gap' card mechanic including the round-up quirk, and compares playstyles with paired Monte Carlo runs.",
   "Assumptions the data cannot confirm (draw odds, reroll distribution) are labelled as assumptions in the UI and isolated in one file."
  ],
  "score": 3,
  "shots": [
   "assets/shots/remnantcrafting-1.webp",
   "assets/shots/remnantcrafting-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "ufo-karta",
  "title": "UFO Map",
  "oneLiner": "An interactive bubble map and research tool that structures a Swedish UAP history documentary project, with source grading and PDF export.",
  "category": "web",
  "stack": [
   "TypeScript",
   "Vite",
   "d3-force",
   "d3-zoom",
   "jsPDF"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jul to Sep 2026",
  "metrics": [
   "61 nodes in 9 color-coded categories per the project notes",
   "About 1,900 lines of TypeScript",
   "13 episode outlines and FOI request templates alongside the tool",
   "Runs offline with localStorage and JSON import and export"
  ],
  "highlights": [
   "Bubble size encodes importance from 1 to 5, with a ring layout, link lines, drag-to-arrange with saved positions, search, legend filters and a timeline mode from 1946 to today.",
   "A node's detail panel exports a formatted PDF (jsPDF) with sources, to-dos and connections.",
   "Content is source-graded: claims carry A, B or C reliability tags with URL sources, and a warning node lists claims that failed a fact check so they are not used.",
   "Deep research was baked into the data through multi-agent research runs, and the data version key is bumped on each seed change to force clients to reload."
  ],
  "score": 3,
  "shots": [
   "assets/shots/ufo-karta-1.webp",
   "assets/shots/ufo-karta-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "login-nivaer",
  "title": "Login in Four Levels",
  "oneLiner": "The same login and signup site built four times with rising security, from plaintext passwords to TOTP two-factor, with test accounts and attack write-ups.",
  "category": "web",
  "stack": [
   "Node.js",
   "scrypt",
   "TOTP",
   "HTML/CSS"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Oct 2026",
  "metrics": [
   "2.2k lines of JavaScript",
   "18 tests",
   "5 local ports (hub 5410, levels on 5411 to 5414)",
   "3 attack write-ups",
   "built in one day, no git repo"
  ],
  "highlights": [
   "Level 1 is vulnerable on purpose (plaintext passwords, forgeable cookie, XSS); level 2 adds unsalted SHA-256; level 3 uses scrypt with salt, lockout, CSRF tokens and security headers.",
   "Level 4 adds TOTP two-factor, a server-side pepper, user-agent-bound sessions, one-time recovery codes and an audit log.",
   "A hub page lists every test account and shows live level-4 codes; cookie names are prefixed per level (n1_ to n4_) because localhost shares cookies across ports.",
   "ATTACK-niva1.md, ATTACK-niva3.md and ATTACK-niva4.md document how each level is attacked and where the defence holds; 18 tests cover login, lockout, CSRF and the second factor."
  ],
  "score": 3,
  "shots": [
   "assets/shots/login-nivaer-1.webp",
   "assets/shots/login-nivaer-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "mystery-bounty",
  "title": "MysteryBounty",
  "oneLiner": "A casino-style lucky envelope app: type your prizes, then drag the gold cover off a sealed envelope to reveal the number one digit at a time.",
  "category": "web",
  "stack": [
   "TypeScript",
   "Vite",
   "CSS",
   "Web Audio"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "L0x3n/mystery-bounty",
   "visibility": "public"
  },
  "period": "May 2026",
  "metrics": [
   "no framework, no backend",
   "about 1,200 lines of code",
   "built in one session",
   "public repo"
  ],
  "highlights": [
   "Card-squeeze reveal: drag the cover leftward and digits light up one at a time right to left as the edge clears them, auto-completing past a drag threshold.",
   "Confetti and synthesised Web Audio sound on reveal, a special jackpot treatment for the biggest prize, plus count-up running total and a staggered reveal-all.",
   "Vanilla TypeScript with plain DOM and a gold treasure theme, strict tsc build clean; render.yaml included for static hosting."
  ],
  "score": 2,
  "shots": [
   "assets/shots/mystery-bounty-1.webp",
   "assets/shots/mystery-bounty-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "tarot-deck",
  "title": "Tarot Deck",
  "oneLiner": "A complete 78-card tarot deck of new scenes in 1909 engraving style, generated locally on a gaming GPU and repainted so every card title is spelled right.",
  "category": "ai",
  "stack": [
   "Python",
   "Z-Image-Turbo",
   "LoRA",
   "PyTorch CUDA",
   "Pillow"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Oct 2026",
  "metrics": [
   "78 cards",
   "832 by 1440 px each",
   "about 38 s per image on an RTX 3060 Ti",
   "156 raw generations",
   "2 variants per card"
  ],
  "highlights": [
   "deck.py defines 78 original scenes (not copies of the 1909 deck), and gen.py renders them locally with a tarot LoRA after cloud options proved unusable (no credits, watermarks).",
   "The model misspells names and numerals (SEVREN of WANDS, VII instead of VIII), so patch.py paints over the nameplate and Roman numeral and re-typesets them in Georgia, with Palatino for the Fool's zero.",
   "Each card has two seeded variants and a picks.json records the chosen seed, so any card can be regenerated deterministically.",
   "Delivered as images only, plus a contact-sheet overview, to the desktop."
  ],
  "score": 5,
  "shots": [
   "assets/shots/tarot-deck-1.webp",
   "assets/shots/tarot-deck-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "forge-studio",
  "title": "Forge Studio",
  "oneLiner": "A text-to-game pipeline that writes real, hand-editable Godot projects, then builds, animates, tests and grades them with agents.",
  "category": "ai",
  "stack": [
   "TypeScript",
   "pnpm monorepo",
   "Claude Agent SDK",
   "Godot 4.7",
   "Blender 4.4",
   "Zod",
   "Vitest"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep 2026",
  "metrics": [
   "61 commits in 2 days",
   "124 tests",
   "113 TypeScript files",
   "first complete game for 58.95 dollars",
   "6 of 7 assets built",
   "14-dimension scorecard"
  ],
  "highlights": [
   "A Godot adapter library writes and parses .tscn and .tres as plain text, so everything the agents generate opens and edits in the normal Godot editor.",
   "One forge build command runs plan, assets, animate, vfx, navigation, wire, verify and playtest, each step logged and resumable, with asset jobs accepted only on files on disk (SHIP verdict, strict validation, engine check), not on agent claims.",
   "A playtest bot calibrates steering and mouse aim against the player's real movement, and a scorecard measures what can be measured and reports the rest as not applicable instead of guessing.",
   "Animation from scratch: a gait generator speed-matched to measured sole speed so enemies walk without foot slide, plus a per-asset cost log comparing Sonnet (4.31 dollars) and Opus (8.03 dollars) on the same job."
  ],
  "score": 4,
  "shots": [
   "assets/shots/forge-studio-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "beepforge",
  "title": "BeepForge",
  "oneLiner": "A text-to-chiptune studio that runs BeepBox's real synth headlessly and lets an AI compose, critique and revise songs in a compact song language.",
  "category": "ai",
  "stack": [
   "Node.js",
   "BeepBox synth",
   "Claude CLI and SDK",
   "Custom song DSL",
   "WAV export"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep 2026",
  "metrics": [
   "40 tests",
   "185 extracted BeepBox presets",
   "14 saved songs",
   "3.2k lines of source",
   "critic loop took one song from 6 to 9 out of 10"
  ],
  "highlights": [
   "A compact .song language (header, chord line, instruments, patterns, arrange slots) compiles to BeepBox JSON, so a model or a person can write music in chat and hear it at once.",
   "A compose, review, revise loop pairs a measured analyzer with an AI critic; one revision lifted 'Dawn Over Thornwick' from 6 to 9 out of 10, and songs rated 8 or higher become reference songs in the prompt.",
   "Headless render tests prove every example is audible per channel, and drum slot mapping was verified by spectral centroid.",
   "Grew from a single composer into a game-audio studio with a sound-effect designer, a sample studio, matching packs, a minimal chat UI with per-song chats and a ChatGPT and Claude provider switch."
  ],
  "score": 4,
  "shots": [
   "assets/shots/beepforge-1.webp",
   "assets/shots/beepforge-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "rapididea",
  "title": "RapidIdea",
  "oneLiner": "A private idea bank where AI tools summarize, challenge and connect your ideas, with a search model that runs on the device.",
  "category": "ai",
  "stack": [
   "Electron",
   "Node.js",
   "transformers.js",
   "EmbeddingGemma 2",
   "Claude CLI",
   "ES modules"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug to Oct 2026",
  "metrics": [
   "10k lines of JavaScript",
   "181 tests",
   "top result correct for 12 of 17 real queries (word search: 4 of 15)",
   "duplicate ideas caught 4 of 4",
   "about 30 ms per semantic search"
  ],
  "highlights": [
   "On-device semantic search: EmbeddingGemma 2 (q4, 166 MB) runs in the app process through transformers.js; measured on a mid-range CPU, q8 had a 240 ms fixed cost per call while q4 took about 30 ms with the same hits as fp32.",
   "One tool registry drives ten AI actions (summarize, next steps, expand, devil's advocate, minimum version, ready-made Claude Code build prompt, naming, connections, free question, title); every answer is stored where it belongs and the model is the user's Claude subscription via the CLI.",
   "Notes and checklist items are saved one at a time through the API, so an AI answer arriving mid-typing can never overwrite the user's work; nothing is hard-deleted.",
   "News radar over nine sources: the local model pre-selects items and Sonnet judges them against the user's own ideas, with noise filters for SEO and cheat repos and merged model variants."
  ],
  "score": 4,
  "shots": [],
  "icon": "assets/icons/rapididea.svg"
 },
 {
  "id": "rapidsales",
  "title": "RapidSales",
  "oneLiner": "A desktop app that trains inbound sales calls against an AI customer in Swedish, by text or by voice, and scores every call.",
  "category": "ai",
  "stack": [
   "Electron",
   "React",
   "Express",
   "TypeScript",
   "Vite",
   "Vitest",
   "Claude via claude -p",
   "ElevenLabs Agents",
   "Recharts",
   "Zod"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Oct 2026",
  "metrics": [
   "24 commits in 7 days",
   "About 38,000 lines across engine, web and server",
   "466 tests per the project notes",
   "10 scenarios, 5 drills, 40 simulated calls with 11 voiced examples",
   "Median voice latency target 1.2 s, about 1.4 s expected with Sonnet"
  ],
  "highlights": [
   "Trains inbound calls against an AI customer with a persona, mood and hidden needs, in text or voice (ElevenLabs agent over a custom WebSocket client), then produces a report scored against a rubric.",
   "Listen mode plays simulated calls with two voices, a transcript and a per-line explanation; seven sales strategies were simulated with a resumable, cost-capped script.",
   "Quality gates are written down and never lowered: role-break test 0 of 15, leak test 0 of 3, with the rule change after a failed run reported openly.",
   "Local-first: all data stays in one folder with a daily backup, wrapped in an Electron shell with a desktop shortcut, an animated logo and its own design system."
  ],
  "score": 4,
  "shots": [
   "assets/shots/rapidsales-1.webp",
   "assets/shots/rapidsales-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "pixel-game-studio",
  "title": "Pixel Game Studio",
  "oneLiner": "A pixel-art production tool that measured AI generation against code-drawn art, found drawing wins, then paused after an honest dead end.",
  "category": "ai",
  "stack": [
   "TypeScript",
   "pnpm monorepo",
   "Electron",
   "React",
   "Zod",
   "Python",
   "FLUX.2 klein",
   "Godot 4.7"
  ],
  "status": "concept",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep 2026",
  "metrics": [
   "63 commits in 2 days",
   "1,446 tests",
   "12 packages",
   "0.06 ms per drawn asset vs 2.20 s per generated image",
   "11 weighted QA checks"
  ],
  "highlights": [
   "A written decision log (ADR-013 to ADR-015) records two pivots: from diffusion to an LLM writing drawing code with material verbs, then to generate, convert, measure when drawn figures fell short.",
   "A pixel core detects the pixel grid, downscales and quantises a 1024 px image to a palette-locked sprite (a 26 by 41, 16-colour knight) in about 119 ms, with an 11-check QA scorer.",
   "Blind comparison by three critics showed drawn assets beating generated ones by 4 to 5 points out of 10 on the same motifs at the same size.",
   "A Godot export layer, prompt compiler, animation pose templates and a core model with append-only versions, all built test-first."
  ],
  "score": 3,
  "shots": [
   "assets/shots/pixel-game-studio-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "rapidone",
  "title": "RapidOne",
  "oneLiner": "A Windows desktop app that runs up to 16 real Claude Code and Codex CLI sessions side by side, with your actual projects listed on the left.",
  "category": "tool",
  "stack": [
   "Tauri 2",
   "Rust",
   "React 19",
   "TypeScript",
   "xterm 6",
   "zustand",
   "Vite",
   "Vitest"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep 2026",
  "metrics": [
   "11k lines of TypeScript and Rust",
   "108 Vitest cases",
   "92 real projects discovered on this PC",
   "up to 16 agent panes at once",
   "9 commits over 2 days"
  ],
  "highlights": [
   "Project list is read from Claude Code's own transcript files (the cwd in the first lines) plus a disk scan for .git, package.json and Cargo.toml, with tool-generated folders filtered out; one read per folder gives the whole list in 112 ms.",
   "Every pane is a real claude or codex process in a PTY with no chat layer in between; all open folders stay mounted so switching project never kills another folder's agents (a critical bug found and fixed in its own self-audit).",
   "Attention model for many agents: a 'N need you' counter, an overview of every agent in every open folder, and a notification only when an agent starts waiting while you look elsewhere; cost and last answer come from the transcript, not from scraped terminal text.",
   "Loopback control API with a per-launch key in ~/.rapidone/control.json lets another program open projects, start agents and hand them tasks; verified from the outside with scripted audits."
  ],
  "score": 4,
  "shots": [],
  "icon": "assets/icons/rapidone.svg"
 },
 {
  "id": "covibing",
  "title": "Covibing",
  "oneLiner": "A shared AI workspace where several vibecoders and several coding agents build one project together, rebuilt from Electron to Tauri and Rust.",
  "category": "tool",
  "stack": [
   "Tauri 2",
   "Rust",
   "React 19",
   "TypeScript",
   "xterm 6",
   "dockview",
   "PeerJS",
   "Supabase Realtime",
   "MCP",
   "zustand",
   "Vitest"
  ],
  "status": "shipped",
  "liveUrl": "https://l0x3n.github.io/covibing/",
  "github": {
   "repo": "L0x3n/covibing",
   "visibility": "public"
  },
  "period": "Jul 2026",
  "metrics": [
   "12.5k lines of TypeScript and Rust",
   "61 Vitest tests",
   "Windows installer 1.5 MB (the Electron build was 106 MB)",
   "public releases v0.1.1 to v0.1.9 plus a live landing page",
   "predecessor repo idea-studio: 46 commits from 2026-06-26"
  ],
  "highlights": [
   "Rebuilt from Electron to Tauri 2 and Rust: PTY manager, agent detection and git state run natively, and the NSIS installer shrank from 106 MB to 1.5 MB.",
   "Event-log core with a frozen protocol schema, MCP navigation so agents are first-class participants, tasks, memory, file claims and git-worktree merge automation.",
   "View-only P2P sharing over PeerJS (snapshot plus deltas with backpressure) with Supabase Realtime presence; remote input is dropped on the host by design.",
   "dockview tiling with renderer 'always' so adding, splitting or resizing panes never remounts a running terminal; an agent-driven audit and a full UX redesign followed the build."
  ],
  "score": 4,
  "shots": [
   "assets/shots/covibing-1.webp"
  ],
  "icon": "assets/icons/covibing.webp"
 },
 {
  "id": "game-asset-forge",
  "title": "Game Asset Forge",
  "oneLiner": "A Claude skill that builds game-ready 3D props in headless Blender and refuses to deliver until screenshot-graded renders and strict validators pass.",
  "category": "tool",
  "stack": [
   "Blender 4.4 (Python)",
   "glTF",
   "Godot 4.7",
   "Claude Code skill",
   "Python"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug to Sep 2026",
  "metrics": [
   "about 10k lines of Python tooling",
   "54 asset folders in the workspace",
   "26 assets in the benchmark table",
   "6-category grading, every category 8.0 or higher and mean 9.0"
  ],
  "highlights": [
   "Quality is enforced by evidence: every asset is judged from real rendered PNGs in a repeatable gauntlet, and the skill writes an honest failure report instead of delivering below the bar.",
   "A truth pass on a corrected render rig dropped all four assets that had scored 9.0 or higher by an average of 1.78 points, exposing five camera bugs, and the old assets were retired rather than deleted.",
   "Validators catch what a montage cannot: buried or detached parts, coplanar z-fighting faces, palette value-ladder failures and sweeping an animation clip for hidden collisions.",
   "A modular-part convention with socket contracts and a manifest that refuses to describe a part the mesh does not match: 4 slots by 2 variants gives 16 swords from 8 models."
  ],
  "score": 4,
  "shots": [
   "assets/shots/game-asset-forge-1.webp",
   "assets/shots/game-asset-forge-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "game-dev-skills",
  "title": "Game-dev agent skills",
  "oneLiner": "Six custom Claude skills that make an AI agent spec, architect, test, debug, review and refactor a game the way Linus's own projects proved to work.",
  "category": "tool",
  "stack": [
   "Claude Code skills",
   "Playwright MCP",
   "Context7 MCP"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jul 2026",
  "metrics": [
   "6 skills",
   "about 500 lines of instructions",
   "1 session to write"
  ],
  "highlights": [
   "game-spec turns a feeling into verbs, a tuning table with real numbers, failure states and a runnable done-check before any code is written.",
   "game-architecture keeps a deterministic simulation core that never imports rendering, with a fixed sim step, seeded RNG passed in, and mappings for web, Godot and Unity.",
   "game-debug installs a pause, step, seed and snapshot hook and bisects in time, generalising the debug hooks he already used across his web games.",
   "game-tests targets the simulation not the pixels: invariants, seeded golden runs, balance simulations and save round trips, with every fixed bug becoming a regression test."
  ],
  "score": 3,
  "shots": [],
  "icon": ""
 },
 {
  "id": "vfx-generator",
  "title": "VFX Generator",
  "oneLiner": "An engine-agnostic VFX generator that turns a text prompt into a validated effect spec and imports it into Unity, Godot and Roblox.",
  "category": "tool",
  "stack": [
   "TypeScript",
   "Three.js",
   "Zod 4",
   "Vite",
   "Anthropic SDK",
   "C# (Unity)",
   "GDScript (Godot)",
   "Luau (Roblox)",
   "pnpm"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "May 2026",
  "metrics": [
   "139 commits in 5 days",
   "about 820 test cases in 74 test files",
   "3 engine importers",
   "11 visual styles",
   "9 procedural texture generators",
   "13 example VFX"
  ],
  "highlights": [
   "A Zod-validated VFX schema with a .vfxpack bundle format that a Unity ScriptedImporter, a Godot EditorImportPlugin and a Roblox Studio plugin all load, so one effect drops into three engines.",
   "A live Three.js preview with LLM iteration, reference-image attachments and a version history that branches when you restore and edit.",
   "Nine procedural texture generators (including tileable simplex noise and voronoi) pinned by PNG snapshot tests that write a visual diff on mismatch.",
   "An 11-style system (low poly, pixel art, cel shaded, PS1 and more) with adapter hooks, followed by a 2D sprite-sheet VFX line with atlas slicing and an AI atlas pipeline that was later ripped out."
  ],
  "score": 4,
  "shots": [
   "assets/shots/vfx-generator-1.webp",
   "assets/shots/vfx-generator-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "intranet-portal",
  "title": "Haulage company intranet",
  "oneLiner": "An intranet and employee portal for a Swedish bus and haulage company, with fifteen case types driven by data and Postgres row-level security.",
  "category": "client",
  "stack": [
   "React 18",
   "TypeScript",
   "Vite 8",
   "react-router 7",
   "Supabase",
   "Vitest",
   "PGlite",
   "write-excel-file",
   "Render"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "L0x3n/nordfrakt-intranat",
   "visibility": "private"
  },
  "period": "Aug to Sep 2026",
  "metrics": [
   "98 commits in 19 days",
   "About 21,600 lines in src",
   "339 tests per the project notes, many run against a real in-memory Postgres (PGlite)",
   "31 SQL migrations",
   "22 generated PDFs: security tests, threat model, handbooks, handover pack"
  ],
  "highlights": [
   "Fifteen case types (incident, sick leave, leave, vehicle damage and more) are one workflow with different forms; the type is data in caseTypes.ts, so a new form needs no code.",
   "Permissions are written once in permissions.ts and mirrored as RLS policies, one per rule, and tests run the migrations against PGlite and ask the same questions once per role.",
   "Two shells over the same pages: a desktop sidebar and a phone app view that is drawn inside a phone frame on wide screens so both can be shown on one laptop.",
   "Health data is handled by design: sick-leave and VAB cases are visible only to assigned handlers, and compliance documents are generated from the repo so they cannot drift from the code."
  ],
  "score": 4,
  "shots": [],
  "icon": ""
 },
 {
  "id": "recruitflow",
  "title": "RecruitFlow",
  "oneLiner": "A clickable Swedish recruiting platform demo with workforce planning, AI sourcing and an animated data-pipeline map.",
  "category": "client",
  "stack": [
   "React 18",
   "TypeScript",
   "Vite",
   "react-router 6",
   "SheetJS",
   "Hand-written SVG charts"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "L0x3n/recruitflow",
   "visibility": "public"
  },
  "period": "Jul 2026",
  "metrics": [
   "About 9,100 lines in src, 19 pages, about 16 modules",
   "27 seeded candidates, 3 roles, 3 login roles with RBAC",
   "Whole ten-phase ultraplan delivered in four stages",
   "Each chart is hand-written SVG, no chart library"
  ],
  "highlights": [
   "An in-memory API layer (server with append-only audit, client with 120 to 300 ms latency and an error toggle) so the UI only mutates through api calls, like a real backend.",
   "Workforce planning replaces the Excel sheet: CSV and XLSX import with a column-mapping wizard, budget versus outcome, forecasts, what-if scenarios and automatic lag warnings.",
   "Natural-language AI sourcing against mocked web profiles with explainable match scores, outreach sequences, a joint inbox, and per-recruiter headhunt links with attribution and a leaderboard.",
   "Career page builder with a public apply flow, trigger automation, requisitions with an approval chain, offers with canvas e-signature, a GDPR purge run and an 8-step guided tour."
  ],
  "score": 4,
  "shots": [
   "assets/shots/recruitflow-1.webp",
   "assets/shots/recruitflow-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "process-io",
  "title": "Process.io",
  "oneLiner": "A SaaS landing page for a recruiting platform, with a clickable product mockup built into the hero.",
  "category": "client",
  "stack": [
   "HTML",
   "CSS",
   "JavaScript",
   "Render static site"
  ],
  "status": "live",
  "liveUrl": "https://process-io.onrender.com",
  "github": {
   "repo": "L0x3n/process-io",
   "visibility": "public"
  },
  "period": "Jul 2026",
  "metrics": [
   "Single index.html, no dependencies, no build step",
   "7 interactive mock app views in the hero",
   "3 pricing tiers with monthly and yearly toggle",
   "Zero console errors on mobile and desktop"
  ],
  "highlights": [
   "The hero is a working CSS product mockup: a clickable sidebar switches between 7 app views, and kanban cards can be dragged or opened into a candidate panel with 4 tabs.",
   "An interactive demo under the hero shows an animated AI sourcing search, a copilot Q&A and an animated SVG data pipeline.",
   "Pricing section with a yearly toggle (minus 20 percent) and a tick and cross comparison of what each tier includes.",
   "Scroll-reveal via IntersectionObserver and a responsive layout verified at phone and desktop widths."
  ],
  "score": 3,
  "shots": [
   "assets/shots/process-io-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "the-creator-slot",
  "title": "The Creator",
  "oneLiner": "A premium HTML5 ways slot with a deterministic engine, its own game server and a public play-money demo (18+).",
  "category": "game",
  "stack": [
   "PixiJS",
   "TypeScript",
   "Vite",
   "Vitest",
   "Playwright",
   "axe-core",
   "Node",
   "Python"
  ],
  "status": "live",
  "liveUrl": "https://l0x3n.github.io/the-creator/",
  "github": {
   "repo": "L0x3n/the-creator",
   "visibility": "public"
  },
  "period": "Oct 2026",
  "metrics": [
   "258 commits in 11 days",
   "627 test cases in 66 files",
   "RTP 96%, max win 25,000x",
   "10,000 randomized rounds with zero parity errors",
   "about 85,000 lines of code and docs tooling",
   "demo version 0.9.4 live"
  ],
  "highlights": [
   "Monorepo of focused packages (data, protocol, rng, engine, local-rgs, sim) with a deterministic ways engine and an HMAC_DRBG game server (apps/rgs) with journal and wallet API that plays the same rounds as the demo.",
   "Client core plays the engine's script inside a Web Worker; 10,000 randomized rounds and 1,000 feature rounds showed zero parity errors against the engine, and the outcome list checks 69 of 69.",
   "Production pipeline around the game: GDD and math docs, art and audio toolchains, colour-blind checks, accessibility pass with axe, performance budgets, soak and flash tests, and a release checklist for the public demo.",
   "Fully documented decision log (K and B numbered), versioned plan tags v0.1 to v0.6 and game tags v0.9.0 to v0.9.4."
  ],
  "score": 4,
  "shots": [
   "assets/shots/the-creator-slot-1.webp",
   "assets/shots/the-creator-slot-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "sunken-riches",
  "title": "Sunken Riches",
  "oneLiner": "A 243-ways video slot with a deterministic math engine proven to 95.97% RTP over 100 million simulated spins, presented in PixiJS.",
  "category": "game",
  "stack": [
   "PixiJS v8",
   "TypeScript",
   "Vite",
   "Vitest",
   "Howler"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "RTP 95.974% +/- 0.111 over 100M spins",
   "29 tests",
   "243 ways",
   "phases 0 to 5 of 11 done",
   "about 2,000 lines of code"
  ],
  "highlights": [
   "Pure headless math engine with a seeded mulberry32 RNG, fully separated from the PixiJS presentation layer which only plays back results, so it is cheat-proof and RTP-verifiable.",
   "Node simulator and committed PARSHEET.md passed the math gate: 100M spins, 59.2% base game, 24.5% free spins, 12.4% hold-and-win contribution.",
   "Found and fixed a real design bug: weight-1 coins on reel strips could never reach the 6-coin trigger, so coins became a per-cell overlay with a tunable trigger probability.",
   "Features modelled: Treasure Dive free spins with rising-tide multiplier and retrigger, Hold and Win with Mini, Minor, Major and Grand pots, and animated win rollups."
  ],
  "score": 3,
  "shots": [
   "assets/shots/sunken-riches-1.webp",
   "assets/shots/sunken-riches-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "gocasino",
  "title": "GOCasino",
  "oneLiner": "A server-authoritative casino platform with provably fair games and a full poker engine, written with zero runtime dependencies.",
  "category": "web",
  "stack": [
   "Node 22",
   "Vanilla JavaScript",
   "SSE",
   "Docker",
   "Render"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "L0x3n/gocasino",
   "visibility": "private"
  },
  "period": "Jun to Jul 2026",
  "metrics": [
   "61 commits in two weeks",
   "About 7,000 lines of server code, 17 front-end pages",
   "144 automated checks per the project notes (70 unit and engine, 74 security)",
   "15 database migrations",
   "Hold'em, PLO4, PLO5 and an all-in-or-fold mode"
  ],
  "highlights": [
   "Server-authoritative design: balances, outcomes and settlement live on the server with atomic SQLite transactions, so editing localStorage or faking a login does nothing.",
   "Provably fair outcomes: HMAC results with per-round bet entropy folded in after the commit, a public verifier page and a hash chain for poker hands.",
   "Poker engine with side pots and odd-chip handling, bots, a bad-beat jackpot, a hand replayer and fuzz tests across all game modes.",
   "Security work verified by multi-agent audits: scrypt passwords, TOTP 2FA encrypted at rest, hashed session ids, CSRF and rate limits, plus self-exclusion and deposit limits."
  ],
  "score": 2,
  "shots": [
   "assets/shots/gocasino-1.webp",
   "assets/shots/gocasino-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "tennis-edge",
  "title": "Tennis Edge",
  "oneLiner": "Compares bookmaker tennis odds with an LLM-adjusted probability, flags positive expected value and logs every prediction for backtesting.",
  "category": "ai",
  "stack": [
   "TypeScript",
   "node:sqlite",
   "React",
   "Vite",
   "Vitest",
   "Anthropic SDK",
   "Claude CLI"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "L0x3n/tennis-edge",
   "visibility": "private"
  },
  "period": "Jul 2026",
  "metrics": [
   "5.4k lines of TypeScript",
   "57 tests",
   "7 build phases in one day, then a market tab and a Pinnacle adapter",
   "odds from about 20 bookmakers",
   "replay proof over 18 Wimbledon matches"
  ],
  "highlights": [
   "The LLM never states a raw probability: code computes a no-vig market prior (Pinnacle, else the median) and the model estimates only the deviation, using a JSON schema and adaptive thinking, with guards against priors from training data on famous players.",
   "Append-only odds snapshots with views for latest, best and closing odds, so the final report scores closing-line value, bucket calibration, Brier score and flat-stake P&L instead of hit rate.",
   "A replay run on 18 past matches using only pre-match information produced 2 signal-driven picks (+1.85 units) and 9 matches left untouched, and led to three data-quality guards (odds outlier ratio, source conflict, minimum probability).",
   "Runs without an API key through the claude CLI on a subscription (stdin prompt, strict MCP config, single turn) with cost guards (hours ahead, daily cap, regex pre-gate); a Pinnacle-style market tab shows odds movement with sparklines."
  ],
  "score": 3,
  "shots": [
   "assets/shots/tennis-edge-1.webp",
   "assets/shots/tennis-edge-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "high-table",
  "title": "The High Table",
  "oneLiner": "A one-page site for a private 60-seat high roller poker room with a vouch-based membership system.",
  "category": "web",
  "stack": [
   "HTML",
   "CSS",
   "JavaScript",
   "PowerShell build script",
   "Zero-dependency Node server"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep 2026",
  "metrics": [
   "918-line index.html generated from 3 source parts",
   "Membership capped at 60 seats",
   "Built in a single day"
  ],
  "highlights": [
   "Scarcity is the design idea: no open join button, seats are capped and entry goes through a weekly satellite, one vouch per member per month, or a cold application.",
   "Source is split into head, body and script parts glued by build.ps1 into the hosted index.html and a publishable artifact.html.",
   "All editable settings sit in one CONFIG block, and the site carries chips-only wording, an 18+ notice and a non-affiliation footer.",
   "A PLAYBOOK.md documents the whole recruiting and ledger logic."
  ],
  "score": 2,
  "shots": [
   "assets/shots/high-table-1.webp",
   "assets/shots/high-table-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "ggsnap",
  "title": "GGSnap",
  "oneLiner": "A window manager for online poker tables that snaps 4 to 24 tables into grids across three monitors and highlights the table that needs action.",
  "category": "app",
  "stack": [
   "Electron",
   "koffi",
   "JavaScript"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep 2026",
  "metrics": [
   "5.3k lines of JavaScript",
   "7 commits",
   "grids for 4, 8, 12, 16 and 24 tables",
   "tests snap real windows plus a fake table rig"
  ],
  "highlights": [
   "Grid chooser uses as few screens as possible while respecting the client's minimum table width (560 px), and stacks overlapping tables so the hero cards and buttons are never covered.",
   "Table pixels can only be read with Electron's desktopCapturer; PrintWindow returns black on the GPU-rendered client and BitBlt fails when the window is in a hardware overlay.",
   "Turn detection compares the most-changed fifth of the button-area cells rather than the mean, because the button row is only a sixth of the read region and drowns in an average.",
   "A live test drives a fake table rig in test/faketable and refuses to overwrite real settings; the snapping core was later ported into 200bbs Stream."
  ],
  "score": 2,
  "shots": [
   "assets/shots/ggsnap-1.webp",
   "assets/shots/ggsnap-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "uppslaget",
  "title": "Uppslaget",
  "oneLiner": "One search box that recognises Swedish phone numbers, company numbers, personal numbers and municipalities and answers from open government APIs.",
  "category": "web",
  "stack": [
   "Node.js",
   "PTS number API",
   "EU VIES",
   "Kolada v3",
   "SCB PxWeb",
   "Bolagsverket open data"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep 2026",
  "metrics": [
   "2.5k lines of JavaScript",
   "zero dependencies, Node 18 or newer",
   "5 data sources wired in",
   "built in one day, no git repo",
   "self-test and test scripts included"
  ],
  "highlights": [
   "Detects the input type itself and computes what the number implies locally (number type, E.164 form, company form, VAT number, birth date, age, sex, birth county).",
   "Resolves a phone number's area-code length without a table by trying 3, 2 and 1 digits against the PTS operator API and reading 400 versus 204 responses.",
   "EU VIES supplies company name and registered address with no key, and the municipality is picked out of the address automatically; Kolada gives median income for the exact age band and sex in that municipality.",
   "Builds deep links with the search pre-filled instead of scraping third-party sites, so it never breaks and respects their terms."
  ],
  "score": 2,
  "shots": [
   "assets/shots/uppslaget-1.webp",
   "assets/shots/uppslaget-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "roennmark",
  "title": "ROENNMARK",
  "oneLiner": "A cinematic single-page portfolio site for a film editor, with a preloader, custom cursor and film-grain overlay.",
  "category": "client",
  "stack": [
   "HTML",
   "CSS",
   "Vanilla JavaScript",
   "Render static site"
  ],
  "status": "live",
  "liveUrl": "https://roennmark.onrender.com",
  "github": {
   "repo": "L0x3n/roennmark",
   "visibility": "public"
  },
  "period": "Sep 2026",
  "metrics": [
   "4 commits within about one hour",
   "About 70 KB of hand-written HTML, CSS and JS",
   "Swedish copy, deployed from the first day"
  ],
  "highlights": [
   "Letter-by-letter preloader with a progress counter, a custom cursor with a follower and a film-grain overlay.",
   "A film-frame SVG logo with sprocket holes and a play triangle.",
   "Sections for selected projects, passion for visual storytelling, working process and contact.",
   "Replaced an external hero video with a CSS animated background to drop the third-party dependency."
  ],
  "score": 2,
  "shots": [
   "assets/shots/roennmark-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "cs2-skin-sandbox",
  "title": "CS2 Skin and Sticker Sandbox",
  "oneLiner": "A personal Three.js tool that extracts Counter-Strike 2 weapon models and recreates holographic stickers and wear shaders in a game-quality 3D viewer.",
  "category": "app",
  "stack": [
   "Three.js",
   "TypeScript",
   "Vite",
   "GLSL",
   "ValveResourceFormat",
   "Electron"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "23 commits in one day",
   "phase 0 critical spike done, phase 1 renderer-side done",
   "about 2,000 lines of code"
  ],
  "highlights": [
   "Extraction pipeline with ValveResourceFormat that decompiles CS2 model and texture files from the local install into glTF and PNG, regenerated by tools/extract.sh.",
   "Reverse-engineered Valve's holographic sticker recipe from its own shader and material data, driving a custom GLSL holo shader from the real spectrum lookup texture with a live edge-first scrape slider.",
   "Diagnosed a dual-LOD bug (HD and legacy meshes both loaded) that doubled geometry and broke decal projection, fixed by keeping only the hd meshes.",
   "Documented dead ends honestly (UV1 and position-map remaps) and prioritised the next steps in IMPROVEMENTS.md."
  ],
  "score": 3,
  "shots": [
   "assets/shots/cs2-skin-sandbox-1.webp",
   "assets/shots/cs2-skin-sandbox-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "skinwatch",
  "title": "SkinWatch",
  "oneLiner": "Watches CS2 skin listings across three marketplaces and alerts on price, float or charm pattern.",
  "category": "web",
  "stack": [
   "Node.js",
   "Server-Sent Events",
   "Windows toast",
   "CSFloat API",
   "Steam Market",
   "Skinport"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jul 2026",
  "metrics": [
   "1.8k lines of JavaScript",
   "15 tests",
   "3 market sources",
   "zero dependencies",
   "alert chain verified live end to end"
  ],
  "highlights": [
   "Advanced mode filters single listings by float range, paint seed or index, StatTrak or Souvenir, buy-now or auction, sticker text and charm pattern ranges such as 20000-25000, 77777.",
   "Alert chain verified live: a Steam watch fired at 418.75 kr against a 500 kr limit, a Skinport watch fired through the background poller, and Windows toasts come from PowerShell WinRT without admin rights.",
   "Alerts have hysteresis (re-arm at +5 percent or by manual reset), CSFloat results are de-duplicated per listing id, and each source backs off separately after a 429.",
   "Plain Node: HTTP server, JSON API, SSE push to the UI, pure filter predicates in their own module."
  ],
  "score": 2,
  "shots": [
   "assets/shots/skinwatch-1.webp",
   "assets/shots/skinwatch-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "fura",
  "title": "FURA",
  "oneLiner": "A fictional Nordic nicotine pouch brand with a full website and a rotating procedural 3D can.",
  "category": "web",
  "stack": [
   "Three.js",
   "TypeScript",
   "Vite",
   "Hash router"
  ],
  "status": "playable-prototype",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jul 2026",
  "metrics": [
   "About 1,100 lines of TypeScript and CSS",
   "6 product flavors with detail pages",
   "Procedural 3D can with canvas-drawn labels, drag to spin",
   "tsc and vite build green"
  ],
  "highlights": [
   "The 3D can is generated in code (cylinder, lid, rim torus, canvas-textured labels, studio lighting and shadow) and spins with drag.",
   "Full multi-page site on a hash router: home, catalog, product detail with related items, sustainability story, newsletter and a fake cart counter.",
   "Nordic paper, moss and ice palette with Fraunces and Inter, chosen by the user from several directions.",
   "18+ age gate and nicotine warning built in."
  ],
  "score": 2,
  "shots": [
   "assets/shots/fura-1.webp",
   "assets/shots/fura-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "swords-and-sandals",
  "title": "Swords and Sandals (card roguelite)",
  "oneLiner": "A gladiator arena card roguelite with a cinematic rotating Colosseum menu, relics, potions, shops and a final Emperor boss.",
  "category": "game",
  "stack": [
   "TypeScript",
   "Vite",
   "Canvas 2D",
   "Vitest",
   "PixelLab",
   "WebAudio"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jun 2026",
  "metrics": [
   "51 tests",
   "phases 0 to 7 plus Emperor boss and combatant sprites done",
   "about 4,100 lines of code",
   "29 source files"
  ],
  "highlights": [
   "Headless combat engine with an event queue and a data-driven hook registry for statuses (Strength, Dexterity, Vulnerable, Weak, Bleed), relics and potions, so new effects are data rather than code.",
   "Drag-to-play card combat, exhaust piles, deck viewer and an attack-versus-effect damage distinction for potions.",
   "Run model with persistent HP, gold, deck and relics: limited single fights, forced tournament gauntlet, tier-up scaling, town shops with re-rolled stock, permadeath and recap.",
   "Cinematic Colosseum title scene built from a faux-3D orbit ring of depth-sorted arches with sunset, torches and rising embers."
  ],
  "score": 3,
  "shots": [
   "assets/shots/swords-and-sandals-1.webp",
   "assets/shots/swords-and-sandals-2.webp"
  ],
  "icon": ""
 },
 {
  "id": "valheim-hardcore-guide",
  "title": "Valheim Hardcore WR Guide",
  "oneLiner": "A research guide for a very-hard-hardcore Valheim speedrun, with numbers decompiled from the game install and an interactive 243-step checklist.",
  "category": "web",
  "stack": [
   "Node.js",
   "ilspycmd",
   "UnityPy",
   "Claude artifact",
   "13 research agents"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Oct 2026",
  "metrics": [
   "about 1,000 lines each in Swedish and English",
   "243 checklist items",
   "799 asset bundles scanned",
   "13 research agents",
   "205 world-gen locations reproduced bit-exact"
  ],
  "highlights": [
   "When the wikis returned HTTP 401 and 402, the numbers were read straight from my own install by decompiling assembly_valheim.dll and scanning 799 Unity bundles, then cross-checked with a second pass in Node that found and fixed several figures.",
   "Thirteen agents researched techniques and edge cases, and every one is labelled verified in code, untested, allowed or banned under the speedrun rules.",
   "A Node port of the world generator reproduces 205 prioritised locations exactly, and is marked as off limits where the run category forbids seed scanning.",
   "Ships as an interactive page with per-boss checklists, notes per phase and diagrams (tempo line, sun compass, boss distances, damage windows) that saves progress per user."
  ],
  "score": 2,
  "shots": [],
  "icon": ""
 },
 {
  "id": "local-qwen-image",
  "title": "Local Qwen Image Runner",
  "oneLiner": "A one-command PowerShell script that runs a 14.6 GB Qwen image model on an 8 GB GPU through stable-diffusion.cpp, with no Python.",
  "category": "ai",
  "stack": [
   "PowerShell",
   "stable-diffusion.cpp",
   "Qwen-Image-2.1 GGUF Q4_K_M",
   "Qwen3-VL text encoder"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Oct 2026",
  "metrics": [
   "126 s per 1024 by 1024 image",
   "7.2 GB peak VRAM on an 8 GB card",
   "20 steps",
   "108-line script"
  ],
  "highlights": [
   "Fits a 14.6 GB model and text encoder onto an RTX 3060 Ti using CPU offload, a VRAM cap and VAE tiling, measured at 7.2 GB peak VRAM with free system RAM always above 4 GB.",
   "The script unloads any resident Ollama model through its API first, because an image model plus a 20 GB LLM froze the whole PC.",
   "Prompts go in as UTF-8 files and output is timestamped and opened automatically; in-image text ('QWEN 2.1' on a sign) rendered correctly on the first try."
  ],
  "score": 2,
  "shots": [
   "assets/shots/local-qwen-image-1.webp"
  ],
  "icon": ""
 },
 {
  "id": "spelsparr",
  "title": "Spelsparr",
  "oneLiner": "A researched spec for a gambling blocker with time-locked unlocking (30, 90 or 120 days), covering law, requirements, data model and tests.",
  "category": "app",
  "stack": [
   "Documentation only"
  ],
  "status": "concept",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Aug 2026",
  "metrics": [
   "14 documents in docs plus a README, 0 lines of code",
   "29 legal rules registered, all status SPEC",
   "Traceability chain from law ID to requirement to code comment to test case"
  ],
  "highlights": [
   "Documentation is traceable: LAW-IDs in REGELVERK map to REQ-IDs in KRAVSPEC, then to code comments and TC-IDs in TESTSPEC, and a requirement with no test case counts as not implemented.",
   "Legal analysis drives the design: unlock delay chosen at purchase mirrors the national self-exclusion periods, a block survives non-payment, and the server never links a payment to a lock.",
   "Safety valves are designed in: owner revocation after 7 days, a dead-man switch after 30 days offline with a signed wind-down certificate, and support that technically cannot shorten a lock.",
   "Hard platform limits are written down: iOS cannot list installed apps, Android QUERY_ALL_PACKAGES needs Play approval and the national exclusion registry is closed to non-licensees."
  ],
  "score": 2,
  "shots": [],
  "icon": ""
 },
 {
  "id": "fixa",
  "title": "Fixa",
  "oneLiner": "A Swedish marketplace where homeowners book tradespeople from a price menu with the ROT tax deduction calculated before booking.",
  "category": "web",
  "stack": [
   "TypeScript",
   "Supabase",
   "Stripe Connect",
   "React/Vite/Tailwind",
   "Node test runner"
  ],
  "status": "in-progress",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jul 2026",
  "metrics": [
   "Phase 1 core built and verified, of 8 planned phases",
   "54 passing tests for the pricing engine, money types and booking state machine",
   "17 passing database checks across 5 migrations",
   "25 seeded SKUs, 16 of them ROT-eligible",
   "5 research documents against primary legal sources"
  ],
  "highlights": [
   "Pricing engine and booking state machine written dependency-free and typechecked without Node types, so the same code can run in Deno edge functions.",
   "Database migrations are verified without Docker by running them against PGlite (Postgres in WASM) in plain Node scripts.",
   "docs/gar-inte.md lists every part of the original master prompt that does not work as described, with the legal citation and what was built instead.",
   "Legal findings shaped the design: no escrow (card charged only at completion), SetupIntent at booking and direct charge on the craftsman's account, and a +/-15 percent price band that matches the consumer services act."
  ],
  "score": 3,
  "shots": [],
  "icon": ""
 },
 {
  "id": "typesafe-skill",
  "title": "TypeSafe plugin setup",
  "oneLiner": "Installs and wires the TypeSafe skill so coding agents can add typed AI judgments, such as yes-no probabilities and ranked choices, to any app.",
  "category": "tool",
  "stack": [
   "Claude Code plugin",
   "TypeSafe System One API",
   "Windows environment variables"
  ],
  "status": "concept",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Sep 2026",
  "metrics": [
   "plugin typesafe@typesafe-ai v0.5.7 installed at user scope on 2026-09-20",
   "one skill, no hooks, no MCP servers"
  ],
  "highlights": [
   "Plugin installed with the claude plugin CLI at user scope so the skill is available in every session started from the home folder.",
   "The skill is guidance only: always read the live docs (docs.typesafe.ai/llms.txt) before writing an integration.",
   "TypeSafe models answer with typed verdicts (a yes-no probability, one of several choices, a score on an ordered scale) instead of generated text, which suits routing, ranking, extraction and verification.",
   "The API key sits in a user-level environment variable, never in a file or repo, because the home folder is itself a git repository."
  ],
  "score": 1,
  "shots": [],
  "icon": ""
 },
 {
  "id": "screen-recorder",
  "title": "Screen Recorder",
  "oneLiner": "A browser-based screen recorder that saves MP4 video and an MP3 audio track.",
  "category": "web",
  "stack": [
   "Vite",
   "TypeScript",
   "getDisplayMedia",
   "MediaRecorder",
   "lamejs"
  ],
  "status": "shipped",
  "liveUrl": "",
  "github": {
   "repo": "",
   "visibility": "none"
  },
  "period": "Jul 2026",
  "metrics": [
   "490 lines of TypeScript, no framework",
   "built and verified in one day",
   "no git repo"
  ],
  "highlights": [
   "Records straight to MP4 (H.264 and AAC) in Chrome by probing a list of supported mime types.",
   "Optional microphone mixed with system audio through an AudioContext.",
   "MP3 export decodes the audio with decodeAudioData and encodes with the maintained lamejs fork, because classic lamejs 1.2.1 throws 'MPEGMode is not defined'.",
   "A test hook (window.__rec) verifies the MP3 pipeline headlessly; a CSS bug where display:flex overrode the hidden attribute was found and fixed."
  ],
  "score": 1,
  "shots": [
   "assets/shots/screen-recorder-1.webp",
   "assets/shots/screen-recorder-2.webp"
  ],
  "icon": ""
 }
];
