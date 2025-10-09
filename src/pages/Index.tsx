import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import BlogSection from '../components/sections/BlogSection';
import JourneySection from '../components/sections/JourneySection';
import AchievementsSection from '../components/sections/AchievementsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import AdvancedScene3D from '@/components/3d/AdvancedScene3D';
import { AboutShapes, ProjectsShapes } from '@/components/3d/SectionBackground3D';

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />

        <section id="about" className="relative">
          <AdvancedScene3D opacity={0.25}>
            <AboutShapes />
          </AdvancedScene3D>
          <AboutSection />
        </section>

        <section id="skills" className="relative">
          <AdvancedScene3D opacity={0.25}>
            <ProjectsShapes />
          </AdvancedScene3D>
          <SkillsSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="projects" className="relative">
           <AdvancedScene3D opacity={0.25}>
            <ProjectsShapes />
          </AdvancedScene3D>
          <ProjectsSection />
        </section>

        <section id="blog">
          <BlogSection />
        </section>
        
        <section id="journey" className="relative">
          <AdvancedScene3D opacity={0.25}>
            <AboutShapes />
          </AdvancedScene3D>
          <JourneySection />
        </section>

        <section id="achievements">
          <AchievementsSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="contact" className="relative">
           <AdvancedScene3D opacity={0.25}>
            <ProjectsShapes />
          </AdvancedScene3D>
          <ContactSection />
        </section>
      </main>

      {/* Scroll to top button */}
      <ScrollToTopButton />

      {/* Minimal Footer */}
      <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-foreground/60 mb-2 text-sm font-light">
                © 2025 Pratul Sharma. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Crafted with precision • React & TypeScript
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Not-Just-Pratul"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/pratul-s-bizjourney"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/not.just.pratul"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://medium.com/@pratul.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
