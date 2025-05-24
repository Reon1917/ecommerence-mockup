"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
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
  ImageIcon,
  ShoppingCart,
  Check,
  StarHalf
} from "lucide-react";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  
  const { addItem } = useCart();

  // Preload all color variant images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = product.colors.map((color, index) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => {
            setPreloadedImages(prev => new Set([...prev, index]));
            resolve(index);
          };
          img.onerror = reject;
          img.src = color.image;
        });
      });

      try {
        await Promise.allSettled(imagePromises);
      } catch (error) {
        console.log('Some images failed to preload:', error);
      }
    };

    preloadImages();
  }, [product.colors]);

  // Skeleton component for loading state
  const ImageSkeleton = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full max-w-72 max-h-72">
        {/* Skeleton shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-200 to-charcoal-300 rounded-2xl animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
        {/* Skeleton content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-charcoal-400/30 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  // Enhanced wipe animation variants with better timing
  const wipeVariants = {
    initial: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      opacity: 0,
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      transition: {
        clipPath: {
          duration: 0.4,
          ease: "easeOut",
        },
        opacity: {
          duration: 0.2,
          ease: "easeOut",
        },
      },
    },
    exit: {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      opacity: 0,
      transition: {
        clipPath: {
          duration: 0.3,
          ease: "easeIn",
        },
        opacity: {
          duration: 0.1,
          ease: "easeIn",
        },
      },
    },
  };

    const handleColorChange = (index) => {    console.log(`ProductCard - Color change clicked: index ${index}, color: ${product.colors[index].name}, product: ${product.name}`);    if (index !== selectedColor) {      setImageLoading(!preloadedImages.has(index));      setSelectedColor(index);      setImageError(false);      console.log(`ProductCard - State updated: selectedColor=${index}, imageLoading=${!preloadedImages.has(index)}`);    }  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setPreloadedImages(prev => new Set([...prev, selectedColor]));
  };

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Add item to cart
    addItem(product, selectedColor);
    
    // Show success state
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(true);
      
      // Reset success state after 2 seconds
      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
    }, 500);
  };

  // Feature icon mapping
  const getFeatureIcon = (featureName) => {
    const iconMap = {
      'Heart Rate': Heart,
      'Blood Pressure': Activity,
      'Blood Oxygen': Droplets,
      'Sleep Tracking': Moon,
      'Sleep Analysis': Moon,
      'Sleep Monitor': Moon,
      'Stress Monitor': Zap,
      'Activity Monitor': Activity,
      'Activity Track': Activity,
      'Waterproof': Shield,
      'Safe Design': Shield,
      '7-Day Battery': Clock,
      '10-Day Battery': Clock,
      '5-Day Battery': Clock,
      'Smart Sync': Smartphone,
      'Parent Control': Shield
    };
    
    return iconMap[featureName] || Activity;
  };

  // Star rating component with half-star support
  const StarRating = ({ rating, size = 16 }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-0.5">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <Star 
            key={`full-${i}`} 
            className={`h-${size/4} w-${size/4} text-gold-500 fill-current`}
            style={{ width: size, height: size }}
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <div className="relative" style={{ width: size, height: size }}>
            <Star 
              className={`absolute inset-0 h-${size/4} w-${size/4} text-charcoal-300`}
              style={{ width: size, height: size }}
            />
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${size/2}px` }}
            >
              <Star 
                className={`h-${size/4} w-${size/4} text-gold-500 fill-current`}
                style={{ width: size, height: size }}
              />
            </div>
          </div>
        )}
        
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star 
            key={`empty-${i}`} 
            className={`h-${size/4} w-${size/4} text-charcoal-300`}
            style={{ width: size, height: size }}
          />
        ))}
      </div>
    );
  };

  const currentColor = product.colors[selectedColor];

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <Card className={`relative overflow-hidden bg-gradient-to-br from-charcoal-50 to-charcoal-100 border-charcoal-200 rounded-3xl transition-all duration-300 h-full flex flex-col ${
        isHovered ? 'shadow-2xl shadow-charcoal-900/20 -translate-y-1 border-gold-300' : 'shadow-lg shadow-charcoal-900/10'
      }`}>
        
        {/* Popular Badge - Top-left inside padding */}
        {product.popular && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-6 left-6 z-20"
          >
            <Badge className="bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 px-3 py-1.5 text-xs font-semibold rounded-full border-none shadow-lg">
              Most Popular
            </Badge>
          </motion.div>
        )}

        {/* Product Image Section - Enhanced with skeleton loading */}
        <div className="relative h-80 bg-gradient-to-br from-white to-charcoal-50 overflow-hidden">
          {/* Subtle inset shadow for depth */}
          <div className="absolute inset-0 shadow-inner shadow-charcoal-900/5 rounded-t-3xl"></div>
          
          <motion.div
            animate={{ 
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative h-full flex items-center justify-center p-8"
          >
            {/* Image Container with enhanced loading states */}
            <div className="relative w-full h-full max-w-72 max-h-72 overflow-hidden">
              {/* Show skeleton while loading and image not preloaded */}
              {imageLoading && !preloadedImages.has(selectedColor) && (
                <div className="absolute inset-0 z-10">
                  <ImageSkeleton />
                </div>
              )}
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${product.id}-${selectedColor}`}
                  variants={wipeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {imageError ? (
                    <div className="flex flex-col items-center justify-center w-full h-full text-charcoal-400">
                      <ImageIcon className="w-20 h-20 mb-4 text-charcoal-300" />
                      <p className="text-sm font-medium text-center text-charcoal-500">
                        {currentColor.name}
                      </p>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={currentColor.image}
                        alt={`${product.name} in ${currentColor.name}`}
                        width={288}
                        height={288}
                        className="w-full h-full object-contain drop-shadow-lg relative z-10"
                        onError={handleImageError}
                        onLoad={handleImageLoad}
                        loading={selectedColor === 0 ? "eager" : "lazy"}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QFLQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        priority={selectedColor === 0}
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Card Content - Improved spacing and typography */}
        <div className="p-8 flex-1 flex flex-col space-y-6">
          
          {/* Product Header */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-charcoal-800 leading-tight">{product.name}</h3>
            <p className="text-sm text-charcoal-600 leading-relaxed line-clamp-2">{product.description}</p>
          </div>

          {/* Color Swatches - Below image, clearly labeled */}
          <div className="space-y-3">
            <p className="text-xs font-medium text-charcoal-500 uppercase tracking-wide">
              Color: <span className="text-charcoal-700 normal-case">{currentColor.name}</span>
            </p>
            <div className="flex space-x-3">
              {product.colors.map((color, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleColorChange(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-10 h-10 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 ${
                    selectedColor === index 
                      ? 'border-gold-500 ring-2 ring-gold-400/30' 
                      : 'border-charcoal-300 hover:border-charcoal-400'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name} color`}
                >
                  {selectedColor === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-5 h-5 text-white drop-shadow-md" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Key Features - Icon-based, two columns */}
          <div className="space-y-3">
            <h4 className="text-xs font-medium text-charcoal-500 uppercase tracking-wide">Key Features</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {product.features.slice(0, 4).map((feature, index) => {
                const IconComponent = getFeatureIcon(feature.name);
                return (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="flex items-center space-x-2 text-xs text-charcoal-600"
                  >
                    <IconComponent className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span className="truncate">{feature.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Rating & Reviews - Improved star component */}
          <div className="flex items-center space-x-3">
            <StarRating rating={product.rating} size={16} />
            <span className="text-sm text-charcoal-600 font-medium">
              {product.rating}
            </span>
            <span className="text-sm text-charcoal-500">
              • {product.reviews.toLocaleString()} reviews
            </span>
          </div>

          {/* Pricing - Consolidated offer block */}
          <div className="space-y-2">
            <div className="flex items-baseline space-x-3">
              <span className="text-2xl font-bold text-charcoal-800">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-charcoal-400 line-through font-light">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gold-600 font-semibold">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </div>
            )}
          </div>

          {/* Add to Cart Button - Enhanced with proper padding and states */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-auto pt-2"
          >
            <Button 
              onClick={handleAddToCart}
              disabled={isAdding || justAdded}
              className={`w-full font-semibold text-base px-6 py-3 h-12 rounded-xl transition-all duration-300 border-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 ${
                justAdded 
                  ? 'bg-green-600 hover:bg-green-600 text-white shadow-lg' 
                  : 'bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-charcoal-800 shadow-lg hover:shadow-xl'
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              <AnimatePresence mode="wait">
                {isAdding ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <div className="w-4 h-4 border-2 border-charcoal-800 border-t-transparent rounded-full animate-spin"></div>
                    <span>Adding...</span>
                  </motion.div>
                ) : justAdded ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Check className="w-5 h-5" />
                    <span>Added to Cart!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard; 