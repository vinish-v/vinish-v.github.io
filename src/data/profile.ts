export interface ProfileData {
  name: string;
  role: string;
  location: string;
  email: string;
  gmailComposeUrl: string;
  phone?: string;
  photoUrl: string;
  degree: string;
  institution: string;
  graduation: string;
  cgpa: string;
  targetLocations: string[];
  bio: string[];
  hero: {
    name: string;
    role: string;
    statement: string;
  };
}

export const profileData: ProfileData = {
  name: "Vinish V",
  role: "Full-Stack Developer",
  location: "Coimbatore, India",
  email: "viniv6687@gmail.com",
  gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=viniv6687@gmail.com",
  phone: "+91 90253 49047",
  photoUrl: "/vini_suitcoat.jpeg",
  degree: "B.E. Electronics & Communication Engineering",
  institution: "KGISL Institute of Technology, Coimbatore",
  graduation: "May 2027",
  cgpa: "8.0",
  targetLocations: ["Bangalore", "Chennai", "Hyderabad", "Coimbatore"],
  bio: [
    "I'm a final-year ECE student at KGISL Institute of Technology, building full-stack web applications with the MERN stack.",
    "My projects combine functional backends with LLM integrations — practical software that solves real problems rather than technology for its own sake.",
    "Currently seeking full-time roles and internships in Bangalore, Chennai, Hyderabad, and Coimbatore."
  ],
  hero: {
    name: "VINISH V.",
    role: "Full-Stack Developer",
    statement: "Building functional software —\nfrom REST APIs to real-time systems."
  }
};
