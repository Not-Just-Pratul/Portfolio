import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Client from Fiverr",
    role: "Software Developer",
    content: "Pratul's work exceeded our expectations. The attention to detail and creative solutions were outstanding.",
    avatar: "SJ"
  },
  {
    name: "Harshvardhan Mangla",
    role: "IT Manager at Mangla Tubes Pvt. Limited",
    content: "Working with Pratul was a game-changer. The final product was both beautiful and highly functional.",
    avatar: "MC"
  },
  {
    name: "Mentors at Oasis Infobyte",
    role: "UI/UX Developer",
    content: "Exceptional design skills combined with technical expertise. Pratul delivered beyond what we imagined.",
    avatar: "ER"
  },
  {
    name: "Joshua",
    role: "Cloud Developer at CloudScale",
    content: "Pratul's ability to translate complex requirements into elegant solutions is truly remarkable.",
    avatar: "DK"
  },
  {
    name: "Client from UpWork",
    role: "Design Director at Creative Co",
    content: "A rare combination of artistic vision and technical prowess. Highly recommended for any project.",
    avatar: "LA"
  },
  {
    name: "Client from Fiverr",
    role: "VP Engineering at DataFlow",
    content: "Professional, efficient, and incredibly talented. Pratul brought our vision to life perfectly.",
    avatar: "JW"
  }
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Client Testimonials
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </motion.div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-hidden select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] card-modern p-8 hover:scale-105 transition-transform duration-300"
          >
            <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
            <p className="text-foreground/90 mb-6 leading-relaxed text-base">
              "{testimonial.content}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
