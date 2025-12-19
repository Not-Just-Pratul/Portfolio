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
    company: '' // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.company) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '8c61fd85-47c2-43a4-bbea-9cabd38b781e',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully!', {
          description: "I'll get back to you within 24–48 hours."
        });
        setFormData({ name: '', email: '', message: '', company: '' });
      } else {
        throw new Error(result.message);
      }
    } catch {
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly via email.'
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
      link: 'mailto:buildwithpratul@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7627067702',
      link: 'tel:+917627067702'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bhiwadi, Rajasthan, India',
      link: '#'
    }
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-6xl mb-6" aria-hidden="true">
            ✉️
          </div>
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Let’s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let’s collaborate and build something impactful.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-modern p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              role="form"
              aria-describedby="contact-description"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <p id="contact-description" className="sr-only">
                Contact form to send a message directly to Pratul
              </p>

              {/* Honeypot */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  required
                  maxLength={100}
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  required
                  maxLength={1000}
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                aria-live="polite"
              >
                <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <address className="card-modern p-8 not-italic">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-modern hover:border-primary/30 transition"
                  >
                    <method.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-muted-foreground">{method.title}</p>
                      <p className="text-foreground">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </address>

            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://t.me/Xenithra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
                Connect on Telegram
              </a>
            </Button>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
