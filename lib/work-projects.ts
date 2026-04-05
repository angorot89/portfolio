export type CaseStudySection = {
  heroTitle?: string;
  client: string;
  industry: string;
  role: string;
  scope: string;
  overviewItems?: Array<{ label: string; value: string }>;
  heroSubtitle: string;
  heroIntro: string;
  problem: string;
  solution: {
    paragraphs: string[];
    bullets: string[];
  };
  features: string[];
  techStack?: string[];
  techSection?: {
    label: string;
    title: string;
    items: string[];
  };
  results: string[];
  testimonial?: {
    quote: string;
  };
  closingLabel?: string;
  closingNote: string;
};

export type WorkProject = {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  impactLine: string;
  image: string;
  imageMode?: "cover" | "contain";
  caseStudy?: CaseStudySection;
};

export const workProjects: WorkProject[] = [
  {
    id: 1,
    slug: "alburaq",
    title: "Alburaq Group",
    category: "Web Platform / Business / E-commerce",
    year: "2026",
    description:
      "A modern digital platform designed for Alburaq Group, focused on international trade, logistics, and product sourcing between China and global markets.",
    impactLine:
      "Built to simplify global commerce through a clean interface, strong branding, and a seamless user experience.",
    image: "/images/alburaq-case-study.png",
    caseStudy: {
      heroTitle: "Alburaq Group — Trade & Logistics Platform",
      client: "Alburaq Group",
      industry: "International Trade & Logistics",
      role: "Full-Stack Developer & UI/UX Designer",
      scope: "Web Platform Design & Development",
      heroSubtitle:
        "A digital platform built to support international trade, logistics, and product sourcing.",
      heroIntro:
        "Designed and developed a modern platform for Alburaq Group to streamline global commerce between China and international markets.",
      problem:
        "Alburaq Group needed a modern digital presence to support their growing business in international trade and logistics. The existing experience lacked clarity, structure, and a strong user journey. There was a need for a platform that could communicate trust, simplify services, and make it easy for users to explore logistics and sourcing solutions.",
      solution: {
        paragraphs: [
          "I designed and developed a complete digital platform focused on clarity, usability, and strong branding.",
          "The design combines a modern dark aesthetic with strong visual hierarchy and clear calls to action.",
        ],
        bullets: [
          "Clearly present services related to trade and logistics",
          "Provide a structured and intuitive user experience",
          "Strengthen the brand identity through a premium design",
          "Enable users to navigate services easily and efficiently",
        ],
      },
      features: [
        "Clean and modern UI/UX design",
        "Service-focused navigation structure",
        "Logistics and trade information sections",
        "Product sourcing presentation",
        "Responsive design across devices",
        "Strong branding and visual identity",
      ],
      results: [
        "The platform improved the company’s digital presence and created a more professional and trustworthy image.",
        "It allows users to understand services more easily.",
        "It helps visitors navigate the platform without friction.",
        "It supports stronger engagement with the business.",
      ],
      testimonial: {
        quote:
          "The platform exceeded our expectations. It helped us present our services in a clear and professional way.",
      },
      closingNote:
        "This project reflects my approach to combining development, design, and business understanding to create digital experiences that are both functional and impactful.",
    },
  },
  {
    id: 2,
    slug: "moonblock",
    title: "Moonblock",
    category: "Brand Identity / Web Platform / E-commerce",
    year: "2026",
    description:
      "A full digital experience for Moonblock, combining brand identity design with a multilingual e-commerce platform built to deliver a modern and immersive shopping experience.",
    impactLine:
      "From concept to platform — shaping the brand and building the system behind it.",
    image: "/images/moonblock-project.png",
    imageMode: "contain",
    caseStudy: {
      heroTitle: "Moonblock — Brand Identity & E-commerce Platform",
      client: "Moonblock",
      industry: "Fashion / Digital Brand",
      role: "Full-Stack Developer & UI/UX Designer",
      scope: "Brand Identity + Web Platform Development",
      overviewItems: [
        { label: "Brand", value: "Moonblock" },
        { label: "Type", value: "Fashion / Digital Brand" },
        { label: "Role", value: "Full-Stack Developer & UI/UX Designer" },
        { label: "Scope", value: "Brand Identity + Web Platform Development" },
      ],
      heroSubtitle:
        "A complete digital brand and platform built for modern fashion retail.",
      heroIntro:
        "Designed and developed a full digital experience combining brand identity, user experience design, and a multilingual e-commerce system.",
      problem:
        "The project started with the need to create a strong digital identity for a fashion brand while also building a complete online platform.",
      solution: {
        paragraphs: [
          "I designed and developed a full-stack platform using Django, combining backend logic with a modern frontend experience.",
        ],
        bullets: [
          "Create a consistent visual identity",
          "Design an immersive user experience",
          "Build a scalable system for product management and orders",
          "Deliver a clean and minimal brand identity",
          "Support a multilingual interface in English, Arabic, and French",
          "Create a structured product catalog system with a smooth shopping flow",
        ],
      },
      features: [
        "Multilingual platform (EN / AR / FR)",
        "Product catalog with categories and filtering",
        "Session-based cart system",
        "Checkout and order management system",
        "Admin dashboard for managing products and orders",
        "Lookbook and brand storytelling sections",
      ],
      techStack: [
        "Python / Django",
        "HTML / CSS / JavaScript",
        "SQLite",
        "Django Templates",
      ],
      results: [
        "The project resulted in a fully functional e-commerce platform.",
        "It supports multilingual users across the shopping experience.",
        "It allows full product browsing and ordering.",
        "It provides admin control over content and orders.",
        "It delivers a strong brand identity and user experience.",
      ],
      testimonial: {
        quote:
          "This project represents a full-stack approach where both design and development were handled together, ensuring consistency across the entire product.",
      },
      closingLabel: "Project Note",
      closingNote:
        "This project represents a full-stack approach where both design and development were handled together, ensuring consistency across the entire product.",
    },
  },
  {
    id: 3,
    slug: "zust-ai-assistant",
    title: "ZUST AI Assistant",
    category: "AI / Automation / Web System",
    year: "2026",
    description:
      "An AI-powered communication system developed in collaboration with Zhejiang University to automate student notifications, messaging, and support interactions.",
    impactLine:
      "Designed to streamline communication between students and the university at scale.",
    image: "/images/zust-ai-assistant.png",
    imageMode: "contain",
    caseStudy: {
      heroTitle: "ZUST AI Assistant — Student Communication System",
      client: "Zhejiang University of Science and Technology (ZUST)",
      industry: "AI System / Communication Platform",
      role: "Developer / System Designer",
      scope: "AI Agent Development + Communication Automation",
      overviewItems: [
        {
          label: "Client",
          value: "Zhejiang University of Science and Technology (ZUST)",
        },
        { label: "Type", value: "AI System / Communication Platform" },
        { label: "Role", value: "Developer / System Designer" },
        {
          label: "Scope",
          value: "AI Agent Development + Communication Automation",
        },
      ],
      heroSubtitle:
        "An AI-powered system designed to automate communication between students and the university.",
      heroIntro:
        "Developed in collaboration with Zhejiang University, this project focuses on improving how information is delivered and managed across a large student base.",
      problem:
        "Managing communication across a large number of students is complex and inefficient when done manually.",
      solution: {
        paragraphs: [
          "I designed and developed an AI-powered communication system that automates notifications and provides interactive support.",
        ],
        bullets: [
          "Send notifications to all students instantly",
          "Handle common student questions",
          "Reduce manual workload for staff",
          "Ensure important information is not missed",
          "Broadcast messages to large groups of students",
          "Send automated email notifications",
          "Respond to student inquiries",
          "Assist with problem-solving through conversational interaction",
        ],
      },
      features: [
        "Mass messaging system for students",
        "Automated email notification system",
        "AI-based conversational assistant",
        "Real-time communication handling",
        "Scalable system for large user groups",
      ],
      techSection: {
        label: "Tech Approach",
        title: "System Design",
        items: [
          "AI agent logic for handling interactions",
          "Automation workflows for messaging",
          "Integration with communication channels (email / messaging)",
        ],
      },
      results: [
        "The system reduced manual effort for staff.",
        "It delivered information instantly.",
        "It improved student responsiveness.",
        "It ensured better organization of communication flow.",
      ],
      closingNote:
        "This project demonstrates the integration of AI, automation, and system design to solve real-world communication challenges at scale.",
    },
  },
  {
    id: 4,
    slug: "12jib",
    title: "12Jib",
    category: "Mobile / Web App / UX Design",
    year: "2026",
    description:
      "A digital experience built for 12Jib, a fast-growing delivery service in Morocco, focused on improving user experience, accessibility, and service interaction.",
    impactLine:
      "Designed to make local delivery faster, simpler, and more accessible.",
    image: "/images/12jib-platform.jpg",
    imageMode: "contain",
    caseStudy: {
      heroTitle: "12Jib — Food Delivery Platform Experience",
      client: "12Jib",
      industry: "Food Delivery / Local Services",
      role: "UI/UX Designer / Developer",
      scope: "Product Experience + Interface Design",
      heroSubtitle:
        "A digital experience designed to improve how users interact with local delivery services.",
      heroIntro:
        "Worked on enhancing the digital experience for 12Jib, a delivery service in Morocco, focusing on usability, accessibility, and performance.",
      problem:
        "Local delivery platforms often face challenges in usability, clarity, and user flow.",
      solution: {
        paragraphs: [
          "I worked on improving the overall user experience by focusing on structure, clarity, and interaction.",
        ],
        bullets: [
          "Simplify ordering and navigation",
          "Improve accessibility for users",
          "Create a smoother and more intuitive experience",
          "Align the digital experience with the brand identity",
          "Redesign key user flows",
          "Improve interface clarity and layout",
          "Optimize interaction for faster ordering",
          "Create a more modern and consistent design",
        ],
      },
      features: [
        "Improved user interface design",
        "Simplified navigation and ordering flow",
        "Mobile-friendly experience",
        "Clear call-to-actions",
        "Faster interaction and usability improvements",
      ],
      results: [
        "The improvements enhanced user experience.",
        "They reduced friction in ordering.",
        "They created a more intuitive platform.",
        "They strengthened the overall digital presence.",
      ],
      closingNote:
        "This project reflects my ability to improve real-world products by focusing on user experience, interaction design, and practical usability.",
    },
  },
];

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}
