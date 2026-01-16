"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  FileSpreadsheet, 
  ArrowUpRight, 
  CheckSquare, 
  AlertTriangle,
  Briefcase
} from "lucide-react";
import { VacademyHeaderSimple } from "@/components/layout/vacademy-header-simple";

export default function SheetsToIpoBlog() {
  return (
    <div className="min-h-screen bg-white">
      <VacademyHeaderSimple />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-sm font-medium mb-8 border border-green-100">
              <Briefcase className="w-4 h-4" />
              Strategic Guide
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Google Sheets to IPO-Ready: 
              <br />
              <span className="text-[#ec7524]">The Digital Transformation Playbook</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Every great business starts on a spreadsheet. But successful ones don't stay there. 
              Here is the roadmap for transitioning from manual chaos to automated structure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <Link 
                href="https://www.vacademy.io/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ec7524] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#d66a20] transition-all duration-200 shadow-sm"
              >
                <span>Read the Playbook</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Stages of Growth */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>

              {/* Stage 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative">
                 <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 -translate-x-1/2">1</div>
                 <h3 className="text-xl font-bold text-gray-900 text-center mt-6 mb-2">The "Hustle" Phase</h3>
                 <div className="flex justify-center mb-4"><FileSpreadsheet className="w-8 h-8 text-green-500" /></div>
                 <p className="text-gray-600 text-sm text-center">
                   <strong className="block text-gray-900 mb-1">Tools:</strong> Excel, WhatsApp Web, Paper Journals
                 </p>
                 <p className="text-gray-600 text-sm text-center mt-2">
                   Works for 0-500 users. Cost is low, but time investment is huge. Founder does everything.
                 </p>
              </div>

              {/* Stage 2 */}
              <div className="bg-white p-6 rounded-xl border-2 border-[#ec7524] shadow-lg relative transform scale-105">
                 <div className="w-10 h-10 bg-[#ec7524] text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 -translate-x-1/2">2</div>
                 <h3 className="text-xl font-bold text-gray-900 text-center mt-6 mb-2">The "Breaking Point"</h3>
                 <div className="flex justify-center mb-4"><AlertTriangle className="w-8 h-8 text-orange-500" /></div>
                 <p className="text-gray-600 text-sm text-center">
                   <strong className="block text-gray-900 mb-1">Tools:</strong> Fragmented SaaS (Zapier, Mailchimp)
                 </p>
                 <p className="text-gray-600 text-sm text-center mt-2">
                   500 - 5,000 users. Errors start creeping in. "Did we bill User X?" becomes a common question. Growth stalls.
                 </p>
              </div>

              {/* Stage 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative">
                 <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 -translate-x-1/2">3</div>
                 <h3 className="text-xl font-bold text-gray-900 text-center mt-6 mb-2">The "Scale" Phase</h3>
                 <div className="flex justify-center mb-4"><ArrowUpRight className="w-8 h-8 text-blue-500" /></div>
                 <p className="text-gray-600 text-sm text-center">
                   <strong className="block text-gray-900 mb-1">Tools:</strong> Custom ERP/LMS Ecosystem
                 </p>
                 <p className="text-gray-600 text-sm text-center mt-2">
                   5,000 - 20 Lakh+ users. Operations are automated. Data drives decisions. The business is an asset, not a job.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* The Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Are You Ready to upgrade?</h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
             <div className="space-y-4">
                {[
                  "Are you spending more than 2 hours a day on data entry?",
                  "Have you lost a customer because you forgot to follow up?",
                  "Is your data scattered across 3+ different platforms?",
                  "Do you lack a single dashboard that shows your daily revenue?",
                  "Are you unable to implement features (like rewards) because your tools don't support it?"
                ].map((question, i) => (
                   <div key={i} className="flex items-start gap-4 p-3 hover:bg-white rounded-lg transition-colors">
                      <div className="w-6 h-6 rounded border-2 border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                         <span className="text-gray-300 text-xs">?</span>
                      </div>
                      <span className="text-gray-700 font-medium">{question}</span>
                   </div>
                ))}
             </div>
             <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">If you checked more than 3, it's time to build.</p>
                <Link 
                   href="https://www.vacademy.io/book-demo"
                   target="_blank"
                   className="inline-flex items-center gap-2 bg-[#ec7524] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#d66a20] transition-colors"
                >
                   Talk to an Architect <ArrowRight className="w-4 h-4" />
                </Link>
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
