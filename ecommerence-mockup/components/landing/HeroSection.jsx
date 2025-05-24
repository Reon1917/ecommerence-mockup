"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Droplets, Zap, Star, Users } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const healthMetrics = [
    { icon: Heart, label: "Heart Rate", value: "72 BPM", color: "text-gold-500" },
    { icon: Activity, label: "Blood Pressure", value: "120/80", color: "text-gold-400" },
    { icon: Droplets, label: "Blood Oxygen", value: "98%", color: "text-gold-600" },
    { icon: Zap, label: "Energy Level", value: "High", color: "text-gold-300" },
  ];

  const socialProof = [
    { icon: Users, label: "50,000+", subtitle: "Happy Users" },
    { icon: Star, label: "4.9/5", subtitle: "App Store Rating" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-900 overflow-hidden">
      {/* Simplified Background Elements - Static gradients for better performance */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-charcoal-600 to-charcoal-500 rounded-full mix-blend-overlay filter blur-xl opacity-15"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mix-blend-overlay filter blur-xl opacity-8"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-charcoal-500 to-charcoal-400 rounded-full mix-blend-overlay filter blur-xl opacity-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[80vh]">
          {/* Left Content - Text comes first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-1"
          >
            {/* Social Proof Badges - Grouped animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4"
            >
              {socialProof.map((proof, index) => (
                <div key={proof.label} className="flex items-center space-x-2 text-xs sm:text-sm">
                  <proof.icon className="h-3 w-3 sm:h-4 sm:w-4 text-gold-500 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-charcoal-50">{proof.label}</span>
                    <span className="text-charcoal-200 ml-1">{proof.subtitle}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Main Heading - Faster timing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 hover:from-gold-600 hover:to-gold-500 border-none shadow-gold text-xs sm:text-sm">
                🚀 Revolutionary Health Technology
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-50 leading-tight">
                Meet the{" "}
                <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                  Helio Ring
                </span>
              </h1>
            </motion.div>

            {/* Description - Faster timing */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-charcoal-200 leading-relaxed"
            >
              Join thousands who've transformed their health with advanced tracking technology 
              in a sleek, comfortable ring. Monitor your heart rate, blood pressure, oxygen levels, 
              and more with precision that fits on your finger.
            </motion.p>

            {/* CTA Button - Faster timing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/models">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 text-base sm:text-lg px-6 sm:px-8 py-3 shadow-gold-lg border-none">
                  Shop Now - Starting at $199
                </Button>
              </Link>
            </motion.div>

            {/* Health Metrics Preview - Single grouped animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8"
            >
              {healthMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="bg-charcoal-700/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-charcoal-600 shadow-charcoal hover:shadow-charcoal-lg transition-all duration-300 hover:bg-charcoal-600/80"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <metric.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${metric.color} flex-shrink-0`} />
                    <div>
                      <div className="text-xs sm:text-sm text-charcoal-300">{metric.label}</div>
                      <div className="font-semibold text-sm sm:text-base text-charcoal-50">{metric.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image comes second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center items-center order-2 lg:order-2"
          >
            {/* Main Lifestyle Image - Simplified hover */}
            <motion.div
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg"
            >
              <Image
                src="/referencepic/ringpic-2.png"
                alt="Person using Helio Ring to monitor health"
                width={600}
                height={600}
                className="w-full h-auto drop-shadow-2xl rounded-2xl border border-charcoal-600"
                priority
              />
              
              {/* Overlay Badge - Faster timing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-charcoal-700/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-charcoal-lg border border-charcoal-600"
              >
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gold-500 rounded-full animate-pulse shadow-gold"></div>
                  <span className="text-xs sm:text-sm font-medium text-charcoal-50">Live Monitoring</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Simplified Floating Elements - Subtle hover states only */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:block absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-charcoal-700 rounded-full p-2 sm:p-3 shadow-charcoal-lg border border-charcoal-600 cursor-pointer"
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:block absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-charcoal-700 rounded-full p-2 sm:p-3 shadow-charcoal-lg border border-charcoal-600 cursor-pointer"
            >
              <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 