import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  useSEO({
    title: "Blog | EXPAT'SNEST — Expert Insights on Expat Life in Nigeria",
    description: "Expert articles and guides for expatriates, diplomats, and international professionals relocating to Nigeria. Topics include visas, housing, culture, cost of living, and more.",
    canonical: "/blog",
    ogTitle: "EXPAT'SNEST Blog — Expert Insights on Expatriate Life in Nigeria",
    ogDescription: "Practical guides, tips, and expert insights for diplomats and international professionals navigating life in Nigeria. From visas to neighborhoods to cultural etiquette.",
  });

  const categoryColors: Record<string, string> = {
    "Expat Guide": "bg-primary/10 text-primary border-primary/20",
    "Living in Nigeria": "bg-secondary/10 text-secondary-foreground border-secondary/20",
    "Visas & Documentation": "bg-blue-50 text-blue-700 border-blue-200",
    "Housing & Lifestyle": "bg-purple-50 text-purple-700 border-purple-200",
    "Culture & Integration": "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-primary pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1920"
            alt="Writing and insights"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <BookOpen className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium">Expat Knowledge Hub</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Insights for Life in Nigeria
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-light"
          >
            Expert guides, practical advice, and cultural insights for diplomats,
            international professionals, and global organisations navigating Nigeria.
          </motion.p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
              Featured Article
            </p>
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 cursor-pointer">
                <div className="relative overflow-hidden h-72 lg:h-auto">
                  <img
                    src={blogPosts[0].featuredImage}
                    alt={blogPosts[0].featuredImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <Badge
                    className={`absolute top-4 left-4 border text-xs font-semibold ${categoryColors[blogPosts[0].category] || ""}`}
                  >
                    {blogPosts[0].category}
                  </Badge>
                </div>
                <div className="bg-card p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Remaining Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="group rounded-2xl overflow-hidden border border-border/50 bg-card shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-full flex flex-col">
                    <div className="relative overflow-hidden h-52">
                      <img
                        src={post.featuredImage}
                        alt={post.featuredImageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <Badge
                        className={`absolute top-3 left-3 border text-xs font-semibold ${categoryColors[post.category] || ""}`}
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug flex-1">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 text-primary font-semibold text-sm mt-auto group-hover:gap-2.5 transition-all duration-300">
                        Read Article <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary/5 border-t border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Nigeria Journey?
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our team of onboarding specialists is available to answer your questions
            and design a personalised relocation experience for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
