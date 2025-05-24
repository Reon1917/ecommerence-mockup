"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FaHeart, 
  FaHeartbeat, 
  FaTint, 
  FaBolt, 
  FaMoon, 
  FaChartLine,
  FaShieldAlt,
  FaMobileAlt,
  FaClock,
  FaChartBar
} from "react-icons/fa";

const FeaturesGrid = () => {
  const features = [
    {
      icon: FaHeart,
      title: "Heart Rate Monitoring",
      description: "Continuous 24/7 heart rate tracking with medical-grade accuracy",
      color: "text-charcoal-700",
      bgColor: "bg-gradient-to-br from-charcoal-100 to-charcoal-150",
      accentColor: "text-red-500",
    },
    {
      icon: FaHeartbeat,
      title: "Blood Pressure",
      description: "Real-time blood pressure monitoring without uncomfortable cuffs",
      color: "text-charcoal-700",
      bgColor: "bg-gradient-to-br from-charcoal-100 to-charcoal-150",
      accentColor: "text-blue-500",
    },
    {
      icon: FaTint,
      title: "Blood Oxygen",
      description: "SpO2 monitoring to track your oxygen saturation levels",
      color: "text-charcoal-700",
      bgColor: "bg-gradient-to-br from-charcoal-100 to-charcoal-150",
      accentColor: "text-cyan-500",
    },
    {
      icon: FaMoon,
      title: "Sleep Tracking",
      description: "Detailed sleep analysis including REM, deep, and light sleep phases",
      color: "text-charcoal-700",
      bgColor: "bg-gradient-to-br from-charcoal-100 to-charcoal-150",
      accentColor: "text-purple-500",
    },
    {
      icon: FaBolt,
      title: "Energy Levels",
      description: "Track your daily energy patterns and optimize your performance",
      color: "text-charcoal-700",
      bgColor: "bg-gradient-to-br from-charcoal-100 to-charcoal-150",
      accentColor: "text-yellow-500",
    },
    {
      icon: FaChartLine,
      title: "Stress Monitoring",
      description: "Advanced stress detection with guided breathing exercises",
      color: "text-charcoal-700",
      bgColor: "bg-gradient-to-br from-charcoal-100 to-charcoal-150",
      accentColor: "text-green-500",
    },
  ];

  const specs = [
    { icon: FaClock, label: "10-Day Battery", value: "Extended use" },
    { icon: FaShieldAlt, label: "Waterproof", value: "IP68 Rating" },
    { icon: FaMobileAlt, label: "App Sync", value: "iOS & Android" },
    { icon: FaChartBar, label: "AI Insights", value: "Personalized" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-charcoal-900 via-charcoal-100 to-charcoal-50 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        {/* Radial highlight behind product area */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gold-500/10 to-gold-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header with improved typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-50 border-none shadow-gold px-4 py-2">
            Advanced Health Technology
          </Badge>
          
          {/* Enhanced headline with two-line treatment */}
          <div className="space-y-2 mb-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-charcoal-50 leading-tight">
              Complete Health Monitoring
            </h2>
            <h3 className="text-3xl lg:text-5xl font-light text-gold-400 leading-tight">
              In One Ring
            </h3>
          </div>
          
          <p className="text-xl text-charcoal-200 max-w-3xl mx-auto leading-relaxed">
            Experience the future of health tracking with our comprehensive suite of sensors 
            and AI-powered insights, all seamlessly integrated into your daily life.
          </p>
        </motion.div>

        {/* Enhanced Layout with overlapping elements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          {/* Left - Ring + App Image with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:col-span-6"
          >
            <div className="relative">
              {/* Enhanced background glow with animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-3xl blur-3xl opacity-10 transform scale-110"
                animate={{ 
                  scale: [1.1, 1.15, 1.1],
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              {/* Main Image with enhanced shadow */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/referencepic/ringpic-1.png"
                  alt="Helio Ring with mobile app interface showing real-time health monitoring"
                  width={600}
                  height={600}
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-charcoal-200/50"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </motion.div>
              
              {/* Animated phone screen effect */}
              <motion.div
                className="absolute top-1/2 right-1/4 w-4 h-4 bg-green-400 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              {/* Enhanced Spec Display with animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-4 left-4 right-4 bg-charcoal-800/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-charcoal-600/50"
              >
                <div className="grid grid-cols-2 gap-3">
                  {specs.map((spec, index) => (
                    <motion.div 
                      key={spec.label} 
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <spec.icon className="h-4 w-4 text-gold-400 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-medium text-charcoal-50">{spec.label}</div>
                        <div className="text-xs text-charcoal-200">{spec.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Features List with overlapping design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-6 lg:-ml-8 relative z-20"
          >
            {/* Enhanced background for overlap effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-50/90 to-transparent rounded-2xl backdrop-blur-sm"></div>
            
            <div className="relative p-6">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-charcoal-800 mb-4">
                  Professional-Grade Health Sensors
                </h3>
                <p className="text-lg text-charcoal-600 leading-relaxed">
                  Our advanced sensor array provides medical-grade accuracy in a comfortable, 
                  everyday wearable that seamlessly integrates with your lifestyle.
                </p>
              </div>

              {/* Enhanced Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-4"
              >
                {features.slice(0, 3).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-charcoal-100/50 transition-all duration-300 border border-transparent hover:border-charcoal-300 group"
                  >
                    <div className={`p-3 rounded-xl ${feature.bgColor} shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                      <feature.icon className={`h-6 w-6 ${feature.color} group-hover:${feature.accentColor} transition-colors duration-200`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-charcoal-800 mb-2 group-hover:text-charcoal-900 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-charcoal-600 leading-relaxed group-hover:text-charcoal-700 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Section Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent mb-16"
        ></motion.div>

        {/* Enhanced Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: Math.floor(index / 3) * 0.1 + (index % 3) * 0.05,
                duration: 0.5 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="relative p-6 h-full bg-gradient-to-br from-charcoal-50 to-charcoal-100 border-charcoal-200 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:border-gold-300 overflow-hidden">
                {/* Animated background accent */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                ></motion.div>
                
                {/* Enhanced Icon with animation */}
                <motion.div 
                  className={`inline-flex p-4 rounded-xl ${feature.bgColor} shadow-sm mb-6 group-hover:scale-110 transition-all duration-300`}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className={`h-7 w-7 ${feature.color} group-hover:${feature.accentColor} transition-colors duration-300`} />
                </motion.div>

                {/* Enhanced Content with better typography */}
                <h3 className="text-xl font-bold text-charcoal-800 mb-3 group-hover:text-charcoal-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed group-hover:text-charcoal-700 transition-colors">
                  {feature.description}
                </p>

                {/* Subtle hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-600/0 group-hover:from-gold-500/5 group-hover:to-gold-600/5 transition-all duration-300 rounded-lg pointer-events-none"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid; 