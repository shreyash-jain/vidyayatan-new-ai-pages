"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Clock,
  CheckCircle, 
  BarChart3,
  Video,
  Link2,
  UserCheck,
  Zap,
  Play,
  Calendar,
  Monitor,
  Settings
} from "lucide-react";
import { VacademyHeaderSimple } from "@/components/layout/vacademy-header-simple";
import { QuoteHighlight } from "@/components/blog/quote-highlight";
import { BeforeAfterComparison } from "@/components/blog/before-after-comparison";

export default function LiveSessionsBlog() {
  return (
    <div className="min-h-screen bg-white">
      <VacademyHeaderSimple />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ec7524] px-3 py-1.5 rounded-full text-sm font-medium mb-8 border border-orange-100">
              <Video className="w-4 h-4" />
              Live Session Automation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Never Send a Manual Zoom Link Again: 
              <br />
              <span className="text-[#ec7524]">Scaling Live Sessions for 10,000+ Users</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Discover how HABUILD eliminated the logistical nightmare of manual session management, 
              scaling from hundreds to 20 Lakh users with automated attendance tracking and unique link generation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://www.vacademy.io/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ec7524] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#d66a20] transition-all duration-200 shadow-sm"
              >
                <span>Automate Your Sessions</span>
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
              { value: "20 Lakh+", label: "Users Across 36 Nations", icon: Users },
              { value: "10x", label: "Growth in 10 Months", icon: TrendingUp },
              { value: "100%", label: "Automated Attendance", icon: UserCheck },
              { value: "Zero", label: "Manual Link Creation", icon: Link2 },
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
              The Live Session Nightmare
            </h2>
            <p className="text-lg text-gray-600">
              As your fitness community grows, manual session management becomes an impossible bottleneck that limits your scaling potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Link2,
                title: "Manual Link Creation",
                description: "Creating and sending unique Zoom/Meet links to hundreds or thousands of participants for every single session."
              },
              {
                icon: UserCheck,
                title: "Attendance Tracking Chaos",
                description: "Manually tracking who attended which session, cross-referencing multiple platforms and maintaining accurate records."
              },
              {
                icon: Clock,
                title: "Administrative Overload",
                description: "Spending more time on session logistics than actually coaching members and delivering value to the community."
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

      {/* Solution Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-[#ec7524]">Automated</span> Solution
            </h2>
            <p className="text-lg text-gray-600">
              HABUILD&apos;s transformation from manual chaos to automated efficiency that enabled massive scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Link2,
                title: "Unique Links for Every User",
                description: "Automated generation of personalized session links across Zoom, YouTube, and Google Meet for secure, trackable access.",
                feature: "Zero Manual Work"
              },
              {
                icon: UserCheck,
                title: "Automated Attendance Tracking",
                description: "Intelligent system that automatically marks attendance based on session participation, eliminating manual spreadsheets.",
                feature: "100% Accurate"
              },
              {
                icon: Play,
                title: "Recorded Sessions as Live",
                description: "Revolutionary feature to display pre-recorded content as live sessions for flexible scheduling and consistency.",
                feature: "Maximum Flexibility"
              },
              {
                icon: Monitor,
                title: "Multi-Platform Integration",
                description: "Seamless connection with all major streaming platforms, giving instructors freedom to use their preferred tools.",
                feature: "Platform Agnostic"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-10 h-10 bg-[#ec7524] rounded-lg p-2 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
                <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ec7524] px-3 py-1.5 rounded-full text-xs font-medium border border-orange-100">
                  <CheckCircle className="w-3 h-3" />
                  {feature.feature}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How <span className="text-[#ec7524]">Automated Sessions</span> Work
            </h2>
            <p className="text-lg text-gray-600">
              The seamless process that transformed HABUILD&apos;s session management from manual to automated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Session Planning",
                description: "Instructors schedule sessions through the dashboard, choosing platform, time, and member segments with intelligent automation.",
                icon: Calendar,
                step: "01"
              },
              {
                title: "Automatic Link Generation", 
                description: "System generates unique, secure links for each registered member based on their preferences and membership level.",
                icon: Link2,
                step: "02"
              },
              {
                title: "Smart Distribution",
                description: "Personalized notifications sent via WhatsApp, email, or app with each member's unique access link and session details.",
                icon: Zap,
                step: "03"
              },
              {
                title: "Automated Tracking",
                description: "Real-time attendance monitoring, engagement tracking, and post-session analytics without any manual intervention.",
                icon: BarChart3,
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
            quote="The session automation completely changed our operations. We went from spending hours on logistics to focusing entirely on member experience. The system handles everything seamlessly."
            author="HABUILD Operations Team"
            role="Live Session Management"
            theme="orange"
          />
        </div>
      </section>

      {/* Before/After Comparison */}
      <BeforeAfterComparison
        title="Session Management Transformation"
        subtitle="From manual administrative burden to automated efficiency"
        beforeTitle="Manual Session Management (Before)"
        afterTitle="Automated Session Engine (After)"
        beforeItems={[
          {
            title: "Manual Link Creation",
            description: "Creating individual Zoom/Meet links for every session and manually distributing to participants"
          },
          {
            title: "Spreadsheet Attendance",
            description: "Manually tracking who attended which session using complex spreadsheets and cross-referencing"
          },
          {
            title: "Platform Limitations",
            description: "Locked into single platforms with no flexibility for member preferences or technical requirements"
          },
          {
            title: "Scaling Bottleneck",
            description: "Administrative overhead grew exponentially with member count, limiting growth potential"
          }
        ]}
        afterItems={[
          {
            title: "Automated Link Generation",
            description: "System automatically creates unique, secure links for each member based on preferences and permissions"
          },
          {
            title: "Real-time Attendance Tracking",
            description: "Intelligent monitoring captures participation data automatically with comprehensive analytics"
          },
          {
            title: "Multi-Platform Freedom",
            description: "Seamless integration with Zoom, YouTube, Google Meet, and other platforms for maximum flexibility"
          },
          {
            title: "Infinite Scalability",
            description: "Zero additional administrative work regardless of member count, enabling unlimited growth"
          }
        ]}
      />

      {/* Technical Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced <span className="text-[#ec7524]">Technical Features</span>
            </h2>
            <p className="text-lg text-gray-600">
              The sophisticated technology stack that enabled HABUILD&apos;s massive scale success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Smart Session Routing",
                description: "Intelligent algorithm determines optimal platform and settings based on member preferences, device capabilities, and session type.",
                benefit: "Optimized Experience"
              },
              {
                icon: Monitor,
                title: "Cross-Platform Analytics",
                description: "Unified analytics dashboard aggregating data from all streaming platforms for comprehensive session insights.",
                benefit: "Complete Visibility"
              },
              {
                icon: Zap,
                title: "Real-time Scaling",
                description: "Dynamic infrastructure that automatically adjusts to handle any number of concurrent sessions without performance impact.",
                benefit: "Unlimited Scale"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#ec7524] rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
                <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ec7524] px-3 py-1.5 rounded-full text-xs font-medium border border-orange-100">
                  <CheckCircle className="w-3 h-3" />
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacademy Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#ec7524]">Vacademy</span> Live Session Engine
            </h2>
            <p className="text-lg text-gray-600">
              The same proven session automation technology that scaled HABUILD, now available for your fitness or learning business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Video,
                title: "Effortless Live Sessions",
                description: "Go live instantly with automated setup, unique member links, and seamless platform integration across all major streaming services.",
                benefit: "Zero Setup Time"
              },
              {
                icon: UserCheck,
                title: "Intelligent Attendance",
                description: "Automatic attendance marking with detailed engagement analytics, participation tracking, and member progress monitoring.",
                benefit: "Complete Automation"
              },
              {
                icon: Play,
                title: "Flexible Content Delivery",
                description: "Display recorded sessions as live, schedule content releases, and manage hybrid live/recorded programming effortlessly.",
                benefit: "Maximum Flexibility"
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Comprehensive session analytics, member engagement insights, and performance optimization recommendations.",
                benefit: "Data-Driven Growth"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-10 h-10 bg-[#ec7524] rounded-lg p-2 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
                <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ec7524] px-3 py-1.5 rounded-full text-xs font-medium border border-orange-100">
                  <CheckCircle className="w-3 h-3" />
                  {feature.benefit}
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
            Ready to Automate Your Live Sessions?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                         Eliminate manual session management forever. Scale your live classes to thousands of members with Vacademy&apos;s proven automation technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://www.vacademy.io/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#ec7524] px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-all duration-200 shadow-sm"
            >
              <span>Start Session Automation</span>
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