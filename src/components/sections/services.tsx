"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, Heart, Activity, Baby, 
  Microscope, Brain, Ear, Syringe, ArrowRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "General Physician",
    description: "Comprehensive medical care for individuals and families, focusing on prevention and wellness.",
    icon: Stethoscope,
    href: "/services/general-physician",
  },
  {
    title: "Cardiology",
    description: "Expert care for heart and blood vessel conditions using advanced diagnostic tools.",
    icon: Heart,
    href: "/services/cardiology",
  },
  {
    title: "Orthopedics",
    description: "Specialized treatment for bone, joint, and muscle disorders to keep you moving.",
    icon: Activity,
    href: "/services/orthopedics",
  },
  {
    title: "Pediatrics",
    description: "Compassionate healthcare tailored specifically for infants, children, and adolescents.",
    icon: Baby,
    href: "/services/pediatrics",
  },
  {
    title: "Diagnostics",
    description: "State-of-the-art laboratory and imaging services for accurate and timely results.",
    icon: Microscope,
    href: "/services/diagnostics",
  },
  {
    title: "Neurology",
    description: "Advanced neurological care for disorders of the brain, spinal cord, and nervous system.",
    icon: Brain,
    href: "/services/neurology",
  },
  {
    title: "ENT",
    description: "Expert diagnosis and treatment for ear, nose, and throat conditions.",
    icon: Ear,
    href: "/services/ent",
  },
  {
    title: "Vaccination",
    description: "Comprehensive immunization programs for children and adults to prevent diseases.",
    icon: Syringe,
    href: "/services/vaccination",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
          >
            <span>Our Expertise</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6"
          >
            Premium Medical Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70"
          >
            We offer a wide range of specialized healthcare services to meet all your medical needs under one roof.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Link href={service.href} className="group block h-full">
                <div className="bg-white rounded-3xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-border group-hover:border-primary/20 flex flex-col group-hover:-translate-y-2 relative overflow-hidden">
                  
                  {/* Hover glow effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed mb-8 flex-1">{service.description}</p>
                  
                  <div className="mt-auto flex items-center text-primary font-medium text-sm">
                    <span className="relative">
                      Read More
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
