import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdelhadi Dagher",
  initials: "AD",
  url: "https://linkedin.com/in/hmdagher/",
  location: "Lebanon",
  locationLink: "https://www.google.com/maps/place/Lebanon",
  description:
    "Experienced Full Stack Developer specializing in Laravel and the TALL Stack, with a passion for IoT and smart city solutions.",
  summary:
    "With over 3 years of experience designing scalable software solutions, I have developed a range of SaaS and mobile applications for industries including healthcare, real estate, and loyalty programs. I bring a strong backend engineering background and a vision to bridge software with industrial automation.",
  avatarUrl: "/me.png",
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
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abdelhadidagher@gmail.com",
    tel: "+96176753219",
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
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
        url: "#",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:abdelhadidagher@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Balanced - Medical Center",
      href: "https://balanced.com.au/",
      badges: [],
      location: "Australia",
      title: "Backend Developer",
      logoUrl: "/balanced.png",
      start: "Jun 2024",
      end: "May 2025",
      description:
        "Developed and maintained backend for multiple user panels using TALL stack. Integrated Chargebee, AWS SNS, and ShipStation for healthcare and e-commerce services.",
    },
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
        "Led backend development for a SaaS platform enabling gamified loyalty programs. Integrated Stripe and Google APIs, and secured funding via Jusoor’s Incubator.",
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
        "Redesigned a high-performance website using WordPress. Enhanced responsiveness and site management without overhauling the CMS.",
    },
    {
      company: "OpenDoor",
      href: "https://opendoorholding.com/",
      badges: [],
      location: "Lebanon & Qatar",
      title: "Full Stack Engineer",
      logoUrl: "/opendoor.png",
      start: "Jan 2023",
      end: "Aug 2023",
      description:
        "Developed a real estate website with robust backend, interactive maps, SEO tools, and analytics integration.",
    },
    {
      company: "ZbounApp",
      href: "https://zboun.app",
      badges: [],
      location: "Lebanon & Oman",
      title: "Backend Engineer",
      logoUrl: "/zboun.png",
      start: "May 2022",
      end: "Jan 2023",
      description:
        "Built scalable backend APIs for WhatsApp marketing with chatbots. Used AWS, microservices, and CI/CD pipelines.",
    },
    {
      company: "OXShare",
      href: "https://oxshare.com/",
      badges: [],
      location: "Lebanon",
      title: "Mobile Developer",
      logoUrl: "/oxshare.png",
      start: "Dec 2021",
      end: "Mar 2022",
      description:
        "Developed a multilingual Flutter mobile app with MetaTrader 5 integration using FlutterFlow.",
    },
  ],
  education: [
    {
      school: "International University of Beirut (LIU)",
      href: "https://liu.edu.lb",
      degree: "B.E. Computer Communication Engineering",
      logoUrl: "/liu.png",
      start: "N/A",
      end: "N/A",
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
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
