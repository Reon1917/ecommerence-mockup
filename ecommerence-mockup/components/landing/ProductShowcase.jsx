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
  Moon,
  Zap, 
  Shield, 
  Smartphone, 
  Clock, 
  Palette,
  Award,
  CheckCircle,
  ShoppingCart,
  Check,
  ImageIcon,
  Star
} from "lucide-react";

const ProductShowcase = () => {
  // Use the same product data structure as models page
  const featuredProduct = {
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
  };

  const [selectedColor, setSelectedColor] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  
  const { addItem } = useCart();

  // Preload all color variant images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = featuredProduct.colors.map((color, index) => {
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
  }, [featuredProduct.colors]);

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

  // Enhanced wipe animation variants with better timing - Synced with ProductCard
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

  const handleColorChange = (index) => {
    console.log(`ProductShowcase - Color change clicked: index ${index}, color: ${featuredProduct.colors[index].name}`);
    if (index !== selectedColor) {
      setImageLoading(!preloadedImages.has(index));
      setSelectedColor(index);
      setImageError(false);
      console.log(`ProductShowcase - State updated: selectedColor=${index}, imageLoading=${!preloadedImages.has(index)}`);
    }
  };

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
    addItem(featuredProduct, selectedColor);
    
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

  const currentColor = featuredProduct.colors[selectedColor];

  return (
    <section className="py-20 bg-gradient-to-b from-charcoal-400 via-charcoal-100 to-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Product Image with Interactive Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-charcoal-50 to-charcoal-100 border-charcoal-200 rounded-3xl p-8">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-3xl blur-3xl opacity-8 transform scale-110 -z-10"></div>
              
              {/* Product Image with enhanced loading states */}
              <div className="relative h-80 bg-gradient-to-br from-white to-charcoal-50 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 shadow-inner shadow-charcoal-900/5"></div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.4 }
                  }}
                  className="relative h-full flex items-center justify-center p-8"
                >
                  <div className="relative w-full h-full max-w-72 max-h-72 overflow-hidden">
                    {/* Show skeleton while loading and image not preloaded */}
                    {imageLoading && !preloadedImages.has(selectedColor) && (
                      <div className="absolute inset-0 z-10">
                        <ImageSkeleton />
                      </div>
                    )}
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${featuredProduct.id}-${selectedColor}`}
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
                                                    </div>                        ) : (                          <Image                            src={currentColor.image}                            alt={`${featuredProduct.name} in ${currentColor.name}`}                            width={288}                            height={288}                            className="w-full h-full object-contain drop-shadow-lg"                            onError={handleImageError}                            onLoad={handleImageLoad}                            loading={selectedColor === 0 ? "eager" : "lazy"}                            placeholder="blur"                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QFLQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="                            priority={selectedColor === 0}                          />                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>

              {/* Color Swatches - Interactive */}
              <div className="space-y-3">
                <p className="text-xs font-medium text-charcoal-500 uppercase tracking-wide">
                  Color: <span className="text-charcoal-700 normal-case">{currentColor.name}</span>
                </p>
                <div className="flex space-x-3">
                  {featuredProduct.colors.map((color, index) => (
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
            </Card>
          </motion.div>

          {/* Right - Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-800 border-none shadow-gold">
                Essential Design
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-800 mb-6">
                {featuredProduct.name}
                <span className="block bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">for Men</span>
              </h2>
              <p className="text-xl text-charcoal-600 leading-relaxed">
                {featuredProduct.description}
              </p>
            </div>

            {/* Rating & Reviews - Consistent with ProductCard */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(featuredProduct.rating) ? 'text-gold-500 fill-current' : 'text-charcoal-300'}`}
                  />
                ))}
              </div>
              <span className="text-lg text-charcoal-600 font-medium">
                {featuredProduct.rating}
              </span>
              <span className="text-charcoal-500">
                • {featuredProduct.reviews.toLocaleString()} reviews
              </span>
            </div>

            {/* Key Features - Consistent with ProductCard */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-charcoal-500 uppercase tracking-wide">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {featuredProduct.features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-charcoal-600"
                  >
                    <feature.icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span className="text-sm">{feature.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specifications Cards - Consistent styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredProduct.specs.slice(0, 4).map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="p-4 border-charcoal-300 bg-gradient-to-br from-charcoal-50 to-charcoal-100 hover:shadow-lg hover:border-gold-400 transition-all duration-300 group">
                    <div>
                      <h4 className="font-semibold text-charcoal-800 text-sm mb-1 group-hover:text-charcoal-900 transition-colors">
                        {spec.label}
                      </h4>
                      <p className="text-sm text-charcoal-600 group-hover:text-charcoal-700 transition-colors">
                        {spec.value}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Pricing - Consistent with ProductCard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-bold text-charcoal-800">${featuredProduct.price}</span>
                {featuredProduct.originalPrice && (
                  <span className="text-lg text-charcoal-500 line-through">${featuredProduct.originalPrice}</span>
                )}
              </div>
              {featuredProduct.originalPrice && (
                <div className="text-gold-600 font-semibold">
                  Save ${featuredProduct.originalPrice - featuredProduct.price}
                </div>
              )}
            </motion.div>

            {/* Add to Cart Button - Consistent with ProductCard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Button 
                onClick={handleAddToCart}
                disabled={isAdding || justAdded}
                className={`w-full font-semibold text-lg px-8 py-4 h-14 rounded-xl transition-all duration-300 border-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 ${
                  justAdded 
                    ? 'bg-green-600 hover:bg-green-600 text-white shadow-lg' 
                    : 'bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-charcoal-800 shadow-lg hover:shadow-xl'
                }`}
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
                      <div className="w-5 h-5 border-2 border-charcoal-800 border-t-transparent rounded-full animate-spin"></div>
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

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 pt-4 border-t border-charcoal-300"
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-gold-500" />
                <span className="text-sm text-charcoal-600">2-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-gold-500" />
                <span className="text-sm text-charcoal-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gold-500" />
                <span className="text-sm text-charcoal-600">30-Day Returns</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 