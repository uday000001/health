"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Robert Fox",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    text: "The doctors at AuraCare are simply amazing. Their attention to detail and compassionate care made my recovery so much smoother than I expected.",
    rating: 5,
  },
  {
    name: "Eleanor Pena",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    text: "I was very anxious about my surgery, but the staff here made me feel completely at ease. The facilities are top-notch and the aftercare was brilliant.",
    rating: 5,
  },
  {
    name: "Jerome Bell",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    text: "Finding a good pediatrician is hard, but Dr. Rodriguez is wonderful with my kids. The clinic environment is also very welcoming and clean.",
    rating: 5,
  },
  {
    name: "Esther Howard",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    text: "Booking an appointment online was so easy. I didn't have to wait when I arrived, and the consultation was thorough. Highly recommended!",
    rating: 4,
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
          >
            <span>Patient Stories</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6"
          >
            What Our Patients Say
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 pl-4"
                >
                  <div className={`p-8 rounded-3xl transition-all duration-500 h-full border flex flex-col ${index === selectedIndex ? 'bg-primary text-white border-primary shadow-xl scale-100' : 'bg-secondary/20 border-border text-foreground scale-95 opacity-70'}`}>
                    
                    <Quote className={`w-12 h-12 mb-6 ${index === selectedIndex ? 'text-white/20' : 'text-primary/20'}`} />
                    
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? (index === selectedIndex ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400') : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <p className={`text-lg mb-8 leading-relaxed flex-1 ${index === selectedIndex ? 'text-white/90' : 'text-foreground/70'}`}>
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-sm"
                      />
                      <div>
                        <h4 className={`font-bold font-heading ${index === selectedIndex ? 'text-white' : 'text-foreground'}`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm ${index === selectedIndex ? 'text-white/70' : 'text-foreground/50'}`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? 'bg-primary w-8' : 'bg-border hover:bg-primary/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
