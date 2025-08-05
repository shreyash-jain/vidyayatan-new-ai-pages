"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { submitBookingForm } from "@/lib/supabase";
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function BookingPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<'vidyayatan' | 'yoga'>('vidyayatan');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "" as string | undefined,
  });

  // Detect source from URL parameters or referrer
  useEffect(() => {
    const sourceParam = searchParams.get('source');
    const fromParam = searchParams.get('from');
    const referrer = document.referrer;

    // Check URL parameters first
    if (sourceParam === 'yoga' || fromParam === 'yoga') {
      setSource('yoga');
    } else if (sourceParam === 'vidyayatan' || fromParam === 'vidyayatan') {
      setSource('vidyayatan');
    } 
    // Check referrer if no URL params
    else if (referrer.includes('/yoga') || referrer.includes('vacademy')) {
      setSource('yoga');
    } else {
      setSource('vidyayatan'); // default
    }
  }, [searchParams]);

  // Theme configuration based on source
  const themes = {
    vidyayatan: {
      name: 'Vidyayatan AI',
      logo: '/assets/logos/vid_new_logo.svg',
      gradient: 'from-[#a0a3e8] to-[#888ae0]',
      bgGradient: 'from-slate-50 to-gray-100',
      benefitsBg: 'bg-purple-50',
      benefitsText: 'text-purple-600',
      buttonHover: 'hover:from-[#888ae0] hover:to-[#a0a3e8]',
      shadowColor: 'rgba(160, 163, 232, 0.3)',
      title: 'Book Your AI Consultation',
      description: 'Ready to transform your business with AI? Let\'s discuss how our AI employees can streamline your operations and boost productivity.',
      backLink: '/'
    },
    yoga: {
      name: 'Vacademy',
      logo: '/assets/vacademy/vacademy_logo.png',
      gradient: 'from-[#ED7424] to-[#F19146]',
      bgGradient: 'from-[#FFF9F4] to-[#FDEDD7]',
      benefitsBg: 'bg-orange-50',
      benefitsText: 'text-orange-600',
      buttonHover: 'hover:from-[#F19146] hover:to-[#ED7424]',
      shadowColor: 'rgba(237, 116, 36, 0.3)',
      title: 'Book Your Wellness Platform Demo',
      description: 'Ready to scale your yoga & fitness business? Let\'s discuss how Vacademy can help you build a thriving online wellness community.',
      backLink: '/yoga'
    }
  };

  const currentTheme = themes[source];

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
        phone: formData.phone as string,
        source: source
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
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.bgGradient}`}>
      {/* Header - Made more compact */}
      <header className="relative z-10 w-full py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href={currentTheme.backLink} className="flex items-center gap-2">
            <Image
              src={currentTheme.logo}
              alt={`${currentTheme.name} Logo`}
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              {currentTheme.name}
            </span>
          </Link>
          
          <Link 
            href={currentTheme.backLink}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content - Reduced top padding */}
      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              {currentTheme.title}
            </h1>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
              {currentTheme.description}
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
            <div className={`${currentTheme.benefitsBg} rounded-lg p-6 my-8`}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                What You&rsquo;ll Get:
              </h3>
              <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'var(--font-lato)' }}>
                <li className="flex items-start gap-2">
                  <span className={`${currentTheme.benefitsText} mt-1`}>✓</span>
                  <span>{source === 'yoga' ? '30-minute consultation with our wellness platform specialists' : '30-minute consultation with our AI specialists'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${currentTheme.benefitsText} mt-1`}>✓</span>
                  <span>{source === 'yoga' ? 'Custom wellness platform setup roadmap for your business' : 'Custom AI implementation roadmap for your business'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${currentTheme.benefitsText} mt-1`}>✓</span>
                  <span>{source === 'yoga' ? 'Growth analysis and member retention strategies' : 'ROI analysis and potential cost savings breakdown'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${currentTheme.benefitsText} mt-1`}>✓</span>
                  <span>No commitment required - completely free consultation</span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full group flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 text-lg bg-gradient-to-r ${currentTheme.gradient} ${currentTheme.buttonHover} disabled:opacity-50 disabled:cursor-not-allowed`}
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 500,
                boxShadow: `0 4px 24px 0 ${currentTheme.shadowColor}`,
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{source === 'yoga' ? 'Booking Your Demo...' : 'Booking Your Consultation...'}</span>
                </>
              ) : (
                <>
                  <span>{source === 'yoga' ? 'Book Free Demo' : 'Book Free Consultation'}</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-gray-500" style={{ fontFamily: 'var(--font-lato)' }}>
            <p>We&rsquo;ll contact you within 24 hours to schedule your {source === 'yoga' ? 'demo' : 'consultation'}.</p>
            <p className="mt-1">Your information is secure and will never be shared.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <BookingPageContent />
    </Suspense>
  );
}