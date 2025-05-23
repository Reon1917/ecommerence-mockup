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
    <section className="py-20 bg-gradient-to-b from-charcoal-200 via-charcoal-600 to-charcoal-800">
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
            Trusted by Thousands
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-50 mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-charcoal-200 max-w-3xl mx-auto">
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
              className="text-center p-6 bg-charcoal-600/30 backdrop-blur-sm rounded-xl border border-charcoal-600 hover:border-gold-500 transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-charcoal-200 font-medium">{stat.label}</div>
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
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="p-6 h-full bg-charcoal-700/80 backdrop-blur-sm border-charcoal-600 shadow-charcoal-lg hover:shadow-gold hover:border-gold-500 transition-all duration-300 group">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-gold-500 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-charcoal-100 mb-6 leading-relaxed group-hover:text-charcoal-50 transition-colors">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-gold">
                      <span className="text-charcoal-800 font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-50 flex items-center">
                        {testimonial.name}
                        {testimonial.verified && (
                          <Badge className="ml-2 bg-gradient-to-r from-gold-400 to-gold-500 text-charcoal-800 text-xs border-none">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-charcoal-200">{testimonial.role}</div>
                      <div className="text-xs text-charcoal-300">{testimonial.location}</div>
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
          <p className="text-lg text-charcoal-200 mb-6">
            Ready to join thousands of satisfied users?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-gold-lg border-none"
            >
              Start Your Health Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-charcoal-400 hover:border-gold-500 text-charcoal-100 hover:text-charcoal-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-charcoal-600/50"
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