export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  label: string;
  isTodo?: boolean;
}

export const socialLinks = {
  github: {
    name: "GitHub",
    url: "https://github.com/vinish-v",
    handle: "vinish-v",
    label: "github.com/vinish-v",
    isTodo: false
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vinish-v-80bb1020b/",
    handle: "vinish-v-80bb1020b",
    label: "linkedin.com/in/vinish-v-80bb1020b",
    isTodo: false
  },
  leetcode: {
    name: "LeetCode",
    url: "https://leetcode.com/u/vinish06/",
    handle: "vinish06",
    label: "leetcode.com/u/vinish06",
    isTodo: false
  },
  codechef: {
    name: "CodeChef",
    url: "#",
    handle: "TODO: Supply URL",
    label: "CodeChef Profile (Pending URL)",
    isTodo: true
  },
  email: {
    name: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=viniv6687@gmail.com",
    handle: "viniv6687@gmail.com",
    label: "viniv6687@gmail.com",
    isTodo: false
  }
};
