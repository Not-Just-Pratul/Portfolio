import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { shouldReduceAnimations } from '@/lib/seo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Memoized animation preferences
  const reduceAnimations = useMemo(() => shouldReduceAnimations(), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#journey', label: 'Journey' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={reduceAnimations ? {} : { y: -100, opacity: 0 }}
      animate={reduceAnimations ? {} : { y: 0, opacity: 1 }}
      transition={reduceAnimations ? { duration: 0 } : { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/90 backdrop-blur-2xl border-b border-border/50 py-3' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-lg md:text-xl font-semibold tracking-tight relative group"
            whileHover={reduceAnimations ? {} : { scale: 1.02 }}
            whileTap={reduceAnimations ? {} : { scale: 0.98 }}
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            <span className="text-gradient">Pratul</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                initial={reduceAnimations ? {} : { opacity: 0, y: -20 }}
                animate={reduceAnimations ? {} : { opacity: 1, y: 0 }}
                transition={reduceAnimations ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA & Social */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <ThemeToggle />
            <motion.a
              href="https://github.com/Not-Just-Pratul"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceAnimations ? {} : { scale: 1.1, y: -2 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/not-just-pratul"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceAnimations ? {} : { scale: 1.1, y: -2 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <Button
              size="sm"
              variant="holographic"
              className="text-xs lg:text-sm"
              asChild
            >
              <a href="mailto:buildwithpratul@gmail.com">
                <Mail className="w-4 h-4 mr-1 lg:mr-2" />
                <span className="hidden sm:inline">Contact</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <button
              className="text-foreground p-2 hover:bg-muted/50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Optimized for performance */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={reduceAnimations ? {} : { opacity: 0, height: 0 }}
            animate={reduceAnimations ? { height: 'auto' } : { opacity: 1, height: 'auto' }}
            exit={reduceAnimations ? { height: 0 } : { opacity: 0, height: 0 }}
            transition={reduceAnimations ? { duration: 0 } : { duration: 0.2 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
                  onClick={(e) => handleMobileLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:buildwithpratul@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
              >
                Contact
              </a>
              <div className="flex gap-4 pt-2 border-t border-border/50 mt-2">
                <a href="https://github.com/Not-Just-Pratul" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/buildwithpratul" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
