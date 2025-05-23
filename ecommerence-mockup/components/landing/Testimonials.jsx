"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Cardiologist",
      location: "San Francisco, CA",
      rating: 5,
      text: "As a cardiologist, I'm impressed by the accuracy of Helio Ring's heart rate and blood pressure monitoring. I recommend it to my patients for continuous health tracking.",
      avatar: "SC",
      verified: true,
    },
    {
      name: "Michael Rodriguez",
      role: "Fitness Trainer",
      location: "Austin, TX",
      rating: 5,
      text: "The sleep tracking and energy level monitoring have completely transformed how I train my clients. The insights are incredibly detailed and actionable.",
      avatar: "MR",
      verified: true,
    },
    {
      name: "Emily Johnson",
      role: "Working Mom",
      location: "Seattle, WA",
      rating: 5,
      text: "Finally, a health tracker that doesn't feel like wearing a computer on my wrist. The ring is so comfortable I forget I'm wearing it, but the health insights are amazing.",
      avatar: "EJ",
      verified: true,
    },
    {
      name: "James Park",
      role: "Tech Executive",
      location: "New York, NY",
      rating: 5,
      text: "The stress monitoring feature has been a game-changer for managing my high-pressure job. The guided breathing exercises help me stay calm during important meetings.",
      avatar: "JP",
      verified: true,
    },
    {
      name: "Dr. Maria Santos",
      role: "Sleep Specialist",
      location: "Miami, FL",
      rating: 5,
      text: "The sleep analysis is remarkably accurate. I use the data from Helio Ring to help my patients understand their sleep patterns and improve their sleep quality.",
      avatar: "MS",
      verified: true,
    },
    {
      name: "David Kim",
      role: "Marathon Runner",
      location: "Portland, OR",
      rating: 5,
      text: "The 10-day battery life is incredible. I can track my training and recovery without worrying about charging. The blood oxygen monitoring helps optimize my performance.",
      avatar: "DK",
      verified: true,
    },
  ];

  const stats = [
    { value: "50,000+", label: "Happy Users" },
    { value: "4.9/5", label: "App Store Rating" },
    { value: "98%", label: "Accuracy Rate" },
    { value: "24/7", label: "Health Monitoring" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-100 text-green-800">
            Trusted by Thousands
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their health 
            with Helio Ring's advanced monitoring technology.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-60" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 flex items-center">
                        {testimonial.name}
                        {testimonial.verified && (
                          <Badge className="ml-2 bg-green-100 text-green-800 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to join thousands of satisfied users?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Start Your Health Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Read More Reviews
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 