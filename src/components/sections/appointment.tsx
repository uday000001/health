"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Loader2, Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  department: z.string().min(1, "Please select a department"),
  doctor: z.string().min(1, "Please select a doctor"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a preferred time"),
  symptoms: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function AppointmentSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="py-24 bg-primary/5 relative" id="book-appointment">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
              Book Your Appointment <br/>
              <span className="text-primary">Online Today</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
              Skip the queue. Schedule your visit with our expert doctors at your convenience. We ensure a seamless and hassle-free booking experience.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Emergency Number</p>
                  <p className="font-bold text-xl">+1 (555) 911-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Working Hours</p>
                  <p className="font-bold text-xl">24/7 Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-border relative overflow-hidden"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-2">Appointment Confirmed!</h3>
                <p className="text-foreground/60">
                  Thank you for booking with AuraCare. We have sent the confirmation details to your email.
                </p>
                <Button 
                  className="mt-8 rounded-full px-8" 
                  onClick={() => setIsSuccess(false)}
                >
                  Book Another
                </Button>
              </motion.div>
            ) : null}

            <h3 className="text-2xl font-bold font-heading mb-6">Fill Details</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <input 
                      {...register("name")}
                      placeholder="Full Name" 
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.name ? 'border-destructive' : 'border-input'} bg-secondary/30 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-destructive ml-1">{errors.name.message}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <input 
                      {...register("phone")}
                      placeholder="Phone Number" 
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-destructive' : 'border-input'} bg-secondary/30 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-destructive ml-1">{errors.phone.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1 md:col-span-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <input 
                      {...register("email")}
                      placeholder="Email Address" 
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? 'border-destructive' : 'border-input'} bg-secondary/30 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-destructive ml-1">{errors.email.message}</p>}
                </div>

                {/* Department */}
                <div className="space-y-1">
                  <select 
                    {...register("department")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.department ? 'border-destructive' : 'border-input'} bg-secondary/30 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none`}
                  >
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                  </select>
                  {errors.department && <p className="text-xs text-destructive ml-1">{errors.department.message}</p>}
                </div>

                {/* Doctor */}
                <div className="space-y-1">
                  <select 
                    {...register("doctor")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.doctor ? 'border-destructive' : 'border-input'} bg-secondary/30 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none`}
                  >
                    <option value="">Select Doctor</option>
                    <option value="sarah">Dr. Sarah Jenkins</option>
                    <option value="michael">Dr. Michael Chen</option>
                    <option value="emily">Dr. Emily Rodriguez</option>
                  </select>
                  {errors.doctor && <p className="text-xs text-destructive ml-1">{errors.doctor.message}</p>}
                </div>

                {/* Date */}
                <div className="space-y-1">
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <input 
                      type="date"
                      {...register("date")}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.date ? 'border-destructive' : 'border-input'} bg-secondary/30 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    />
                  </div>
                  {errors.date && <p className="text-xs text-destructive ml-1">{errors.date.message}</p>}
                </div>

                {/* Time */}
                <div className="space-y-1">
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <input 
                      type="time"
                      {...register("time")}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.time ? 'border-destructive' : 'border-input'} bg-secondary/30 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    />
                  </div>
                  {errors.time && <p className="text-xs text-destructive ml-1">{errors.time.message}</p>}
                </div>

                {/* Symptoms */}
                <div className="space-y-1 md:col-span-2">
                  <div className="relative">
                    <FileText className="absolute left-3 top-4 w-5 h-5 text-foreground/40" />
                    <textarea 
                      {...register("symptoms")}
                      placeholder="Describe your symptoms (Optional)" 
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-secondary/30 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Confirm Appointment"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
