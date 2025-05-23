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
  Star
} from "lucide-react";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleColorChange = (index) => {
    setSelectedColor(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
        {/* Popular Badge */}
        {product.popular && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 left-4 z-10"
          >
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 text-sm font-medium">
              <Star className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
          </motion.div>
        )}

        {/* Product Image Section */}
        <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <motion.div
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              rotateY: isHovered ? 5 : 0 
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative h-full flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedColor}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <Image
                  src={product.colors[selectedColor].image}
                  alt={`${product.name} in ${product.colors[selectedColor].name}`}
                  width={200}
                  height={200}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
                
                {/* Floating Health Indicators */}
                <motion.div
                  animate={{ 
                    y: isHovered ? [-5, 5, -5] : [0, -3, 0],
                    opacity: isHovered ? 1 : 0.7
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
                >
                  <Heart className="w-4 h-4 text-red-500" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: isHovered ? [5, -5, 5] : [0, 3, 0],
                    opacity: isHovered ? 1 : 0.7
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg"
                >
                  <Activity className="w-4 h-4 text-blue-500" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Color Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex space-x-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              {product.colors.map((color, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleColorChange(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                    selectedColor === index 
                      ? 'border-blue-500 shadow-lg' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColor === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-full h-full rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-4 h-4 text-white drop-shadow-lg" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Details */}
        <div className="p-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            <div className="mt-2 text-sm text-gray-500">
              Color: <span className="font-medium text-gray-700">{product.colors[selectedColor].name}</span>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <div className="grid grid-cols-2 gap-3">
              {product.features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="text-xs text-gray-600">{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Specs</h4>
            <div className="space-y-2">
              {product.specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-gray-600">{spec.label}</span>
                  <span className="font-medium text-gray-900">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-900">${product.price}</div>
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
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 transition-all duration-300"
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Hover Overlay Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 pointer-events-none"
        />
      </Card>
    </motion.div>
  );
};

export default ProductCard; 