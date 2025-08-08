"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const VacademyHeaderSimple = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/blog" className="flex items-center">
            <Image
              src="/Vacademy Logo Short.svg"
              alt="Vacademy"
              width={64}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#vacademy-assess" className="text-sm font-medium text-gray-700 hover:text-[#ec7524] transition-colors duration-200">
              Vacademy Assess
            </Link>
            <Link href="#vacademy-lms" className="text-sm font-medium text-gray-700 hover:text-[#ec7524] transition-colors duration-200">
              Vacademy LMS
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-[#ec7524] transition-colors duration-200">
              Contact
            </Link>
            <Link href="#resources" className="text-sm font-medium text-gray-700 hover:text-[#ec7524] transition-colors duration-200">
              Resources
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center">
            <Link 
              href="https://www.vacademy.io/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#ec7524] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#d66a20] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>Book a Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}; 