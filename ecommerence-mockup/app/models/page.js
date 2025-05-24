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
      name: "Helio Prime",
      description: "Precision health tracking engineered for men.",
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
        { name: "Heart Rate", icon: Heart, color: "text-gold-500" },
        { name: "Sleep Tracking", icon: Moon, color: "text-gold-400" },
        { name: "Activity Monitor", icon: Activity, color: "text-gold-600" },
        { name: "7-Day Battery", icon: Clock, color: "text-gold-300" },
        { name: "Waterproof", icon: Shield, color: "text-gold-500" },
        { name: "Smart Sync", icon: Smartphone, color: "text-gold-400" }
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
      name: "Helio Aurora",
      description: "Elegant wellness technology designed for women.",
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
        { name: "Heart Rate", icon: Heart, color: "text-gold-500" },
        { name: "Blood Pressure", icon: Activity, color: "text-gold-400" },
        { name: "Blood Oxygen", icon: Droplets, color: "text-gold-600" },
        { name: "Sleep Analysis", icon: Moon, color: "text-gold-300" },
        { name: "Stress Monitor", icon: Zap, color: "text-gold-500" },
        { name: "10-Day Battery", icon: Clock, color: "text-gold-400" }
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
      name: "Helio Nova",
      description: "Safe, fun health tracking that grows with kids.",
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
        { name: "Heart Rate", icon: Heart, color: "text-gold-500" },
        { name: "Activity Track", icon: Activity, color: "text-gold-400" },
        { name: "Sleep Monitor", icon: Moon, color: "text-gold-600" },
        { name: "Parent Control", icon: Users, color: "text-gold-300" },
        { name: "Safe Design", icon: Shield, color: "text-gold-500" },
        { name: "5-Day Battery", icon: Clock, color: "text-gold-400" }
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
    <div className="min-h-screen bg-gradient-to-b from-charcoal-800 via-charcoal-200 to-charcoal-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mix-blend-overlay filter blur-xl opacity-8 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-charcoal-600 to-charcoal-500 rounded-full mix-blend-overlay filter blur-xl opacity-15 animate-pulse delay-1000"></div>
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
              className="inline-flex items-center space-x-2 bg-charcoal-700/50 backdrop-blur-sm text-charcoal-100 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-charcoal-600"
            >
              <Badge variant="secondary" className="bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 border-none">
                New Collection
              </Badge>
              <span>3 Models Available</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-charcoal-50 mb-6"
            >
              Choose Your Perfect
              <span className="block bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent"> Helio Ring</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-charcoal-200 max-w-3xl mx-auto leading-relaxed"
            >
              Advanced health tracking technology tailored for every lifestyle. 
              From essential monitoring to professional-grade insights, find the ring that fits your health journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-charcoal-300"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-gold-500" />
                <span>2-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-gold-600" />
                <span>30-Day Returns</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section - Minimal */}
      <section className="py-16 bg-gradient-to-b from-charcoal-50 to-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-charcoal-800 mb-4">
              Find Your Perfect Match
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              Each Helio Ring is designed for specific needs and lifestyles. 
              Compare features to find the one that's right for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-charcoal-700/80 backdrop-blur-sm rounded-2xl p-8 border border-charcoal-600 shadow-charcoal-lg"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-charcoal-50 mb-4">
                Not Sure Which Model to Choose?
              </h3>
              <p className="text-charcoal-200 mb-6">
                Take our quick quiz to find the perfect Helio Ring for your lifestyle and health goals.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-gold text-charcoal-50 px-8 py-3 rounded-lg font-semibold shadow-gold-lg hover:shadow-gold transition-all duration-300 border-none"
              >
                Take the Quiz
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 