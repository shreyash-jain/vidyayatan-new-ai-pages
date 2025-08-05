"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const mainNavLinks = [
  { href: "#use-cases", label: "Use Cases" },
  { href: "#ai-employees", label: "AI Employees" },
  { href: "/ai-course-creator", label: "AI Course Creator" },
  { href: "#contact", label: "Contact" },
];

const aiCourseNavLinks = [
  { href: "/", label: "Home" },
  { href: "/ai-course-creator", label: "AI Course Creator" },
  { href: "/booking", label: "Contact" },
];

const yogaNavLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact Us" },
];

export const Header = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const isAiCoursePage = pathname === "/ai-course-creator";
  const isYogaPage = pathname === "/yoga";
  const navLinks = isAiCoursePage ? aiCourseNavLinks : isYogaPage ? yogaNavLinks : mainNavLinks;

  // Handle scroll effect for yoga page
  useEffect(() => {
    if (!isYogaPage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section is 100vh
      setIsScrolled(scrollPosition > heroHeight * 0.8); // Change color when 80% past hero
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isYogaPage]);

  return (
    <>
      <header className="fixed top-12 left-0 right-0 z-50 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 bg-white/20 backdrop-blur-2xl rounded-full shadow-lg border border-white/30">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logos/vid_new_logo.svg"
              alt="Vidyayatan Logo"
              width={32}
              height={32}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            onMouseLeave={() => setHoveredPath(null)}
            className="hidden md:flex items-center gap-2 relative"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-base font-semibold transition-all duration-300 ${
                  isYogaPage 
                    ? isScrolled 
                      ? 'text-gray-800 hover:text-[#ED7424]' 
                      : 'text-white hover:text-[#ED7424]'
                    : 'text-gray-600 hover:text-purple-800'
                }`}
                onMouseEnter={() => setHoveredPath(item.href)}
              >
                <span>{item.label}</span>
                {item.href === hoveredPath && (
                  <motion.div
                    className={`absolute inset-0 -z-10 rounded-full ${
                      isYogaPage 
                        ? 'bg-[#ED7424]/10' 
                        : 'bg-purple-100/60'
                    }`}
                    layoutId="hover-bg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 h-full">
            {isAiCoursePage ? (
              <button
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 rounded-full px-6 py-2 font-medium text-white shadow-md text-sm whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
              >
                <span>Join Waitlist</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            ) : isYogaPage ? (
              <Link
                href="/booking?source=yoga"
                className="group flex items-center justify-center gap-2 rounded-full px-6 py-2 font-medium text-white shadow-md text-sm whitespace-nowrap bg-gradient-to-r from-[#ED7424] to-[#F19146] hover:from-[#F19146] hover:to-[#ED7424]"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <Link
                href="/booking?source=vidyayatan"
                className="group flex items-center justify-center gap-2 rounded-full px-6 py-2 font-medium text-white shadow-md text-sm whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
              >
                <span>Talk to Sales</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-xl"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-8 w-8 text-gray-700" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 mt-16">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    isYogaPage 
                      ? isScrolled 
                        ? 'text-gray-800 hover:text-[#ED7424]' 
                        : 'text-white hover:text-[#ED7424]'
                      : 'text-gray-700 hover:text-purple-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {isAiCoursePage ? (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white shadow-lg text-lg whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
                  style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              ) : isYogaPage ? (
                <Link
                  href="/booking?source=yoga"
                  className="group flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white shadow-lg text-lg whitespace-nowrap bg-gradient-to-r from-[#ED7424] to-[#F19146] hover:from-[#F19146] hover:to-[#ED7424]"
                  style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <Link
                  href="/booking?source=vidyayatan"
                  className="group flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white shadow-lg text-lg whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
                  style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Talk to Sales</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 