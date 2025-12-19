import { motion } from 'framer-motion';
import { Code2, Database, Heart } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    number: '01',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'TypeScript']
  },
  {
    icon: Database,
    title: 'Databases & Tools',
    number: '02',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'VS Code', 'WordPress', 'N8N']
  },
  {
    icon: Heart,
    title: 'Soft Skills',
    number: '03',
    skills: [
      'Empathy',
      'Adaptability',
      'Team Collaboration',
      'Learning Agility',
      'Analytical Thinking',
      'Problem Solving'
    ]
  }
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      aria-label="Technical and professional skills"
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
            id="skills-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.header>

        {/* Skill Categories */}
        <div
          role="list"
          aria-label="Skill categories"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.number}
              role="listitem"
              aria-label={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-modern p-6 sm:p-8 group"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-8">
                <div
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  aria-hidden="true"
                >
                  <category.icon className="w-7 h-7 text-primary" />
                </div>

                <span
                  className="text-5xl font-bold text-primary/20"
                  aria-hidden="true"
                >
                  {category.number}
                </span>
              </div>

              {/* Category Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">
                {category.title}
              </h3>

              {/* Skills List */}
              <ul
                role="list"
                aria-label={`${category.title} skills`}
                className="space-y-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    role="listitem"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + skillIndex * 0.05
                    }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
