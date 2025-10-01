import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Lightbulb, Rocket } from 'lucide-react';

const journeySteps = [
  {
    year: '2023',
    title: 'Oasis Infobyte Intern',
    description: 'Web Developer and Designer, built multiple interactive applications',
    icon: Briefcase,
    color: 'from-primary to-secondary'
  },
  {
    year: '2023-2024',
    title: 'AI & Automation Focus',
    description: 'Specialized in AI integration, workflow automation, and modern web technologies',
    icon: Lightbulb,
    color: 'from-secondary to-accent'
  },
  {
    year: '2025',
    title: 'Graduated DBUU',
    description: 'Bachelor of Technology in Computer Science with 8.54 GPA',
    icon: GraduationCap,
    color: 'from-accent to-primary'
  },
  {
    year: '2025',
    title: 'Mangla Cor-Tubi Private Limited',
    description: 'IT Specialist / Automation – supported enterprise automation projects',
    icon: Rocket,
    color: 'from-primary to-accent'
  }
];

const JourneySection = () => {
  return (
    <section id="journey" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            The <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of growth, learning, and professional milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-20"></div>

          {/* Journey Steps */}
          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-glow-primary`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="card-modern p-6"
                  >
                    <div className={`inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3`}>
                      {step.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
