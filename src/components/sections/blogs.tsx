"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    title: "Understanding Heart Health in Your 40s",
    excerpt: "Learn about the crucial steps you need to take to maintain a healthy heart as you enter your 40s.",
    category: "Cardiology",
    date: "Oct 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "The Importance of Regular Child Checkups",
    excerpt: "Why skipping your child's annual physical could mean missing important developmental milestones.",
    category: "Pediatrics",
    date: "Oct 12, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Mental Health: Breaking the Stigma",
    excerpt: "A comprehensive guide to understanding mental health and why seeking professional help is a sign of strength.",
    category: "Psychiatry",
    date: "Oct 08, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=600",
  },
];

export function BlogsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
            >
              <span>Health Insights</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4"
            >
              Latest Medical <span className="text-primary">News & Tips</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/blog" className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors">
              View All Articles <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {blog.category}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 text-xs font-medium text-foreground/50 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-foreground/70 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  Read Full Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
