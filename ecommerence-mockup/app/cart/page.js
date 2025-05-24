"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowLeft, 
  ArrowRight,
  Package,
  Shield,
  Truck
} from "lucide-react";

export default function CartPage() {
  const { items, totalItems, totalPrice, totalSavings, updateQuantity, removeItem, clearCart } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-charcoal-800 via-charcoal-200 to-charcoal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              className="w-24 h-24 mx-auto mb-8 bg-charcoal-100 rounded-full flex items-center justify-center"
            >
              <ShoppingCart className="w-12 h-12 text-charcoal-400" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-charcoal-800 mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
              Discover our revolutionary health tracking rings and start your wellness journey today.
            </p>
            
            <Link href="/models">
              <Button className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 shadow-gold border-none px-8 py-3 text-lg">
                <Package className="w-5 h-5 mr-2" />
                Shop Helio Rings
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-800 via-charcoal-200 to-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal-50 mb-2">Shopping Cart</h1>
              <p className="text-charcoal-200">
                {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            
            <Link href="/models">
              <Button variant="ghost" className="text-charcoal-200 hover:text-gold-400 hover:bg-charcoal-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
          
          {totalSavings > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30"
            >
              <Shield className="w-4 h-4" />
              <span>You're saving ${totalSavings.toFixed(2)} on this order!</span>
            </motion.div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="bg-charcoal-100/80 backdrop-blur-sm border-charcoal-300 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-charcoal-800">Cart Items</h2>
                {items.length > 1 && (
                  <Button
                    variant="ghost"
                    onClick={clearCart}
                    className="text-charcoal-500 hover:text-red-500 hover:bg-red-50 text-sm"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear All
                  </Button>
                )}
              </div>

              <div className="space-y-6">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-4 p-4 bg-charcoal-50 rounded-xl border border-charcoal-200"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gradient-to-br from-charcoal-50 to-charcoal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={`${item.name} in ${item.color}`}
                          className="w-16 h-16 object-contain"
                          width={64}
                          height={64}
                          loading="lazy"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-charcoal-800 mb-1">{item.name}</h3>
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="flex items-center space-x-2">
                            <div
                              className="w-4 h-4 rounded-full border border-charcoal-300"
                              style={{ backgroundColor: item.colorHex }}
                            ></div>
                            <span className="text-sm text-charcoal-600">{item.color}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-charcoal-800">${item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-charcoal-500 line-through">${item.originalPrice}</span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2 bg-charcoal-100 rounded-lg border border-charcoal-200">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0 hover:bg-charcoal-200"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          
                          <span className="w-8 text-center text-sm font-medium text-charcoal-800">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0 hover:bg-charcoal-200"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-charcoal-400 hover:text-red-500 hover:bg-red-50 h-8 w-8 p-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right min-w-[80px]">
                        <div className="font-bold text-charcoal-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        {item.originalPrice && (
                          <div className="text-xs text-green-600">
                            Save ${((item.originalPrice - item.price) * item.quantity).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-charcoal-100/80 backdrop-blur-sm border-charcoal-300 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-charcoal-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-charcoal-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                
                {totalSavings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Savings</span>
                    <span>-${totalSavings.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-charcoal-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                
                <div className="border-t border-charcoal-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-charcoal-800">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                <Button className="w-full bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 shadow-gold border-none py-3 text-lg font-semibold mb-4">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              {/* Trust Signals */}
              <div className="space-y-3 text-sm text-charcoal-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-gold-500" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-gold-500" />
                  <span>Free shipping on all orders</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4 text-gold-500" />
                  <span>2-year warranty included</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 