import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'FloraFind',
    description: 'Plant identification app using machine learning',
    tags: ['React Native', 'TensorFlow', 'Camera API'],
    image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800&h=600&fit=crop',
    demoUrl: 'https://florafind-tau.vercel.app/',
    githubUrl: 'https://florafind-tau.vercel.app/',
  },
  {
    id: 2,
    title: 'Event Bridge',
    description: 'Event management platform with real-time updates',
    tags: ['React', 'Node.js', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    demoUrl: 'https://calendar-joy-flow.lovable.app/',
    githubUrl: 'https://calendar-joy-flow.lovable.app/',
  },
  {
    id: 3,
    title: 'ReelStream_Bot',
    description: 'Your AI buddy on Telegram built with N8N',
    tags: ['Telegram', 'N8N', 'Automation', 'APIs'],
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop',
    demoUrl: 'https://t.me/ReelStream_Bot',
    githubUrl: 'https://t.me/ReelStream_Bot',
  },
  {
    id: 4,
    title: '3D-Periodic-Table',
    description: 'A 3D visualisation of the Elements of the Periodic Table',
    tags: ['Vite.js', 'TypeScript', 'Three.js', 'Git'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    demoUrl: 'https://3d-periodic-table-sigma.vercel.app/',
    githubUrl: 'https://3d-periodic-table-sigma.vercel.app/',
  },
  {
    id: 5,
    title: 'ShopHub',
    description: 'A functional E-Commerce platform built with modern web tech',
    tags: ['TypeScript', 'Node.js', 'Supabase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    demoUrl: :'https://shophub-myproject.vercel.app/',
    githubUrl: 'https://shophub-myproject.vercel.app/',
  },
  {
    id: 6,
    title: 'AI-x-Terminal',
    description: 'An intelligent terminal interface with AI capabilities',
    tags: ['React', 'Node.js', 'AI/ML', 'Terminal'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop',
    demoUrl: 'https://github.com/Not-Just-Pratul/AI-x-Terminal',
    githubUrl: 'https://github.com/Not-Just-Pratul/AI-x-Terminal',
  },
  {
    id: 7,
    title: 'Press Shop Optimiser',
    description: 'Intelligent optimization system for press shop operations',
    tags: ['React', 'Optimization', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
    demoUrl: 'https://press-shop-planner.vercel.app/',
    githubUrl: 'https://press-shop-planner-git-main-pratuldev.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="card-modern overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <Button
                    size="sm"
                    variant="holographic"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
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

        {/* View More */}
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
            <a href="https://github.com/Not-Just-Pratul" target="_blank" rel="noopener noreferrer">
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
