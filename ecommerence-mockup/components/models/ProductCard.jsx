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
      <Card className="relative overflow-hidden bg-white border-0 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Subtle Glow Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 0.1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl -z-10"
        />

        {/* Popular Badge - Minimal */}
        {product.popular && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 left-4 z-10"
          >
            <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-full">
              Most Popular
            </Badge>
          </motion.div>
        )}

        {/* Product Image Section - Flush with card */}
        <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden rounded-t-2xl">
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
                    <div className="flex flex-col items-center justify-center w-full h-full text-gray-400">
                      <ImageIcon className="w-16 h-16 mb-3 text-gray-300" />
                      <p className="text-sm font-medium text-center text-gray-500">
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
            <div className="flex space-x-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
              {product.colors.map((color, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleColorChange(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    selectedColor === index 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-gray-300'
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
                      <CheckCircle className="w-4 h-4 text-white drop-shadow-sm" />
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            <motion.div 
              key={selectedColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-xs text-gray-500"
            >
              Color: <span className="font-medium text-gray-700">{product.colors[selectedColor].name}</span>
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
                  className="flex items-center space-x-2 text-xs text-gray-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span>{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specifications - Clean */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 flex-1"
          >
            <div className="space-y-2">
              {product.specs.slice(0, 3).map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.03 }}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-gray-500">{spec.label}</span>
                  <span className="font-medium text-gray-900">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing and CTA - Aligned bottom */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-auto space-y-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold text-gray-900">${product.price}</div>
                {product.originalPrice && (
                  <div className="text-sm text-gray-500 line-through">${product.originalPrice}</div>
                )}
              </div>
              {product.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <Button 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors duration-200"
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border border-gray-200 text-gray-700 hover:bg-gray-50 py-3 rounded-xl font-medium transition-colors duration-200"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard; 