"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { submitBookingForm } from "@/lib/supabase";
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export function BookingDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
        setIsSubmitted(true);
        // Reset form
        setFormData({ name: "", email: "", phone: undefined });
        
        // Log email status
        if (result.emailSent) {
          console.log('Booking saved and confirmation email sent successfully!');
        } else {
          console.log('Booking saved, but email sending failed:', result.emailError);
        }
        
        // Close dialog after a longer delay to show success message
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
        }, 3000);
      } else {
        setError(result.error || "Failed to submit form. Please try again.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset form when dialog closes
      setFormData({ name: "", email: "", phone: undefined });
      setError(null);
      setIsSubmitted(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "var(--font-space-grotesk)" }}>
            {isSubmitted ? "Thank You!" : "Book a Meeting"}
          </DialogTitle>
          <DialogDescription style={{ fontFamily: "var(--font-lato)" }}>
            {isSubmitted 
              ? "We've received your details and sent you a confirmation email. Please check your inbox and spam folder. Our team will be in touch within 24 hours."
              : "Fill in your details and we'll be in touch to schedule a meeting."
            }
          </DialogDescription>
        </DialogHeader>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="col-span-4"
                  style={{ fontFamily: "var(--font-lato)" }}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="col-span-4"
                  style={{ fontFamily: "var(--font-lato)" }}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
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
                    // Clear error when user starts typing
                    if (error) setError(null);
                  }}
                  placeholder="Enter phone number"
                  className="col-span-4 phone-input"
                  style={{ fontFamily: "var(--font-lato)" }}
                />
              </div>
              
              {error && (
                <div className="text-red-600 text-sm text-center" style={{ fontFamily: "var(--font-lato)" }}>
                  {error}
                </div>
              )}
            </div>
            
            <DialogFooter>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 rounded-full px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 text-base whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 500,
                  boxShadow: "0 4px 24px 0 rgba(160, 163, 232, 0.3)",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 