"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, Microscope, Laptop, Wallet, 
  PhoneCall, Wind, UserCheck, ShieldCheck 
} from "lucide-react";

const features = [
  { icon: Stethoscope, title: "Experienced Doctors", desc: "Highly qualified professionals with decades of experience." },
  { icon: Microscope, title: "Latest Equipment", desc: "State-of-the-art medical technology and facilities." },
  { icon: Laptop, title: "Online Appointments", desc: "Easy and quick online booking system." },
  { icon: Wallet, title: "Affordable Care", desc: "Transparent pricing without compromising on quality." },
  { icon: PhoneCall, title: "Emergency Support", desc: "24/7 dedicated emergency response team." },
  { icon: Wind, title: "Clean Environment", desc: "Strict hygiene and sanitation protocols." },
  { icon: UserCheck, title: "Patient First", desc: "Compassionate care tailored to your needs." },
  { icon: ShieldCheck, title: "Certified Staff", desc: "Globally recognized and certified medical team." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export function WhyUsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -skew-x-12 translate-x-20 hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span>Why Choose AuraCare</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6"
          >
            Setting the Standard in Healthcare
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border group"
            >
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
