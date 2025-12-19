import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import gsap from 'gsap';
import AdvancedScene3D from '../3d/AdvancedScene3D';
import { HeroShapes } from '../3d/SectionBackground3D';
import { shouldReduceAnimations, isMobileDevice } from '@/lib/seo';
import img from '../../assets/img.png';

const HeroSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['Designer', 'Developer', 'Creator'];
  
  // Memoized performance checks
  const reduceAnimations = useMemo(() => shouldReduceAnimations(), []);
  const isMobile = useMemo(() => isMobileDevice(), []);

  useEffect(() => {
    // Skip animations if user prefers reduced motion
    if (reduceAnimations) {
      return;
    }

    if (titleRef.current && roleRef.current) {
      gsap.from(titleRef.current.children, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.2,
      });

      gsap.from(roleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });
    }
  }, [reduceAnimations]);

  useEffect(() => {
    // Role rotation animation
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Simplified animation for mobile
  const animationConfig = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: reduceAnimations 
      ? { duration: 0 }
      : isMobile 
        ? { duration: 0.4, delay: 0.1 }
        : { duration: 0.8, delay: 0.1 }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      aria-label="Hero section introducing Pratul Sharma"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32"
    >
      {/* Decorative Background */}
      <AdvancedScene3D
        className="absolute inset-0 z-0"
        opacity={0.25}
        decorative
      >
        <HeroShapes />
      </AdvancedScene3D>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            {...animationConfig}
            className="mb-8 flex justify-center"
          >
            <Avatar
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 ring-4 ring-primary/30 shadow-2xl"
              aria-label="Profile photo of Pratul Sharma"
            >
              <AvatarImage
                src={img}
                alt="Pratul Sharma — Web Designer and Developer"
                loading="eager"
                decoding="async"
              />
              <AvatarFallback aria-hidden="true">PS</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Availability Badge */}
          <div className="flex justify-center mb-8 md:mb-12">
            <motion.div
              initial={reduceAnimations ? {} : { opacity: 0, y: -20 }}
              animate={reduceAnimations ? {} : { opacity: 1, y: 0 }}
              transition={reduceAnimations ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-modern border border-white/[0.08]"
              aria-label="Availability status"
            >
              <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>
          </div>

          {/* Main Heading */}
          <header ref={titleRef} className="mb-6 md:mb-8 text-center">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
            >
              <span className="block">Pratul</span>
              <span className="block text-gradient">Sharma</span>
            </h1>
          </header>

          {/* Role Animation */}
          <div
            ref={roleRef}
            className="mb-7 md:mb-12 text-center"
            aria-live="polite"
            aria-label="Professional role"
          >
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-tight h-12 md:h-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  initial={reduceAnimations ? {} : { opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={reduceAnimations ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={reduceAnimations ? {} : { opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={reduceAnimations ? { duration: 0 } : { duration: 0.5 }}
                  className="text-gradient"
                >
                  {roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed px-2">
              Innovative web designer and developer crafting digital solutions that
              enhance engagement and drive measurable results.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={reduceAnimations ? {} : { opacity: 0, y: 70 }}
            animate={reduceAnimations ? {} : { opacity: 1, y: 0 }}
            transition={reduceAnimations ? { duration: 0 } : { duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2"
          >
            <Button size={isMobile ? "default" : "lg"} variant="outline" className={isMobile ? "text-sm" : "text-base"} asChild>
              <a href="#projects" aria-label="View portfolio projects">
                View My Work
                <ArrowDown
                  className={isMobile ? "ml-2 w-4 h-4" : "ml-2 w-5 h-5"}
                  aria-hidden="true"
                />
              </a>
            </Button>

            <Button size={isMobile ? "default" : "lg"} variant="default" className={`group shine ${isMobile ? "text-sm" : "text-base"}`} asChild>
              <a
                href="https://drive.google.com/file/d/1PxDzO4HEtFEZcJYJls0F0U5VxrJbDshT/view"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume PDF"
              >
                <Download className={isMobile ? "mr-2 w-4 h-4" : "mr-2 w-5 h-5"} aria-hidden="true" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator - Hidden on mobile for better performance */}
          {!isMobile && (
            <motion.div
              initial={reduceAnimations ? {} : { opacity: 0 }}
              animate={reduceAnimations ? {} : { opacity: 1 }}
              transition={reduceAnimations ? { duration: 0 } : { duration: 1, delay: 1.8 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
              aria-hidden="true"
            >
              <motion.div
                animate={reduceAnimations ? {} : { y: [0, 12, 0] }}
                transition={reduceAnimations ? { duration: 0 } : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2"
              >
                <div className="w-1 h-2 bg-white/60 rounded-full" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
