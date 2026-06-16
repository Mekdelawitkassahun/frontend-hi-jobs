export const SEARCH_QUERY = "John";

export type WorkType = "Remote" | "Hybrid" | "On-site";
export type JobType = "Freelance" | "Full-time" | "Contract";

export type Profile = {
  id: string;
  name: string;
  title: string;
  experience: string;
  location: string;
  workType: WorkType;
  jobType: JobType;
  email: string;
  initials: string;
  avatarColor: string;
  photo?: string;
  featured?: boolean;
};

export const johnUser = {
  name: "John",
  initials: "JO",
  avatarColor: "#2688FA",
};

export const sidebarNav = [
  { id: "john",          label: "John",               type: "user" as const },
  { id: "author",        label: "Autor",               type: "link" as const },
  { id: "feed",          label: "Feed",                type: "link" as const, active: true },
  { id: "profile",       label: "My Profile",          type: "link" as const },
  { id: "analytics",     label: "Analytics",           type: "link" as const },
  { id: "notifications", label: "Notifications",       type: "link" as const },
] as const;

export const profiles: Profile[] = [
  {
    id: "thomas",
    name: "Thomas Arwinkle",
    title: "Experienced Architecture",
    experience: "5+ years experience",
    location: "Liechtenstein, Yekaterinburg",
    workType: "Remote",
    jobType: "Freelance",
    email: "************@gmail.com",
    initials: "TA",
    avatarColor: "#2688FA",
    photo: "/thomas.png",
    featured: true,
  },
];

export type TalentPromo = {
  id: string;
  name: string;
  role: string;
  tags: string[];
  photo: string;
};

export const talentPromotions: TalentPromo[] = [
  {
    id: "gustavo",
    name: "Gustavo C.",
    role: "Visual & Graphic Designer | Campaign...",
    tags: ["Graphic Design Principles", "Adobe Photoshop", "Adobe Illustrator", "Visual Design", "+5"],
    photo: "/talent-gustavo.png",
  },
  {
    id: "allyson",
    name: "Allyson G.",
    role: "Graphic Designer",
    tags: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva", "+6"],
    photo: "/talent-allyson.png",
  },
];

export const mobileNavItems = [
  { id: "feed",         label: "Feed",         icon: "feed"         as const, active: true },
  { id: "analytics",    label: "Analytics",    icon: "analytics"    as const },
  { id: "notification", label: "Notification", icon: "notification" as const },
  { id: "profile",      label: "Profile",      icon: "profile"      as const },
] as const;
