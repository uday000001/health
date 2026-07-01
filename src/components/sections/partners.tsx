"use client";

import { motion } from "framer-motion";

const partners = [
  "Medicare", "Allianz", "Cigna", "Aetna", "BlueCross", "UnitedHealthcare", "Humana", "Kaiser"
];

export function PartnersSection() {
  return (
    <section className="py-12 bg-white border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
        <h3 className="text-sm font-semibold text-foreground/50 tracking-wider uppercase">
          Trusted by major insurance providers
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex whitespace-nowrap items-center py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="mx-8 md:mx-12 text-2xl md:text-3xl font-heading font-bold text-foreground/20 hover:text-primary/60 transition-colors duration-300 select-none"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
