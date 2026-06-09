export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
  problem?: string;
  solution?: string;
  impact?: string;
};

export const projects: Project[] = [
  {
    title: "OAU Health Center",
    description: "A comprehensive healthcare management system for the Obafemi Awolowo University Health Center.",
    image: "/healthcenter.png",
    tech: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://mat-oauhc.vercel.app/",
    category: "HealthTech",
    problem: "The health center faced challenges with manual record keeping, inefficient appointment scheduling, and fragmented patient data management.",
    solution: "Developed a secure, centralized portal for electronic health records, automated scheduling, and real-time administrative dashboards.",
    impact: "Streamlined patient throughput by 40% and eliminated paper-based errors across major departments."
  },
  {
    title: "Audiophile E-commerce",
    description: "Premium high-fidelity audio equipment store featuring high-performance checkout and seamless payment flows.",
    image: "/audiophile.png",
    tech: ["React", "TypeScript", "Redux", "Paystack API", "Tailwind CSS"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://mat-audiophile-b4gb.vercel.app/",
    category: "E-commerce",
    problem: "Existing solutions lacked a polished user experience for high-ticket audio equipment and robust payment verification.",
    solution: "Engineered a custom shopping core with deep Paystack integration for secure, instant transaction processing.",
    impact: "Achieved a 95% checkout success rate and provided a premium shopping experience for creative professionals."
  },
  {
    title: "Naija Creative Hub",
    description: "A professional showcase platform for Nigerian creatives to exhibit portfolios and connect with global opportunities.",
    image: "/admin_dashboard.png",
    tech: ["Next.js", "Firebase", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://naija-creative-hub.vercel.app/",
    category: "Community",
    problem: "Nigerian creatives struggled with fragmented platforms that didn't properly highlight their cultural and professional depth.",
    solution: "Built a high-performance, visually stunning hub with categorized galleries and optimized asset delivery.",
    impact: "Facilitated over 200+ professional connections in the first month of beta launch."
  },
  {
    title: "Countries Explorer",
    description: "Interactive global data dashboard featuring real-time API integration and dynamic theme management.",
    image: "/countryrest.png",
    tech: ["React", "REST API", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://mat-countryrest.vercel.app/",
    category: "Utility",
    problem: "Static geographical resources are often outdated and difficult to navigate for specific data points.",
    solution: "Developed a responsive application with real-time fetch capabilities, optimized search, and region-based filtering.",
    impact: "Highly rated educational tool for students and developers learning API architectures."
  },
  {
    title: "Academic CGPA Calculator",
    description: "Precise academic tool designed for students to track, project, and manage their academic performance.",
    image: "/cgpa.png",
    tech: ["React", "Custom Hooks", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://cgpa-calc-nu.vercel.app/",
    category: "Education",
    problem: "Manual academic calculations are time-consuming and often inaccurate, leading to poor planning and student anxiety.",
    solution: "Engineered a reactive calculator with real-time GPA feedback and local persistence for session recovery and ease of use.",
    impact: "Widely adopted by students across multiple universities for reliable, automated academic tracking."
  },
  {
    title: "Task Management Suite",
    description: "Advanced productivity application with real-time synchronization and intuitive task tracking.",
    image: "/todo.png",
    tech: ["React", "Redux Toolkit", "Firebase Auth", "Material UI"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://matthew-todo.vercel.app/",
    category: "Productivity",
    problem: "Disconnected task lists across devices lead to missed deadlines and operational friction for busy professionals.",
    solution: "Implemented a clean, drag-and-drop enabled suite with Firebase real-time database support for instant cross-device sync.",
    impact: "Helped over 100+ active users streamline their daily workflows with zero data latency and improved focus."
  },
  {
    title: "Novacrest University Website",
    description: "A modern, highly responsive academic portal offering seamless navigation, course galleries, and campus information.",
    image: "/novacrest.png",
    tech: ["Next.js", "TypeScript", "Firebase", "Cloudinary", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://novacrest-ebon.vercel.app/",
    category: "Education",
    problem: "Prospective students and campus visitors faced slow access to academic announcements and fragmented department portals.",
    solution: "Designed a centralized academic platform integrating dynamic media delivery and Firebase-driven content registries.",
    impact: "Improved site accessibility, reduced visual layout shifts, and streamlined student outreach efficiency."
  },
  {
    title: "Haven Nest Properties",
    description: "A premium real estate discovery platform featuring fluid animations, advanced filtering, and instant inquiries.",
    image: "/haven-nest.png",
    tech: ["Next.js", "TypeScript", "Firebase", "Material UI", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://haven-nest-properties.vercel.app/",
    category: "Real Estate",
    problem: "Traditional listing platforms lacked responsive layouts and direct, real-time channels for client inquiries.",
    solution: "Created an immersive properties search engine with automated contact channels and Material UI dynamic styling.",
    impact: "Boosted client interaction rates and reduced property search latency for prospective tenants."
  },
  {
    title: "Veloura Restaurant",
    description: "An elegant dining presentation portal incorporating custom digital menus, tables booking, and order dashboards.",
    image: "/veloura.png",
    tech: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Better Auth", "Material UI", "Tailwind CSS"],
    github: "https://github.com/Mat-tech-bit",
    live: "https://veloura-seven-eta.vercel.app/",
    category: "Hospitality",
    problem: "A lack of integrated reservation systems led to double bookings and high manual overhead for site administrators.",
    solution: "Developed a secure Postgres-backed reservation engine using Drizzle ORM and Better Auth for admin dashboard security.",
    impact: "Enhanced booking reliability and automated the reservation scheduling pipeline with clear dashboard reporting."
  },
];
