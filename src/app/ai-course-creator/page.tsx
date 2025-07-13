"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DecorativeCircles } from "@/components/ui/decorative-circles";
import { 
  Bot, 
  FileText, 
  Video, 
  Presentation, 
  Code, 
  ClipboardList,
  Sparkles,
  Zap,
  Brain,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Lightbulb,
  History,
  GitBranch,
  MessageSquare
} from "lucide-react";
import { toast } from "sonner";

const features = [
  {
    icon: FileText,
    title: "Generate PDFs",
    description: "Create professional course materials, handouts, and documentation instantly",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Video,
    title: "YouTube Integration",
    description: "Find and embed relevant educational videos to enhance your courses",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: ClipboardList,
    title: "Smart Assessments",
    description: "Generate quizzes, tests, and interactive assessments automatically",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Presentation,
    title: "Dynamic Presentations",
    description: "Build engaging slide decks with AI-powered content and visuals",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Code,
    title: "Code Examples",
    description: "Generate working code snippets and programming exercises",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: BookOpen,
    title: "Markdown Content",
    description: "Create structured, readable course content in markdown format",
    color: "from-teal-500 to-blue-500"
  }
];

const cursorFeatures = [
  {
    icon: History,
    title: "Course History",
    description: "Navigate through your course creation timeline with ease"
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Go back to any checkpoint and branch your course development"
  },
  {
    icon: MessageSquare,
    title: "AI Chat Interface",
    description: "Natural conversation with AI to build your perfect course"
  },
  {
    icon: Lightbulb,
    title: "Context Awareness",
    description: "AI understands your teaching style and course objectives"
  }
];

export default function AICoursecreatorWaitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/waitlist-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        toast.success(data.message || "Successfully joined the waitlist!");
        setEmail("");
      } else {
        toast.error(data.error || "Failed to join waitlist");
      }
    } catch (error) {
      console.error('Waitlist signup error:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 relative overflow-hidden">
        <DecorativeCircles />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1.5 mb-4">
              <Bot className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                AI-Powered Course Creation Platform
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              The <span className="text-blue-600 dark:text-blue-400">Cursor AI</span> for
              <br />
              Course Creation
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-lato)' }}>
              Generate PDFs, find YouTube videos, create assessments, build presentations, 
              and develop complete courses through natural conversation with AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            {/* UI Screenshot Preview */}
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative max-w-3xl mx-auto"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white/5 backdrop-blur-sm border border-slate-200/20 group">
                  <Image
                    src="/assets/ai-course/screenshot_2025-07-10_at_9.16.01___pm.png"
                    alt="AI Course Creator Interface Preview"
                    width={1200}
                    height={800}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-lato)' }}>
                          Live AI Course Creation
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/80">
                        <Sparkles className="w-3 h-3" />
                        <span className="text-xs" style={{ fontFamily: 'var(--font-lato)' }}>
                          Powered by AI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div id="waitlist-form" className="border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 max-w-sm mx-auto">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Join Early Access
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4" style={{ fontFamily: 'var(--font-lato)' }}>
                Be among the first to experience AI-powered course creation
              </p>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-sm"
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium py-2 text-sm"
                    disabled={isSubmitting}
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-3.5 h-3.5 mr-2 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-3.5 h-3.5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    You&apos;re on the list!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300" style={{ fontFamily: 'var(--font-lato)' }}>
                    We&apos;ll notify you when early access begins.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 px-4 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              See It In Action
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lato)' }}>
              Experience the intuitive interface that makes course creation as simple as having a conversation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Natural Conversation
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300" style={{ fontFamily: 'var(--font-lato)' }}>
                    Simply chat with AI to describe your course vision, and watch it come to life instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center shrink-0">
                  <Brain className="w-3 h-3 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Intelligent Content Generation
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300" style={{ fontFamily: 'var(--font-lato)' }}>
                    AI analyzes your requirements and generates comprehensive course materials, assessments, and resources.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-50 dark:bg-purple-900/30 rounded-full flex items-center justify-center shrink-0">
                  <History className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Version Control & History
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300" style={{ fontFamily: 'var(--font-lato)' }}>
                    Navigate through your course creation timeline and revert to any previous version seamlessly.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-first md:order-last">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-200/50 to-slate-300/50 rounded-lg blur-2xl" />
                <div className="relative bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-lg p-3 border border-slate-200/50 dark:border-slate-700/50">
                  <Image
                    src="/assets/ai-course/screenshot_2025-07-10_at_9.16.01___pm.png"
                    alt="AI Course Creator Interface"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              One AI. Infinite Possibilities.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lato)' }}>
              Create comprehensive educational content through simple conversation. 
              Our AI understands your vision and brings it to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-5 hover:shadow-sm transition-shadow duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-3">
                  <feature.icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300" style={{ fontFamily: 'var(--font-lato)' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursor-like Features */}
      <section className="py-16 px-4 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Cursor-Inspired Workflow
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lato)' }}>
              Experience the same intuitive development flow that revolutionized coding, 
              now for course creation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {cursorFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center shrink-0">
                  <feature.icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300" style={{ fontFamily: 'var(--font-lato)' }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-8"
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-full px-3 py-1.5 mb-4">
              <Zap className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-medium text-amber-700 dark:text-amber-300" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Early Access Coming Soon
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Ready to Transform Education?
            </h2>
            
            <p className="text-base text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-lato)' }}>
              Join thousands of educators who are already waiting to revolutionize 
              how courses are created. Be part of the future of education.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Users className="w-3 h-3" />
                <span style={{ fontFamily: 'var(--font-lato)' }}>2,500+ educators waiting</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                <span style={{ fontFamily: 'var(--font-lato)' }}>Early access in Q1 2024</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 