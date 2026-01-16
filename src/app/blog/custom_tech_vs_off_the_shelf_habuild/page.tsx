"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Settings, 
  Package, 
  Check, 
  X,
  CreditCard,
  Calendar,
  BarChart,
  ShieldAlert
} from "lucide-react";
import { VacademyHeaderSimple } from "@/components/layout/vacademy-header-simple";

export default function CustomVsSaasBlog() {
  return (
    <div className="min-h-screen bg-white">
      <VacademyHeaderSimple />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-3 py-1.5 rounded-full text-sm font-medium mb-8 border border-purple-100">
              <Settings className="w-4 h-4" />
              Build vs. Buy
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Why HABUILD Chose Custom Tech 
              <br />
              <span className="text-[#ec7524]">Over Off-the-Shelf Tools</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              When you're small, SaaS works. When you're scaling to 20 Lakh members with unique business logic like "Pause Days" and "Whatsapp Streaks", generic tools become a cage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <Link 
                href="https://www.vacademy.io/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ec7524] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#d66a20] transition-all duration-200 shadow-sm"
              >
                <span>Build Your Solution</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">The Build vs. Buy Dilemma</h2>
            <p className="text-gray-600 mt-2">Why standardized LMS platforms failed HABUILD's specific needs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {/* SaaS Card */}
             <div className="bg-white p-8 rounded-2xl border border-gray-200 opacity-80">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-gray-500" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">Generic LMS</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                     <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                     <span className="text-gray-600">No "Pause" functionality for memberships</span>
                  </li>
                  <li className="flex gap-3">
                     <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                     <span className="text-gray-600">Limited WhatsApp API integration</span>
                  </li>
                  <li className="flex gap-3">
                     <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                     <span className="text-gray-600">Per-user pricing becomes expensive at scale</span>
                  </li>
                  <li className="flex gap-3">
                     <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                     <span className="text-gray-600">Generic reporting, no custom "habit" metrics</span>
                  </li>
                </ul>
             </div>

             {/* Custom Card */}
             <div className="bg-white p-8 rounded-2xl border-2 border-[#ec7524] shadow-xl relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-[#ec7524] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                   WINNER
                </div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-[#ec7524]" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">Custom Vacademy Build</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                     <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                     <span className="text-gray-800 font-medium">Custom "Pause Membership" Logic</span>
                     <p className="hidden">Users can pause their plan for sick days, and the system automatically extends the validity.</p>
                  </li>
                  <li className="flex gap-3">
                     <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                     <span className="text-gray-800 font-medium">Deep WhatsApp Integration</span>
                     <p className="hidden">Direct integration for attendance tracking links and motivational messages.</p>
                  </li>
                  <li className="flex gap-3">
                     <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                     <span className="text-gray-800 font-medium">Flat Fee Development</span>
                     <p className="hidden">Owned code. No per-user tax as you grow from 10k to 20 Lakh.</p>
                  </li>
                  <li className="flex gap-3">
                     <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                     <span className="text-gray-800 font-medium">Habit-Building Analytics</span>
                     <p className="hidden">Custom dashboards tracking "streaks", "consistency score", and "drop-off points".</p>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Specific Feature Deep Dives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                 <Calendar className="w-8 h-8 text-[#ec7524]" />
                 <h3 className="text-xl font-bold text-gray-900">The "Pause" Button</h3>
                 <p className="text-gray-600 text-sm">
                   Off-the-shelf tools assume a subscription runs 30 days straight. HABUILD needed to allow users to pause for illness or travel. 
                   Implementing this logic in a rigid SaaS was impossible. We built a dynamic validity engine that adjusts end-dates automatically.
                 </p>
              </div>
              <div className="space-y-4">
                 <ShieldAlert className="w-8 h-8 text-[#ec7524]" />
                 <h3 className="text-xl font-bold text-gray-900">Unique Session Security</h3>
                 <p className="text-gray-600 text-sm">
                   Generic Zoom links get shared. We built a system that generates time-sensitive, user-specific shortlinks. 
                   If User A shares their link with User B, we can track it and block unauthorized access, protecting revenue.
                 </p>
              </div>
              <div className="space-y-4">
                 <BarChart className="w-8 h-8 text-[#ec7524]" />
                 <h3 className="text-xl font-bold text-gray-900">Data Sovereignty</h3>
                 <p className="text-gray-600 text-sm">
                   Owning the data meant HABUILD could use AI to analyze behavior patterns. 
                   They know exactly when a user is likely to quit (Day 12, usually) and can intervene programmatically.
                 </p>
              </div>
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
