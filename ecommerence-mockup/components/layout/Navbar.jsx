"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/models", label: "Models" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-charcoal-800/90 backdrop-blur-md border-b border-charcoal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
              <span className="text-charcoal-800 font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-charcoal-50">Helio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-charcoal-200 hover:text-gold-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-charcoal-400 text-charcoal-100 hover:bg-charcoal-700 hover:text-charcoal-50 hover:border-gold-500">
              Learn More
            </Button>
            <Button size="sm" className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 shadow-gold border-none">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-charcoal-100 hover:bg-charcoal-700">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-charcoal-800 border-charcoal-600">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                    <span className="text-charcoal-800 font-bold text-sm">H</span>
                  </div>
                  <span className="text-xl font-bold text-charcoal-50">Helio</span>
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-charcoal-200 hover:text-gold-400 transition-colors duration-200 font-medium text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="flex flex-col space-y-3 pt-6 border-t border-charcoal-600">
                  <Button variant="outline" className="w-full border-charcoal-400 text-charcoal-100 hover:bg-charcoal-700 hover:text-charcoal-50">
                    Learn More
                  </Button>
                  <Button className="w-full bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 border-none">
                    Shop Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 