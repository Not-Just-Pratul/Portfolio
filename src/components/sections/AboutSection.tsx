import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const AboutSection = () => {
  const quickFacts = [
    '2+ years of web development experience',
    'Specialized in AI integration and automation',
    'Strong focus on user experience and accessibility',
    'Passionate about innovative digital solutions'
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Innovative and detail-oriented web designer and developer with a strong focus on user experience, 
                accessibility, and business growth.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                Adept at creating intuitive, high-impact digital solutions that enhance engagement and drive results. 
                Passionate about blending creativity with strategic problem-solving to deliver seamless web experiences.
              </p>

              {/* Quick Facts */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  {quickFacts.map((fact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{fact}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card-modern p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Education</h3>
                    <p className="text-sm text-muted-foreground">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Dev Bhoomi Uttarakhand University (DBUU)
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      Bachelor of Technology in Computer Science
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">May 2024</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        GPA: 8.54/10
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2+', label: 'Years' },
                  { value: '10+', label: 'Projects' },
                  { value: '5+', label: 'Tech' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="card-modern p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
