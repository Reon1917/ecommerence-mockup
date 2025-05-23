"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Award, 
  Zap,
  Target,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "50,000+", subtitle: "Happy Customers" },
    { icon: Globe, label: "25+", subtitle: "Countries" },
    { icon: Award, label: "FDA", subtitle: "Approved" },
    { icon: Zap, label: "2024", subtitle: "Founded" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Health First",
      description: "Your wellness is our priority. Every product is designed with your health in mind.",
      color: "text-gold-500"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Cutting-edge technology meets elegant design to create the future of health tracking.",
      color: "text-gold-400"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a global community of health-conscious individuals making better choices daily.",
      color: "text-gold-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-800 via-charcoal-100 to-charcoal-50">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mix-blend-overlay filter blur-xl opacity-8 animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-charcoal-600 to-charcoal-500 rounded-full mix-blend-overlay filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Company Logo Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 relative mx-auto mb-3 sm:mb-4">
                <Image
                  src="/logo/helio-logo.png"
                  alt="Helio Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain drop-shadow-xl"
                  priority
                />
              </div>
              <Badge className="bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 border-none shadow-gold text-xs sm:text-sm">
                Established 2024
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-50 mb-4 sm:mb-6"
            >
              About
              <span className="block bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">Helio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-charcoal-200 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Revolutionizing personal health monitoring through innovative wearable technology. 
              Founded in 2024, we're dedicated to making advanced health tracking accessible to everyone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-6 bg-charcoal-200/50 backdrop-blur-sm rounded-xl border border-charcoal-300 hover:border-gold-400 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold-500 mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl font-bold text-charcoal-800 mb-1">{stat.label}</div>
                <div className="text-charcoal-600 text-xs sm:text-sm">{stat.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-charcoal-50 to-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            >
              <Badge className="bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 border-none shadow-gold text-xs sm:text-sm">
                Our Story
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-800">
                Built for the Future of
                <span className="block bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">Health Tracking</span>
              </h2>
              <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
                Founded in 2024 by a team of health enthusiasts and tech innovators, Helio emerged from a simple belief: 
                everyone deserves access to professional-grade health monitoring without the complexity.
              </p>
              <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
                We combined cutting-edge sensor technology with elegant design to create rings that don't just track your health—they 
                seamlessly integrate into your lifestyle while providing insights that actually matter.
              </p>
            </motion.div>

            {/* Placeholder for company image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative bg-gradient-to-br from-charcoal-200 to-charcoal-300 rounded-2xl p-8 sm:p-12 h-80 sm:h-96 flex items-center justify-center border border-charcoal-400">
                <div className="text-center text-charcoal-600">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 relative mx-auto mb-4 sm:mb-6">
                    <Image
                      src="/logo/helio-logo.png"
                      alt="Helio Company Logo"
                      width={128}
                      height={128}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                  <p className="text-base sm:text-lg font-medium text-charcoal-700 mb-1 sm:mb-2">Helio Ring</p>
                  <p className="text-xs sm:text-sm text-charcoal-600">Revolutionizing Health Tracking</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-charcoal-100 to-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 border-none shadow-gold text-xs sm:text-sm">
              Our Values
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-800 mb-4 sm:mb-6">
              What Drives Us
            </h2>
            <p className="text-lg sm:text-xl text-charcoal-600 max-w-3xl mx-auto px-4 sm:px-0">
              Every decision we make is guided by our core values and commitment to improving lives through technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 sm:p-8 h-full border-charcoal-300 bg-card/80 backdrop-blur-sm hover:shadow-charcoal-lg hover:border-gold-400 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-gold transition-all duration-300">
                      <value.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-charcoal-800 mb-3 sm:mb-4">{value.title}</h3>
                    <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-charcoal-200 to-charcoal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-50 mb-4 sm:mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-lg sm:text-xl text-charcoal-200 mb-6 sm:mb-8 px-4 sm:px-0">
              Join thousands who've already started their journey to better health with Helio Ring.
            </p>
            <Link href="/models">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-gold text-charcoal-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-gold-lg hover:shadow-gold transition-all duration-300 border-none"
              >
                Shop Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 