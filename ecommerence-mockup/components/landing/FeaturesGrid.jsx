"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Activity, 
  Droplets, 
  Zap, 
  Moon, 
  TrendingUp,
  Shield,
  Smartphone,
  Clock,
  BarChart3
} from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Heart,
      title: "Heart Rate Monitoring",
      description: "Continuous 24/7 heart rate tracking with medical-grade accuracy",
      color: "text-gold-500",
      bgColor: "bg-gradient-to-br from-gold-100 to-gold-200",
    },
    {
      icon: Activity,
      title: "Blood Pressure",
      description: "Real-time blood pressure monitoring without uncomfortable cuffs",
      color: "text-gold-400",
      bgColor: "bg-gradient-to-br from-gold-50 to-gold-100",
    },
    {
      icon: Droplets,
      title: "Blood Oxygen",
      description: "SpO2 monitoring to track your oxygen saturation levels",
      color: "text-gold-600",
      bgColor: "bg-gradient-to-br from-gold-200 to-gold-300",
    },
    {
      icon: Moon,
      title: "Sleep Tracking",
      description: "Detailed sleep analysis including REM, deep, and light sleep phases",
      color: "text-gold-500",
      bgColor: "bg-gradient-to-br from-charcoal-100 to-charcoal-200",
    },
    {
      icon: Zap,
      title: "Energy Levels",
      description: "Track your daily energy patterns and optimize your performance",
      color: "text-gold-400",
      bgColor: "bg-gradient-to-br from-gold-100 to-charcoal-100",
    },
    {
      icon: TrendingUp,
      title: "Stress Monitoring",
      description: "Advanced stress detection with guided breathing exercises",
      color: "text-gold-600",
      bgColor: "bg-gradient-to-br from-gold-50 to-charcoal-50",
    },
  ];

  const specs = [
    { icon: Clock, label: "10-Day Battery", value: "Extended use" },
    { icon: Shield, label: "Waterproof", value: "IP68 Rating" },
    { icon: Smartphone, label: "App Sync", value: "iOS & Android" },
    { icon: BarChart3, label: "AI Insights", value: "Personalized" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-charcoal-900 via-charcoal-100 to-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Faster timing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 border-none shadow-gold">
            Advanced Health Technology
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-800 mb-6">
            Complete Health Monitoring
            <span className="block bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">In One Ring</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Experience the future of health tracking with our comprehensive suite of sensors 
            and AI-powered insights, all seamlessly integrated into your daily life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Ring + App Image - Simplified */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Background Glow - Static for performance */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-3xl blur-3xl opacity-8 transform scale-110"></div>
              
              {/* Main Image */}
              <Image
                src="/referencepic/ringpic-1.png"
                alt="Helio Ring with mobile app interface"
                width={600}
                height={600}
                className="relative z-10 w-full h-auto rounded-2xl shadow-charcoal-lg border border-charcoal-200"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              
              {/* Simplified Spec Display - Static overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-4 left-4 right-4 bg-charcoal-700/90 backdrop-blur-sm rounded-lg p-4 shadow-charcoal-lg border border-charcoal-600"
              >
                <div className="grid grid-cols-2 gap-3">
                  {specs.map((spec, index) => (
                    <div key={spec.label} className="flex items-center space-x-2">
                      <spec.icon className="h-4 w-4 text-gold-500 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-medium text-charcoal-50">{spec.label}</div>
                        <div className="text-xs text-charcoal-200">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Features List - Grouped animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-charcoal-800 mb-4">
                Professional-Grade Health Sensors
              </h3>
              <p className="text-charcoal-600">
                Our advanced sensor array provides medical-grade accuracy in a comfortable, 
                everyday wearable that seamlessly integrates with your lifestyle.
              </p>
            </div>

            {/* Features List - Single grouped animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {features.slice(0, 3).map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-charcoal-200/50 transition-all duration-200 border border-transparent hover:border-charcoal-300"
                >
                  <div className={`p-2 rounded-lg ${feature.bgColor} shadow-sm`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-charcoal-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid - Grouped by rows */}
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: Math.floor(index / 3) * 0.1, // Group by rows
                duration: 0.4 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -3,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-charcoal-50 to-charcoal-100 border-charcoal-200 shadow-charcoal hover:shadow-charcoal-lg transition-all duration-300 group hover:border-gold-300">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} shadow-sm mb-4 group-hover:scale-105 transition-transform duration-200`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-charcoal-800 mb-3 group-hover:text-charcoal-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed group-hover:text-charcoal-700 transition-colors">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-charcoal-600 mb-6">
            Ready to experience the future of health monitoring?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-gold-lg border-none"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid; 