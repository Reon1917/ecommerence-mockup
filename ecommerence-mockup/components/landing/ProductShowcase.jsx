"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart,
  Activity,
  Moon,
  Zap, 
  Shield, 
  Smartphone, 
  Clock, 
  Palette,
  Award,
  CheckCircle
} from "lucide-react";

const ProductShowcase = () => {
  const specifications = [
    {
      icon: Clock,
      title: "7-Day Battery Life",
      description: "Extended usage without frequent charging",
      color: "text-gold-500",
      bgColor: "bg-gradient-to-br from-gold-100 to-gold-200",
    },
    {
      icon: Shield,
      title: "IP68 Waterproof",
      description: "Swim, shower, and exercise worry-free",
      color: "text-gold-400",
      bgColor: "bg-gradient-to-br from-charcoal-100 to-charcoal-200",
    },
    {
      icon: Smartphone,
      title: "Bluetooth 5.0",
      description: "Works with iOS and Android devices",
      color: "text-gold-600",
      bgColor: "bg-gradient-to-br from-gold-50 to-gold-100",
    },
    {
      icon: Activity,
      title: "5 Medical-Grade Sensors",
      description: "Professional health monitoring",
      color: "text-gold-500",
      bgColor: "bg-gradient-to-br from-gold-200 to-charcoal-100",
    },
  ];

  const colors = [
    { name: "Matte Black", color: "bg-charcoal-800 border-charcoal-600", popular: true },
    { name: "Royal Silver", color: "bg-gradient-to-r from-charcoal-200 to-charcoal-300 border-charcoal-400", popular: false },
  ];

  const features = [
    "Heart rate monitoring",
    "Sleep tracking",
    "Activity monitoring",
    "Waterproof design",
    "Smart sync",
    "Medical-grade sensors",
    "7-day battery life",
    "Lightweight (12g)",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-charcoal-50 via-charcoal-100 to-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Elements - Simplified */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full blur-3xl opacity-8 transform scale-110"></div>
            
            {/* Main Product Image - Using men's Helio model image */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.4 }
              }}
              className="relative z-10"
            >
              <Image
                src="/helio-shopping-pic/helio-1-matteblack.png"
                alt="Helio Ring - Essential Health Tracker for Men"
                width={600}
                height={600}
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right - Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 border-none shadow-gold">
                Essential Design
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-800 mb-6">
                Helio for
                <span className="block bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">Men</span>
              </h2>
              <p className="text-xl text-charcoal-600 leading-relaxed">
                Essential health tracking for everyday wellness. Perfect for men who want 
                comprehensive health monitoring without compromise. Experience professional-grade 
                health insights in a sleek, masculine design.
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal-800 mb-4 flex items-center">
                <Palette className="h-5 w-5 mr-2 text-gold-500" />
                Available Colors
              </h3>
              <div className="flex space-x-4">
                {colors.map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className={`w-12 h-12 rounded-full ${color.color} border-2 cursor-pointer hover:scale-110 transition-transform duration-200 shadow-sm hover:shadow-gold`}></div>
                    {color.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-800 text-xs px-1 py-0 border-none">
                        Popular
                      </Badge>
                    )}
                    <div className="text-xs text-center mt-2 text-charcoal-600">{color.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-charcoal-800 mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="h-4 w-4 text-gold-500 flex-shrink-0" />
                    <span className="text-sm text-charcoal-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specifications Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specifications.map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="p-4 border-charcoal-300 bg-card/80 backdrop-blur-sm hover:shadow-charcoal hover:border-gold-400 transition-all duration-300 group">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${spec.bgColor} shadow-sm group-hover:shadow-gold transition-all duration-300`}>
                        <spec.icon className={`h-5 w-5 ${spec.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal-800 text-sm mb-1 group-hover:text-charcoal-900 transition-colors">
                          {spec.title}
                        </h4>
                        <p className="text-xs text-charcoal-600 group-hover:text-charcoal-700 transition-colors">
                          {spec.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Pricing and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Pricing */}
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-bold text-charcoal-800">$299</span>
                <span className="text-lg text-charcoal-500 line-through">$349</span>
                <Badge className="bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 border-none">
                  Save $50
                </Badge>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 text-lg px-8 py-3 shadow-gold-lg border-none">
                  Order Now - $299
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-charcoal-400 text-charcoal-700 hover:bg-charcoal-200 hover:text-charcoal-800 hover:border-gold-500">
                  View All Models
                </Button>
              </div>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 pt-4 border-t border-charcoal-300"
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-gold-500" />
                <span className="text-sm text-charcoal-600">2-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-gold-500" />
                <span className="text-sm text-charcoal-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-gold-500" />
                <span className="text-sm text-charcoal-600">Premium Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 