import { HeroSection } from "@/components/sections/hero";
import { TrustStatsSection } from "@/components/sections/trust-stats";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { DoctorsSection } from "@/components/sections/doctors";
import { WhyUsSection } from "@/components/sections/why-us";
import { AppointmentSection } from "@/components/sections/appointment";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { GallerySection } from "@/components/sections/gallery";
import { PartnersSection } from "@/components/sections/partners";
import { BlogsSection } from "@/components/sections/blogs";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustStatsSection />
      <ServicesSection />
      <AboutSection />
      <DoctorsSection />
      <WhyUsSection />
      <AppointmentSection />
      <TestimonialsSection />
      <FaqSection />
      <GallerySection />
      <PartnersSection />
      <BlogsSection />
      <ContactSection />
    </div>
  );
}
