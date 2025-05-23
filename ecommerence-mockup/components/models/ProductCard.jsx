"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Activity, 
  Droplets, 
  Moon, 
  Zap, 
  Shield,
  Clock,
  Smartphone,
  CheckCircle,
  Star,
  ImageIcon
} from "lucide-react";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleColorChange = (index) => {
    setSelectedColor(index);
    setImageError(false);
  };

  const handleImageError = () => {
    console.log(`Image failed to load: ${product.colors[selectedColor].image}`);
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <Card className="relative overflow-hidden bg-charcoal-100/80 backdrop-blur-sm border-charcoal-300 rounded-2xl shadow-charcoal hover:shadow-charcoal-lg hover:border-gold-400 transition-all duration-300 h-full flex flex-col">
        {/* Subtle Glow Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 0.15 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -inset-px bg-gradient-gold rounded-2xl -z-10"
        />

        {/* Popular Badge - Minimal */}
        {product.popular && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 left-4 z-10"
          >
            <Badge className="bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 px-3 py-1 text-xs font-medium rounded-full border-none shadow-gold">
              Most Popular
            </Badge>
          </motion.div>
        )}

        {/* Product Image Section - Flush with card */}
        <div className="relative h-72 bg-gradient-to-br from-charcoal-50 to-charcoal-100 overflow-hidden rounded-t-2xl">
          <motion.div
            animate={{ 
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative h-full flex items-center justify-center p-6"
          >
            {/* Image Container - Full flush */}
            <div className="relative w-full h-full max-w-64 max-h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedColor}
                  initial={{ 
                    clipPath: "inset(0 100% 0 0)" 
                  }}
                  animate={{ 
                    clipPath: "inset(0 0% 0 0)" 
                  }}
                  exit={{ 
                    clipPath: "inset(0 0% 0 100%)" 
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {imageError ? (
                    <div className="flex flex-col items-center justify-center w-full h-full text-charcoal-400">
                      <ImageIcon className="w-16 h-16 mb-3 text-charcoal-300" />
                      <p className="text-sm font-medium text-center text-charcoal-500">
                        {product.colors[selectedColor].name}
                      </p>
                    </div>
                  ) : (
                    <img
                      src={product.colors[selectedColor].image}
                      alt={`${product.name} in ${product.colors[selectedColor].name}`}
                      className="w-full h-full object-contain"
                      onError={handleImageError}
                      onLoad={() => console.log(`Image loaded: ${product.colors[selectedColor].image}`)}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Minimal Color Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="flex space-x-2 bg-charcoal-700/80 backdrop-blur-sm rounded-full p-2 shadow-charcoal border border-charcoal-600">
              {product.colors.map((color, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleColorChange(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    selectedColor === index 
                      ? 'border-gold-500 ring-2 ring-gold-400/30' 
                      : 'border-charcoal-400 hover:border-charcoal-300'
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColor === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-4 h-4 text-charcoal-50 drop-shadow-sm" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Details - Minimal */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <h3 className="text-xl font-semibold text-charcoal-800 mb-2">{product.name}</h3>
            <p className="text-charcoal-600 text-sm leading-relaxed">{product.description}</p>
            <motion.div 
              key={selectedColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-xs text-charcoal-500"
            >
              Color: <span className="font-medium text-charcoal-700">{product.colors[selectedColor].name}</span>
            </motion.div>
          </motion.div>

          {/* Key Features - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <div className="grid grid-cols-2 gap-2">
              {product.features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center space-x-2 text-xs text-charcoal-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                  <span>{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rating & Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex items-center space-x-3 mb-4"
          >
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) 
                      ? 'text-gold-500 fill-current' 
                      : 'text-charcoal-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm text-charcoal-600">
              {product.rating} ({product.reviews.toLocaleString()} reviews)
            </span>
          </motion.div>

          {/* Pricing - Minimal & Clean */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-charcoal-800">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-charcoal-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-gold-600 font-medium mt-1">
                Save ${product.originalPrice - product.price}
              </div>
            )}
          </motion.div>

          {/* CTA Button - Spacer Auto Push */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-auto"
          >
            <Button 
              className="w-full bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 font-semibold shadow-gold hover:shadow-gold-lg transition-all duration-300 border-none"
              size="lg"
            >
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard; 