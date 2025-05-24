"use client";

import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Droplets, Zap, ArrowRight, ShoppingBag } from "lucide-react";
import { FaUsers, FaStar } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  const [userCount, setUserCount] = useState(0);
  const controls = useAnimation();

  // Animated counter for user count
  useEffect(() => {
    const animateCounter = async () => {
      const targetCount = 50000;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetCount / steps;
      
      for (let i = 0; i <= steps; i++) {
        await new Promise(resolve => setTimeout(resolve, duration / steps));
        setUserCount(Math.floor(increment * i));
      }
    };
    
    const timer = setTimeout(animateCounter, 1000);
    return () => clearTimeout(timer);
  }, []);

  const healthMetrics = [
    { icon: Heart, label: "Heart Rate", value: "72 BPM", color: "text-red-400" },
    { icon: Activity, label: "Blood Pressure", value: "120/80", color: "text-blue-400" },
    { icon: Droplets, label: "Blood Oxygen", value: "98%", color: "text-cyan-400" },
    { icon: Zap, label: "Energy Level", value: "High", color: "text-green-400" },
  ];

  const socialProof = [
    { icon: FaUsers, label: `${userCount.toLocaleString()}+`, subtitle: "Happy Users", animated: true },
    { icon: FaStar, label: "4.9/5", subtitle: "App Store Rating", animated: false },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-900 overflow-hidden">
      {/* Enhanced Background with subtle pattern */}
      <div className="absolute inset-0">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[length:50px_50px]"></div>
        </div>
        
        {/* Improved background gradients */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-charcoal-600 to-charcoal-500 rounded-full mix-blend-overlay filter blur-xl opacity-15"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mix-blend-overlay filter blur-xl opacity-8"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-charcoal-500 to-charcoal-400 rounded-full mix-blend-overlay filter blur-xl opacity-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center min-h-[80vh]">
          {/* Left Content - Reduced width for better balance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-1 lg:col-span-7"
          >
            {/* Enhanced Social Proof with better icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4"
            >
              {socialProof.map((proof, index) => (
                <motion.div 
                  key={proof.label} 
                  className="flex items-center space-x-2 text-xs sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-1.5 bg-gold-500/20 rounded-full">
                    <proof.icon className="h-3 w-3 sm:h-4 sm:w-4 text-gold-400 flex-shrink-0" />
                  </div>
                  <div>
                    <span className="font-bold text-charcoal-50">
                      {proof.animated && proof.label.includes(userCount.toLocaleString()) ? 
                        `${userCount.toLocaleString()}+` : proof.label}
                    </span>
                    <span className="text-charcoal-200 ml-1">{proof.subtitle}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Main Heading with better typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 hover:from-gold-600 hover:to-gold-500 border-none shadow-gold text-xs sm:text-sm px-4 py-2">
                🚀 Revolutionary Health Technology
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-50 leading-[1.1] tracking-tight">
                Meet the{" "}
                <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                  Helio Ring
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Description with better typography */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-charcoal-200 leading-relaxed max-w-2xl"
              style={{ lineHeight: '1.6' }}
            >
              Join thousands who've transformed their health with advanced tracking technology 
              in a sleek, comfortable ring. Monitor your heart rate, blood pressure, oxygen levels, 
              and more with <span className="text-gold-400 font-medium">precision that fits on your finger</span>.
            </motion.p>

            {/* Enhanced CTA Button with icon and better styling */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/models">
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(176, 141, 87, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="group w-full sm:w-auto bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-charcoal-800 text-lg sm:text-xl font-semibold px-8 sm:px-10 py-4 sm:py-5 shadow-2xl border-none rounded-xl transition-all duration-300"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Shop Now - Starting at $199
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Enhanced Health Metrics with better colors and spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 sm:pt-10"
            >
              {healthMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ 
                    y: -2,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-charcoal-700/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-charcoal-600 shadow-lg hover:border-charcoal-500 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-charcoal-600/50 rounded-lg">
                      <metric.icon className={`h-5 w-5 ${metric.color} flex-shrink-0`} />
                    </div>
                    <div>
                      <div className="text-sm text-charcoal-300 font-medium">{metric.label}</div>
                      <div className="font-bold text-lg text-charcoal-50">{metric.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced with background shape and better alignment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center items-center order-2 lg:order-2 lg:col-span-5"
          >
            {/* Background shape for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-3xl blur-3xl transform scale-110"></div>
            
            {/* Enhanced Main Image with better shadow */}
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg"
              style={{ perspective: "1000px" }}
            >
              <div className="relative">
                <Image
                  src="/referencepic/ringpic-2.png"
                  alt="Person using Helio Ring for comprehensive health monitoring including heart rate, blood pressure, and sleep tracking"
                  width={600}
                  height={600}
                  className="w-full h-auto drop-shadow-2xl rounded-2xl border border-charcoal-600/50"
                  priority
                />
                
                {/* Enhanced shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent rounded-2xl pointer-events-none"></div>
              </div>
              
              {/* Enhanced Live Monitoring Badge with pulse animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-charcoal-800/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-2xl border border-charcoal-600/50"
              >
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-3 h-3 bg-green-400 rounded-full shadow-lg"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <span className="text-sm font-semibold text-charcoal-50">Live Monitoring</span>
                </div>
              </motion.div>
            </motion.div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 