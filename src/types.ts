export interface ProfileInfo {
  name: string;
  titles: string[];
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  profileImage: string;
  github: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  behance: string;
  dribbble: string;
  youtube: string;
  tiktok: string;
  pinterest: string;
  embeddedMap: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: "Design" | "Marketing" | "Development" | "Other";
  percentage: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Graphics Design" | "Website Design" | "Brand Identity" | "Video Editing";
  image: string;
  videoUrl?: string; // YouTube or other
  description: string;
  technologies: string[];
  client: string;
  results: string;
  behanceLink?: string;
  liveLink?: string;
  gallery?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  description: string;
  issuer: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export interface BookingDetails {
  preferredDate: string;
  preferredTime: string;
  service: string;
  budget: string;
  requirements: string;
}
