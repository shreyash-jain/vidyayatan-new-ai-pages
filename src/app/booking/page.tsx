"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { submitBookingForm } from "@/lib/supabase";
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function BookingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "" as string | undefined,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone) {
      setError("Please fill in all fields");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Phone number validation
    if (!isValidPhoneNumber(formData.phone)) {
      setError("Please enter a valid phone number with country code");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitBookingForm({
        ...formData,
        phone: formData.phone as string
      });
      
      if (result.success) {
        // Redirect to success page
        router.push('/booking/success');
      } else {
        setError(result.error || "Failed to submit form. Please try again.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="relative z-10 w-full py-6">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
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
          
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Book Your AI Consultation
            </h1>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
              Ready to transform your business with AI? Let&rsquo;s discuss how our AI employees can streamline your operations and boost productivity.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-lato)' }}>
                Full Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full h-12 text-base"
                style={{ fontFamily: 'var(--font-lato)' }}
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-lato)' }}>
                Business Email *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your business email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full h-12 text-base"
                style={{ fontFamily: 'var(--font-lato)' }}
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--font-lato)' }}>
                Phone Number *
              </label>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="US"
                countries={[
                  // North America
                  'US', 'CA', 'MX',
                  // Europe
                  'GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'CH', 'SE', 'NO', 'DK',
                  // Asia-Pacific
                  'IN', 'JP', 'SG', 'AU', 'NZ', 'CN', 'KR', 'TH', 'MY', 'ID', 'PH', 'VN',
                  // Middle East
                  'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'IL', 'TR',
                  // Africa
                  'ZA', 'NG', 'KE', 'EG', 'MA', 'GH', 'TN', 'ET', 'UG', 'TZ', 'RW', 'BW',
                  // Latin America
                  'BR', 'AR', 'CL', 'CO', 'PE', 'CR'
                ]}
                value={formData.phone}
                onChange={(value) => {
                  setFormData(prev => ({ ...prev, phone: value }));
                  if (error) setError(null);
                }}
                placeholder="Enter phone number"
                className="w-full phone-input"
                style={{ fontFamily: 'var(--font-lato)' }}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm" style={{ fontFamily: 'var(--font-lato)' }}>
                  {error}
                </p>
              </div>
            )}

            {/* Benefits Section */}
            <div className="bg-purple-50 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                What You&rsquo;ll Get:
              </h3>
              <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>30-minute consultation with our AI specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Custom AI implementation roadmap for your business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>ROI analysis and potential cost savings breakdown</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>No commitment required - completely free consultation</span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 text-lg bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 500,
                boxShadow: "0 4px 24px 0 rgba(160, 163, 232, 0.3)",
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Booking Your Consultation...</span>
                </>
              ) : (
                <>
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-gray-500" style={{ fontFamily: 'var(--font-lato)' }}>
            <p>We&rsquo;ll contact you within 24 hours to schedule your consultation.</p>
            <p className="mt-1">Your information is secure and will never be shared.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 