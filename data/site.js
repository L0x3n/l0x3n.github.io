window.FEATURED = [
  "sail-together", "vibed-games",
  "refract", "tarot-deck", "cosmos-universe-sandbox",
  "hemvik", "sunspire", "pixelfall",
  "rapidtracker", "spingold-solver", "eightfall",
];

window.RANGE = [
  {
    title: "Game engines and 3D",
    items: [
      { name: "Godot", match: ["Godot", "GDScript"] },
      { name: "Unity", match: ["Unity", "C# (Unity)", "URP", "Burst"] },
      { name: "Three.js", match: ["Three.js"] },
      { name: "Blender (Python)", match: ["Blender"] },
      { name: "Phaser", match: ["Phaser"] },
      { name: "Shaders", match: ["GLSL", "HLSL", "Shaders", "Compute shaders", "WebGL"] },
      { name: "Canvas 2D", match: ["Canvas 2D"] },
    ],
  },
  {
    title: "Desktop and native",
    items: [
      { name: "Electron", match: ["Electron"] },
      { name: "Tauri 2", match: ["Tauri"] },
      { name: "Rust", match: ["Rust"] },
      { name: "C# and .NET", match: ["C#", ".NET"] },
      { name: "Win32 APIs", match: ["koffi", "uiohook"] },
      { name: "PowerShell", match: ["PowerShell"] },
    ],
  },
  {
    title: "Web and backend",
    items: [
      { name: "TypeScript", match: ["TypeScript"] },
      { name: "React", match: ["React"] },
      { name: "Node.js", match: ["Node", "Express"] },
      { name: "Supabase and Postgres", match: ["Supabase", "Postgres", "PGlite", "SQLite"] },
      { name: "Realtime and WebRTC", match: ["PeerJS", "WebRTC", "ws (WebSocket)", "Socket.IO", "Yjs", "Liveblocks"] },
      { name: "PWA", match: ["PWA", "vite-plugin-pwa", "Service worker"] },
      { name: "Cloudflare and Vercel", match: ["Cloudflare", "Vercel"] },
    ],
  },
  {
    title: "AI, audio and art",
    items: [
      { name: "Claude API and Agent SDK", match: ["Claude", "Anthropic"] },
      { name: "MCP servers", match: ["MCP", "Model Context Protocol", "Unity MCP", "Godot MCP"] },
      { name: "PixelLab", match: ["PixelLab"] },
      { name: "Web Audio synthesis", match: ["WebAudio", "Web Audio", "BeepBox"] },
      { name: "ElevenLabs", match: ["ElevenLabs"] },
      { name: "Local image models", match: ["Z-Image", "FLUX", "LoRA", "PyTorch"] },
      { name: "On-device ML", match: ["transformers.js", "EmbeddingGemma"] },
    ],
  },
];

window.SITE = {
  steps: [
    {
      title: "Spec before code",
      body: "Every game starts as a locked spec: verbs, a tuning table with real numbers, failure states and a done-check. My own <code>game-spec</code> skill stops an agent from coding until that exists.",
    },
    {
      title: "Phases with gates",
      body: "Big builds run as numbered phases in a plan file. A phase is done when its gate passes, not when the agent says so. That is how RapidSolver landed 237k lines in 17 days with up to seven agents in parallel worktrees.",
    },
    {
      title: "Proof, not vibes",
      body: "Games get debug hooks like <code>window.__eight</code> and seeded runs, so an agent can pause, step and screenshot instead of guessing. Anything with money maths gets two independent verifiers.",
    },
    {
      title: "Critics in the loop",
      body: "For art and game feel I fan out variants, let a harsh critic grade them and pick blind. The tarot deck went through spec, test prints, variants and picks for all 78 cards before a single one was final.",
    },
    {
      title: "Teach the agents",
      body: "When a lesson repeats, it becomes a skill or an MCP server, so the next project starts smarter. The agents on this machine know my engines, my art rules and my publishing flow.",
    },
    {
      title: "Ship where people are",
      body: "GitHub Pages, Render, Vercel or a Windows installer. If it can run in a browser it gets a link, and everything else starts with one command.",
    },
  ],
  agents: ["Claude Code", "Codex", "Cursor", "Gemini CLI", "GitHub Copilot", "Qwen Code", "Kimi", "OpenCode", "Antigravity"],
  mcp: ["Unity MCP", "Godot MCP", "Blender MCP", "PixelLab", "ElevenLabs", "Playwright", "Context7", "GitHub"],
  local: ["Ollama with Qwen 3.6 35B", "Z-Image-Turbo with a LoRA", "FLUX.2 klein", "EmbeddingGemma on ONNX"],
  ownTools: [
    { name: "Six game-dev skills.", body: "Spec, architecture, tests, debugging, review and refactoring, written from what actually worked in my own games." },
    { name: "game-asset-forge.", body: "A Blender skill that builds game props headlessly and refuses to deliver until screenshot-graded renders pass." },
    { name: "Publishing MCP for vibed.games.", body: "An agent can package and publish a browser game to my platform in one call." },
    { name: "Multiworld creator API.", body: "Every character in a shared 3D world gets a key, so people and Claude can build objects into it live." },
    { name: "RapidOne control API.", body: "Other programs can open projects, start Claude Code or Codex sessions and hand them tasks." },
    { name: "Skill-authoring kit.", body: "A spec skill with a dependency-free validator, so new skills load in Claude Code, Codex and OpenCode alike." },
  ],
};
