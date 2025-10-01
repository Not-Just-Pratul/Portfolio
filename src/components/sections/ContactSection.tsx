import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Web3Forms - free email service without domain verification
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '8628c6d9-27e7-46c6-8af9-c62385e9c88f', // Get free key from https://web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully!', {
          description: "I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'buildwithpratul@gmail.com',
      link: 'mailto:buildwithpratul@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '7627067702',
      link: 'tel:7627067702',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bhiwadi, Rajasthan',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-6xl mb-6">✉️</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's collaborate and bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-modern p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass-modern border-white/[0.05] focus:border-primary/50"
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="glass-modern border-white/[0.05] focus:border-primary/50"
                  maxLength={255}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="glass-modern border-white/[0.05] focus:border-primary/50 min-h-[150px]"
                  maxLength={1000}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="holographic"
                className="w-full"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="card-modern p-8">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-modern border border-white/[0.05] hover:border-primary/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">{method.title}</h4>
                      <p className="text-foreground">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Connect on Telegram */}
            <div className="w-full">
              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <a href="https://t.me/Xenithra" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Connect on Telegram
                </a>
              </Button>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="card-modern p-6 text-center"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="text-sm font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Open to new projects and collaborations.<br />
                Response time: 24-48 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
