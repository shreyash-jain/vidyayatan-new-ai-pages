"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#use-cases", label: "Use Cases" },
  { href: "#ai-employees", label: "AI Employees" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
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
                className="relative px-4 py-2 text-base font-normal text-gray-600 transition-colors hover:text-purple-800"
                onMouseEnter={() => setHoveredPath(item.href)}
              >
                <span>{item.label}</span>
                {item.href === hoveredPath && (
                  <motion.div
                    className="absolute inset-0 -z-10 bg-purple-100/60 rounded-full"
                    layoutId="hover-bg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 h-full">
            <Link
              href="/booking"
              className="group flex items-center justify-center gap-2 rounded-full px-6 py-2 font-medium text-white shadow-md text-sm whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
              style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
            >
              <span>Talk to Sales</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
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
                  className="text-2xl font-semibold text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="group flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white shadow-lg text-lg whitespace-nowrap bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] hover:from-[#888ae0] hover:to-[#a0a3e8]"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 500 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Talk to Sales</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 