"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Droplets, Zap, Star, Users } from "lucide-react";

const HeroSection = () => {
  const healthMetrics = [
    { icon: Heart, label: "Heart Rate", value: "72 BPM", color: "text-red-500" },
    { icon: Activity, label: "Blood Pressure", value: "120/80", color: "text-blue-500" },
    { icon: Droplets, label: "Blood Oxygen", value: "98%", color: "text-green-500" },
    { icon: Zap, label: "Energy Level", value: "High", color: "text-yellow-500" },
  ];

  const socialProof = [
    { icon: Users, label: "50,000+", subtitle: "Happy Users" },
    { icon: Star, label: "4.9/5", subtitle: "App Store Rating" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Proof Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center space-x-6 mb-4"
            >
              {socialProof.map((proof, index) => (
                <div key={proof.label} className="flex items-center space-x-2 text-sm">
                  <proof.icon className="h-4 w-4 text-blue-600" />
                  <div>
                    <span className="font-bold text-gray-900">{proof.label}</span>
                    <span className="text-gray-600 ml-1">{proof.subtitle}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🚀 Revolutionary Health Technology
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Meet the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Helio Ring
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Join thousands who've transformed their health with advanced tracking technology 
              in a sleek, comfortable ring. Monitor your heart rate, blood pressure, oxygen levels, 
              and more with precision that fits on your finger.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Shop Now - Starting at $199
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Watch Demo
              </Button>
            </motion.div>

            {/* Health Metrics Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              {healthMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <metric.icon className={`h-5 w-5 ${metric.color}`} />
                    <div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                      <div className="font-semibold text-gray-900">{metric.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Lifestyle Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Lifestyle Image */}
            <motion.div
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative z-10"
            >
              <Image
                src="/referencepic/ringpic-2.png"
                alt="Person using Helio Ring to monitor health"
                width={600}
                height={600}
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl rounded-2xl"
                priority
              />
              
              {/* Overlay Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">Live Monitoring</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [-8, 8, -8],
                rotate: [0, 3, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg border border-gray-200"
            >
              <Heart className="h-5 w-5 text-red-500" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [8, -8, 8],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 bg-white rounded-full p-3 shadow-lg border border-gray-200"
            >
              <Activity className="h-5 w-5 text-blue-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 