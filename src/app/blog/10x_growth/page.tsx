"use client";

// No longer need React hooks for this component
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target, 
  CheckCircle, 
  BarChart3,
  CreditCard,
  MessageSquare,
  CalendarCheck,
  Shield
} from "lucide-react";
import { VacademyHeaderSimple } from "@/components/layout/vacademy-header-simple";
import { QuoteHighlight } from "@/components/blog/quote-highlight";
import { BeforeAfterComparison } from "@/components/blog/before-after-comparison";

export default function HabuildGrowthBlog() {
  return (
    <div className="min-h-screen bg-white">
      <VacademyHeaderSimple />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ec7524] px-3 py-1.5 rounded-full text-sm font-medium mb-8 border border-orange-100">
              <TrendingUp className="w-4 h-4" />
              Case Study
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Manual Operations to 
              <br />
              <span className="text-[#ec7524]">10x Growth</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              How HABUILD transformed their fitness business by automating payment processing and member management, 
              achieving 10x growth while reducing operational costs by 70%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://www.vacademy.io/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ec7524] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#d66a20] transition-all duration-200 shadow-sm"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="https://www.vacademy.io/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 text-center"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "2 Lakh+", label: "Users Across 36 Nations", icon: Users },
              { value: "10x", label: "Member Growth", icon: TrendingUp },
              { value: "70%", label: "Cost Reduction", icon: DollarSign },
              { value: "50%", label: "Lead Conversion Increase", icon: Target },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#ec7524] rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Challenge
            </h2>
            <p className="text-lg text-gray-600">
              As HABUILD scaled from 300 to 20 Lakh members, manual processes became critical bottlenecks limiting growth potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CreditCard,
                title: "Manual Payment Processing",
                description: "Google Sheets-based payment tracking created errors, delays, and operational inefficiencies."
              },
              {
                icon: Clock,
                title: "Resource-Intensive Operations",
                description: "Manual workflows consumed valuable time that could be directed toward strategic growth initiatives."
              },
              {
                icon: Users,
                title: "Scaling Support Challenges",
                description: "Customer inquiries and payment issues became increasingly difficult to manage at scale."
              }
            ].map((challenge, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <challenge.icon className="w-8 h-8 text-[#ec7524] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-[#ec7524]">Transformation</span> Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to automating HABUILD&apos;s operations and scaling their business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Assessment & Strategy",
                description: "Comprehensive analysis of existing workflows and identification of automation opportunities",
                icon: Target,
                step: "01"
              },
              {
                title: "Payment System Implementation", 
                description: "Deployment of secure, multi-gateway payment processing with automated reconciliation",
                icon: CreditCard,
                step: "02"
              },
              {
                title: "Communication Automation",
                description: "Setup of intelligent WhatsApp flows and personalized email engagement systems",
                icon: MessageSquare,
                step: "03"
              },
              {
                title: "Growth Achievement",
                description: "Successful delivery of 10x member growth with 70% operational cost reduction",
                icon: TrendingUp,
                step: "04"
              }
            ].map((step, index) => (
              <div key={index} className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ec7524] rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-[#ec7524] font-medium mb-1">STEP {step.step}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <QuoteHighlight 
            quote="The transformation was remarkable. From manual Google Sheets tracking to automated operations - Vacademy enabled us to scale efficiently while maintaining quality service delivery."
            author="HABUILD Leadership"
            role="Fitness Technology Platform"
            theme="orange"
          />
        </div>
      </section>

      {/* Before/After Comparison */}
      <BeforeAfterComparison
        title="Transformation Overview"
        subtitle="A comprehensive view of HABUILD&apos;s operational evolution"
        beforeTitle="Manual Operations (Before)"
        afterTitle="Automated Growth Machine (After)"
        beforeItems={[
          {
            title: "Google Sheets Payment Tracking",
            description: "Manual entry of payments, prone to errors and time-consuming"
          },
          {
            title: "Manual Member Support",
            description: "Individual responses to queries, no automation or personalization"
          },
          {
            title: "Basic Attendance Tracking",
            description: "Manual marking and no integration with payment systems"
          },
          {
            title: "Limited Growth Insights",
            description: "Basic reporting with no actionable business intelligence"
          }
        ]}
        afterItems={[
          {
            title: "Automated Payment Processing",
            description: "Multi-gateway integration with automatic reconciliation and reporting"
          },
          {
            title: "Smart WhatsApp Automation",
            description: "Personalized flows, auto-responses, and engagement campaigns"
          },
          {
            title: "Seamless Session Management",
            description: "Auto-attendance, unique links, and integrated member experience"
          },
          {
            title: "Advanced Analytics Dashboard",
            description: "Real-time insights, predictive analytics, and growth optimization"
          }
        ]}
      />

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#ec7524]">Vacademy</span> Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Enterprise-grade automation technology that enabled HABUILD&apos;s transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Automated Payment Processing",
                description: "Secure, multi-gateway payment automation with real-time reconciliation and comprehensive reporting.",
                metric: "100% Secure"
              },
              {
                icon: MessageSquare,
                title: "Intelligent Communication",
                description: "WhatsApp and email automation with personalized messaging flows and engagement analytics.",
                metric: "40% Better Retention"
              },
              {
                icon: BarChart3,
                title: "Business Intelligence",
                description: "Advanced analytics dashboard with predictive insights and performance optimization tools.",
                metric: "60% User Satisfaction"
              },
              {
                icon: CalendarCheck,
                title: "Session Management",
                description: "Automated attendance tracking, unique session links, and integrated member experience platform.",
                metric: "Seamless Operations"
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-10 h-10 bg-[#ec7524] rounded-lg p-2 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{solution.description}</p>
                <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ec7524] px-3 py-1.5 rounded-full text-xs font-medium border border-orange-100">
                  <CheckCircle className="w-3 h-3" />
                  {solution.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ec7524]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Transform your operations with enterprise-grade automation. Schedule a consultation to explore how Vacademy can accelerate your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://www.vacademy.io/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#ec7524] px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-all duration-200 shadow-sm"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="https://www.vacademy.io/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#ec7524] transition-all duration-200 text-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/assets/vacademy/vacademy_logo.png"
              alt="Vacademy"
              width={120}
              height={32}
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 mb-6 text-sm">
            Enterprise automation solutions for fitness and learning businesses
          </p>
          <div className="text-xs text-gray-500">
            © 2024 Vacademy by Vidyayatan Infotech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 