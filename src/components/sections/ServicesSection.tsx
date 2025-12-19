import { motion } from 'framer-motion';
import { Code2, Brain, Palette } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Full-stack development with modern frameworks, responsive design, and optimal performance.',
    emoji: '💻'
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description:
      'Implementing AI-powered features, automation workflows, and intelligent user experiences.',
    emoji: '🤖'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Creating intuitive interfaces with focus on accessibility, user experience, and visual appeal.',
    emoji: '🎨'
  }
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      aria-label="Professional services offered"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            What I <span className="text-gradient">Do</span>
          </h2>
        </motion.header>

        {/* Services List */}
        <div
          role="list"
          aria-label="List of services"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              role="listitem"
              aria-label={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-modern p-6 sm:p-8 group text-center"
            >
              {/* Emoji (Decorative) */}
              <div
                className="text-5xl sm:text-6xl mb-6"
                aria-hidden="true"
              >
                {service.emoji}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
