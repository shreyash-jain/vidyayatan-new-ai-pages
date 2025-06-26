import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Linkedin, Twitter, Github, Youtube, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BookingDialog } from '../booking-dialog';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Press', href: '#' },
  ],
  capabilities: [
    { name: 'Autonomous Agents', href: '#' },
    { name: 'LLM Integration', href: '#' },
    { name: 'Multichannel Orchestration', href: '#' },
    { name: 'Image & Document AI', href: '#' },
    { name: 'Custom Model Training', href: '#' },
  ],
  resources: [
    { name: 'Help Center', href: '#' },
    { name: 'API Documentation', href: '#' },
    { name: 'Security & Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
  { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
  { icon: Github, href: '#', 'aria-label': 'GitHub' },
  { icon: Youtube, href: '#', 'aria-label': 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/70">
      <div className="container mx-auto px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 & 2 & 3 */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">AI Capabilities</h3>
            <ul className="space-y-3">
              {footerLinks.capabilities.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-slate-900 mb-4">Stay in Touch</h3>
            <p className="text-sm text-slate-600 mb-4">
              Join thousands using AI to supercharge their workflow.
            </p>
            <div className="mt-6">
              <BookingDialog>
                <button
                  className="group w-full flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-white shadow-md text-sm whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
                  style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
                >
                  <span>Book a meeting</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </BookingDialog>
            </div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link key={index} href={social.href} aria-label={social['aria-label']} className="text-slate-500 hover:text-slate-800">
                    <Icon className="h-6 w-6" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border-t border-slate-200/70">
        <div className="container mx-auto px-24 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Vidyayatan. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Made with ❤️ by the Vidyayatan Team</p>
        </div>
      </div>
    </footer>
  );
} 