"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span>Get in Touch</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
              We're Here for You <br/>
              <span className="text-primary">24/7 Support</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-lg">
              Have a question or need emergency assistance? Reach out to us through any of the channels below. We are always ready to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-bold font-heading mb-1">Phone</h4>
                <p className="text-sm text-foreground/60">+1 (555) 123-4567</p>
                <p className="text-sm text-foreground/60">+1 (555) 911-0000 (Emergencies)</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-bold font-heading mb-1">Email</h4>
                <p className="text-sm text-foreground/60">contact@auracare.com</p>
                <p className="text-sm text-foreground/60">support@auracare.com</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold font-heading mb-1">Location</h4>
                <p className="text-sm text-foreground/60">123 Medical Drive, Health City, NY 10001</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-bold font-heading mb-1">Hours</h4>
                <p className="text-sm text-foreground/60">Mon-Sun: 24 Hours Open</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            {/* Simple Map Placeholder - Using a generic iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617544321703!2d-73.98782392358899!3d40.7484404713886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1714488392931!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating WhatsApp Button */}
            <div className="absolute bottom-6 right-6">
              <Button size="lg" className="rounded-full shadow-xl bg-green-500 hover:bg-green-600 text-white h-14 px-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Chat with us
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
