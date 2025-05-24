"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/cart-context";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  CreditCard, 
  Shield, 
  Truck,
  Package,
  User,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Lock,
  CheckCircle
} from "lucide-react";

export default function CheckoutPage() {
  const { items, totalItems, totalPrice, totalSavings, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing same as shipping
    billingDifferent: false
  });

  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    }

    if (step === 2) {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      else if (formData.cardNumber.replace(/\s/g, '').length < 16) newErrors.cardNumber = 'Card number is invalid';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
      else if (formData.cvv.length < 3) newErrors.cvv = 'CVV is invalid';
      if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(2)) return;

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Generate order number
    const orderNum = 'HL' + Date.now().toString().slice(-6);
    setOrderNumber(orderNum);
    
    // Clear cart and show success
    clearCart();
    setIsProcessing(false);
    setOrderComplete(true);
  };

  // Redirect to cart if empty
  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-charcoal-800 via-charcoal-200 to-charcoal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-charcoal-800 mb-4">No Items to Checkout</h1>
            <p className="text-xl text-charcoal-600 mb-8">
              Add some items to your cart before proceeding to checkout.
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

  // Order Complete Screen
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-charcoal-800 via-charcoal-200 to-charcoal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-charcoal-800 mb-4">Order Confirmed!</h1>
            <p className="text-xl text-charcoal-600 mb-2">
              Thank you for your purchase, {formData.firstName}!
            </p>
            <p className="text-lg text-charcoal-500 mb-8">
              Order #{orderNumber}
            </p>

            <Card className="bg-charcoal-100/80 backdrop-blur-sm border-charcoal-300 rounded-2xl p-6 mb-8 max-w-md mx-auto">
              <h3 className="font-semibold text-charcoal-800 mb-4">What's Next?</h3>
              <div className="space-y-3 text-sm text-charcoal-600">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gold-500" />
                  <span>Confirmation email sent to {formData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="w-4 h-4 text-gold-500" />
                  <span>Your order will be processed within 1-2 business days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-4 h-4 text-gold-500" />
                  <span>Free shipping to {formData.address}</span>
                </div>
              </div>
            </Card>

            <div className="space-x-4">
              <Link href="/models">
                <Button className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 shadow-gold border-none px-6 py-3">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-charcoal-300 text-charcoal-600 hover:bg-charcoal-50 px-6 py-3">
                  Back to Home
                </Button>
              </Link>
            </div>
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
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal-50 mb-2">Checkout</h1>
              <p className="text-charcoal-200">
                Complete your order for {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </p>
            </div>
            
            <Link href="/cart">
              <Button variant="ghost" className="text-charcoal-200 hover:text-gold-400 hover:bg-charcoal-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cart
              </Button>
            </Link>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center space-x-4 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step < currentStep 
                    ? 'bg-green-600 text-white' 
                    : step === currentStep 
                      ? 'bg-gradient-gold text-charcoal-800' 
                      : 'bg-charcoal-300 text-charcoal-600'
                }`}>
                  {step < currentStep ? <Check className="w-4 h-4" /> : step}
                </div>
                <span className={`ml-2 text-sm ${
                  step <= currentStep ? 'text-charcoal-100' : 'text-charcoal-400'
                }`}>
                  {step === 1 ? 'Shipping' : step === 2 ? 'Payment' : 'Review'}
                </span>
                {step < 3 && <ArrowRight className="w-4 h-4 mx-4 text-charcoal-400" />}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card className="bg-charcoal-100/80 backdrop-blur-sm border-charcoal-300 rounded-2xl p-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Shipping Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-2 mb-6">
                      <User className="w-5 h-5 text-gold-500" />
                      <h2 className="text-xl font-semibold text-charcoal-800">Shipping Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="firstName" className="text-charcoal-700">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`mt-1 ${errors.firstName ? 'border-red-500' : ''}`}
                          placeholder="John"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName" className="text-charcoal-700">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={`mt-1 ${errors.lastName ? 'border-red-500' : ''}`}
                          placeholder="Doe"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="email" className="text-charcoal-700">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-charcoal-700">Phone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="address" className="text-charcoal-700">Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className={`mt-1 ${errors.address ? 'border-red-500' : ''}`}
                        placeholder="123 Main Street"
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div>
                        <Label htmlFor="city" className="text-charcoal-700">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className={`mt-1 ${errors.city ? 'border-red-500' : ''}`}
                          placeholder="New York"
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="state" className="text-charcoal-700">State</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          className={`mt-1 ${errors.state ? 'border-red-500' : ''}`}
                          placeholder="NY"
                        />
                        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="zipCode" className="text-charcoal-700">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          className={`mt-1 ${errors.zipCode ? 'border-red-500' : ''}`}
                          placeholder="10001"
                        />
                        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        onClick={nextStep}
                        className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 shadow-gold border-none px-6 py-2"
                      >
                        Continue to Payment
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Payment Information */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-2 mb-6">
                      <CreditCard className="w-5 h-5 text-gold-500" />
                      <h2 className="text-xl font-semibold text-charcoal-800">Payment Information</h2>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="cardNumber" className="text-charcoal-700">Card Number</Label>
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                        className={`mt-1 ${errors.cardNumber ? 'border-red-500' : ''}`}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="expiryDate" className="text-charcoal-700">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                          className={`mt-1 ${errors.expiryDate ? 'border-red-500' : ''}`}
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                        {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="cvv" className="text-charcoal-700">CVV</Label>
                        <Input
                          id="cvv"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                          className={`mt-1 ${errors.cvv ? 'border-red-500' : ''}`}
                          placeholder="123"
                          maxLength={4}
                        />
                        {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                      </div>
                    </div>

                    <div className="mb-8">
                      <Label htmlFor="cardName" className="text-charcoal-700">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                        className={`mt-1 ${errors.cardName ? 'border-red-500' : ''}`}
                        placeholder="John Doe"
                      />
                      {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        onClick={prevStep}
                        variant="outline"
                        className="border-charcoal-300 text-charcoal-600 hover:bg-charcoal-50 px-6 py-2"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Shipping
                      </Button>
                      
                      <Button 
                        onClick={nextStep}
                        className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 shadow-gold border-none px-6 py-2"
                      >
                        Review Order
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Review Order */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-2 mb-6">
                      <CheckCircle className="w-5 h-5 text-gold-500" />
                      <h2 className="text-xl font-semibold text-charcoal-800">Review Your Order</h2>
                    </div>

                    {/* Shipping Summary */}
                    <div className="mb-6 p-4 bg-charcoal-50 rounded-lg">
                      <h3 className="font-medium text-charcoal-800 mb-2">Shipping Address</h3>
                      <p className="text-charcoal-600 text-sm">
                        {formData.firstName} {formData.lastName}<br />
                        {formData.address}<br />
                        {formData.city}, {formData.state} {formData.zipCode}<br />
                        {formData.email} • {formData.phone}
                      </p>
                    </div>

                    {/* Payment Summary */}
                    <div className="mb-8 p-4 bg-charcoal-50 rounded-lg">
                      <h3 className="font-medium text-charcoal-800 mb-2">Payment Method</h3>
                      <p className="text-charcoal-600 text-sm">
                        •••• •••• •••• {formData.cardNumber.slice(-4)}<br />
                        {formData.cardName}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        onClick={prevStep}
                        variant="outline"
                        className="border-charcoal-300 text-charcoal-600 hover:bg-charcoal-50 px-6 py-2"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Payment
                      </Button>
                      
                      <Button 
                        onClick={handleSubmit}
                        disabled={isProcessing}
                        className="bg-gradient-gold hover:from-gold-600 hover:to-gold-500 text-charcoal-50 shadow-gold border-none px-8 py-2"
                      >
                        {isProcessing ? (
                          <>
                            <div className="w-4 h-4 border-2 border-charcoal-50 border-t-transparent rounded-full animate-spin mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            Complete Order
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-charcoal-100/80 backdrop-blur-sm border-charcoal-300 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-charcoal-800 mb-6">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-charcoal-50 to-charcoal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-contain"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-charcoal-800 truncate">{item.name}</p>
                      <p className="text-xs text-charcoal-600">{item.color} • Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium text-charcoal-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 mb-6 border-t border-charcoal-200 pt-4">
                <div className="flex justify-between text-charcoal-600">
                  <span>Subtotal</span>
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
                
                <div className="border-t border-charcoal-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-charcoal-800">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="space-y-3 text-sm text-charcoal-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-gold-500" />
                  <span>256-bit SSL encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-gold-500" />
                  <span>Free 2-day shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4 text-gold-500" />
                  <span>30-day return policy</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 