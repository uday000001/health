"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our online portal, by calling our helpline, or by visiting our clinic directly. For immediate confirmation, we recommend using the online booking system available on our website."
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we accept most major health insurance plans. Please bring your insurance card during your visit, and our billing department will help you verify your coverage and benefits."
  },
  {
    question: "What should I bring for my first visit?",
    answer: "For your first visit, please bring a valid photo ID, your insurance card, a list of current medications, and any past medical records or test results that might be relevant to your consultation."
  },
  {
    question: "Are emergency services available 24/7?",
    answer: "Absolutely. Our emergency department is open 24 hours a day, 7 days a week, fully staffed with specialized doctors and nurses to handle any medical emergencies."
  },
  {
    question: "Can I do an online consultation?",
    answer: "Yes, we offer telehealth services for certain types of consultations. You can select 'Online Consultation' when booking your appointment, and our team will provide you with a secure video link."
  }
];

export function FaqSection() {
  return (
    <section className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span>Common Questions</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
              Frequently Asked <br/>
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
              Find answers to the most common questions about our services, appointments, billing, and policies. If you need further assistance, our support team is just a call away.
            </p>
            
            <div className="hidden lg:block w-full max-w-sm">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Medical Support" 
                className="w-full h-auto rounded-3xl shadow-xl object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-border"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border py-2 last:border-0">
                  <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:text-primary transition-colors hover:no-underline [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-base leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
