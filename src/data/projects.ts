export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  stack: string[];
  summary: string;
  problem: string;
  implementation: string[];
  keyEngineeringDetail: string;
  githubUrl: string;
  demoUrl?: string;
  isDemoTodo: boolean;
  imageType: 'hr-system' | 'chat-app';
}

export const projectsData: ProjectItem[] = [
  {
    id: "ai-hr-system",
    title: "AI-Powered HR Management System",
    tagline: "MERN Employee Management with Automated LLM Resume Ingestion",
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
