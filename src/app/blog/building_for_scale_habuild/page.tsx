"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Server, 
  Database, 
  Activity, 
  Zap, 
  Cpu, 
  GitBranch,
  Layers,
  Globe
} from "lucide-react";
import { VacademyHeaderSimple } from "@/components/layout/vacademy-header-simple";

export default function BuildingForScaleBlog() {
  return (
    <div className="min-h-screen bg-white">
      <VacademyHeaderSimple />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-sm font-medium mb-8 border border-blue-100">
              <Server className="w-4 h-4" />
              Engineering Case Study
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building for Scale: 
              <br />
              <span className="text-[#ec7524]">How We Architected HABUILD to Handle 20 Lakh Members</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Scaling from 300 to 20 Lakh users isn't just about adding more servers. It requires a fundamental rethink of architecture, database design, and real-time processing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <Link 
                href="https://www.vacademy.io/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ec7524] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#d66a20] transition-all duration-200 shadow-sm"
              >
                <span>Explore Enterprise Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Technical Challenge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Concurrency Problem</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Most apps have spread-out traffic. A fitness app like HABUILD is different. 
                Everyone logs in at the exact same time: 6:00 AM.
              </p>
              <div className="bg-white p-6 rounded-xl border border-gray-200 mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-red-500" /> Peak Load Metrics
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Morning Login Spikes</span>
                      <span className="font-medium text-gray-900">80,000+ hits/min</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Database Writes (Attendance)</span>
                      <span className="font-medium text-gray-900">5,000+ ops/sec</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[65%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution Architecture</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                     <GitBranch className="w-5 h-5 text-blue-600" />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-gray-900">Microservices Strategy</h3>
                     <p className="text-gray-600 text-sm">Decoupled the notification engine from the core session verification to prevent bottlenecks.</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                     <Database className="w-5 h-5 text-green-600" />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-gray-900">Smart Caching & Shortlinks</h3>
                     <p className="text-gray-600 text-sm">Developed a custom short-link system that handles 60-80k hits/day with sub-millisecond latency using Redis caching.</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                     <Cpu className="w-5 h-5 text-purple-600" />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-gray-900">CI/CD & Auto-Scaling</h3>
                     <p className="text-gray-600 text-sm">Implemented AWS auto-scaling groups that spin up instances 15 minutes before scheduled sessions.</p>
                   </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Session Tracking */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Engineering the "Perfect" Session</h2>
            <p className="text-gray-600">
               How do you track attendance for 10,000 people on Zoom and YouTube simultaneously?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 border border-gray-100">
                   <Globe className="w-8 h-8 text-[#ec7524]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Platform</h3>
                <p className="text-gray-600 text-sm">
                  Whether a user joins via Zoom App, Browser, or YouTube Live, our custom wrapper tracks the session start and end events.
                </p>
             </div>
             
             <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 border border-gray-100">
                   <Zap className="w-8 h-8 text-[#ec7524]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Attendance data is streamed to a dashboard, giving trainers live feedback on participant numbers and drop-off rates.
                </p>
             </div>
             
             <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 border border-gray-100">
                   <Layers className="w-8 h-8 text-[#ec7524]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Integrity</h3>
                <p className="text-gray-600 text-sm">
                  Automated reconciliation ensures that network blips don't result in lost attendance records for loyal members.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Results Box */}
      <section className="py-12 bg-[#ec7524]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
               <div>
                  <div className="text-4xl font-bold mb-2">20 Lakh</div>
                  <div className="text-orange-100 text-sm">Total Members Supported</div>
               </div>
               <div>
                  <div className="text-4xl font-bold mb-2">99.99%</div>
                  <div className="text-orange-100 text-sm">Platform Uptime</div>
               </div>
               <div>
                  <div className="text-4xl font-bold mb-2">0.2s</div>
                  <div className="text-orange-100 text-sm">API Latency</div>
               </div>
               <div>
                  <div className="text-4xl font-bold mb-2">TB+</div>
                  <div className="text-orange-100 text-sm">Data Processed</div>
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
