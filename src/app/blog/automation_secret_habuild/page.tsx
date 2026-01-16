"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  MessageSquare, 
  Smartphone, 
  Bell, 
  Zap,
  Repeat,
  Heart,
  Clock,
  UserCheck
} from "lucide-react";
import { VacademyHeaderSimple } from "@/components/layout/vacademy-header-simple";

export default function AutomationSecretBlog() {
  return (
    <div className="min-h-screen bg-white">
      <VacademyHeaderSimple />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-sm font-medium mb-8 border border-green-100">
              <MessageSquare className="w-4 h-4" />
              User Engagement
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Automation Secret: 
              <br />
              <span className="text-[#ec7524]">How HABUILD Sends Personalized WhatsApps at Scale</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              In a mobile-first world, email is often ignored. HABUILD cracked the code of user retention by building an intelligent WhatsApp automation engine that feels unmatched in its personal touch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://www.vacademy.io/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ec7524] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#d66a20] transition-all duration-200 shadow-sm"
              >
                <span>Automate Your Communication</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl font-bold text-gray-900 mb-6">Mobile-First Engagement</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 HABUILD realized early on that their users weren't checking emails for workout reminders. They were on WhatsApp. 
                 But manually messaging 500 people is hard. Messaging 20 Lakh people is impossible.
               </p>
               <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge:</h3>
               <ul className="space-y-3 mb-8">
                 <li className="flex items-center gap-3">
                   <Bell className="w-5 h-5 text-red-500" />
                   <span className="text-gray-700">Timely reminders before 6 AM classes</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <Repeat className="w-5 h-5 text-red-500" />
                   <span className="text-gray-700">Consistency tracking (streaks)</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <Heart className="w-5 h-5 text-red-500" />
                   <span className="text-gray-700">Personalized motivation based on activity</span>
                 </li>
               </ul>
             </div>
             <div className="relative">
                {/* Mock Phone UI */}
                <div className="bg-white p-6 rounded-[2.5rem] border-8 border-gray-800 shadow-2xl max-w-sm mx-auto">
                   <div className="w-20 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
                   <div className="space-y-4">
                      <div className="bg-green-50 p-3 rounded-lg rounded-tl-none mr-8">
                         <p className="text-sm text-gray-800">Good morning, Sarah! ☀️ Ready for day 15 of your streak?</p>
                         <p className="text-[10px] text-gray-400 text-right mt-1">5:45 AM</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg rounded-tl-none mr-8">
                         <p className="text-sm text-gray-800">Here is your unique link for today&apos;s Yoga session: habuild.in/live/xyz</p>
                         <p className="text-[10px] text-gray-400 text-right mt-1">5:45 AM</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg rounded-tr-none ml-8">
                         <p className="text-sm text-gray-800">Joined! See you on the mat. 🧘‍♀️</p>
                         <p className="text-[10px] text-gray-400 text-right mt-1">5:46 AM</p>
                      </div>
                   </div>
                   <div className="mt-8 pt-4 border-t border-gray-100 text-center text-xs text-gray-400">
                      Powered by Vacademy Automation
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* How It Works Logic */}
      <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Logic Behind the Messages</h2>
              <p className="text-gray-600">
                It&apos;s not just a broadcast. It&apos;s a logic-driven conversation engine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="p-6 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors">
                  <Clock className="w-10 h-10 text-[#ec7524] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Session Triggers</h3>
                  <p className="text-gray-600 text-sm">
                    15 minutes before class, the system queries the active member database, generates unique tracking links, and dispatches messages via the WhatsApp Business API.
                  </p>
               </div>
               <div className="p-6 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors">
                  <UserCheck className="w-10 h-10 text-[#ec7524] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Attendance Confirmation</h3>
                  <p className="text-gray-600 text-sm">
                    Post-session, the system checks who attended. Attendees get a "Great Job!" message boosting their streak count.
                  </p>
               </div>
               <div className="p-6 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors">
                  <Zap className="w-10 h-10 text-[#ec7524] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Re-engagement Loops</h3>
                  <p className="text-gray-600 text-sm">
                    Missed 3 days? The system automatically triggers a gentle "We miss you" flow, often offering a quick 10-minute catch-up video.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-900 text-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
               <div>
                  <div className="text-5xl font-bold text-[#ec7524] mb-2">98%</div>
                  <div className="text-gray-400">Open Rate on WhatsApp</div>
               </div>
               <div>
                  <div className="text-5xl font-bold text-[#ec7524] mb-2">40%</div>
                  <div className="text-gray-400">Increase in Retention</div>
               </div>
               <div>
                  <div className="text-5xl font-bold text-[#ec7524] mb-2">0</div>
                  <div className="text-gray-400">Manual Messages Sent</div>
               </div>
               <div>
                  <div className="text-5xl font-bold text-[#ec7524] mb-2">24/7</div>
                  <div className="text-gray-400">Automated Member Support</div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-12">
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
          <p className="text-gray-500 mb-6 text-sm">
            Enterprise automation solutions for fitness and learning businesses
          </p>
          <div className="text-xs text-gray-400">
            © 2024 Vacademy by Vidyayatan Infotech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
