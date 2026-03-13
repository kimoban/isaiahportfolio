export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  image?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const ownerName = "Isaiah Kimoban N-yilyal";

export const bio = `I'm a full-stack developer passionate about crafting clean, responsive, engaging user interfaces and building clean database and server logic. I'm seeking junior roles, freelance gigs, and opportunities to contribute, grow, and build alongside passionate teams. Let's connect if you're looking for someone eager to turn vision into code—and bring great ideas to life.`;

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React Native", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["Python", "Django REST Framework", "Node.js", "GraphQL", "SQL", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools & Deployment",
    skills: ["Git", "GitHub", "Docker", "Kubernetes", "Render", "Vercel", "Netlify"],
  },
  {
    category: "Cybersecurity",
    skills: ["Network Security", "Penetration Testing", "SIEM", "Firewalls", "Encryption", "OWASP", "Incident Response"],
  },
];

export interface Service {
  title: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  readTime: string;
  published: string;
  href: string;
}

export const services: Service[] = [
  {
    title: "Mobile & Web Applications",
    description: "End-to-end development of responsive web apps and cross-platform mobile solutions using modern frameworks like React, Next.js, and React Native.",
  },
  {
    title: "API & Database Management Systems",
    description: "Design and integration of RESTful and GraphQL APIs, with robust relational database architecture using PostgreSQL and MySQL.",
  },
  {
    title: "Cloud Solutions & Migrations",
    description: "Seamless cloud infrastructure setup, containerization with Docker and Kubernetes, and migration strategies for scalable deployments.",
  },
  {
    title: "Cybersecurity Services",
    description: "Vulnerability assessments, penetration testing, security audits, and implementation of best practices to protect digital assets.",
  },
];

export const projects: Project[] = [
  {
    id: "airbnb-clone",
    title: "Airbnb Clone Backend",
    description:
      "A full-featured backend system replicating core Airbnb functionality including user authentication, property listings, bookings, reviews, and payment integration.",
    tech: ["Python", "Django REST Framework", "PostgreSQL", "Docker"],
    github: "https://github.com/kimoban",
    featured: true,
    image: "/images/airbnb-clone.jpg",
  },
  {
    id: "messaging-api",
    title: "Messaging API",
    description:
      "Real-time messaging API built with Django REST Framework featuring WebSocket support, message threading, read receipts, and user presence indicators.",
    tech: ["Django REST Framework", "PostgreSQL", "WebSockets", "Redis"],
    github: "https://github.com/kimoban",
    featured: true,
    image: "/images/messaging-api.jpg",
  },
  {
    id: "property-listing",
    title: "Next.js Property Listing",
    description:
      "A modern property listing application with advanced search, filtering, map integration, and responsive image galleries built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/kimoban",
    featured: true,
    image: "/images/property-listing.jpg",
  },
  {
    id: "lumiere-restaurant",
    title: "Lumière Restaurant Landing Page",
    description:
      "An elegant restaurant landing page featuring coastal dining aesthetics, reservation system, and responsive design built with modern web technologies.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/kimoban/Lumi-re_Restaurant_Landing_Page",
    demo: "https://lumiere-landing.vercel.app/",
    featured: true,
    image: "/images/lumiere-restaurant.jpg",
  },
];

export const articles: Article[] = [
  {
    id: "api-security-playbook",
    title: "API Security Playbook for Early-Stage Products",
    summary:
      "A practical breakdown of how to harden authentication flows, protect sensitive routes, and reduce common OWASP API risks without slowing down product delivery.",
    tags: ["API Security", "OWASP", "Backend"],
    readTime: "6 min read",
    published: "March 2026",
    href: "https://medium.com/@kimoban",
  },
  {
    id: "fullstack-observability",
    title: "Building Full-Stack Observability Into Modern Web Apps",
    summary:
      "How to instrument frontend and backend systems so performance issues, failed requests, and suspicious behavior are visible before they become user-facing incidents.",
    tags: ["Observability", "React", "Cybersecurity"],
    readTime: "5 min read",
    published: "March 2026",
    href: "https://medium.com/@kimoban",
  },
];

export const experience = [
  "Building RESTful APIs and backend systems with Django and Node.js",
  "Designing relational database schemas with PostgreSQL and MySQL",
  "Creating responsive, accessible frontends with React, Next.js, and Tailwind CSS",
  "Containerizing applications with Docker and orchestrating with Kubernetes",
  "Implementing CI/CD pipelines and deploying to Vercel, Render, and Netlify",
  "Practicing test-driven development and writing clean, maintainable code",
];

export const socialLinks = {
  github: "https://github.com/kimoban",
  linkedin: "https://www.linkedin.com/in/kimoban/",
  email: "isaiahkimoban87@gmail.com",
  x: "https://x.com/kimobaan",
  medium: "https://medium.com/@kimoban",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
};
