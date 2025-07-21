"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X, Globe, Smartphone } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#success-stories", label: "Success Stories" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const VacademyHeader = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 bg-white/20 backdrop-blur-2xl rounded-full shadow-lg border border-white/30">
          {/* Logo */}
          <Link href="/blog" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Vacademy</span>
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
                className="relative px-4 py-2 text-base font-normal text-gray-600 transition-colors hover:text-green-800"
                onMouseEnter={() => setHoveredPath(item.href)}
              >
                <span>{item.label}</span>
                {item.href === hoveredPath && (
                  <motion.div
                    className="absolute inset-0 -z-10 bg-green-100/60 rounded-full"
                    layoutId="hover-bg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 h-full">
            <button className="group flex items-center justify-center gap-2 rounded-full px-6 py-2 font-medium text-white shadow-md text-sm whitespace-nowrap bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 transition-all">
              <Smartphone className="h-4 w-4" />
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Mobile Logo */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-800">Vacademy</span>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-4 mb-8">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-lg font-medium text-gray-700 hover:text-green-600 transition-colors p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white shadow-lg text-lg whitespace-nowrap bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 w-full transition-all"
              >
                <Smartphone className="h-5 w-5" />
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 