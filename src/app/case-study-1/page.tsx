"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  BarChart3,
  BookOpen,
  Video,
  FileText,
  MessageSquare,
  Monitor,
  GraduationCap,
  Globe,
  Clock,
  Award,
  Zap,
  Handshake,
  Calendar,
  MapPin,
  Building2,
  Lightbulb,
  Rocket
} from "lucide-react";
import { VacademyHeaderSimple } from "@/components/layout/vacademy-header-simple";
import { QuoteHighlight } from "@/components/blog/quote-highlight";

export default function CaseStudy1() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate-id');
            if (id) {
              setVisibleElements(prev => new Set(prev).add(id));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const isVisible = (id: string) => visibleElements.has(id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <VacademyHeaderSimple />
      
      {/* Hero Section with SSDC Logo */}
      <section className="bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl">
            <div 
              data-animate-id="hero-badge"
              className={`inline-flex items-center gap-2 bg-orange-50 text-[#ec7524] px-3 py-1.5 rounded-full text-sm font-medium mb-4 border border-orange-100 transition-all duration-1000 ${
                isVisible('hero-badge') ? 'animate-reveal animate-shimmer opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <BookOpen className="w-4 h-4 animate-spin-slow" />
              Case Study
            </div>
            
            {/* Hero Content with Logo on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center">
              <div 
                data-animate-id="hero-content"
                className={`transition-all duration-1000 delay-200 ${
                  isVisible('hero-content') ? 'animate-slide-in-left opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <h1 
                  data-animate-id="hero-title"
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3 transition-all duration-1000 delay-400 ${
                    isVisible('hero-title') ? 'animate-reveal-text animate-typewriter opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  How Vidyayatan Technologies Empowered 
                  <br />
                  <span className="text-[#ec7524] animate-gradient-text">Sri Sai Das Coaching Classes</span>
                  <br />
                  to Revolutionise Hybrid Learning with Vacademy
                </h1>
                
                <p 
                  data-animate-id="hero-description"
                  className={`text-lg text-gray-600 mb-4 leading-relaxed transition-all duration-1000 delay-600 ${
                    isVisible('hero-description') ? 'animate-fade-in-up animate-shimmer-text opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Discover how SSDC transformed their traditional coaching classes into a modern, 
                  hybrid learning powerhouse using Vacademy&apos;s comprehensive LMS platform.
                </p>
                
                <div 
                  data-animate-id="hero-buttons"
                  className={`flex transition-all duration-1000 delay-800 ${
                    isVisible('hero-buttons') ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Link 
                    href="https://www.vacademy.io/book-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ec7524] text-white px-6 sm:px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#d66a20] transition-all duration-200 shadow-sm hover:scale-105 animate-pulse-slow animate-glow"
                  >
                    <span>Book a Demo</span>
                    <ArrowRight className="w-4 h-4 animate-bounce-x" />
                  </Link>
                </div>
              </div>
              
              {/* SSDC Logo on Right - Bigger */}
              <div 
                data-animate-id="hero-logo"
                className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                  isVisible('hero-logo') ? 'animate-slide-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-200 hover:scale-105 transition-transform duration-300 animate-float animate-rotate-slow">
                  <Image
                    src="/assets/case-studies/ssdc/Sri sai das classes logo.jpeg"
                    alt="Sri Sai Das Coaching Classes Logo"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain animate-pulse-slow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Partnership Showcase Section */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            data-animate-id="partnership-header"
            className={`text-center mb-8 transition-all duration-1000 ${
              isVisible('partnership-header') ? 'animate-reveal opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-[#ec7524] px-6 py-3 rounded-full text-sm font-medium mb-4 border border-orange-100 shadow-sm animate-pulse-slow animate-shimmer">
              <Handshake className="w-5 h-5 animate-bounce" />
              Strategic Partnership Success
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 animate-reveal-text animate-typewriter">
              Vidyayatan & SSDC: A Transformative Collaboration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-shimmer-text">
               This case study showcases how strategic partnership and innovative technology 
               can revolutionize educational delivery in traditional coaching environments.
            </p>
          </div>
          
          {/* Partnership Visual */}
          <div 
            data-animate-id="partnership-visual"
            className={`bg-white rounded-3xl p-4 sm:p-6 shadow-lg border border-orange-100 mb-8 transition-all duration-1000 delay-200 ${
              isVisible('partnership-visual') ? 'animate-reveal-up animate-morph opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mb-6">
              <div 
                data-animate-id="ssdc-logo"
                className={`text-center flex-1 transition-all duration-1000 delay-300 ${
                  isVisible('ssdc-logo') ? 'animate-slide-in-left opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="w-20 h-20 bg-white rounded-2xl p-3 mx-auto mb-3 border border-gray-200 shadow-sm animate-float-slow animate-glow">
                  <Image
                    src="/assets/case-studies/ssdc/Sri sai das classes logo.jpeg"
                    alt="SSDC Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain animate-pulse-slow"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 animate-fade-in-up">Sri Sai Das Coaching Classes</h3>
                <p className="text-gray-600 text-sm animate-fade-in-up">Established Education Partner</p>
              </div>
              
              <div 
                data-animate-id="innovation-center"
                className={`flex flex-col items-center mx-0 sm:mx-6 transition-all duration-1000 delay-500 ${
                  isVisible('innovation-center') ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <div className="w-12 h-12 bg-[#ec7524] rounded-full flex items-center justify-center mb-1 animate-bounce animate-glow">
                  <Rocket className="w-6 h-6 text-white animate-spin-slow" />
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#ec7524] animate-pulse">+</div>
                  <div className="text-sm text-gray-600 font-medium animate-fade-in-up">Innovation</div>
                </div>
              </div>
              
              <div 
                data-animate-id="vacademy-logo"
                className={`text-center flex-1 transition-all duration-1000 delay-400 ${
                  isVisible('vacademy-logo') ? 'animate-slide-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="w-20 h-20 bg-white rounded-2xl p-3 mx-auto mb-3 border border-gray-200 shadow-sm animate-float-slow animate-glow">
                  <Image
                    src="/Vacademy Logo Short.svg"
                    alt="Vacademy Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain animate-pulse-slow"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 animate-fade-in-up">Vacademy Platform</h3>
                <p className="text-gray-600 text-sm animate-fade-in-up">Advanced LMS Technology</p>
              </div>
            </div>
            
            <div 
              data-animate-id="partnership-results"
              className={`text-center transition-all duration-1000 delay-600 ${
                isVisible('partnership-results') ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 animate-reveal-text">Transformative Results</h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto animate-shimmer-text">
                The collaboration between SSDC&apos;s educational expertise and Vacademy&apos;s innovative 
                technology platform created a powerful hybrid learning solution that benefits 
                both students and teachers, setting a new standard for educational excellence.
              </p>
            </div>
          </div>
          
          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: 'benefit-1', icon: Building2, title: "Proven Track Record", description: "Established coaching institute with years of excellence in K-10 education" },
              { id: 'benefit-2', icon: Lightbulb, title: "Innovation Partnership", description: "Strategic collaboration combining educational expertise with cutting-edge technology" },
              { id: 'benefit-3', icon: GraduationCap, title: "Academic Excellence", description: "Consistent top ranks in 8th to 10th grade examinations" }
            ].map((benefit, index) => (
              <div 
                key={benefit.id}
                data-animate-id={benefit.id}
                className={`bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:scale-105 transition-all duration-1000 delay-${(index + 1) * 200} ${
                  isVisible(benefit.id) ? 'animate-reveal-up animate-morph opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{animationDelay: `${(index + 1) * 0.1}s`}}
              >
                <div className="w-10 h-10 bg-[#ec7524] rounded-lg flex items-center justify-center mb-3 animate-pulse-slow animate-glow">
                  <benefit.icon className="w-5 h-5 text-white animate-bounce" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 animate-fade-in-up">{benefit.title}</h3>
                <p className="text-gray-600 text-sm animate-shimmer-text">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSDC Event Image Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            data-animate-id="events-header"
            className={`text-center mb-8 transition-all duration-1000 ${
              isVisible('events-header') ? 'animate-reveal opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 animate-reveal-text animate-typewriter">
              About SSDC Institute
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-shimmer-text">
              Get to know Sri Sai Das Coaching Classes - a well-established educational institution 
              in Bhopal, known for their commitment to academic excellence and student success.
            </p>
          </div>
          
          <div 
            data-animate-id="events-content"
            className={`bg-gradient-to-br from-orange-50 to-yellow-100 rounded-3xl p-4 sm:p-6 border border-orange-100 transition-all duration-1000 delay-200 ${
              isVisible('events-content') ? 'animate-reveal-up animate-morph opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div 
                data-animate-id="events-text"
                className={`transition-all duration-1000 delay-300 ${
                  isVisible('events-text') ? 'animate-slide-in-left opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 animate-reveal-text">Institution Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-4 animate-shimmer-text">
                  Sri Sai Das Coaching Classes is a respected name in Bhopal&apos;s education sector, 
                  specializing in K-10 education with a focus on 8th to 10th grades. The institute 
                  has built a strong reputation for helping students achieve top academic ranks 
                  through their comprehensive coaching programs.
                </p>
                <div className="space-y-2">
                  {[
                    "Established coaching methodology",
                    "Focus on 8th to 10th grade excellence", 
                    "Proven track record of top ranks",
                    "Comprehensive study programs"
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      data-animate-id={`feature-item-${index}`}
                      className={`flex items-center gap-2 transition-all duration-1000 delay-${(index + 4) * 100} ${
                        isVisible(`feature-item-${index}`) ? 'animate-fade-in-up animate-bounce-x opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{animationDelay: `${(index + 1) * 0.1}s`}}
                    >
                      <div className="w-1.5 h-1.5 bg-[#ec7524] rounded-full animate-pulse animate-glow"></div>
                      <span className="text-gray-700 text-sm animate-shimmer-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div 
                data-animate-id="events-image"
                className={`flex justify-center transition-all duration-1000 delay-500 ${
                  isVisible('events-image') ? 'animate-slide-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="w-full max-w-sm">
                  <Image
                    src="/assets/case-studies/ssdc/ssdc event.svg"
                    alt="SSDC Institute"
                    width={300}
                    height={225}
                    className="w-full h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-float animate-glow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Info Section with Enhanced Branding */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            data-animate-id="client-info"
            className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 transition-all duration-1000 ${
              isVisible('client-info') ? 'animate-reveal-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-sm border border-gray-200">
                    <Image
                      src="/assets/case-studies/ssdc/Sri sai das classes logo.jpeg"
                      alt="Sri Sai Das Coaching Classes Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Client Overview</h2>
                    <p className="text-[#ec7524] font-medium text-sm">Established Education Partner</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ec7524] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">Client:</span>
                      <span className="text-gray-600 ml-2 text-sm">Sri Sai Das Coaching Classes (SSDC)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ec7524] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">Industry:</span>
                      <span className="text-gray-600 ml-2 text-sm">K-10 Education (8th to 10th Grade)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ec7524] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">Location:</span>
                      <span className="text-gray-600 ml-2 text-sm">MP nagar, Bhopal, Madhya Pradesh, India</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ec7524] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">Partnership:</span>
                      <span className="text-gray-600 ml-2 text-sm">Long-term Vacademy Implementation</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About SSDC</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  Sri Sai Das Coaching Classes (SSDC) is a well-regarded name in Bhopal&apos;s education sector, 
                  known for helping students in 8th to 10th grades achieve top ranks. While focusing strongly 
                  on providing quality coaching, SSDC was confronted with a new challenge: how to continue 
                  delivering exceptional education when many students were unable to attend classes in person.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>MP nagar, Bhopal, Madhya Pradesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            data-animate-id="problem-header"
            className={`max-w-4xl mx-auto text-center mb-8 transition-all duration-1000 ${
              isVisible('problem-header') ? 'animate-reveal opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              The Real Problem: Bridging the Gap Between Classroom and Distance Learning
            </h2>
            <p className="text-lg text-gray-600">
              Like many educational institutes, SSDC suddenly needed to support hybrid learning, which involves 
              mixing in-person and remote education. They quickly encountered several critical challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Monitor,
                title: "Monitoring Student Engagement",
                description: "Teachers struggled to determine if students watching video lectures were actually paying attention."
              },
              {
                icon: FileText,
                title: "Assessment Hassle",
                description: "Creating tests was difficult, with teachers relying on paper or awkward tools, spending significant time preparing, delivering, and grading assessments."
              },
              {
                icon: MessageSquare,
                title: "Student Disconnection",
                description: "Remote students felt disconnected from their classroom peers, which made motivation and collaboration challenging."
              },
              {
                icon: Globe,
                title: "Limited Assessment Flexibility",
                description: "Lack of adequate tools for efficiently creating and delivering various exam formats, especially those that could be easily integrated with common document formats."
              },
              {
                icon: Users,
                title: "Lack of Unified Learning Platform",
                description: "SSDC lacked a centralised system that could seamlessly connect both in-class and distance learners."
              },
              {
                icon: Clock,
                title: "Manual Management Stress",
                description: "Manually managing all these elements led to stress and inefficiency for SSDC&apos;s dedicated staff."
              }
            ].map((challenge, index) => (
              <div 
                key={index} 
                data-animate-id={`challenge-${index}`}
                className={`bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm hover:scale-105 transition-all duration-1000 delay-${index * 100} ${
                  isVisible(`challenge-${index}`) ? 'animate-reveal-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-10 h-10 bg-[#ec7524] rounded-lg flex items-center justify-center mb-3">
                  <challenge.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            data-animate-id="solution-header"
            className={`max-w-4xl mx-auto text-center mb-8 transition-all duration-1000 ${
              isVisible('solution-header') ? 'animate-reveal opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Solution: <span className="text-[#ec7524]">Vacademy LMS</span> by Vidyayatan Technologies
            </h2>
            <p className="text-lg text-gray-600">
              Vidyayatan Technologies provided a custom-tailored Vacademy Learning Management System (LMS) 
              specifically designed for hybrid education. The platform was customised to directly address 
              SSDC&apos;s unique challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Video,
                title: "Advanced Content Delivery & Engagement Tracking",
                features: [
                  "Structured Learning Paths with sequential modules",
                  "Multi-format support for diverse learning styles",
                  "Concentration Score with real-time engagement tracking"
                ]
              },
              {
                icon: FileText,
                title: "Streamlined Assessment Management",
                features: [
                  "Integration with Google Docs and Microsoft Word",
                  "Assessment Directory from existing repositories",
                  "Varied exam formats with automatic grading"
                ]
              },
              {
                icon: Users,
                title: "Unified Learning Experience & Community Building",
                features: [
                  "Centralised Dashboard for all learning activities",
                  "Community Page for peer interaction",
                  "Communication tools bridging remote and classroom learners"
                ]
              }
            ].map((solution, index) => (
              <div 
                key={index}
                data-animate-id={`solution-${index}`}
                className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:scale-105 transition-all duration-1000 delay-${index * 200} ${
                  isVisible(`solution-${index}`) ? 'animate-reveal-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-10 h-10 bg-[#ec7524] rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{solution.title}</h3>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Showcase */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            data-animate-id="implementation-header"
            className={`text-center mb-8 transition-all duration-1000 ${
              isVisible('implementation-header') ? 'animate-reveal opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Implementation & Workflows
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The successful implementation of Vacademy at SSDC involved strategic planning and 
              custom-tailored solutions to address their specific educational needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div 
              data-animate-id="implementation-steps"
              className={`space-y-4 transition-all duration-1000 delay-200 ${
                isVisible('implementation-steps') ? 'animate-slide-in-left opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-[#ec7524] rounded-lg flex items-center justify-center text-white font-bold text-xs">1</div>
                  <h3 className="text-base font-semibold text-gray-900">Advanced Content Delivery & Engagement Tracking</h3>
                </div>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-[#ec7524] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Structured Learning Paths: SSDC&apos;s syllabus was organised into clear, sequential modules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-[#ec7524] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Multi-format Support: Video lectures, interactive content, and downloadable resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-[#ec7524] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Concentration Score: Real-time questions embedded in video lessons for engagement tracking</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-[#ec7524] rounded-lg flex items-center justify-center text-white font-bold text-xs">2</div>
                  <h3 className="text-base font-semibold text-gray-900">Streamlined Assessment Management</h3>
                </div>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-[#ec7524] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Integration with Google Docs and Microsoft Word for seamless workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-[#ec7524] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Assessment Directory: Pull materials from existing approved document repositories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-[#ec7524] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Varied Exam Formats: Quizzes, assignments, and formal exams with automatic grading</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div 
              data-animate-id="implementation-timeline"
              className={`relative transition-all duration-1000 delay-400 ${
                isVisible('implementation-timeline') ? 'animate-slide-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#ec7524] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Implementation Timeline</h3>
                  <p className="text-gray-600 text-xs">Strategic rollout with measurable milestones</p>
                </div>
                
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Platform Setup", desc: "Custom configuration and branding" },
                    { step: "2", title: "Content Migration", desc: "Existing materials and curriculum integration" },
                    { step: "3", title: "Staff Training", desc: "Comprehensive onboarding and support" },
                    { step: "4", title: "Student Onboarding", desc: "Seamless transition to hybrid learning" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-[#ec7524] rounded-full flex items-center justify-center text-white text-xs font-bold">{item.step}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-xs">{item.title}</div>
                        <div className="text-gray-600 text-xs">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            data-animate-id="results-header"
            className={`max-w-4xl mx-auto text-center mb-8 transition-all duration-1000 ${
              isVisible('results-header') ? 'animate-reveal opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Results & Outcomes
            </h2>
            <p className="text-lg text-gray-600">
              The implementation of Vacademy yielded significant positive outcomes for SSDC, transforming 
              their educational delivery and operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: TrendingUp,
                title: "Increased Student Engagement",
                description: "The innovative Concentration Score motivated students to remain attentive during video lessons, leading to improved learning effectiveness."
              },
              {
                icon: Globe,
                title: "Expanded Reach",
                description: "SSDC successfully scaled its distance education programmes without compromising on quality or accountability."
              },
              {
                icon: Zap,
                title: "Improved Efficiency",
                description: "Teachers experienced significant time savings due to streamlined assessment creation, automated grading, and centralised tracking."
              },
              {
                icon: BarChart3,
                title: "Data-Driven Insights",
                description: "Management gained real-time visibility into student performance and content effectiveness for informed decision-making."
              },
              {
                icon: Users,
                title: "Stronger Learning Community",
                description: "Interaction tools successfully bridged the divide between remote and in-person learners, fostering a cohesive educational environment."
              },
              {
                icon: Award,
                title: "Future-Ready Platform",
                description: "SSDC is now equipped with a scalable and flexible LMS that can evolve with future educational needs."
              }
            ].map((result, index) => (
              <div 
                key={index} 
                data-animate-id={`result-${index}`}
                className={`text-center p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:scale-105 transition-all duration-1000 delay-${index * 100} ${
                  isVisible(`result-${index}`) ? 'animate-reveal-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-10 h-10 mx-auto mb-3 bg-[#ec7524] rounded-lg flex items-center justify-center">
                  <result.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{result.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-white">
        <div 
          data-animate-id="testimonial"
          className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${
            isVisible('testimonial') ? 'animate-reveal opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <QuoteHighlight
            quote="Vidyayatan's Vacademy has transformed how we deliver education to our students. The platform's intuitive design and powerful features like the Concentration Score and seamless assessment integration have significantly enhanced both teaching and learning experiences."
            author="SSDC Leadership Team"
            role="Sri Sai Das Coaching Classes"
          />
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Decorative element */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/30"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 
            data-animate-id="conclusion-title"
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
              isVisible('conclusion-title') ? 'animate-reveal opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Conclusion
          </h2>
          <p 
            data-animate-id="conclusion-text"
            className={`text-lg text-gray-600 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible('conclusion-text') ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            By implementing Vacademy, Vidyayatan Technologies empowered Sri Sai Das Coaching Classes to overcome 
            critical hybrid learning challenges. The tailored solution not only optimised operational workflows 
            but also significantly enriched the educational experience for both students and teachers. This project 
            underscores Vidyayatan Technologies&apos; commitment to leveraging technology to create impactful and 
            scalable learning solutions for educational institutions.
          </p>
        </div>
        
        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-30px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(30px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        @keyframes reveal {
          from { 
            opacity: 0; 
            transform: scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: scale(1);
          }
        }
        
        @keyframes reveal-text {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.98);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes reveal-up {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-5px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-3px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 1;
          }
          50% { 
            opacity: 0.8;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes shimmer-text {
          0% {
            background: linear-gradient(90deg, transparent, rgba(236, 117, 36, 0.1), transparent);
            background-size: 200% 100%;
            background-position: -200% 0;
          }
          100% {
            background: linear-gradient(90deg, transparent, rgba(236, 117, 36, 0.1), transparent);
            background-size: 200% 100%;
            background-position: 200% 0;
          }
        }
        
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes gradient-text {
          0%, 100% {
            background: linear-gradient(45deg, #ec7524, #f97316, #ea580c);
            background-size: 200% 200%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          50% {
            background: linear-gradient(45deg, #ea580c, #ec7524, #f97316);
            background-size: 200% 200%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        
        @keyframes morph {
          0%, 100% {
            border-radius: 24px;
          }
          50% {
            border-radius: 16px;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(236, 117, 36, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(236, 117, 36, 0.6);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
      `}</style>
    </div>
  );
}