"use client";

import { motion } from "framer-motion";
import { Globe, Share2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Dr. Sarah Jenkins",
    specialty: "Chief Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    qualifications: "MD, FACC",
    experience: "15+ Years",
    languages: "English, Spanish"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurology Specialist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    qualifications: "MD, PhD",
    experience: "12+ Years",
    languages: "English, Mandarin"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
    qualifications: "MD, FAAP",
    experience: "10+ Years",
    languages: "English, Portuguese"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    qualifications: "MD, FACS",
    experience: "20+ Years",
    languages: "English, French"
  },
];

export function DoctorsSection() {
  return (
    <section className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span>Our Specialists</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6"
          >
            Meet Our Top Doctors
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70"
          >
            Our team of highly qualified and experienced medical professionals are dedicated to providing you with the best possible care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                
                {/* Social Icons (Hover Reveal) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <Share2 className="w-5 h-5" />
                  </a>
                </div>

                {/* Details */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold font-heading mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-3">{doctor.specialty}</p>
                  
                  {/* Expanded info on hover */}
                  <div className="space-y-1 text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4">
                    <p><strong>Qual:</strong> {doctor.qualifications}</p>
                    <p><strong>Exp:</strong> {doctor.experience}</p>
                    <p><strong>Lang:</strong> {doctor.languages}</p>
                  </div>
                  
                  <Button className="w-full rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-colors">
                    <Calendar className="w-4 h-4 mr-2" /> Book Appointment
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
