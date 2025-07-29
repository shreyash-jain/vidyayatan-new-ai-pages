"use client";

import { VacademyHeaderSimple } from "@/components/layout/vacademy-header-simple";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Calendar } from "lucide-react";

export default function BlogIndexPage() {
  const blogPosts = [
    {
      slug: "10x_growth",
      title: "From Google Sheets to 10x Growth",
      subtitle: "HABUILD Case Study",
      description: "How HABUILD transformed their fitness business by automating payment processing and member management, achieving 10x growth while reducing operational costs by 70%.",
      readTime: "8 min read",
      category: "Case Study",
      tags: ["Fitness", "Automation", "Growth", "HABUILD"],
      publishedDate: "2024-01-15",
      featured: true
    },
    {
      slug: "referral_system",
      title: "The Referral System That Turned Members into a Sales Force",
      subtitle: "HABUILD Referral Strategy",
      description: "Discover how HABUILD&apos;s referral program transformed member advocacy into a powerful sales force, contributing to 50% lead conversion increase through automated tracking and rewards.",
      readTime: "6 min read",
      category: "Growth Strategy",
      tags: ["Referrals", "Marketing", "Community", "HABUILD"],
      publishedDate: "2024-01-20",
      featured: true
    },
    {
      slug: "live_sessions",
      title: "Never Send a Manual Zoom Link Again",
      subtitle: "Scaling Live Sessions for 10,000+ Users",
      description: "How HABUILD eliminated manual session management and scaled live classes to 20 Lakh users with automated attendance tracking, unique link generation, and multi-platform integration.",
      readTime: "7 min read",
      category: "Technology",
      tags: ["Live Sessions", "Automation", "Scaling", "HABUILD"],
      publishedDate: "2024-01-25",
      featured: true
    },
    {
      slug: "lead_funnel",
      title: "Stop Losing Leads: The 50% Conversion Funnel",
      subtitle: "HABUILD's Lead Management Revolution",
      description: "Discover how HABUILD transformed scattered leads into a 50% conversion machine with automated nurturing, demo programs, and intelligent sales support that turns trial users into paying members.",
      readTime: "9 min read",
      category: "Conversion",
      tags: ["Lead Funnel", "Conversion", "Sales", "HABUILD"],
      publishedDate: "2024-01-30",
      featured: true
    }
    // Future blog posts can be added here
  ];

  return (
    <div className="min-h-screen bg-white">
      <VacademyHeaderSimple />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Insights & <span className="text-[#ec7524]">Success Stories</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Discover how fitness and learning businesses are transforming their operations with enterprise automation. 
              Real case studies, insights, and proven strategies for scaling your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-lg text-gray-600">Real transformations from fitness and learning businesses</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.slug} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 bg-orange-50 text-[#ec7524] px-3 py-1 rounded-full text-sm font-medium border border-orange-100">
                      <TrendingUp className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  {post.subtitle && (
                    <p className="text-lg text-[#ec7524] font-medium mb-4">{post.subtitle}</p>
                  )}
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.publishedDate}>
                        {new Date(post.publishedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#ec7524] font-medium hover:text-[#d66a20] transition-colors"
                    >
                      Read Story
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-lg text-gray-600">Explore insights on fitness business automation and growth strategies</p>
          </div>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 bg-orange-50 text-[#ec7524] px-2 py-1 rounded text-xs font-medium border border-orange-100">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <time dateTime={post.publishedDate} className="text-sm text-gray-500">
                        {new Date(post.publishedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                    {post.subtitle && (
                      <p className="text-base text-[#ec7524] font-medium mb-3">{post.subtitle}</p>
                    )}
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="ml-6 inline-flex items-center gap-2 bg-[#ec7524] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#d66a20] transition-all duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ec7524]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                         Join successful fitness and learning businesses that have scaled with Vacademy&apos;s automation solutions.
          </p>
          
          <Link 
            href="https://www.vacademy.io/book-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#ec7524] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm"
          >
            <span>Schedule Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
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