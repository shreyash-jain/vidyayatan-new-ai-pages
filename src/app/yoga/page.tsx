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
  Brain, 
  BarChart3,
  Palette,
  Zap,
  MessageCircle,
  Smartphone,
  Monitor,
  Activity,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  Play,
  Calendar,
  Wifi
} from "lucide-react";
import { motion } from "framer-motion";
import { DecorativeCircles } from "@/components/ui/decorative-circles";
import React from "react";

const benefitFeatures = [
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: "Effortless Member Management & Payments",
    subtitle: "Focus on Teaching, Not Online Admin",
    description: "Automate all touch points from registration forms to restarting memberships, effortlessly handling payments, discounts, and coupons using any or many payment gateways. Spend less time chasing online payments and more time perfecting your poses. Vacademy handles all online registrations, renewals, and payments automatically, offering flexible options like recurring subscriptions for ongoing classes, one-time payments for specialized online programs, or package deals for bundled virtual offerings.",
  },
  {
    icon: <Video className="h-8 w-8 text-purple-400" />,
    title: "Seamless Live & Recorded Session Delivery",
    subtitle: "Provide a Professional, Engaging Online Experience Every Time",
    description: "Effortlessly go Live with unique join links for each user, planning sessions with YouTube, Zoom, or Meet links, and even showing recorded sessions as live. The platform automatically marks member attendance for your online classes. Deliver your high-quality video workouts and live stream classes effortlessly, ensuring consistent engagement and a professional look for your online offerings.",
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-400" />,
    title: "Amplify Your Online Reach with Automated Referrals",
    subtitle: "Grow Your Digital Community Organically and Convert More Leads",
    description: "Turn your happy online members into powerful advocates! Run fully customized referral programs with unique links for each user, choosing what referees get from membership days to tangible gifts. You can even run leaderboard campaigns and allow users to collect points. Create a perfect user funnel by integrating all lead sources, from ads APIs to offline entries, and enrich leads with free demo programs, webinars, and events.",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-purple-400" />,
    title: "Deep Community Engagement & Personalization",
    subtitle: "Build a Loyal, Thriving Online Community and Keep Members Motivated Remotely",
    description: "Engage with your online community by sending hyper-personalized DMs on WhatsApp and email, and automated motivation messages. Cultivate a strong, supportive digital environment where students can share progress, offer encouragement, and build camaraderie, enhancing retention and loyalty on their fitness and wellness journeys, even when learning remotely.",
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-400" />,
    title: "Intelligent AI for Personalized Experiences",
    subtitle: "Deliver a Truly Unique and Adaptive Online Experience While Saving Time",
    description: "Leverage cutting-edge AI to offer AI-powered workout recommendations tailored to individual progress, generate personalized meal plans, or suggest adaptive yoga flows based on user preferences and physical capabilities. Furthermore, AI tools can assist in generating compelling marketing content for new online classes, virtual workshops, or membership drives, saving you significant time and resources for your digital content creation.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-purple-400" />,
    title: "Insights for Informed Online Growth",
    subtitle: "Make Data-Driven Decisions to Optimize Your Virtual Offerings and Boost Retention",
    description: "Monitor student engagement with online content, attendance in live virtual sessions, and completion of self-paced modules. Our robust analytics and activity tracking provide critical data for understanding student engagement and optimizing course effectiveness for your online programs. Gain invaluable insights to tailor your online programs, facilitate personalized feedback, enhance student motivation, and boost retention with data-driven adjustments.",
  },
  {
    icon: <Palette className="h-8 w-8 text-purple-400" />,
    title: "Your Brand, Your Way",
    subtitle: "Establish a Strong, Professional Online Presence that Truly Reflects Your Unique Brand",
    description: "The platform allows individual instructors to fully customize the online environment to reflect their unique brand identity. This ensures a seamless, branded user experience across devices. From your professional website to the intuitive student app, build trust and differentiate your online offerings in a competitive market.",
  },
];

const stats = [
  { value: "2 Lakh+", label: "Members Grown", description: "From 300 to 2 Lakh in 10 months", icon: <TrendingUp className="h-8 w-8" /> },
  { value: "50%", label: "Lead Conversion", description: "Increase in conversion rates", icon: <Target className="h-8 w-8" /> },
  { value: "40%", label: "Retention Boost", description: "Higher student retention", icon: <Heart className="h-8 w-8" /> },
  { value: "70%", label: "Cost Reduction", description: "In operational overhead", icon: <Award className="h-8 w-8" /> },
];

export default function YogaPage() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center bg-white overflow-hidden">
      <DecorativeCircles />
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 md:pt-44 pb-16" id="home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.5 } }
            }}
            className="flex flex-col items-center"
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-5xl leading-tight"
              style={{ color: "#495057", fontFamily: 'var(--font-space-grotesk)' }}
            >
              Empower Your Online 
              <span className="bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] bg-clip-text text-transparent"> Yoga & Fitness </span>
              Business: Automate, Grow, and Thrive with Vacademy!
            </motion.h1>
            
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-base md:text-lg max-w-4xl mt-6 leading-relaxed"
              style={{ color: "#495057", fontFamily: 'var(--font-lato)' }}
            >
              Are you a passionate yoga or fitness instructor trying to manage your online classes with endless spreadsheets, DMs for sign-ups, and fragmented payment apps? Imagine reclaiming hours each week, expanding your online reach, and truly focusing on what you love: teaching and transforming lives from anywhere.
            </motion.p>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-base md:text-lg max-w-4xl mt-4 leading-relaxed"
              style={{ color: "#495057", fontFamily: 'var(--font-lato)' }}
            >
              <strong>Vacademy</strong> is your all-in-one Learner and Trainer Management software, designed to simplify your entire online operation, from managing remote members and online payments to delivering seamless live sessions and engaging your digital community.
            </motion.p>
            
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-col sm:flex-row gap-4 relative z-10"
            >
              <Link
                href="/booking"
                className="group flex items-center justify-center gap-2 rounded-full px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 text-base whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 500, boxShadow: '0 4px 24px 0 rgba(160, 163, 232, 0.3)' }}
              >
                <span>Launch Your Online Academy Today!</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/booking"
                className="group flex items-center justify-center gap-2 rounded-full px-8 py-3 font-medium transition-all duration-300 text-base whitespace-nowrap border-2 border-[#a0a3e8] text-[#a0a3e8] hover:bg-[#a0a3e8] hover:text-white"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
              >
                <span>Request a Personalized Demo</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative mt-16 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <Activity className="h-12 w-12 text-white mx-auto mb-2" />
                <p className="text-white/90 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>Live Sessions</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <Users className="h-12 w-12 text-white mx-auto mb-2" />
                <p className="text-white/90 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>Community</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <Target className="h-12 w-12 text-white mx-auto mb-2" />
                <p className="text-white/90 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>Goal Tracking</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <Sparkles className="h-12 w-12 text-white mx-auto mb-2" />
                <p className="text-white/90 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>AI Powered</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="w-full py-16 md:py-24 bg-slate-50" id="success-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#495057", fontFamily: 'var(--font-space-grotesk)' }}>
              Proven Success: The Habuild Story
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-lato)' }}>
              See how we helped Habuild scale their online habit-building platform from 300 to over 2 Lakh members in just 10 months by automating key online operations like payments, unique class links, and member referrals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] rounded-full text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] bg-clip-text text-transparent mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center" style={{ fontFamily: 'var(--font-lato)' }}>
              Habuild faced challenges managing membership growth with manual processes, scaling personalized notifications, tracking online member sessions, and streamlining payments. Our custom software solutions were instrumental in their exponential growth. 
              <strong className="text-[#a0a3e8]"> Vacademy brings the same proven technology and expertise directly to you, the online trainer.</strong>
            </p>
            <div className="text-center mt-6">
              <Link
                href="/blog/10x_growth"
                className="inline-flex items-center gap-2 text-[#a0a3e8] hover:text-[#888ae0] font-medium transition-colors"
                style={{ fontFamily: 'var(--font-lato)' }}
              >
                Read our full case study: Scaling HABUILD from 300 to 20 Lakh Members in 10 Months
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-24" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#495057", fontFamily: 'var(--font-space-grotesk)' }}>
              Transform Your Online Business: Key Benefits for Yoga & Fitness Trainers
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-lato)' }}>
              Vacademy's integrated platform provides a professional, intuitive online environment that addresses the specific needs of yoga and fitness businesses, which thrive on visual demonstration, interactive practice, personalized feedback, and fostering a strong sense of community, especially in a digital setting.
            </p>
          </div>

          <div className="space-y-16">
            {benefitFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {feature.title}
                      </h3>
                      <p className="text-lg font-medium text-[#a0a3e8]" style={{ fontFamily: 'var(--font-lato)' }}>
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
                    {feature.description}
                  </p>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="glass-card p-8 rounded-2xl min-h-[300px] flex items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="flex flex-wrap gap-4 p-4">
                        {index === 0 && (
                          <>
                            <DollarSign className="h-6 w-6 text-white" />
                            <Calendar className="h-6 w-6 text-white" />
                            <Users className="h-6 w-6 text-white" />
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <Play className="h-6 w-6 text-white" />
                            <Video className="h-6 w-6 text-white" />
                            <Wifi className="h-6 w-6 text-white" />
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <TrendingUp className="h-6 w-6 text-white" />
                            <Target className="h-6 w-6 text-white" />
                            <Award className="h-6 w-6 text-white" />
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <MessageCircle className="h-6 w-6 text-white" />
                            <Heart className="h-6 w-6 text-white" />
                            <Activity className="h-6 w-6 text-white" />
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <Brain className="h-6 w-6 text-white" />
                            <Sparkles className="h-6 w-6 text-white" />
                            <Target className="h-6 w-6 text-white" />
                          </>
                        )}
                        {index === 5 && (
                          <>
                            <BarChart3 className="h-6 w-6 text-white" />
                            <TrendingUp className="h-6 w-6 text-white" />
                            <Activity className="h-6 w-6 text-white" />
                          </>
                        )}
                        {index === 6 && (
                          <>
                            <Palette className="h-6 w-6 text-white" />
                            <Sparkles className="h-6 w-6 text-white" />
                            <Award className="h-6 w-6 text-white" />
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-center relative z-10">
                      <motion.div 
                        className="mb-4 p-4 bg-white/20 rounded-full w-fit mx-auto"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {React.cloneElement(feature.icon, { className: "h-12 w-12 text-white" })}
                      </motion.div>
                      <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {feature.title.split(' ').slice(0, 3).join(' ')}
                      </h4>
                      <p className="text-white/90 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                        Professional tools for online yoga & fitness instruction
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="w-full py-16 md:py-24 bg-slate-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#495057", fontFamily: 'var(--font-space-grotesk)' }}>
              What You Get with Vacademy for Your Online Academy
            </h2>
            <div className="flex justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                <Monitor className="h-5 w-5 text-purple-600" />
                <span className="text-purple-700 font-medium text-sm" style={{ fontFamily: 'var(--font-lato)' }}>Web Platform</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                <Smartphone className="h-5 w-5 text-purple-600" />
                <span className="text-purple-700 font-medium text-sm" style={{ fontFamily: 'var(--font-lato)' }}>Mobile App</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                <Activity className="h-5 w-5 text-purple-600" />
                <span className="text-purple-700 font-medium text-sm" style={{ fontFamily: 'var(--font-lato)' }}>Analytics</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Monitor className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Web Dashboard with Admin CRM
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
                Your central hub for managing everything for your online business. Track students, payments, sessions, and analytics all in one place.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Smartphone className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Mobile Web App for Students
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
                Easy access for your online students, anytime, anywhere, on any device. Seamless experience across all platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24" id="cta">
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
                  className="p-3 bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] rounded-full text-white"
                >
                  <Activity className="h-6 w-6" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="p-3 bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] rounded-full text-white"
                >
                  <Heart className="h-6 w-6" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="p-3 bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] rounded-full text-white"
                >
                  <TrendingUp className="h-6 w-6" />
                </motion.div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#495057", fontFamily: 'var(--font-space-grotesk)' }}>
              Ready to Transform Your Online Yoga or Fitness Business?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-lato)' }}>
              Join the growing community of trainers who are embracing efficient, scalable growth for their online offerings with Vacademy. Your next level of success starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/booking"
                className="group flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 text-lg bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 500, boxShadow: '0 4px 24px 0 rgba(160, 163, 232, 0.3)' }}
              >
                <span>Launch Your Online Academy Today!</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/booking"
                className="group flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium transition-all duration-300 text-lg border-2 border-[#a0a3e8] text-[#a0a3e8] hover:bg-[#a0a3e8] hover:text-white"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
              >
                <span>Request a Personalized Demo</span>
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'var(--font-lato)' }}>
                Explore Our Flexible Pricing Tiers
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500" style={{ fontFamily: 'var(--font-lato)' }}>
                <span>• Starter/Solo for new online instructors</span>
                <span>• Growth/Pro for established instructors</span>
                <span>• Business/Studio for larger online academies with multiple instructors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 