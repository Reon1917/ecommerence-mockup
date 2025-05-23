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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          {/* Left - Ring + App Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-3xl blur-3xl opacity-10 transform scale-110"></div>
              
              {/* Main Image */}
              <Image
                src="/referencepic/ringpic-1.png"
                alt="Helio Ring with mobile app interface"
                width={600}
                height={600}
                className="relative z-10 w-full h-auto rounded-2xl shadow-charcoal-lg border border-charcoal-200"
              />
              
              {/* Floating Spec Cards */}
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`absolute bg-charcoal-700/90 backdrop-blur-sm rounded-lg p-3 shadow-charcoal-lg border border-charcoal-600 ${
                    index === 0 ? 'top-4 right-4' :
                    index === 1 ? 'bottom-4 right-4' :
                    index === 2 ? 'bottom-4 left-4' :
                    'top-4 left-4'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <spec.icon className="h-4 w-4 text-gold-500" />
                    <div>
                      <div className="text-xs font-medium text-charcoal-50">{spec.label}</div>
                      <div className="text-xs text-charcoal-200">{spec.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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

            <div className="grid grid-cols-1 gap-4">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-charcoal-200/50 transition-all duration-200 border border-transparent hover:border-charcoal-300"
                >
                  <div className={`p-2 rounded-lg ${feature.bgColor} shadow-sm`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-charcoal-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full p-6 border-charcoal-300 bg-card/80 backdrop-blur-sm hover:shadow-charcoal-lg transition-all duration-300 hover:border-gold-400 group">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 rounded-xl ${feature.bgColor} shadow-sm group-hover:shadow-gold transition-all duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-charcoal-800 mb-2 group-hover:text-charcoal-900 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-charcoal-600 leading-relaxed group-hover:text-charcoal-700 transition-colors">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-charcoal-700 to-charcoal-800 rounded-2xl p-8 shadow-charcoal-lg border border-charcoal-600">
            <h3 className="text-2xl font-bold text-charcoal-50 mb-4">
              Ready to Transform Your Health?
            </h3>
            <p className="text-charcoal-200 mb-6 max-w-2xl mx-auto">
              Join thousands of users who've revolutionized their health monitoring with the Helio Ring.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-gold text-charcoal-50 px-8 py-3 rounded-lg font-semibold shadow-gold-lg hover:shadow-gold transition-all duration-300 border-none"
            >
              Shop Now - Starting at $199
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid; 