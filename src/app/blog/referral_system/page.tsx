"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
 
  Target, 
  CheckCircle, 
  BarChart3,
  Share2,
  Gift,
  Trophy,
  UserPlus,
  Zap,
  Star
} from "lucide-react";
import { VacademyHeaderSimple } from "@/components/layout/vacademy-header-simple";
import { QuoteHighlight } from "@/components/blog/quote-highlight";
import { BeforeAfterComparison } from "@/components/blog/before-after-comparison";

export default function ReferralSystemBlog() {
  return (
    <div className="min-h-screen bg-white">
      <VacademyHeaderSimple />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ec7524] px-3 py-1.5 rounded-full text-sm font-medium mb-8 border border-orange-100">
              <Share2 className="w-4 h-4" />
              Referral Strategy
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Referral System That Turned HABUILD&apos;s 
              <br />
              <span className="text-[#ec7524]">Members into a Sales Force</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Discover how HABUILD transformed casual word-of-mouth recommendations into a powerful, trackable, 
              and rewarding referral engine that contributed to their 50% lead conversion increase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://www.vacademy.io/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ec7524] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#d66a20] transition-all duration-200 shadow-sm"
              >
                <span>Build Your Referral System</span>
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
              { value: "50%", label: "Lead Conversion Increase", icon: TrendingUp },
              { value: "40%", label: "Retention Boost", icon: Target },
              { value: "100%", label: "Trackable Referrals", icon: BarChart3 },
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
              The Word-of-Mouth Challenge
            </h2>
            <p className="text-lg text-gray-600">
              Every fitness instructor knows the power of client recommendations, but how do you scale and reward something so informal?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Untrackable Recommendations",
                description: "Valuable organic growth through member referrals remained invisible and unmeasurable in traditional systems."
              },
              {
                icon: Gift,
                title: "Unrewarded Advocates",
                description: "Loyal members who actively promoted the platform received no recognition or incentives for their efforts."
              },
              {
                icon: BarChart3,
                title: "Missed Growth Potential",
                description: "Informal word-of-mouth couldn't be optimized or scaled to match the platform's rapid expansion needs."
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
              The <span className="text-[#ec7524]">Referral Engine</span> Solution
            </h2>
            <p className="text-lg text-gray-600">
              A comprehensive system designed to transform casual recommendations into quantifiable, rewarding member advocacy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Share2,
                title: "Unique Referral Links",
                description: "Every member received personalized referral links for accurate tracking and attribution of all conversions.",
                feature: "100% Attribution"
              },
              {
                icon: Gift,
                title: "Flexible Reward System",
                description: "Customizable incentives ranging from membership extensions to tangible gifts for both referrers and new members.",
                feature: "Custom Rewards"
              },
              {
                icon: Trophy,
                title: "Gamified Leaderboards",
                description: "Competitive point-based campaigns with leaderboards to foster engagement and friendly competition among members.",
                feature: "Increased Engagement"
              },
              {
                icon: Zap,
                title: "Perfect User Funnel",
                description: "Seamless integration with lead management to capture, nurture, and convert referred prospects automatically.",
                feature: "Automated Conversion"
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
              How the <span className="text-[#ec7524]">Referral System</span> Works
            </h2>
            <p className="text-lg text-gray-600">
              A step-by-step breakdown of how HABUILD transformed member advocacy into measurable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Member Activation",
                description: "Each HABUILD member receives a unique referral link and access to personalized dashboard tracking.",
                icon: UserPlus,
                step: "01"
              },
              {
                title: "Social Sharing", 
                description: "Members share their links through social media, messaging, or direct recommendations to friends and family.",
                icon: Share2,
                step: "02"
              },
              {
                title: "Conversion Tracking",
                description: "System automatically tracks clicks, sign-ups, and conversions with complete attribution to referring members.",
                icon: BarChart3,
                step: "03"
              },
              {
                title: "Reward Distribution",
                description: "Automatic reward fulfillment based on successful referrals, with leaderboard updates and point accumulation.",
                icon: Trophy,
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
            quote="The referral program transformed our community into active advocates. Members weren't just using our platform - they were genuinely excited to share it and help others discover the benefits."
            author="HABUILD Growth Team"
            role="Community & Engagement"
            theme="orange"
          />
        </div>
      </section>

      {/* Before/After Comparison */}
      <BeforeAfterComparison
        title="Referral Transformation"
        subtitle="From informal recommendations to a structured growth engine"
        beforeTitle="Traditional Word-of-Mouth (Before)"
        afterTitle="Systematic Referral Engine (After)"
        beforeItems={[
          {
            title: "Invisible Referrals",
            description: "No way to track which members were driving new sign-ups through recommendations"
          },
          {
            title: "Unrewarded Advocacy",
            description: "Loyal members received no recognition or incentives for promoting the platform"
          },
          {
            title: "Manual Processes",
            description: "Any referral tracking had to be done manually through spreadsheets and estimates"
          },
          {
            title: "Limited Scalability",
            description: "No systematic way to encourage or optimize word-of-mouth marketing efforts"
          }
        ]}
        afterItems={[
          {
            title: "Complete Attribution",
            description: "Every referral tracked with unique links providing full visibility into member advocacy"
          },
          {
            title: "Automated Rewards",
            description: "Instant recognition and rewards for successful referrals with flexible incentive options"
          },
          {
            title: "Gamified Engagement",
            description: "Leaderboards and point systems creating friendly competition and sustained participation"
          },
          {
            title: "Scalable Growth Engine",
            description: "Systematic approach to turning satisfied members into active sales advocates"
          }
        ]}
      />

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable <span className="text-[#ec7524]">Impact</span>
            </h2>
            <p className="text-lg text-gray-600">
              The referral system became a critical component in HABUILD&apos;s comprehensive growth strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                metric: "50%",
                title: "Lead Conversion Increase",
                description: "Referred leads showed higher conversion rates due to trusted recommendations"
              },
              {
                icon: Users,
                metric: "40%",
                title: "Retention Boost",
                description: "Members who joined through referrals showed significantly higher engagement"
              },
              {
                icon: Star,
                metric: "100%",
                title: "Member Satisfaction",
                description: "Referral system created positive feedback loop enhancing community experience"
              }
            ].map((result, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#ec7524] rounded-lg flex items-center justify-center">
                  <result.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#ec7524] mb-2">{result.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
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
              <span className="text-[#ec7524]">Vacademy</span> Referral Engine
            </h2>
            <p className="text-lg text-gray-600">
              The same proven referral system that powered HABUILD&apos;s growth, now available for your fitness or learning business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Share2,
                title: "Customized Referral Programs",
                description: "Design flexible reward structures that resonate with your community, from membership extensions to exclusive perks.",
                benefit: "Your Rules, Your Rewards"
              },
              {
                icon: BarChart3,
                title: "Complete Analytics Dashboard",
                description: "Track referral performance, conversion rates, and member advocacy with detailed reporting and insights.",
                benefit: "Data-Driven Growth"
              },
              {
                icon: Trophy,
                title: "Gamification Features",
                description: "Launch leaderboard campaigns, point systems, and challenges to keep your community actively engaged.",
                benefit: "Community Engagement"
              },
              {
                icon: Zap,
                title: "Automated Workflows",
                description: "Seamless integration with member management, payment processing, and communication systems.",
                benefit: "Effortless Operation"
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
            Ready to Turn Your Members into Advocates?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                         Transform casual recommendations into a powerful growth engine. Build your referral system with Vacademy&apos;s proven technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://www.vacademy.io/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#ec7524] px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-all duration-200 shadow-sm"
            >
              <span>Start Your Referral Program</span>
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