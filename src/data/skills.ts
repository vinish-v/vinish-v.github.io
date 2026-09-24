export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript"]
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML", "CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"]
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
    items: ["Git", "GitHub"]
  }
];

export const competitiveProgrammingStats = {
  leetcode: "300+ problems",
  codechef: "700+ problems"
};
