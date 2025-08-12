import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  solutions: [
    { name: 'Vacademy Assess', href: '#' },
    { name: 'Vacademy LMS', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Subscription Model', href: '#' },
  ],
  contact: [
    { name: 'Contact us', href: '#' },
  ],
};

const socialLinks = [
  { 
    href: 'https://x.com/vacademy_io', 
    'aria-label': 'Twitter/X',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  { 
    href: 'https://www.linkedin.com/company/vacademyio/posts/?feedView=all', 
    'aria-label': 'LinkedIn',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 relative">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/Vacademy Logo Short.svg"
                alt="Vacademy"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
              Empowering educational institutions with innovative learning management solutions. 
              Transform your teaching and learning experience with Vacademy.
            </p>
            
            {/* ISO Certifications */}
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-200">
                <Image
                  src="/assets/iso/iso_1.webp"
                  alt="ISO Certification 1"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-xs text-gray-600 font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-200">
                <Image
                  src="/assets/iso/iso_2.webp"
                  alt="ISO Certification 2"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-xs text-gray-600 font-medium">Quality Assured</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item['aria-label']}
                  href={item.href}
                  aria-label={item['aria-label']}
                  className="text-gray-400 hover:text-[#ec7524] transition-all duration-200 hover:scale-110"
                >
                  {item.icon}
                </Link>
              ))}
              
              {/* WhatsApp Icon Button */}
              <Link
                href="https://wa.me/919425677707"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                className="text-gray-400 hover:text-green-500 transition-all duration-200 hover:scale-110"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-[#ec7524] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-[#ec7524] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            

          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 Vidyayatan Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-500 hover:text-[#ec7524] transition-all duration-200 hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-[#ec7524] transition-all duration-200 hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 