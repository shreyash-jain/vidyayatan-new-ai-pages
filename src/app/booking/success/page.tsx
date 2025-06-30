import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, Mail, Phone } from "lucide-react";

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="relative z-10 w-full py-6">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logos/vid_new_logo.svg"
              alt="Vidyayatan Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Vidyayatan AI
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Booking Confirmed! 🎉
          </h1>
          
          <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'var(--font-lato)' }}>
            Thank you for your interest in transforming your business with AI. We&rsquo;ve received your consultation request and our team is excited to work with you.
          </p>

          {/* What Happens Next */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              What Happens Next?
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Email Confirmation (Within 5 minutes)
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                                         Check your inbox for a confirmation email with booking details. Don&rsquo;t forget to check your spam folder!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Personal Outreach (Within 24 hours)
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                    Our AI specialist will contact you to understand your specific needs and schedule your consultation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Free AI Consultation (30 minutes)
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                                         We&rsquo;ll discuss your business challenges and create a custom AI implementation roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We'll Cover */}
          <div className="bg-purple-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                             What We&rsquo;ll Cover in Your Consultation
            </h2>
            
            <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Current workflow analysis and bottleneck identification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>AI automation opportunities specific to your industry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Custom AI employee recommendations (Ron, Riley, Nova, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>ROI projections and implementation timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Next steps and pilot program options</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-gray-700 border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
              style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
            >
              Back to Home
            </Link>
            
            <Link
              href="/#ai-employees"
              className="flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-white bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8] transition-all duration-300"
              style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
            >
              <span>Meet Our AI Employees</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-lato)' }}>
              Questions? Reach out to us directly:
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center text-sm text-gray-600">
              <a href="mailto:shreyash@vidyayatan.com" className="hover:text-purple-600 transition-colors">
                shreyash@vidyayatan.com
              </a>
              <a href="mailto:namita@vidyayatan.com" className="hover:text-purple-600 transition-colors">
                namita@vidyayatan.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 