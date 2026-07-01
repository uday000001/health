"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar, CheckCircle2, HeartPulse, Activity } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <HeartPulse className="w-4 h-4" />
              <span>Your Health, Our Priority</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
            >
              Compassionate Healthcare For <span className="text-primary">Every Family</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl"
            >
              Experience world-class medical care with our team of expert doctors. 
              We combine advanced technology with a human-centered approach to ensure your well-being.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <Calendar className="mr-2 w-5 h-5" /> Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-primary text-primary hover:bg-primary/5 transition-all">
                <PhoneCall className="mr-2 w-5 h-5" /> Call Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content / Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg xl:max-w-xl mx-auto lg:mx-0"
          >
            {/* Main Image Mask */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                alt="Professional Doctor" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -right-4 md:-right-12 top-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 z-10"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl text-foreground leading-none mb-1">25+</p>
                <p className="text-xs text-foreground/60 font-medium">Years Experience</p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -left-4 md:-left-12 bottom-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 z-10"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl text-foreground leading-none mb-1">5000+</p>
                <p className="text-xs text-foreground/60 font-medium">Happy Patients</p>
              </div>
            </motion.div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
