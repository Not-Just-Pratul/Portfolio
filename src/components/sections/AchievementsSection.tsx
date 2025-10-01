import { motion } from 'framer-motion';
import { Award, Brain, Zap, Trophy } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Graduated with 8.54/10 GPA in Computer Science Engineering',
    color: 'text-primary'
  },
  {
    icon: Brain,
    title: 'AI Innovation',
    description: 'Pioneered AI-powered plant identification platform with advanced ML integration',
    color: 'text-secondary'
  },
  {
    icon: Zap,
    title: 'Automation Expertise',
    description: 'Developed scalable workflow automation systems using N8N and modern APIs',
    color: 'text-accent'
  },
  {
    icon: Trophy,
    title: 'Professional Certifications',
    description: 'Google Cybersecurity, Canva Web Development, and AI-Powered Shopping Ads certifications',
    color: 'text-primary'
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-6xl mb-6">🏆</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Excellence Driven — Committed to delivering outstanding results through innovation and dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-modern p-8"
            >
              <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6`}>
                <achievement.icon className={`w-7 h-7 ${achievement.color}`} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
