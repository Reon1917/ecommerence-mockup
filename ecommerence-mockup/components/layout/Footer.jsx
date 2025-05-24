import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Heart, Mail, Phone, MapPin, Code, Monitor } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { href: "/models", label: "All Models" },
      { href: "/models/helio", label: "Helio" },
      { href: "/models/helio-pro", label: "Helio Pro" },
      { href: "/models/helio-kids", label: "Helio Kids" },
    ],
    support: [
      { href: "/support", label: "Help Center" },
      { href: "/warranty", label: "Warranty" },
      { href: "/shipping", label: "Shipping" },
      { href: "/returns", label: "Returns" },
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/press", label: "Press" },
      { href: "/contact", label: "Contact" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
    ],
  };

  return (
    <footer className="bg-charcoal-800 text-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex-shrink-0">
                <Image
                  src="/logo/helio-logo.png"
                  alt="Helio Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">Helio</span>
            </div>
            <p className="text-charcoal-300 mb-6 max-w-sm text-sm sm:text-base leading-relaxed">
              Advanced health tracking technology in a sleek, comfortable ring. 
              Monitor your heart rate, blood pressure, oxygen levels, and more.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-charcoal-200">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-charcoal-700 border-charcoal-600 text-charcoal-50 placeholder-charcoal-400 text-sm flex-1"
                />
                <Button size="sm" className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-800 border-none px-4 py-2">
                  <Mail className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Subscribe</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="order-1 sm:order-none">
            <h3 className="font-semibold mb-3 sm:mb-4 text-charcoal-100 text-sm sm:text-base">Product</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-charcoal-300 hover:text-gold-400 transition-colors duration-200 text-sm block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="order-2 sm:order-none">
            <h3 className="font-semibold mb-3 sm:mb-4 text-charcoal-100 text-sm sm:text-base">Support</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-charcoal-300 hover:text-gold-400 transition-colors duration-200 text-sm block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="order-3 sm:order-none">
            <h3 className="font-semibold mb-3 sm:mb-4 text-charcoal-100 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-charcoal-300 hover:text-gold-400 transition-colors duration-200 text-sm block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="order-4 sm:order-none sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-charcoal-100 text-sm sm:text-base">Contact</h3>
            <div className="space-y-2.5 sm:space-y-3 text-charcoal-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold-500 flex-shrink-0" />
                <span className="text-sm">support@helio.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-500 flex-shrink-0" />
                <span className="text-sm">1-800-HELIO-RING</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold-500 flex-shrink-0" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-charcoal-600" />

        {/* Portfolio Disclaimer Section */}
        <div className="bg-charcoal-700/50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-charcoal-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 text-gold-400">
              <Code className="h-5 w-5 flex-shrink-0" />
              <Monitor className="h-5 w-5 flex-shrink-0" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-charcoal-100 mb-2 text-sm sm:text-base">Portfolio Showcase</h4>
              <p className="text-charcoal-300 text-xs sm:text-sm leading-relaxed">
                This project is a frontend-only e-commerce simulation built to showcase UI/UX and React/Next.js skills. 
                All data and interactions are mockups; no backend or real transactions are implemented.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-charcoal-400">
            {footerLinks.legal.map((link, index) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-gold-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-charcoal-400">
            <span>Made with</span>
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-gold-500" />
            <span>© 2024 Helio. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 