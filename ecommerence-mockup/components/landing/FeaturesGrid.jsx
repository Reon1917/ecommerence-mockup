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
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Activity,
      title: "Blood Pressure",
      description: "Real-time blood pressure monitoring without uncomfortable cuffs",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Droplets,
      title: "Blood Oxygen",
      description: "SpO2 monitoring to track your oxygen saturation levels",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Moon,
      title: "Sleep Tracking",
      description: "Detailed sleep analysis including REM, deep, and light sleep phases",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Zap,
      title: "Energy Levels",
      description: "Track your daily energy patterns and optimize your performance",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: TrendingUp,
      title: "Stress Monitoring",
      description: "Advanced stress detection with guided breathing exercises",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  const specs = [
    { icon: Clock, label: "10-Day Battery", value: "Extended use" },
    { icon: Shield, label: "Waterproof", value: "IP68 Rating" },
    { icon: Smartphone, label: "App Sync", value: "iOS & Android" },
    { icon: BarChart3, label: "AI Insights", value: "Personalized" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            Advanced Health Technology
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Health Monitoring
            <span className="block text-blue-600">In One Ring</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 transform scale-110"></div>
              
              {/* Main Image */}
              <Image
                src="/referencepic/ringpic-1.png"
                alt="Helio Ring with mobile app interface"
                width={600}
                height={600}
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Spec Cards */}
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`absolute bg-white rounded-lg p-3 shadow-lg border border-gray-200 ${
                    index === 0 ? 'top-4 right-4' :
                    index === 1 ? 'bottom-4 right-4' :
                    index === 2 ? 'bottom-4 left-4' :
                    'top-4 left-4'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <spec.icon className="h-4 w-4 text-blue-600" />
                    <div>
                      <div className="text-xs font-medium text-gray-900">{spec.label}</div>
                      <div className="text-xs text-gray-600">{spec.value}</div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional-Grade Health Sensors
              </h3>
              <p className="text-gray-600">
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
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className={`p-2 rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
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
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <div className={`p-3 rounded-xl ${feature.bgColor} w-fit mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid; 