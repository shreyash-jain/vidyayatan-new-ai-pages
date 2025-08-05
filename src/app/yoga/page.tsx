"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { 
  ArrowRight, 
  Users, 
  Video, 
  DollarSign, 
  Heart, 
  Zap,
  Smartphone,
  Monitor,
  Activity,
  Target,
  TrendingUp,
  Award,
  Calendar,
  Star,
  CheckCircle,
  CreditCard,
  ChevronLeft, 
  ChevronRight,
  FileText,
  Bell,
  RefreshCw,
  BookOpen,
  BarChart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DecorativeCircles } from "@/components/ui/decorative-circles";
import React, { useState, useEffect } from "react";

// Currency conversion rates (as of current date - you may want to use a real API)
const CURRENCY_RATES = {
  INR: 1,
  USD: 0.012, // 1 INR = 0.012 USD
  EUR: 0.011, // 1 INR = 0.011 EUR
  GBP: 0.0095, // 1 INR = 0.0095 GBP
  AUD: 0.018, // 1 INR = 0.018 AUD
  CAD: 0.016, // 1 INR = 0.016 CAD
};

const CURRENCY_SYMBOLS = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£',
  AUD: 'A$',
  CAD: 'C$',
};

// Pricing data in INR (base currency)
const PRICING_DATA = {
  yogaCRM: {
    monthly: 30000, // Updated monthly price
    annual: 230000,
    studentLimit: 200,
    scalingPerUser: 200
  }
};





const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Online Yoga Studio Owner",
    content: "The video quality and branding options on Vacademy are incredible. My students feel like they&apos;re getting a premium experience, and the flexible payment models work perfectly for my yoga subscription business.",
    rating: 5,
    avatar: "/assets/employees/riley.png"
  },
  {
    name: "Michael Chen",
    role: "Fitness Bootcamp Creator",
    content: "Managing live vs. on-demand content was always a challenge until I found Vacademy. The platform handles everything seamlessly, and my community engagement has increased by 60%.",
    rating: 5,
    avatar: "/assets/employees/atlas.png"
  },
  {
    name: "Emma Rodriguez",
    role: "Healthy Cooking Instructor",
    content: "The branded experience and community features have transformed my online cooking classes. Students love the personalized approach, and I can focus on creating amazing content instead of managing tech.",
    rating: 5,
    avatar: "/assets/employees/nova.png"
  }
];



  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "Grow your wellness academy",
      subtitle: "Launch and scale your classes from one platform",
      cta: "Start Now",
      ctaLink: "#",
      backgroundImage: "/assets/yoga/hero-image-1.jpg"
    },
    {
      id: 2,
      title: "Your branded platform",
      subtitle: "Build a digital home that reflects your identity",
      cta: "Book a Demo",
      ctaLink: "/booking?source=yoga",
      backgroundImage: "/assets/yoga/hero-image-2.jpg"
    },
    {
      id: 3,
      title: "Made for wellness trainers",
      subtitle: "Deliver content and build thriving communities",
      cta: "Explore Features",
      ctaLink: "#features",
      backgroundImage: "/assets/yoga/hero-image-3.jpg"
    }
  ];

export default function YogaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState('INR');

  // Client-side redirect check for yoga domain
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const pathname = window.location.pathname;
      
      // If we're on yoga domain but not on /yoga path, redirect
      if (hostname.includes('yoga') && pathname !== '/yoga') {
        console.log('🧘 Client-side redirect: yoga domain detected, redirecting to /yoga');
        window.location.href = '/yoga';
        return;
      }
    }
  }, []);

  // Currency conversion function
  const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string) => {
    if (fromCurrency === toCurrency) return amount;
    const inrAmount = amount / CURRENCY_RATES[fromCurrency as keyof typeof CURRENCY_RATES];
    return inrAmount * CURRENCY_RATES[toCurrency as keyof typeof CURRENCY_RATES];
  };

  // Format currency display
  const formatCurrency = (amount: number, currency: string) => {
    const convertedAmount = convertCurrency(amount, 'INR', currency);
    const symbol = CURRENCY_SYMBOLS[currency as keyof typeof CURRENCY_SYMBOLS];
    
    if (currency === 'INR') {
      return `${symbol}${convertedAmount.toLocaleString('en-IN')}`;
    } else {
      return `${symbol}${convertedAmount.toFixed(0)}`;
    }
  };

  // Debug function to check currency switching
  console.log('Selected currency:', selectedCurrency);
  console.log('Monthly price in selected currency:', formatCurrency(PRICING_DATA.yogaCRM.monthly, selectedCurrency));

  // Force re-render when currency changes
  useEffect(() => {
    console.log('Currency changed to:', selectedCurrency);
  }, [selectedCurrency]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center bg-white overflow-hidden">
      <DecorativeCircles />
      
      {/* Breadcrumb Navigation - Fixed at top */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-2 z-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs text-gray-500" style={{ fontFamily: 'var(--font-lato)' }}>
            <Link href="/" className="hover:text-[#ED7424] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#ED7424] font-medium">Yoga Platform</span>
          </div>
        </div>
      </nav>
      
      <Header />
      
      {/* Full-Screen Dynamic Hero Section */}
      <section 
        className="relative h-screen w-full overflow-hidden pt-28"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={heroSlides[currentSlide].backgroundImage}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay - darker on left, lighter on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-4xl px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20">
            <AnimatePresence mode="wait">
                                          <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-3"
              >
                {/* Hero Heading */}
            <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {heroSlides[currentSlide].title}
            </motion.h1>
            
                {/* Subtext */}
            <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-lg sm:max-w-xl leading-relaxed"
                  style={{ fontFamily: 'var(--font-lato)' }}
                >
                  {heroSlides[currentSlide].subtitle}
            </motion.p>

                {/* CTA Button */}
            <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="pt-1"
            >
              <Link
                    href={heroSlides[currentSlide].ctaLink}
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] text-white font-semibold text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {heroSlides[currentSlide].cta}
                    <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>


      </section>

      {/* Find What Moves You Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-br from-[#FFF9F4] to-[#FDEDD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-left"
              style={{ color: "#1E1E1E", fontFamily: 'var(--font-space-grotesk)' }}
            >
              Journey to Your Best Self
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              Curated ways to help your audience feel better, move more, and stay consistent.
            </motion.p>
          </div>

          {/* Cards Grid with Show More Functionality */}
          <div className="relative">
            {/* Navigation Buttons - Top Right */}
            <div className="flex justify-end mb-4">
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    const container = document.getElementById('scroll-container');
                    if (container) {
                      container.scrollBy({ left: -350, behavior: 'smooth' });
                    }
                  }}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5 text-[#ED7424]" />
                </button>
                
                <button 
                  onClick={() => {
                    const container = document.getElementById('scroll-container');
                    if (container) {
                      container.scrollBy({ left: 350, behavior: 'smooth' });
                    }
                  }}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5 text-[#ED7424]" />
                </button>
              </div>
            </div>

                        {/* Cards Horizontal Scroll Container */}
            <div 
              id="scroll-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pr-[160px] md:pr-[192px]"
              style={{ 
                scrollSnapType: 'x mandatory'
              }}
            >
              {/* Live Sessions Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/assets/yoga/live-sessions.jpg" 
                    alt="Live yoga sessions" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <Video className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "#1E1E1E", fontFamily: 'var(--font-space-grotesk)' }}>
                      Live Sessions
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Host real-time yoga classes with ease — connect with your clients through secure and high-quality video sessions.
                  </p>
                </div>
              </motion.div>

              {/* Class Scheduling Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/assets/yoga/class-scheduling.jpg" 
                    alt="Class scheduling and calendar" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "#1E1E1E", fontFamily: 'var(--font-space-grotesk)' }}>
                      Class Scheduling
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Set your weekly calendar, allow clients to book sessions, and manage your time effortlessly with built-in smart scheduling.
                  </p>
                </div>
              </motion.div>

              {/* Pre-recorded Video Library Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/assets/yoga/pre-recorded.jpg" 
                    alt="Video library and content" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "#1E1E1E", fontFamily: 'var(--font-space-grotesk)' }}>
                      Pre-recorded Video Library
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Upload and organize your yoga content — offer flexibility with on-demand videos your clients can access anytime.
                  </p>
                </div>
              </motion.div>

              {/* Client Progress Tracking Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/assets/yoga/client-progress.jpg" 
                    alt="Progress tracking and analytics" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "#1E1E1E", fontFamily: 'var(--font-space-grotesk)' }}>
                      Client Progress Tracking
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Monitor each client&apos;s journey — track attendance, improvements, and milestones over time to personalize sessions.
                  </p>
                </div>
              </motion.div>

              {/* Automated Reminders & Notifications Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/assets/yoga/reminder.jpg" 
                    alt="Automated notifications and reminders" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <Bell className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "#1E1E1E", fontFamily: 'var(--font-space-grotesk)' }}>
                      Automated Reminders & Notifications
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Reduce no-shows with timely session reminders and post-class feedback prompts — all sent automatically.
                  </p>
                </div>
              </motion.div>

              {/* Payments & Plans Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/assets/yoga/payment-plan.jpg" 
                    alt="Payments and subscription plans" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "#1E1E1E", fontFamily: 'var(--font-space-grotesk)' }}>
                      Payments & Plans
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Set your rates, offer subscriptions or one-time sessions, and receive payments directly in your account — stress-free.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Habuild Success Story Section */}
      <section className="w-full py-12 md:py-16 bg-white" id="habuild-success">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}
          >
            How brands like <span className="bg-gradient-to-r from-[#ED7424] to-[#F19146] bg-clip-text text-transparent">Habuild</span> scale impact with the Yoga Platform
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex-shrink-0">
                <Image
                  src="/assets/yoga/habuild.png"
                  alt="Habuild Yoga - Daily live sessions for thousands of learners"
                  width={300}
                  height={200}
                  className="w-full h-48 md:h-64 object-contain"
                />
              </div>
              <div className="md:w-2/3 text-left">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}>
                  Habuild Yoga
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg" style={{ fontFamily: 'var(--font-lato)' }}>
                  When Habuild wanted to inspire thousands to build a consistent yoga habit, they turned to creating this platform. 
                  With our platform, you can also host daily live sessions for over 20,000 members, offer progress tracking, and run scalable 21-day challenges — all under your own brand.
                </p>
                <blockquote className="text-gray-800 italic mb-6 text-lg border-l-4 border-[#ED7424] pl-4" style={{ fontFamily: 'var(--font-lato)' }}>
                  &ldquo;State of the Art online platform helped us create a seamless and impactful learning experience at scale.&rdquo;
                  <br />
                  <span className="font-semibold text-[#ED7424] not-italic">— Team Habuild</span>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-br from-[#FFF9F4] to-[#FDEDD7]" id="stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
            style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}
          >
            Real Results. Tangible Growth.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                highlight: "2 Lakh+",
                title: "Members Grown",
                description: "From 300 to 2 Lakh in 10 months"
              },
              {
                icon: <Target className="h-8 w-8" />,
                highlight: "50%",
                title: "Lead Conversion",
                description: "Increase in conversion rates"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                highlight: "40%",
                title: "Retention Boost",
                description: "Higher student retention"
              },
              {
                icon: <Award className="h-8 w-8" />,
                highlight: "70%",
                title: "Cost Reduction",
                description: "In operational overhead"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-2xl mb-6 mx-auto">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-[#ED7424] mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {stat.highlight}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {stat.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanandham Success Story Section */}
      <section className="w-full py-12 md:py-16" style={{ backgroundColor: '#F8FAF6' }} id="aanandham-success">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
            style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}
          >
            How <span className="bg-gradient-to-r from-[#ED7424] to-[#F19146] bg-clip-text text-transparent">Aanandham</span> scaled holistic well-being with Vacademy
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}>
                  Aanandham Life School
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6" style={{ fontFamily: 'var(--font-lato)' }}>
                  When Aanandham set out to help individuals live more holistically healthy lives, they chose Vacademy to scale their vision. With our platform, they deliver transformative programs that integrate physical, mental, emotional, spiritual, and social well-being — all in one seamless experience.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-6" style={{ fontFamily: 'var(--font-lato)' }}>
                  By using Vacademy&apos;s tools, Aanandham now hosts immersive sessions, tracks individual growth across five dimensions of wellness, and offers guided practices that engage all five senses — helping people feel and live with true bliss under their own brand.
                </p>
                <blockquote className="text-gray-800 italic mb-6 text-lg border-l-4 border-[#ED7424] pl-4" style={{ fontFamily: 'var(--font-lato)' }}>
                  &ldquo;Vacademy helped us bring our philosophy of joyful, holistic living to life — with depth, ease, and scale.&rdquo;
                  <br />
                  <span className="font-semibold text-[#ED7424] not-italic">— Team Aanandham</span>
                </blockquote>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2">
                              <Image
                  src="/assets/yoga/j.png"
                  
                  alt="Aanandham holistic wellness session - peaceful meditation and yoga retreat environment"
                  width={600}
                  height={500}
                  className="w-full h-96 md:h-[500px] object-contain"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Aanandham Showcase Section */}
      <section className="w-full py-20" style={{ backgroundColor: '#F9F9F9' }} id="aanandham-showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description Text */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left" style={{ fontFamily: 'var(--font-lato)' }}>
              We helped Aanandham deliver deeply immersive and sensory-rich programs with beautifully structured course flows, custom-branded sessions, and intuitive progress tracking — all powered by Vacademy.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Image 1 - Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Mock Browser Frame */}
                  <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center text-xs text-gray-500 truncate">
                      aanandham.vacademy.io
                    </div>
                  </div>
                  
                  {/* Screenshot 1 */}
                  <Image
                    src="/assets/yoga/ss-1.png"
                    alt="Aanandham Course Flow Interface - beautifully structured course flows"
                    width={600}
                    height={400}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Image 2 - Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Mock Browser Frame */}
                  <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center text-xs text-gray-500 truncate">
                      aanandham.vacademy.io
                    </div>
                  </div>
                  
                  {/* Screenshot 2 */}
                  <Image
                    src="/assets/yoga/ss-2.png"
                    alt="Aanandham Custom Branded Session - custom-branded sessions"
                    width={600}
                    height={400}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Image 3 - Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group cursor-pointer md:col-span-2 md:max-w-md md:mx-auto"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Mock Browser Frame */}
                  <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center text-xs text-gray-500 truncate">
                      aanandham.vacademy.io
                    </div>
                  </div>
                  
                  {/* Screenshot 3 */}
                  <Image
                    src="/assets/yoga/ss-3.png"
                    alt="Aanandham Progress Tracking Dashboard - intuitive progress tracking"
                    width={600}
                    height={400}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Storytelling Section - Pain Points to Solutions */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-br from-white to-[#FFF9F4]" id="story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Visual Pain Points Section */}
          <div className="text-center mb-12">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}>
                Still doing everything manually?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lato)' }}>
                Wellness trainers like you deserve better than endless paperwork and admin tasks.
              </p>
            </motion.div>

            {/* Pain Points - Horizontal Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FDEDD7] to-[#FFF9F4] rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                  <FileText className="h-10 w-10 text-[#ED7424]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Manual Paperwork
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
                  Endless forms and documentation
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FDEDD7] to-[#FFF9F4] rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                  <CreditCard className="h-10 w-10 text-[#ED7424]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Chasing Payments
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
                  Following up on failed transactions
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FDEDD7] to-[#FFF9F4] rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                  <RefreshCw className="h-10 w-10 text-[#ED7424]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Repetitive Admin Tasks
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
                  Time-consuming daily operations
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <Link
                href="/booking?source=yoga"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ED7424] to-[#F19146] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                <span>Automate Your Studio</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {/* Section Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-[#ED7424] to-[#F19146] mx-auto my-16 rounded-full"
          />

          {/* Solution Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}>
              Let Vacademy take over from here.
            </h3>
          </motion.div>

          {/* Feature Showcase - Alternating Layout */}
          <div className="space-y-16">
            {/* Row 1: Features Left, Image Right */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
            >
              <div className="lg:w-1/2 space-y-8">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Automate all the touch points
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Streamline every interaction with your students from onboarding to engagement.
                  </p>
              </motion.div>
              
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Restart memberships with pre-filled forms
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Seamlessly renew memberships with automated, personalized forms.
                  </p>
              </motion.div>
              </div>
              
              <div className="lg:w-1/2">
              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/assets/yoga/yoga-app.jpg"
                    alt="Automated wellness platform dashboard"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </div>
              </motion.div>
              
            {/* Row 2: Image Left, Features Right */}
              <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center"
            >
              <div className="lg:w-1/2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Handle payments, coupons, and gateways
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Manage all payment processes with multiple gateway support and automated handling.
                  </p>
              </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <Users className="h-6 w-6" />
            </div>
                    <h4 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Launch your referral engine
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Custom rewards, leaderboards, and unique links to grow your community organically.
                  </p>
                </motion.div>
              </div>

              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/assets/yoga/yoga-attendance.jpg"
                    alt="Payment and referral management system"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Row 3: Features Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
            >
              <div className="lg:w-1/2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <Target className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Build a full user funnel
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    From ads to walk-ins, create seamless customer journeys that convert.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                      <Video className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Run demo programs and webinars
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    Host engaging sessions and enrich leads with interactive content.
                  </p>
                </motion.div>
              </div>

              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/assets/yoga/yoga-community.jpg"
                    alt="User funnel and webinar platform"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/booking?source=yoga"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#ED7424] to-[#F19146] text-white font-semibold text-xl rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Try Vacademy Now
              <ChevronRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Value Proposition Section */}
      <section className="w-full py-12 md:py-16 bg-white" id="value-proposition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}
            >
              Why Choose Vacademy?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-lato)' }}
            >
              Unlike generic platforms, Vacademy is built specifically for wellness trainers who want to deliver transformative experiences and build thriving communities.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Easy to Use
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'var(--font-lato)' }}>
                  No technical skills required. Set up your branded platform in minutes and start teaching immediately.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-xl text-white shadow-lg">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Purpose-Built
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'var(--font-lato)' }}>
                  Designed specifically for yoga, fitness, and wellness trainers with features that matter to your business.
                </p>
              </motion.div>
          </div>

            <div className="lg:w-1/2">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/assets/yoga/yoga-trainer.jpg"
                  alt="Vacademy platform dashboard showing easy setup"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>




                    
      {/* Testimonials Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-[#FFF9F4] to-[#FDEDD7]" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                      <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6"
            >
              <Heart className="h-5 w-5 text-[#ED7424]" />
              <span className="text-[#ED7424] font-semibold text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                What Our Users Say
              </span>
                      </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}>
              Trusted by Wellness Trainers Worldwide
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
              From yoga instructors to fitness bootcamp leaders, healthy cooking teachers to meditation guides – trainers across the wellness spectrum choose Vacademy for their specialized needs
                      </p>
                    </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#ED7424] text-[#ED7424]" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-lato)' }}>
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                      </div>
                  <div>
                    <div className="font-semibold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-br from-[#FFF9F4] to-[#FDEDD7] relative z-10" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#FDEDD7] px-6 py-3 rounded-full mb-6"
            >
              <DollarSign className="h-5 w-5 text-[#ED7424]" />
              <span className="text-[#ED7424] font-semibold text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                Pricing Plans
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}>
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8" style={{ fontFamily: 'var(--font-lato)' }}>
              Start with our free trial and scale as you grow. No hidden fees, no surprises.
            </p>

            {/* Currency Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center mb-8 space-y-4 relative z-20"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-2 relative z-30">
                <div className="flex flex-wrap items-center gap-1 justify-center">
                  {Object.keys(CURRENCY_SYMBOLS).map((currency) => (
                    <button
                      key={currency}
                      onClick={() => {
                        console.log('Currency clicked:', currency);
                        setSelectedCurrency(currency);
                      }}
                      className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 relative z-40 ${
                        selectedCurrency === currency
                          ? 'bg-gradient-to-r from-[#ED7424] to-[#F19146] text-white shadow-lg'
                          : 'text-gray-600 hover:text-[#ED7424] hover:bg-gray-50'
                      }`}
                      style={{ fontFamily: 'var(--font-lato)' }}
                    >
                      {CURRENCY_SYMBOLS[currency as keyof typeof CURRENCY_SYMBOLS]} {currency}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center max-w-md" style={{ fontFamily: 'var(--font-lato)' }}>
                * Exchange rates are approximate and may vary. Final pricing will be calculated at the time of purchase.
              </p>
              {/* Debug info */}
              <p className="text-xs text-gray-400 text-center">
                Current currency: {selectedCurrency} | Monthly: {formatCurrency(PRICING_DATA.yogaCRM.monthly, selectedCurrency)}
              </p>
            </motion.div>
          </div>

                    <div className="max-w-4xl mx-auto">
            {/* Complete Yoga Platform Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#ED7424] relative hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ED7424] to-[#F19146] text-white px-6 py-2 rounded-full text-sm font-semibold">
                🧘‍♂️ Complete Yoga Platform
              </div>
              <div className="text-center mb-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2" style={{ fontFamily: 'var(--font-lato)' }}>
                      Monthly Plan
                    </h4>
                    <div className="text-3xl font-bold text-[#ED7424] mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {formatCurrency(PRICING_DATA.yogaCRM.monthly, selectedCurrency)}
                    </div>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                      per month
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2" style={{ fontFamily: 'var(--font-lato)' }}>
                      Annual Plan
                    </h4>
                    <div className="text-3xl font-bold text-[#ED7424] mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {formatCurrency(PRICING_DATA.yogaCRM.annual, selectedCurrency)}
                    </div>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                      per year
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-gray-700 mb-4 text-center" style={{ fontFamily: 'var(--font-lato)' }}>
                  <strong>Includes {PRICING_DATA.yogaCRM.studentLimit} students</strong>
                </p>
                <p className="text-gray-600 text-sm text-center mb-4" style={{ fontFamily: 'var(--font-lato)' }}>
                  Scaling: {formatCurrency(PRICING_DATA.yogaCRM.scalingPerUser, selectedCurrency)}/user/year beyond {PRICING_DATA.yogaCRM.studentLimit} users
                </p>
              </div>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* LMS Features */}
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    <span className="text-2xl">🎓</span>
                    Learning Platform
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>Student & admin dashboards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>Branded portal & mobile app</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>Course system & live classes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>Payments integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>Assessments & certification</span>
                    </li>
                  </ul>
                </div>
                
                {/* CRM Features */}
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    <span className="text-2xl">📊</span>
                    CRM & Management
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>Lead management & follow-ups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>Trial booking system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>CRM dashboard & analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>Smart reminders & alerts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>WhatsApp/email automation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Additional Features */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-bold text-gray-800 mb-4 text-center" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  🚀 Additional Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>24/7 support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>White-label solution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700" style={{ fontFamily: 'var(--font-lato)' }}>API access</span>
                  </div>
                </div>
              </div>
              
              <Link
                href="/booking?source=yoga"
                className="w-full block text-center bg-gradient-to-r from-[#ED7424] to-[#F19146] text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Get Started Now
              </Link>
            </motion.div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  👨‍🏫 Ideal For:
                </h4>
                <ul className="text-gray-700 text-sm space-y-2" style={{ fontFamily: 'var(--font-lato)' }}>
                  <li>• Yoga studios & academies</li>
                  <li>• Wellness trainers</li>
                  <li>• Fitness instructors</li>
                  <li>• Meditation teachers</li>
                  <li>• Health coaches</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  💼 You&apos;ll Get:
                </h4>
                <ul className="text-gray-700 text-sm space-y-2" style={{ fontFamily: 'var(--font-lato)' }}>
                  <li>• Complete digital ecosystem</li>
                  <li>• Branded mobile app</li>
                  <li>• Automated workflows</li>
                  <li>• Payment processing</li>
                  <li>• 24/7 customer support</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  📞 Ready to Scale?
                </h4>
                <p className="text-gray-700 text-sm mb-4" style={{ fontFamily: 'var(--font-lato)' }}>
                  Let&apos;s build your digital yoga ecosystem.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-[#ED7424] font-semibold">📲 WhatsApp: +91-9479742410</p>
                  <div className="text-gray-600">
                    <p>www.vacademy.io/lms</p>
                    <p>www.vidyayatan.com</p>
                    <p>ai.vidyayatan.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-16 bg-white" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}>
              Ready to Transform Your Wellness Business?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
              Get in touch with our team to discuss how Vacademy can help you scale your wellness academy and reach more students.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/booking?source=yoga"
                className="group flex items-center justify-center gap-3 rounded-2xl px-10 py-5 font-semibold text-white shadow-xl transition-all duration-300 text-xl hover:shadow-2xl hover:scale-105 bg-gradient-to-r from-[#ED7424] to-[#F19146]"
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                <span>Book a Demo</span>
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="mailto:hello@vidyayatan.com"
                className="group flex items-center justify-center gap-3 rounded-2xl px-10 py-5 font-semibold transition-all duration-300 text-xl border-2 border-[#ED7424] text-[#ED7424] hover:bg-[#ED7424] hover:text-white"
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                <span>Email Us</span>
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-gray-600 mb-4 text-lg" style={{ fontFamily: 'var(--font-lato)' }}>
                Or call us directly:
              </p>
              <a
                href="tel:+91-9479742410"
                className="text-2xl font-bold text-[#ED7424] hover:text-[#F19146] transition-colors"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                +91-9479742410
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-br from-[#FFF9F4] to-[#FDEDD7]" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
            >
              <span className="text-2xl">❓</span>
              <span className="text-[#ED7424] font-semibold text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                Frequently Asked Questions
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}>
              Everything You Need to Know
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
              Get answers to the most common questions about Vacademy and how it can transform your wellness business.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much does Vacademy cost?",
                answer: "Vacademy starts at ₹30,000/month for the complete yoga platform with 200 students included. Additional users cost ₹200/user/year beyond the base limit."
              },
              {
                question: "What features are included in Vacademy?",
                answer: "Vacademy includes live session management, member management, payment processing, video library, progress tracking, automated reminders, branded mobile app, and analytics dashboard."
              },
              {
                question: "Is Vacademy suitable for yoga instructors?",
                answer: "Yes, Vacademy is specifically designed for yoga instructors, fitness trainers, and wellness professionals. It includes features like class scheduling, client progress tracking, and automated session reminders."
              },
              {
                question: "Can I customize the platform with my branding?",
                answer: "Yes, Vacademy offers white-label solutions where you can customize the platform with your own branding, logo, and colors to create a seamless experience for your students."
              },
              {
                question: "Do you offer support and training?",
                answer: "Yes, we provide 24/7 customer support and comprehensive training to help you get started with Vacademy. Our team will guide you through the setup process and answer any questions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="w-full py-12 md:py-16" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#FDEDD7] px-6 py-3 rounded-full mb-6"
            >
              <CheckCircle className="h-5 w-5 text-[#ED7424]" />
              <span className="text-[#ED7424] font-semibold text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                What You Get
              </span>
            </motion.div>
            
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#2D3748", fontFamily: 'var(--font-space-grotesk)' }}>
                Everything You Need to Scale Your Wellness Business
              </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-[#FDEDD7] px-6 py-3 rounded-full">
                <Monitor className="h-5 w-5 text-[#ED7424]" />
                <span className="text-[#ED7424] font-semibold" style={{ fontFamily: 'var(--font-lato)' }}>Web Platform</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FDEDD7] px-6 py-3 rounded-full">
                <Smartphone className="h-5 w-5 text-[#ED7424]" />
                <span className="text-[#ED7424] font-semibold" style={{ fontFamily: 'var(--font-lato)' }}>Mobile App</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FDEDD7] px-6 py-3 rounded-full">
                <Activity className="h-5 w-5 text-[#ED7424]" />
                <span className="text-[#ED7424] font-semibold" style={{ fontFamily: 'var(--font-lato)' }}>Analytics</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white p-10 rounded-2xl shadow-xl text-center border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="p-6 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-2xl w-fit mx-auto mb-6 shadow-lg">
                <Monitor className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Web Dashboard with Admin CRM
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'var(--font-lato)' }}>
                Your central hub for managing everything for your online business. Track students, payments, sessions, and analytics all in one place.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-10 rounded-2xl shadow-xl text-center border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="p-6 bg-gradient-to-r from-[#ED7424] to-[#F19146] rounded-2xl w-fit mx-auto mb-6 shadow-lg">
                <Smartphone className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Mobile Web App for Students
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'var(--font-lato)' }}>
                Easy access for your online students, anytime, anywhere, on any device. Seamless experience across all platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Footer */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-r from-[#ED7424] to-[#F19146] sticky bottom-0 z-50 shadow-2xl" id="cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-6">
              <div className="flex gap-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                >
                  <Activity className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                >
                  <Heart className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                >
                  <TrendingUp className="h-8 w-8 text-white" />
                </motion.div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Ready to Join the Online Wellness Revolution?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
              The online wellness market is growing faster than ever. Join trainers like Greg O&apos;Gallagher and Rachel Jesien who are building thriving online wellness businesses with Vacademy&apos;s specialized platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/booking?source=yoga"
                className="group flex items-center justify-center gap-3 rounded-2xl px-10 py-5 font-semibold text-[#ED7424] bg-white shadow-xl transition-all duration-300 text-xl hover:shadow-2xl hover:scale-105"
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                <span>Launch Your Online Academy Today!</span>
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/booking?source=yoga"
                className="group flex items-center justify-center gap-3 rounded-2xl px-10 py-5 font-semibold transition-all duration-300 text-xl border-2 border-white text-white hover:bg-white hover:text-[#ED7424]"
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                <span>Request a Personalized Demo</span>
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-white/90 mb-4 text-lg" style={{ fontFamily: 'var(--font-lato)' }}>
                Explore Our Flexible Pricing Tiers
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-base" style={{ fontFamily: 'var(--font-lato)' }}>
                <span>• Starter/Solo for new online instructors</span>
                <span>• Growth/Pro for established instructors</span>
                <span>• Business/Studio for larger online academies</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 