import { useEffect, Suspense, lazy } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/sections/HeroSection';
import { isMobileDevice, shouldReduceAnimations } from '@/lib/seo';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { BookOpen } from 'lucide-react';

// Lazy load non-critical sections
const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const SkillsSection = lazy(() => import('../components/sections/SkillsSection'));
const ServicesSection = lazy(() => import('../components/sections/ServicesSection'));
const ProjectsSection = lazy(() => import('../components/sections/ProjectsSection'));
const BlogSection = lazy(() => import('../components/sections/BlogSection'));
const JourneySection = lazy(() => import('../components/sections/JourneySection'));
const AchievementsSection = lazy(() => import('../components/sections/AchievementsSection'));
const TestimonialsSection = lazy(() => import('../components/sections/TestimonialsSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));
const ScrollToTopButton = lazy(() => import('../components/ScrollToTopButton'));
const AdvancedScene3D = lazy(() => import('@/components/3d/AdvancedScene3D'));
const AboutShapes = lazy(() => import('@/components/3d/SectionBackground3D').then(m => ({ default: m.AboutShapes })));
const ProjectsShapes = lazy(() => import('@/components/3d/SectionBackground3D').then(m => ({ default: m.ProjectsShapes })));

// Lazy load 3D scenes only if not on mobile
const SectionWithBackground = ({ 
  id, 
  children, 
  showBackground = true 
}: { 
  id?: string; 
  children: React.ReactNode; 
  showBackground?: boolean;
}) => {
  const isMobile = isMobileDevice();
  const shouldLoad3D = showBackground && !isMobile;

  return (
    <section id={id} className="relative">
      {shouldLoad3D && (
        <Suspense fallback={null}>
          <AdvancedScene3D opacity={0.25} decorative>
            <ProjectsShapes />
          </AdvancedScene3D>
        </Suspense>
      )}
      {children}
    </section>
  );
};

// Loading skeleton for sections
const SectionSkeleton = () => (
  <div className="min-h-screen bg-background animate-pulse" />
);

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Disable animations on mobile if preferred
    if (shouldReduceAnimations()) {
      document.documentElement.style.setProperty('--motion-duration', '0ms');
    }
  }, []);

  const isMobile = isMobileDevice();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />

        <SectionWithBackground id="about" showBackground={!isMobile}>
          <Suspense fallback={<SectionSkeleton />}>
            <AboutSection />
          </Suspense>
        </SectionWithBackground>

        <SectionWithBackground id="skills" showBackground={!isMobile}>
          <Suspense fallback={<SectionSkeleton />}>
            <SkillsSection />
          </Suspense>
        </SectionWithBackground>

        <section id="services">
          <Suspense fallback={<SectionSkeleton />}>
            <ServicesSection />
          </Suspense>
        </section>
        
        <SectionWithBackground id="projects" showBackground={!isMobile}>
          <Suspense fallback={<SectionSkeleton />}>
            <ProjectsSection />
          </Suspense>
        </SectionWithBackground>

        <section id="blog">
          <Suspense fallback={<SectionSkeleton />}>
            <BlogSection />
          </Suspense>
        </section>
        
        <SectionWithBackground id="journey" showBackground={!isMobile}>
          <Suspense fallback={<SectionSkeleton />}>
            <JourneySection />
          </Suspense>
        </SectionWithBackground>

        <section id="achievements">
          <Suspense fallback={<SectionSkeleton />}>
            <AchievementsSection />
          </Suspense>
        </section>

        <section id="testimonials">
          <Suspense fallback={<SectionSkeleton />}>
            <TestimonialsSection />
          </Suspense>
        </section>

        <SectionWithBackground id="contact" showBackground={!isMobile}>
          <Suspense fallback={<SectionSkeleton />}>
            <ContactSection />
          </Suspense>
        </SectionWithBackground>
      </main>

      {/* Scroll to top button */}
      <Suspense fallback={null}>
        <ScrollToTopButton />
      </Suspense>

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
                href="https://linkedin.com/in/buildwithpratul"
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
