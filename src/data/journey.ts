export interface JourneyNode {
  period: string;
  title: string;
  organization: string;
  location?: string;
  details: string[];
  badge?: string;
}

export const journeyData: JourneyNode[] = [
  {
    period: "2023 – 2027",
    title: "B.E. Electronics & Communication Engineering",
    organization: "KGISL Institute of Technology",
    location: "Coimbatore, India",
    details: [
      "Academic performance: CGPA 8.0 / 10",
      "Core focus on system fundamentals, computing architectures, and software engineering principles."
    ],
    badge: "CGPA 8.0"
  },
  {
    period: "Jan 2025",
    title: "Software Engineering Intern",
    organization: "Customer Centria",
    location: "Coimbatore, India",
    details: [
      "Team collaboration on core client-facing products and internal services.",
      "Engineered backend support routines and reliable data processing pipelines.",
      "Constructed interactive dashboards for data analysis and visualization.",
      "Certificate of completion awarded."
    ],
    badge: "Internship"
  },
  {
    period: "Ongoing",
    title: "Competitive Programming & Problem Solving",
    organization: "LeetCode & CodeChef",
    details: [
      "LeetCode: 300+ algorithmic problems solved across data structures, graph theory, and dynamic programming.",
      "CodeChef: 700+ competitive programming challenges solved with consistent problem-solving practice."
    ],
    badge: "1000+ Total Problems"
  }
];
