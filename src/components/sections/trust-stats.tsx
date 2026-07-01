"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Users, Stethoscope, Smile, Award } from "lucide-react";

const stats = [
  {
    icon: Stethoscope,
    value: 15,
    suffix: "+",
    label: "Expert Doctors",
  },
  {
    icon: Users,
    value: 40,
    suffix: "K+",
    label: "Happy Patients",
  },
  {
    icon: Smile,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
  },
  {
    icon: Award,
    value: 20,
    suffix: "+",
    label: "Years Experience",
  },
];

export function TrustStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Abstract pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center text-white"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                  {isInView ? (
                    <CountUp end={stat.value} duration={2.5} />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
