export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java"]
  },
  {
    category: "Frontend",
    items: ["React.js", "React Native", "Expo Router", "HTML", "CSS / Tailwind"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.IO"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "SQL", "Redis"]
  },
  {
    category: "Data & BI",
    items: ["Power BI", "Excel"]
  },
  {
    category: "Tools",
    items: ["Git & GitHub", "VS Code Extension API", "AST Analysis", "Vite"]
  }
];

export const competitiveProgrammingStats = {
  leetcode: "300+ problems",
  codechef: "700+ problems"
};
