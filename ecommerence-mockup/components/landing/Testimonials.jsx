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
      text: "The heart rate monitoring accuracy is impressive for a ring device. I've compared it with medical-grade equipment and the 5 medical-grade sensors deliver reliable data for my patients' daily health tracking.",
      avatar: "SC",
      verified: true,
    },
    {
      name: "Michael Rodriguez",
      role: "Fitness Trainer",
      location: "Austin, TX",
      rating: 5,
      text: "The 7-day battery life on the Helio Prime is perfect for my clients who don't want to worry about daily charging. The activity monitoring and sleep tracking help me design better training programs.",
      avatar: "MR",
      verified: true,
    },
    {
      name: "Emily Johnson",
      role: "Working Mom",
      location: "Seattle, WA",
      rating: 5,
      text: "I love my Helio Aurora in Rose Gold! The 10-day battery and blood pressure monitoring are game-changers. At only 10g, I forget I'm wearing it, but the health insights are incredible.",
      avatar: "EJ",
      verified: true,
    },
    {
      name: "James Park",
      role: "Tech Executive",
      location: "New York, NY",
      rating: 5,
      text: "The stress monitoring and blood oxygen features on the Helio Aurora help me manage my high-pressure job. The Bluetooth 5.2 connectivity syncs perfectly with my phone for real-time insights.",
      avatar: "JP",
      verified: true,
    },
    {
      name: "Lisa Martinez",
      role: "Swim Coach",
      location: "Miami, FL",
      rating: 5,
      text: "The IP68 waterproof rating is no joke - I wear my Helio Prime in the pool daily. The sleep analysis and heart rate tracking help me optimize both my training and recovery periods.",
      avatar: "LM",
      verified: true,
    },
    {
      name: "David Kim",
      role: "Parent & Runner",
      location: "Portland, OR",
      rating: 5,
      text: "Got the Helio Nova for my 10-year-old in Electric Blue - the parental controls and 5-day battery are perfect. The safe design gives me peace of mind while tracking his activity levels.",
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
        {/* Section Header - Faster timing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

        {/* Stats - Single grouped animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-charcoal-600/30 backdrop-blur-sm rounded-xl border border-charcoal-600 hover:border-gold-500 transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-charcoal-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid - Grouped by rows with ProductCard consistency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: Math.floor(index / 3) * 0.1, // Group by rows
                duration: 0.4 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              <Card className={`relative overflow-hidden bg-gradient-to-br from-charcoal-50 to-charcoal-100 border-charcoal-200 rounded-3xl transition-all duration-300 h-full flex flex-col shadow-lg shadow-charcoal-900/10 hover:shadow-2xl hover:shadow-charcoal-900/20 hover:-translate-y-1 hover:border-gold-300`}>
                
                {/* Quote Icon */}
                <div className="p-8 pb-6">
                  <Quote className="h-8 w-8 text-gold-500 mb-4 opacity-80" />
                  
                  {/* Rating - Consistent with ProductCard */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold-500 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-charcoal-600 mb-6 leading-relaxed line-clamp-4">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* User Info - Bottom section like ProductCard */}
                <div className="mt-auto p-8 pt-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-charcoal-800 font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-charcoal-800 flex items-center">
                        {testimonial.name}
                        {testimonial.verified && (
                          <Badge className="ml-2 bg-gradient-to-r from-gold-400 to-gold-500 text-charcoal-800 text-xs border-none">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-charcoal-600">{testimonial.role}</div>
                      <div className="text-xs text-charcoal-500">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 