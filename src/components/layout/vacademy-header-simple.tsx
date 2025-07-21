"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const VacademyHeaderSimple = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/blog" className="flex items-center">
            <Image
              src="/assets/vacademy/vacademy_logo.png"
              alt="Vacademy"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-[#ec7524] transition-colors">
              Features
            </Link>
            <Link href="#case-studies" className="text-sm font-medium text-gray-600 hover:text-[#ec7524] transition-colors">
              Case Studies
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-[#ec7524] transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#ec7524] transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* CTA Button */}
          <Link 
            href="https://www.vacademy.io/book-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#ec7524] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#d66a20] transition-all duration-200 shadow-sm"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}; 