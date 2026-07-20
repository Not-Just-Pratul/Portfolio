import { j as jsxRuntimeExports } from "./vendor-three-S87cgOLp.js";
import { B as Button, G as Github } from "./index-BKfyU-Nz.js";
import { m as motion } from "./vendor-animation-B5fVPTGx.js";
import { E as ExternalLink } from "./external-link-CvBiZDIi.js";
import "./vendor-ui-BEL27KUT.js";
const project1 = "/assets/project1-Bk5YnNfv.png";
const project2 = "/assets/project2-Bb6Tzd-7.png";
const project3 = "/assets/project3-wpEOFqZ2.png";
const project4 = "/assets/project4-By3OqSH-.png";
const project5 = "/assets/project5-x-oqs25m.png";
const project6 = "/assets/project6-Dm0X3pff.png";
const project7 = "/assets/project7-D6y1_tiD.png";
const project8 = "/assets/project8-Cf7WntEu.png";
const project9 = "/assets/project9-DWh0_K8t.png";
const projects = [
  {
    id: 1,
    title: "FloraFind",
    description: "Plant identification app using machine learning",
    tags: ["React Native", "TensorFlow", "Camera API"],
    image: project1,
    demoUrl: "https://florafind-ai.vercel.app/",
    githubUrl: "https://florafind-ai.vercel.app/"
  },
  {
    id: 2,
    title: "Event Bridge",
    description: "Event management platform with real-time updates",
    tags: ["React", "Node.js", "WebSocket"],
    image: project2,
    demoUrl: "https://calendar-joy-flow.lovable.app/",
    githubUrl: "https://calendar-joy-flow.lovable.app/"
  },
  {
    id: 3,
    title: "ReelStream_Bot",
    description: "Your AI buddy on Telegram built with N8N",
    tags: ["Telegram", "N8N", "Automation", "APIs"],
    image: project3,
    demoUrl: "https://t.me/ReelStream_Bot",
    githubUrl: "https://t.me/ReelStream_Bot"
  },
  {
    id: 4,
    title: "3D-Periodic-Table",
    description: "A 3D visualisation of the Periodic Table",
    tags: ["Vite", "TypeScript", "Three.js", "Git"],
    image: project4,
    demoUrl: "https://my-3d-periodic-table.vercel.app/",
    githubUrl: "https://3d-periodic-table.vercel.app/"
  },
  {
    id: 5,
    title: "ShopHub",
    description: "A modern full-stack E-Commerce platform",
    tags: ["TypeScript", "Node.js", "Supabase", "Tailwind"],
    image: project5,
    demoUrl: "https://shophub-myproject.vercel.app/",
    githubUrl: "https://shophub-myproject.vercel.app/"
  },
  {
    id: 6,
    title: "AI-x-Terminal",
    description: "An intelligent terminal interface powered by AI",
    tags: ["React", "Node.js", "AI/ML", "Terminal"],
    image: project6,
    demoUrl: "https://github.com/Not-Just-Pratul/AI-x-Terminal",
    githubUrl: "https://github.com/Not-Just-Pratul/AI-x-Terminal"
  },
  {
    id: 7,
    title: "Press Shop Optimiser",
    description: "Optimization system for press shop operations",
    tags: ["React", "Optimization", "Analytics"],
    image: project7,
    demoUrl: "https://press-shop-planner.vercel.app/",
    githubUrl: "https://press-shop-planner-git-main-pratuldev.vercel.app/"
  },
  {
    id: 8,
    title: "Monolith – Stone Focus App",
    description: "Minimal focus app designed to eliminate distractions",
    tags: ["React", "TypeScript", "Vite", "Shadcn"],
    image: project8,
    demoUrl: "https://monolith-stone-focus.vercel.app/",
    githubUrl: "https://monolith-stone-focus.vercel.app/"
  },
  {
    id: 9,
    title: "AI Prompt Enhancer",
    description: "Create better prompts with AI assistance",
    tags: ["React", "TypeScript", "Vite", "Gen AI"],
    image: project9,
    demoUrl: "https://my-ai-prompt-enhancer.vercel.app/",
    githubUrl: "https://my-ai-prompt-enhancer.vercel.app/"
  }
];
const ProjectsSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative py-32 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "text-center mb-20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6", children: [
            "Featured ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Projects" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "A curated selection of things I built instead of sleeping" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto", children: projects.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
          duration: 0.6,
          delay: index % 3 * 0.1
        },
        className: "card-modern overflow-hidden group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-56 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: project.image,
                alt: project.title,
                loading: "lazy",
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "holographic", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: project.demoUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 mr-1.5" }),
                  "View Project"
                ]
              }
            ) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2 group-hover:text-gradient transition-all", children: project.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: project.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-2.5 py-1 text-xs rounded-full glass-modern border border-white/[0.05] text-muted-foreground",
                children: tag
              },
              tag
            )) })
          ] })
        ]
      },
      project.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.4 },
        className: "text-center mt-16",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "lg",
            variant: "outline",
            className: "border-2 border-primary/40 hover:bg-primary/10 hover:border-primary/60",
            asChild: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://github.com/Not-Just-Pratul",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-5 h-5 mr-2" }),
                  "View All on GitHub"
                ]
              }
            )
          }
        )
      }
    )
  ] }) });
};
export {
  ProjectsSection as default
};
