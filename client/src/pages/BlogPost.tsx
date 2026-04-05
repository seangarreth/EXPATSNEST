import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";
import { blogPosts, getBlogPost, type BlogSection } from "@/data/blogPosts";
import NotFound from "@/pages/not-found";

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "paragraph":
      return (
        <p key={index} className="text-foreground/80 leading-relaxed text-[17px] mb-6">
          {section.text}
        </p>
      );
    case "heading":
      return (
        <h2 key={index} className="font-display text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 leading-snug">
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 key={index} className="font-display text-xl font-bold text-primary mt-8 mb-3">
          {section.text}
        </h3>
      );
    case "list":
      return (
        <ul key={index} className="mb-6 space-y-2.5 pl-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground/80 text-[17px] leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "numbered-list":
      return (
        <ol key={index} className="mb-6 space-y-2.5 pl-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground/80 text-[17px] leading-relaxed">
              <span className="shrink-0 font-bold text-primary text-sm mt-0.5 w-5 text-right">
                {i + 1}.
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div key={index} className="my-8 p-6 rounded-xl bg-primary/5 border-l-4 border-primary">
          <p className="text-foreground font-medium leading-relaxed text-[17px]">
            {section.text}
          </p>
        </div>
      );
    case "divider":
      return <hr key={index} className="my-10 border-border" />;
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || "");

  useSEO(
    post
      ? {
          title: `${post.ogTitle} | EXPAT'SNEST Blog`,
          description: post.metaDescription,
          canonical: `/blog/${post.slug}`,
          ogTitle: post.ogTitle,
          ogDescription: post.ogDescription,
          ogImage: post.featuredImage,
          ogType: "article",
        }
      : {
          title: "Post Not Found | EXPAT'SNEST Blog",
          description: "This blog post could not be found.",
        }
  );

  if (!post) return <NotFound />;

  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const categoryColors: Record<string, string> = {
    "Expat Guide": "bg-primary/10 text-primary border-primary/20",
    "Living in Nigeria": "bg-secondary/10 text-secondary-foreground border-secondary/20",
    "Visas & Documentation": "bg-blue-50 text-blue-700 border-blue-200",
    "Housing & Lifestyle": "bg-purple-50 text-purple-700 border-purple-200",
    "Culture & Integration": "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className={`mb-4 border text-xs font-semibold ${categoryColors[post.category] || ""}`}>
                {post.category}
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/75">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.dateISO}>{post.date}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Excerpt / Lead */}
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-8 pb-8 border-b border-border">
              {post.excerpt}
            </p>

            {/* Structured Data for Article */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: post.title,
                  description: post.metaDescription,
                  image: post.featuredImage,
                  datePublished: post.dateISO,
                  dateModified: post.dateISO,
                  author: {
                    "@type": "Organization",
                    name: "EXPAT'SNEST",
                    url: "https://expatsnests.com",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "EXPAT'SNEST",
                    url: "https://expatsnests.com",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://expatsnests.com/logo.png",
                    },
                  },
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://expatsnests.com/blog/${post.slug}`,
                  },
                }),
              }}
            />

            {/* Content Sections */}
            <div>{post.content.map((section, i) => renderSection(section, i))}</div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-border">
              <Button asChild variant="outline">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* Share */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  <Share2 className="h-4 w-4 text-primary" />
                  Share This Article
                </h4>
                <div className="space-y-2">
                  {[
                    { label: "Share on LinkedIn", color: "hover:bg-blue-600", href: `https://www.linkedin.com/sharing/share-offsite/?url=https://expatsnests.com/blog/${post.slug}` },
                    { label: "Share on X/Twitter", color: "hover:bg-black", href: `https://twitter.com/intent/tweet?url=https://expatsnests.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}` },
                    { label: "Share on Facebook", color: "hover:bg-blue-700", href: `https://www.facebook.com/sharer/sharer.php?u=https://expatsnests.com/blog/${post.slug}` },
                  ].map(({ label, color, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center text-xs font-medium py-2 px-3 rounded-lg bg-muted text-foreground transition-colors duration-200 ${color} hover:text-white`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-xl bg-primary p-5 text-primary-foreground">
                <h4 className="font-display font-bold text-base mb-2">Ready to Relocate?</h4>
                <p className="text-xs text-primary-foreground/80 leading-relaxed mb-4">
                  Talk to our onboarding specialists about your move to Nigeria.
                </p>
                <Button asChild size="sm" variant="secondary" className="w-full text-primary font-semibold">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* More Posts */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-semibold text-sm text-foreground mb-3">More Articles</h4>
                <div className="space-y-3">
                  {blogPosts
                    .filter(p => p.slug !== post.slug)
                    .slice(0, 3)
                    .map(p => (
                      <Link key={p.slug} href={`/blog/${p.slug}`}>
                        <div className="group flex gap-3 cursor-pointer">
                          <img
                            src={p.featuredImage}
                            alt={p.featuredImageAlt}
                            className="w-14 h-14 rounded-lg object-cover shrink-0"
                          />
                          <p className="text-xs text-foreground group-hover:text-primary transition-colors leading-snug font-medium line-clamp-3">
                            {p.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Prev / Next Navigation */}
        {(prevPost || nextPost) && (
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`}>
                <div className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <ArrowLeft className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Previous Article</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {prevPost.title}
                    </p>
                  </div>
                </div>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`}>
                <div className="group flex items-start justify-end gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer text-right">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Next Article</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {nextPost.title}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ) : <div />}
          </div>
        )}
      </div>
    </div>
  );
}
