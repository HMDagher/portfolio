import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hadi Dagher",
  initials: "AD",
  url: "https://hadi.inoutapp.io",
  location: "Lebanon",
  locationLink: "https://www.google.com/maps/place/Lebanon",
  description:
    "Experienced Full Stack Developer specializing in Laravel and the TALL Stack, with a passion for IoT and smart city solutions.",
  summary:
    "With over 3 years of experience designing scalable software solutions, I have developed a range of SaaS and mobile applications for industries including healthcare, real estate, and loyalty programs. I bring a strong backend engineering background and a vision to bridge software with industrial automation.",
  avatarUrl: "/me.jpeg",
  skills: [
    "PHP",
    "Laravel",
    "TALL Stack",
    "JavaScript",
    "Flutter",
    "FlutterFlow",
    "SQL",
    "AWS",
    "Python",
    "C/C++",
    "IoT Protocols (MQTT, CoAP)",
    "SCADA Systems",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abdelhadidagher@gmail.com",
    tel: "+96176753219",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HMDagher/portfolio",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/hmdagher/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/HMDagher",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:abdelhadidagher@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    
    {
      company: "InOut - Loyalty Program",
      href: "https://inoutapp.io/",
      badges: [],
      location: "Lebanon & Qatar",
      title: "Co-Founder & Backend Engineer",
      logoUrl: "/inout.png",
      start: "May 2023",
      end: "Present",
      description:
        "• Co-founded InOut, a startup dedicated to creating innovative loyalty programs, securing investment. • Led comprehensive business development efforts, including market research, UX/UI design, and backend development. • Achieved top 10 placement out of 85 startups at Jusoor’s Incubator SR4, showcasing the potential of our business model",
    },
    
    {
      company: "Ehjoz Chalet - Chalet Booking Platform",
      href: "https://ehjozchalet.com/",
      badges: [],
      location: "Lebanon",
      title: "Full Stake Engineer",
      logoUrl: "/ehjoz.jpeg",
      start: "June 2025",
      end: "July 2025",
      description:
        "• Developed a comprehensive booking system for chalets, overseeing the entire process from database design to deployment • Implemented complex search and availability checker services to enhanceuser experience and operational efficiency. • Integrated a user-friendly design template into the system and used Filamentphp for seamless admin, owner, and customer interactions. • Deployed the application on AWS, utilizing Laravel 12, PHP 8.4, and PostgreSQL to ensure robust performance.",
    },
    {
      company: "Balanced - Medical Center",
      href: "https://balanced.com.au/",
      badges: [],
      location: "Australia",
      title: "Backend Developer",
      logoUrl: "/balanced.png",
      start: "June 2024",
      end: "May 2025",
      description:
        "• Developed and maintained backend for five panels using the TALL stack, enhancing user experience. • Designed and implemented RESTful APIs for seamless integration with a React-based landing page. • Integrated third-party services like Chargebee and AWS SNS, streamlining payment and delivery processes. • Enabled efficient e-commerce flow for patient treatments, resulting in improved operational efficiency.",
    },
    {
      company: "LYT by Dyala",
      href: "https://lytbydyala.com",
      badges: [],
      location: "Lebanon & UAE",
      title: "WordPress Developer",
      logoUrl: "/lyt.png",
      start: "Aug 2023",
      end: "Dec 2023",
      description:
        "• Integrated a visually appealing website design that significantly enhanced site speed and responsiveness. • Utilized WordPress CMS to streamline content management tailored to business needs. • Implemented mobile responsiveness optimizations, improving user experience on mobile devices.",
    },
    {
      company: "ZbounApp",
      href: "https://zboun.app",
      badges: [],
      location: "Lebanon & Oman",
      title: "Backend Engineer",
      logoUrl: "/zboun.png",
      start: "May 2022",
      end: "Aug 2023",
      description:
        "• Developed and maintained scalable backend APIs for seamless integration with WhatsApp Business API and AI chatbots. • Implemented microservices architecture and CI/CD pipelines on AWS to enhance application performance. • Strengthened system security and compliance with GDPR by encrypting sensitive data and securing API endpoints.",
    },
    {
      company: "OXShare",
      href: "https://oxshare.com/",
      badges: [],
      location: "Lebanon",
      title: "Mobile Developer",
      logoUrl: "/oxshare.jpg",
      start: "Dec 2021",
      end: "Mar 2022",
      description:
        "• Developed an intuitive user interface in Flutter using FlutterFlow, enhancing user engagement through advanced animations. • Implemented multilingual support, significantly increasing accessibility for a global trading audience utilizing MetaTrader 5 (MT5). • Collaborated with cross-functional teams to ensure seamless integration of design and functionality, improving overall user experience.",
    },
  ],
  education: [
    {
      school: "International University of Beirut (LIU)",
      href: "https://liu.edu.lb",
      degree: "B.E. Computer Communication Engineering",
      logoUrl: "/liu.png",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "FORSA III Program - Entrepreneurship in the Digital Economy",
      dates: "March 1st - 30th, 2018",
      location: "Beirut Digital District, Lebanon",
      description:
        "Developed startup planning platform to document all documnts that a startup needs.",
      image: "/nv-logo.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
    type: "Website",
    title: "Website", // <-- Add this line
    href: "https://nvgroup.ltd/",
    icon: <Icons.globe className="size-3" />,
  },
      ],
    },
  ],
} as const;
