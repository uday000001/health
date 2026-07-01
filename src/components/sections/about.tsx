"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const timeline = [
  { year: "2000", title: "Clinic Founded", description: "Started with a small team of 3 doctors." },
  { year: "2010", title: "Expansion", description: "Opened our specialized cardiology and neurology wings." },
  { year: "2025", title: "Modern Era", description: "Awarded top clinic in the state for patient satisfaction." },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square shadow-2xl">
              <motion.div 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Clinic Facility" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-6 rounded-3xl shadow-xl border border-border max-w-[200px]"
            >
              <div className="text-primary font-heading font-bold text-5xl mb-2">25+</div>
              <p className="text-foreground/70 font-medium text-sm">Years of excellence in healthcare</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pl-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span>About AuraCare</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
              A Legacy of <span className="text-primary">Healing</span> and Care
            </h2>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Since our inception, AuraCare has been dedicated to providing world-class healthcare with a deeply human touch. We believe that true healing begins with compassion, supported by state-of-the-art medical technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-foreground">Advanced Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-foreground">Expert Specialists</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-foreground">24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-foreground">Patient-First Approach</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6 border-l-2 border-primary/20 pl-6 ml-3 mb-10 relative">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white" />
                  <h4 className="text-xl font-bold text-foreground font-heading">{item.year} - {item.title}</h4>
                  <p className="text-foreground/60 mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-lg group">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
