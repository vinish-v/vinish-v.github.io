export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  accent: 'emerald' | 'purple' | 'blue' | 'orange';
  stack: string[];
  summary: string;
  problem: string;
  implementation: string[];
  keyEngineeringDetail: string;
  githubUrl: string;
  demoUrl?: string;
  isDemoTodo: boolean;
  imageType: 'hr-system' | 'chat-app' | 'deadcode-hunter' | 'vinsic';
}

export const projectsData: ProjectItem[] = [
  {
    id: "deadcode-hunter",
    title: "DeadCode Hunter",
    tagline: "VS Code Static Analysis Tooling for Tri-Factor Dead Code & Ghost Asset Pruning",
    category: "Developer Tooling",
    accent: "emerald",
    stack: ["VS Code Extension API", "TypeScript", "Node.js", "AST Analysis", "Vite", "TailwindCSS"],
    summary: "High-performance developer tooling extension that detects orphan code, dangling media assets, and ghost npm dependencies with cryptographic SHA-256 duplicate detection, automated Git stash snapshots, and OS Recycle Bin safe deletion.",
    problem: "As codebases scale, unused components, abandoned media assets, and obsolete npm packages silently degrade maintainability and bloat bundle sizes. Developers hesitate to prune them out of fear of breaking unreferenced runtime code or accidental file loss.",
    implementation: [
      "Engineered tri-factor workspace scanner that traverses JS/TS AST import trees, public static asset paths, and package.json manifests simultaneously.",
      "Implemented cryptographic SHA-256 binary media hasher to detect exact duplicate icons, photos, and vector assets across scattered folders.",
      "Constructed automated Git safety net issuing timestamped 'git stash push -u' snapshots prior to destructive batch operations for instant recovery.",
      "Integrated native operating system Recycle Bin / Trash APIs, ensuring all file removals are routed to OS trash rather than hard unlinking.",
      "Developed dual-surface VS Code interface with an activity bar checklist, storage treemaps, staleness badges, and instant Markdown audit reports."
    ],
    keyEngineeringDetail: "Tri-factor AST & regex dependency crawler coupled with cryptographic SHA-256 media deduplication, backed by automated Git stash checkpoints and native OS Recycle Bin routing for zero-risk dead code elimination.",
    githubUrl: "https://github.com/vinish-v/deadcode-hunter",
    demoUrl: "",
    isDemoTodo: true,
    imageType: "deadcode-hunter"
  },
  {
    id: "vinsic",
    title: "Vinsic — Music & Audio Player",
    tagline: "Apple Music-Inspired Streaming & Local Audio Player with Synced Lyrics & Sing Mode",
    category: "Mobile Systems",
    accent: "purple",
    stack: ["React Native", "Expo Router", "TypeScript", "Audio Lifecycle", "Saavn & Spotify APIs"],
    summary: "Modern, high-fidelity mobile streaming and local audio player inspired by Apple Music's sleek aesthetics, featuring real-time line-by-line synced lyrics, an interactive Sing (Karaoke) vocal presence slider, circadian-based daily mixes, and unified local/online search.",
    problem: "Standard mobile music applications either restrict playback to local storage or gate features behind proprietary streaming clouds, offering clumsy lyric synchronization and no granular vocal isolation for karaoke.",
    implementation: [
      "Architected unified audio playback engine integrating local device filesystem storage (MP3, FLAC, M4A, AAC) with Saavn and Spotify global streaming catalogs into a single search experience.",
      "Engineered real-time synchronized line-by-line lyric scrolling with millisecond precision, smooth auto-scroll, and interactive tap-to-seek playback navigation.",
      "Developed dedicated Sing (Karaoke) mode featuring a docked vertical vocal presence slider allowing real-time vocal attenuation without obscuring playback controls.",
      "Constructed an ML-driven circadian taste engine that synthesizes 6 personalized daily mixes based on user listening habits and time-of-day (Morning, Flow, Rush, Chill).",
      "Implemented full audio engineering toolset including custom equalizer presets (Bass Boost, Vocal, Electronic), lossless audio stream switching, and AirPlay/Cast output routing."
    ],
    keyEngineeringDetail: "Millisecond-synchronized lyric rendering engine with interactive tap-to-seek, paired with a unified audio bridge combining device storage and online streaming APIs with custom vocal attenuation control.",
    githubUrl: "https://github.com/vinish-v/Vinsic",
    demoUrl: "",
    isDemoTodo: true,
    imageType: "vinsic"
  },
  {
    id: "ai-hr-system",
    title: "AI-Powered HR Management System",
    tagline: "MERN Employee Management with Automated LLM Resume Ingestion",
    category: "Production Architecture",
    accent: "blue",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "LLM API"],
    summary: "Full-stack employee records CRUD system featuring an automated LLM resume parser that extracts structured employee attributes directly from PDF documents.",
    problem: "Manual HR record entry from incoming resumes is error-prone, slow, and repetitive, creating significant operational bottlenecks during hiring cycles.",
    implementation: [
      "Engineered comprehensive MERN-stack employee CRUD architecture with validated RESTful endpoints.",
      "Built resilient MongoDB schema for granular employee profile, department, and tenure data.",
      "Designed responsive React admin interface with dynamic sorting, filtering, and real-time state synchronization.",
      "Integrated LLM parsing pipeline to process raw PDF text streams into validated, auto-populated JSON models."
    ],
    keyEngineeringDetail: "LLM integration that extracts structured fields (candidate name, technical skills, previous work history, education) from unstructured PDF text, automatically populating employee profiles with zero manual transcription.",
    githubUrl: "https://github.com/vinish-v",
    demoUrl: "",
    isDemoTodo: true,
    imageType: "hr-system"
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Chat Application",
    tagline: "Low-Latency One-to-One Messaging with Context-Aware AI Suggestions",
    category: "Real-Time Systems",
    accent: "orange",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "LLM API"],
    summary: "Real-time communication platform powered by Socket.IO featuring instant one-to-one delivery, live presence indicators, and intelligent contextual smart replies.",
    problem: "Real-time messaging applications require resilient socket connection lifecycles, fault-tolerant message persistence, and low friction in fast-paced conversation flows.",
    implementation: [
      "Architected bidirectional Socket.IO event system for sub-millisecond message dispatch and receipt acknowledgments.",
      "Integrated secure JWT-based user authentication and MongoDB persistent chat history indexes.",
      "Constructed live heartbeat ping protocol for instantaneous online/offline status detection.",
      "Embedded LLM inference hook that analyzes rolling 5-message conversation context to generate 2–3 instant smart replies."
    ],
    keyEngineeringDetail: "Socket.IO event architecture for heartbeat connection management coupled with an LLM inference pipeline that evaluates multi-turn message history to suggest contextually relevant 1-tap quick replies.",
    githubUrl: "https://github.com/vinish-v",
    demoUrl: "",
    isDemoTodo: true,
    imageType: "chat-app"
  }
];
