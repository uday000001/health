import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Globe, Share2, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                +
              </div>
              <span className="font-heading font-bold text-xl text-foreground tracking-tight">
                Aura<span className="text-primary">Care</span>
              </span>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Providing world-class, premium medical services with a compassionate approach to every family.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary hover:bg-primary hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary hover:bg-primary hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary hover:bg-primary hover:text-white transition-colors">
                <Rss className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Doctors", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-foreground/70 text-sm hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary/50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Departments</h3>
            <ul className="space-y-3">
              {["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Gynecology"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-foreground/70 text-sm hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary/50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Medical Drive, Health City<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@auracare.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="shrink-0">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} AuraCare Clinic. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-sm text-foreground/60 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-foreground/60 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
