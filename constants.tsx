import React from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Workflow, 
  Bot, 
  Terminal, 
  Cpu, 
  Server, 
  Globe,
  Github,
  Instagram,
  Mail,
  Linkedin
} from 'lucide-react';
import { Project, SkillCategory, Service, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:ansarkairzhan1@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    label: "ansarkairzhan1@gmail.com"
  },
  {
    platform: "GitHub",
    url: "https://github.com/kawemv1",
    icon: <Github className="w-5 h-5" />,
    label: "@kawemv1"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/kawemv1",
    icon: <Instagram className="w-5 h-5" />,
    label: "@kawemv1"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python (Expert)", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
    icon: <Code2 className="w-6 h-6 text-primary-light" />
  },
  {
    category: "AI/ML & Data Science",
    skills: ["Machine Learning", "PyTorch (Learning)", "TensorFlow", "YOLO", "Scikit-learn", "Pandas & NumPy"],
    icon: <Cpu className="w-6 h-6 text-primary-light" />
  },
  {
    category: "Backend & APIs",
    skills: ["FastAPI", "Flask", "RESTful APIs", "Webhooks", "PostgreSQL", "Supabase", "Auth & Security"],
    icon: <Server className="w-6 h-6 text-primary-light" />
  },
  {
    category: "Frontend",
    skills: ["React", "Streamlit", "Tailwind CSS", "Responsive Design"],
    icon: <Layout className="w-6 h-6 text-primary-light" />
  },
  {
    category: "Automation & Tools",
    skills: ["n8n (Expert)", "Docker", "Git/GitHub", "Linux/VPS", "CI/CD", "Nginx"],
    icon: <Workflow className="w-6 h-6 text-primary-light" />
  },
  {
    category: "Bot Development",
    skills: ["Aiogram (Telegram)", "Evolution API (WhatsApp)", "LangGraph", "Multi-platform Chatbots"],
    icon: <Bot className="w-6 h-6 text-primary-light" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Kazakhstan Apartment Price Predictor",
    tech: ["Python", "CatBoost", "Pandas", "ML"],
    description: "CatBoost regression model that predicts Kazakhstan apartment prices (₸) from city, district, area, rooms, and floor metadata. Trained on ~700 listings with robust feature handling and evaluation.",
    github: "https://github.com/kawemv1/kz-house-prices-ml",
    highlights: [
      "Explains ~86% price variance (R² 0.859)",
      "Feature engineering for city/microdistrict + floor/area signals",
      "Trains CatBoostRegressor and serves notebook-ready predictions"
    ]
  },
  {
    id: 2,
    title: "InvestInKids - Educational Platform",
    tech: ["React", "TypeScript", "FastAPI", "Supabase", "Aiogram"],
    description: "Full-stack educational website with integrated feedback system and Telegram bot for parent-teacher communication.",
    link: "http://34.116.240.105:3333",
    github: "https://github.com/kawemv1/iik-site",
    highlights: ["Multi-language support", "Booking system", "AI chat assistant (n8n + Gemini)"]
  },
  { 
    id: 3,
    title: "InvestInKids Telegram Feedback Bot",
    tech: ["Python", "Aiogram", "PostgreSQL", "Supabase"],
    description: "Automated feedback collection bot with database integration.",
    github: "https://github.com/kawemv1/investinkids-telegram-bot",
    highlights: ["User authentication", "Data storage", "Admin notifications"]
  },
  {
    id: 4,
    title: "WhatsApp AI Business Automation",
    tech: ["Python", "Evolution API", "LangGraph", "n8n"],
    description: "AI-powered WhatsApp bot for business process automation with intelligent conversation flows.",
    status: "In Development",
    highlights: ["Multi-language support", "Context-aware responses", "Workflow automation"]
  },
  {
    id: 5,
    title: "n8n Workflow Automation Suite",
    tech: ["n8n", "Webhooks", "REST APIs"],
    description: "Collection of automated workflows for business processes including data synchronization and notifications.",
    highlights: ["API integrations", "Webhook management", "Error handling"]
  },
  {
    id: 6,
    title: "GeoLearn - Geography Platform",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Interactive geography learning platform for students.",
    link: "#",
    github: "https://github.com/kawemv1/geolearn",
    highlights: ["Interactive maps", "Quiz system", "Responsive UI"]
  },
  {
    id: 7,
    title: "Face Recognition System",
    tech: ["Python", "OpenCV", "Deep Learning"],
    description: "Real-time face detection and recognition system.",
    github: "https://github.com/kawemv1/face-recognition",
    highlights: ["Real-time processing", "Identity matching", "Security application"]
  },
  {
    id: 8,
    title: "Cargo Tracking System",
    tech: ["Python", "SQL", "Database"],
    description: "Logistics tracking application for shipment management.",
    github: "https://github.com/kawemv1/cargo-tracking",
    highlights: ["Status tracking", "Database design", "Reporting"]
  },
  {
    id: 9,
    title: "Streamlit Data Applications",
    tech: ["Streamlit", "Python", "Viz"],
    description: "Various data analysis and visualization dashboards.",
    github: "https://github.com/kawemv1/streamlit-basic",
    highlights: ["Interactive dashboards", "Data processing", "Rapid prototyping"]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Bot Development",
    icon: <Bot className="w-8 h-8 text-primary-light" />,
    items: ["Telegram bots with Aiogram", "WhatsApp business automation", "AI-powered conversational agents"]
  },
  {
    title: "AI/ML Solutions",
    icon: <Cpu className="w-8 h-8 text-primary-light" />,
    items: ["Custom ML model development", "Data analysis & predictions", "Computer vision applications"]
  },
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8 text-primary-light" />,
    items: ["Full-stack web applications", "React/TypeScript frontends", "FastAPI backends"]
  },
  {
    title: "Business Automation",
    icon: <Workflow className="w-8 h-8 text-primary-light" />,
    items: ["n8n workflow automation", "API & webhook integration", "Process optimization"]
  }
];
