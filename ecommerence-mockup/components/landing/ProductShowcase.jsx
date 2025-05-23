"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
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
      title: "10-Day Battery Life",
      description: "Extended usage without frequent charging",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      title: "IP68 Waterproof",
      description: "Swim, shower, and exercise worry-free",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Smartphone,
      title: "Universal Compatibility",
      description: "Works with iOS and Android devices",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Zap,
      title: "Fast Charging",
      description: "Full charge in just 2 hours",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
  ];

  const colors = [
    { name: "Midnight Black", color: "bg-gray-900", popular: true },
    { name: "Silver", color: "bg-gray-300", popular: false },
    { name: "Rose Gold", color: "bg-rose-300", popular: false },
    { name: "Space Blue", color: "bg-blue-600", popular: false },
  ];

  const features = [
    "Medical-grade sensors",
    "AI-powered insights",
    "24/7 health monitoring",
    "Sleep stage analysis",
    "Stress level tracking",
    "Heart rate variability",
    "Blood oxygen monitoring",
    "Activity recognition",
  ];

  return (
    <section className="py-20 bg-white">
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
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-10 transform scale-150"></div>
            
            {/* Main Product Image */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 15,
                transition: { duration: 0.4 }
              }}
              className="relative z-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/referencepic/ringpic-3.png"
                alt="Helio Ring - Premium Health Tracker"
                width={600}
                height={600}
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-8 -left-4 bg-white rounded-lg p-3 shadow-lg border border-gray-200"
            >
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="text-sm font-medium text-gray-900">FDA Approved</div>
                  <div className="text-xs text-gray-600">Medical Grade</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-8 -right-4 bg-white rounded-lg p-3 shadow-lg border border-gray-200"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-sm font-medium text-gray-900">2-Year Warranty</div>
                  <div className="text-xs text-gray-600">Full Coverage</div>
                </div>
              </div>
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
              <Badge className="mb-4 bg-purple-100 text-purple-800">
                Premium Design
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Engineered for
                <span className="block text-blue-600">Perfection</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Every detail of the Helio Ring has been meticulously crafted to deliver 
                uncompromising performance, comfort, and style. Experience the perfect 
                fusion of advanced technology and elegant design.
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Palette className="h-5 w-5 mr-2 text-blue-600" />
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
                    <div className={`w-12 h-12 rounded-full ${color.color} border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform duration-200`}></div>
                    {color.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 py-0">
                        Popular
                      </Badge>
                    )}
                    <div className="text-xs text-center mt-2 text-gray-600">{color.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What's Included
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
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Order Now - $299
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Compare Models
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Specifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <div className={`p-4 rounded-xl ${spec.bgColor} w-fit mx-auto mb-4`}>
                    <spec.icon className={`h-8 w-8 ${spec.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {spec.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {spec.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase; 