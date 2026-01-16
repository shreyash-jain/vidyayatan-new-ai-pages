"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Code2, 
  Rocket, 
  Target, 
  CheckCircle, 
  Shield, 
  Handshake, 
  Lightbulb,
  Clock
} from "lucide-react";
import { VacademyHeaderSimple } from "@/components/layout/vacademy-header-simple";
import { QuoteHighlight } from "@/components/blog/quote-highlight";

export default function WhoBuiltHabuildTechBlog() {
  return (
    <div className="min-h-screen bg-white">
      <VacademyHeaderSimple />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ec7524] px-3 py-1.5 rounded-full text-sm font-medium mb-8 border border-orange-100">
              <Code2 className="w-4 h-4" />
              Tech Partnership
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Who Built HABUILD’s Tech? 
              <br />
              <span className="text-[#ec7524]">The Story Behind Scaling to 20 Lakh Users</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              When HABUILD needed to scale from a local community to a global movement, they didn't just hire a dev shop. 
              They partnered with Vidyayatan Infotech to build a custom technology ecosystem that powered 10x growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://www.vacademy.io/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ec7524] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#d66a20] transition-all duration-200 shadow-sm"
              >
                <span>Scale Your Tech</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The "Who" Behind the Code</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                 HABUILD was founded with a singular mission: helping people build sustainable habits through technology. 
                 But as they grew from 300 to thousands of users, their initial setup of Google Sheets and manual processes began to crumble.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                 They faced a critical choice: hire an expensive in-house CTO and build a team from scratch, or find a 
                 partner who understood their vision.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                 Enter Vidyayatan Infotech.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 6+ Dedicated Developers</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 Months Timeline</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
               <h3 className="text-xl font-bold text-gray-900 mb-4">The Partnership Model</h3>
               <ul className="space-y-4">
                 {[
                   "Dedicated Engineering Team vs. Outsourced Vendors",
                   "Deep Integration with Business Strategy",
                   "Agile Development for Rapid Scaling",
                   "End-to-End Ownership: From Design to DevOps"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 text-[#ec7524] flex-shrink-0 mt-0.5" />
                     <span className="text-gray-700">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Built */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Building the Engine for 20 Lakh Members</h2>
            <p className="text-gray-600">
              Vidyayatan didn't just write code; we architected a digital ecosystem capable of handling 
              massive concurrency and personalized experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Scalable Infrastructure",
                desc: "Systems built to handle 60-80k simultaneous hits/day for live sessions without downtime."
              },
              {
                icon: Target,
                title: "Automated Lead Funnel",
                desc: "Streamlined lead capture from Facebook to trial conversion, boosting retention by 40%."
              },
              {
                icon: Handshake,
                title: "Custom CRM Dashboard",
                desc: "A bespoke dashboard for agents to manage queries, attendance, and payments in one place."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#ec7524] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Quote Section */}
       <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <QuoteHighlight 
            quote="Vidyayatan Infotech transformed HABUILD's habit-building platform through advanced automation, personalized member experiences, and the creation of a skilled development team."
            author="Success Story"
            role="HABUILD Digital Transformation"
            theme="orange"
          />
        </div>
      </section>

      {/* Why It Worked */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Lead Conversion", value: "+50%" },
                    { label: "Operational Costs", value: "-70%" },
                    { label: "User Satisfaction", value: "+60%" },
                    { label: "Global Reach", value: "36 Nations" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100">
                      <div className="text-3xl font-bold text-[#ec7524] mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="order-1 md:order-2">
               <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Partnership Worked</h2>
               <div className="space-y-6">
                 <div>
                   <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-2">
                     <Lightbulb className="w-5 h-5 text-[#ec7524]" /> Technical Empathy
                   </h3>
                   <p className="text-gray-600 text-sm">We understood that HABUILD wasn't just selling yoga classes; they were selling <em>habits</em>. The tech had to reinforce consistency, not just deliver video.</p>
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-2">
                     <Shield className="w-5 h-5 text-[#ec7524]" /> Reliability at Scale
                   </h3>
                   <p className="text-gray-600 text-sm">When you have 20 Lakh members, 99.9% uptime isn't a luxury; it's a necessity. Our architecture ensured the platform never crashed during peak morning workout hours.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ec7524]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for the Team to Build Your Vision?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Vidyayatan Infotech builds the technology that powers global success stories. Let's discuss your growth.
          </p>
          
          <Link 
            href="https://www.vacademy.io/book-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#ec7524] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm"
          >
            <span>Talk to Our Engineers</span>
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
