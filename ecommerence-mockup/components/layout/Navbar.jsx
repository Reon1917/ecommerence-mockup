"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/models", label: "Models" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-charcoal-800/90 backdrop-blur-md border-b border-charcoal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo/helio-logo.png"
                alt="Helio Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain drop-shadow-lg"
                priority
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-gold-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-charcoal-50 tracking-tight group-hover:text-gold-400 transition-colors duration-200">
              Helio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-charcoal-200 hover:text-gold-400 transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="sm" className="text-charcoal-100 hover:bg-charcoal-700 hover:text-gold-400 p-2">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[20px] shadow-gold">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
                <span className="sr-only">Shopping cart</span>
              </Button>
            </Link>
            
            {/* Shop Now Button */}
            <Link href="/models">
              <Button size="sm" className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 shadow-gold border-none text-sm lg:text-base px-4 lg:px-6">
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-charcoal-100 hover:bg-charcoal-700 p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-charcoal-800 border-charcoal-600">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/logo/helio-logo.png"
                      alt="Helio Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold text-charcoal-50">Helio</span>
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-charcoal-200 hover:text-gold-400 transition-colors duration-200 font-medium text-lg py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  {/* Mobile Cart Link */}
                  <Link
                    href="/cart"
                    className="flex items-center space-x-3 text-charcoal-200 hover:text-gold-400 transition-colors duration-200 font-medium text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Cart</span>
                    {totalItems > 0 && (
                      <span className="bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[20px] shadow-gold">
                        {totalItems > 99 ? '99+' : totalItems}
                      </span>
                    )}
                  </Link>
                </div>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-charcoal-600">
                  <Link href="/models" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 border-none text-base py-3">
                      Shop Now
                    </Button>
                  </Link>
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