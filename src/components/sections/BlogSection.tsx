import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const blogs = [
  {
    id: 1,
    title: '2025 Tech Preview: 10 Game-Changing Innovations Every Tech Enthusiast Needs to Know',
    description: 'Explore the most exciting technological innovations set to transform 2025, from AI breakthroughs to quantum computing advances.',
    date: 'Jan 2025',
    readTime: '8 min read',
    link: 'https://medium.com/@pratul.exe/2025-tech-preview-10-game-changing-innovations-every-tech-enthusiast-needs-to-know-275ffb7ac814',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights and perspectives on technology, development, and innovation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-modern overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Blog Image */}
                  <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
                  </div>

                  {/* Blog Content */}
                  <div className="md:col-span-3 flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{blog.date}</span>
                        </div>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-gradient transition-all">
                        {blog.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-3">
                        {blog.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button
                        variant="outline"
                        className="group/btn"
                        asChild
                      >
                        <a href={blog.link} target="_blank" rel="noopener noreferrer">
                          Read on Medium
                          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <a href="https://medium.com/@pratul.exe" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 mr-2" />
              View All Articles
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
