import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";
import project9 from "../../assets/project9.png";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "FloraFind",
    description: "Plant identification app using machine learning",
    tags: ["React Native", "TensorFlow", "Camera API"],
    image: project1,
    demoUrl: "https://florafind-ai.vercel.app/",
    githubUrl: "https://florafind-ai.vercel.app/",
  },
  {
    id: 2,
    title: "Event Bridge",
    description: "Event management platform with real-time updates",
    tags: ["React", "Node.js", "WebSocket"],
    image: project2,
    demoUrl: "https://calendar-joy-flow.lovable.app/",
    githubUrl: "https://calendar-joy-flow.lovable.app/",
  },
  {
    id: 3,
    title: "ReelStream_Bot",
    description: "Your AI buddy on Telegram built with N8N",
    tags: ["Telegram", "N8N", "Automation", "APIs"],
    image: project3,
    demoUrl: "https://t.me/ReelStream_Bot",
    githubUrl: "https://t.me/ReelStream_Bot",
  },
  {
    id: 4,
    title: "3D-Periodic-Table",
    description: "A 3D visualisation of the Periodic Table",
    tags: ["Vite", "TypeScript", "Three.js", "Git"],
    image: project4,
    demoUrl: "https://my-3d-periodic-table.vercel.app/",
    githubUrl: "https://3d-periodic-table.vercel.app/",
  },
  {
    id: 5,
    title: "ShopHub",
    description: "A modern full-stack E-Commerce platform",
    tags: ["TypeScript", "Node.js", "Supabase", "Tailwind"],
    image: project5,
    demoUrl: "https://shophub-myproject.vercel.app/",
    githubUrl: "https://shophub-myproject.vercel.app/",
  },
  {
    id: 6,
    title: "AI-x-Terminal",
    description: "An intelligent terminal interface powered by AI",
    tags: ["React", "Node.js", "AI/ML", "Terminal"],
    image: project6,
    demoUrl: "https://github.com/Not-Just-Pratul/AI-x-Terminal",
    githubUrl: "https://github.com/Not-Just-Pratul/AI-x-Terminal",
  },
  {
    id: 7,
    title: "Press Shop Optimiser",
    description: "Optimization system for press shop operations",
    tags: ["React", "Optimization", "Analytics"],
    image: project7,
    demoUrl: "https://press-shop-planner.vercel.app/",
    githubUrl:
      "https://press-shop-planner-git-main-pratuldev.vercel.app/",
  },
  {
    id: 8,
    title: "Monolith – Stone Focus App",
    description:
      "Minimal focus app designed to eliminate distractions",
    tags: ["React", "TypeScript", "Vite", "Shadcn"],
    image: project8,
    demoUrl: "https://monolith-stone-focus.vercel.app/",
    githubUrl: "https://monolith-stone-focus.vercel.app/",
  },
  {
    id: 9,
    title: "AI Prompt Enhancer",
    description: "Create better prompts with AI assistance",
    tags: ["React", "TypeScript", "Vite", "Gen AI"],
    image: project9,
    demoUrl: "https://my-ai-prompt-enhancer.vercel.app/",
    githubUrl: "https://my-ai-prompt-enhancer.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of things I built instead of sleeping
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
              }}
              className="card-modern overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                {/* Hover */}
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <Button size="sm" variant="holographic" asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full glass-modern border border-white/[0.05] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/40 hover:bg-primary/10 hover:border-primary/60"
            asChild
          >
            <a
              href="https://github.com/Not-Just-Pratul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
