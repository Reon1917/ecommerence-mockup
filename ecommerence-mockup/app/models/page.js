"use client";

import { motion } from "motion/react";
import ProductCard from "@/components/models/ProductCard";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Activity, 
  Droplets, 
  Moon, 
  Zap, 
  Shield,
  Clock,
  Smartphone,
  Users,
  Baby
} from "lucide-react";

export default function ModelsPage() {
  const products = [
    {
      id: 1,
      name: "Helio",
      description: "Essential health tracking for everyday wellness. Perfect for men who want comprehensive health monitoring without compromise.",
      price: 299,
      originalPrice: 349,
      rating: 4.8,
      reviews: 1247,
      popular: false,
      colors: [
        {
          name: "Royal Silver",
          hex: "#C0C0C0",
          image: "/helio-shopping-pic/helio-1-royalsilver.png"
        },
        {
          name: "Matte Black",
          hex: "#2C2C2C",
          image: "/helio-shopping-pic/helio-1-matteblack.png"
        }
      ],
      features: [
        { name: "Heart Rate", icon: Heart, color: "text-red-500" },
        { name: "Sleep Tracking", icon: Moon, color: "text-purple-500" },
        { name: "Activity Monitor", icon: Activity, color: "text-blue-500" },
        { name: "7-Day Battery", icon: Clock, color: "text-green-500" },
        { name: "Waterproof", icon: Shield, color: "text-cyan-500" },
        { name: "Smart Sync", icon: Smartphone, color: "text-orange-500" }
      ],
      specs: [
        { label: "Battery Life", value: "7 days" },
        { label: "Water Resistance", value: "IP68" },
        { label: "Connectivity", value: "Bluetooth 5.0" },
        { label: "Sensors", value: "5 medical-grade" },
        { label: "Weight", value: "12g" },
        { label: "Warranty", value: "2 years" }
      ]
    },
    {
      id: 2,
      name: "Helio Women",
      description: "Elegant health tracking designed specifically for women. Advanced features in a sophisticated, comfortable design.",
      price: 349,
      originalPrice: 399,
      rating: 4.9,
      reviews: 2156,
      popular: true,
      colors: [
        {
          name: "Ceramic White",
          hex: "#F8F8FF",
          image: "/helio-shopping-pic/helio-women-ceramicwhite.png"
        },
        {
          name: "Rose Gold",
          hex: "#E8B4B8",
          image: "/helio-shopping-pic/helio-women-rosegold.png"
        }
      ],
      features: [
        { name: "Heart Rate", icon: Heart, color: "text-red-500" },
        { name: "Blood Pressure", icon: Activity, color: "text-blue-500" },
        { name: "Blood Oxygen", icon: Droplets, color: "text-green-500" },
        { name: "Sleep Analysis", icon: Moon, color: "text-purple-500" },
        { name: "Stress Monitor", icon: Zap, color: "text-yellow-500" },
        { name: "10-Day Battery", icon: Clock, color: "text-green-500" }
      ],
      specs: [
        { label: "Battery Life", value: "10 days" },
        { label: "Water Resistance", value: "IP68" },
        { label: "Connectivity", value: "Bluetooth 5.2" },
        { label: "Sensors", value: "8 medical-grade" },
        { label: "Weight", value: "10g" },
        { label: "Warranty", value: "2 years" }
      ]
    },
    {
      id: 3,
      name: "Helio Kids",
      description: "Safe, fun health tracking designed specifically for children. Parental controls and kid-friendly features included.",
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 892,
      popular: false,
      colors: [
        {
          name: "Sunny Yellow",
          hex: "#FFD700",
          image: "/helio-shopping-pic/helio-kid-sunnyyellow.png"
        },
        {
          name: "Electric Blue",
          hex: "#007FFF",
          image: "/helio-shopping-pic/helio-kid-electricblue.png"
        }
      ],
      features: [
        { name: "Heart Rate", icon: Heart, color: "text-red-500" },
        { name: "Activity Track", icon: Activity, color: "text-blue-500" },
        { name: "Sleep Monitor", icon: Moon, color: "text-purple-500" },
        { name: "Parent Control", icon: Users, color: "text-orange-500" },
        { name: "Safe Design", icon: Shield, color: "text-green-500" },
        { name: "5-Day Battery", icon: Clock, color: "text-yellow-500" }
      ],
      specs: [
        { label: "Battery Life", value: "5 days" },
        { label: "Water Resistance", value: "IP67" },
        { label: "Connectivity", value: "Bluetooth 5.0" },
        { label: "Sensors", value: "4 kid-safe" },
        { label: "Weight", value: "8g" },
        { label: "Warranty", value: "1 year" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                New Collection
              </Badge>
              <span>3 Models Available</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Choose Your Perfect
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Helio Ring</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Advanced health tracking technology tailored for every lifestyle. 
              From essential monitoring to professional-grade insights, find the ring that fits your health journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>2-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>30-Day Returns</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Complete Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each Helio Ring is crafted with precision and designed for your unique needs. 
              Compare features and find your perfect match.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Still deciding? Compare all models
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a detailed side-by-side comparison of features, specifications, and pricing 
              to make the perfect choice for your health journey.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg"
            >
              Compare All Models
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 