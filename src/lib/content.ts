import {
  LayoutTemplate,
  Code2,
  ShoppingCart,
  Clapperboard,
  Sparkles,
  Gauge,
  Globe,
  Wrench,
  Store,
  Workflow,
  Search,
  Camera,
  LineChart,
  Cloud,
  Rocket,
  Crown,
  TrendingUp,
  Zap,
  FileCode2,
  Target,
  Eye,
  BadgeCheck,
} from "lucide";

type IconNode = any;
type Item = {
  title: string;
  description: string;
  tag?: string;
  icon?: IconNode;
};

export const CONTENT: {
  services: Item[];
  stack: Item[];
  benefits: Item[];
} = {
  services: [
    {
      title: "Landing Pages & Websites",
      tag: "Growth",
      icon: LayoutTemplate,
      description:
        "High-converting, fast, SEO-ready builds with clean UX and measurable wins.",
    },
    {
      title: "Custom Business Systems",
      tag: "Operations",
      icon: Code2,
      description:
        "Internal tools, dashboards, and workflow systems that automate operations and scale your business.",
    },
    {
      title: "E-commerce Systems",
      tag: "Revenue",
      icon: ShoppingCart,
      description:
        "Checkout flows, integrations, coupons/rebates, product ops, and performance optimization.",
    },
    {
      title: "AI Assistants / Tooling",
      tag: "AI",
      icon: Sparkles,
      description:
        "Practical AI features: business copilots, search/RAG, and automation tools with guardrails.",
    },
    {
      title: "Automation & Integrations",
      tag: "Efficiency",
      icon: Workflow,
      description:
        "Connect systems, eliminate manual work, and build reliable data flows across your stack.",
    },
    {
      title: "Performance & SEO",
      tag: "Speed",
      icon: Gauge,
      description:
        "Core Web Vitals, rendering, metadata, structured content, and audits.",
    },
  ],
  stack: [
    {
      title: "Web Platforms",
      icon: Globe,
      description:
        "Custom websites, landing pages, and WordPress builds designed to convert.",
    },
    {
      title: "Custom Software",
      icon: Wrench,
      description:
        "Tailored tools, dashboards, and integrations built around your workflows.",
    },
    {
      title: "E-Commerce",
      icon: Store,
      description:
        "Product catalogs, checkout flows, and backend systems that scale with demand.",
    },
    {
      title: "Automation & Integrations",
      icon: Workflow,
      description:
        "Reduce manual work with smart workflows, APIs, and system connections.",
    },
    {
      title: "Performance & SEO",
      icon: Search,
      description:
        "Fast load times, clean structure, and search-friendly architecture.",
    },
    {
      title: "Content & Media",
      icon: Camera,
      description:
        "Photography, video, and digital assets built for modern platforms.",
    },
    {
      title: "Analytics & Optimization",
      icon: LineChart,
      description:
        "Track what matters, improve conversion, and refine continuously.",
    },
    {
      title: "Cloud & Hosting",
      icon: Cloud,
      description: "Secure deployments, monitoring, and long-term reliability.",
    },
  ],
  benefits: [
    {
      title: "Ship Faster",
      icon: Rocket,
      description:
        "Clear milestones, quick iterations, and production-first execution.",
    },
    {
      title: "Look Premium",
      icon: Crown,
      description: "Enterprise aesthetic with a distinctive Wizard's edge.",
    },
    {
      title: "Rank Higher",
      icon: TrendingUp,
      description: "SEO + performance improvements that move the needle.",
    },
    {
      title: "Reduce Manual Work",
      icon: Zap,
      description: "Automation that saves hours and avoids repeated errors.",
    },
    {
      title: "Maintainable Code",
      icon: FileCode2,
      description:
        "Readable structure, good hygiene, and handoff-ready delivery.",
    },
    {
      title: "Outcome-driven",
      icon: Target,
      description:
        "We focus on conversion, speed, reliability, and ROI—not just “features.”",
    },
  ],
};

export const HERO_STATS = [
  { k: "Speed", v: "Ship in days/weeks", icon: Zap },
  { k: "Quality", v: "Maintainable systems", icon: BadgeCheck },
  { k: "Visibility", v: "Clear updates + milestones", icon: Eye },
  { k: "Leverage", v: "Automation + content", icon: Rocket },
];
