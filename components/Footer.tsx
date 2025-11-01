'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

interface FooterLink {
  label: string;
  href: string;
}

interface NetworkLocation {
  name: string;
  url: string;
}

interface FooterProps {
  logoSrc?: string;
  description?: string;
  phone?: string;
  email?: string;
  quickLinks?: FooterLink[];
  networkLocations?: NetworkLocation[];
}


export function Footer({ 
  logoSrc,
  description = "We take the Bible as the final authority in all matters concerning Christian life and practice.",
  phone,
  email,
  quickLinks,
  networkLocations 
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const defaultQuickLinks: FooterLink[] = quickLinks || [
    { label: 'Home', href: '#home' },
    { label: 'What We Believe', href: '#beliefs' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
  ];

  const defaultNetworks: NetworkLocation[] = networkLocations || [
    { name: 'dclm.org', url: 'https://dclm.org' },
    { name: 'dclm-uk.org', url: 'https://dclm-uk.org' },
    { name: 'dclm.org', url: 'https://dclm.org' },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-br from-[#1c4e80] via-[#2d5f8d] to-[#1c4e80] text-white overflow-hidden">
      
      {/* Large "Southend" Text Background */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <motion.h2 
          className="font-['TacticSans-UltIt:Italic', sans-serif] italic text-white/5 text-[150px] sm:text-[200px] md:text-[280px] lg:text-[350px] leading-none whitespace-nowrap translate-y-[20%]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Southend
        </motion.h2>
      </div>

      {/* Deeper Life Logo - Bottom Left */}
      {logoSrc && (
        <div className="absolute bottom-8 left-8 z-10 hidden md:block">
          <Image
            src={logoSrc}
            alt="Deeper Life Logo"
            width={80}
            height={80}
            className="opacity-20"
          />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          
          {/* Church Info with Logo and Contact Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-['TacticSans-UltIt:Italic', sans-serif] italic text-3xl md:text-4xl text-white mb-4">
              Deeper Life Bible Church, Southend
            </h3>
            <p className="font-['TacticSans-RegIt:Italic', sans-serif] italic text-white/80 text-sm md:text-base leading-relaxed mb-6">
              {description}
            </p>

            {/* Contact Icons */}
            <div className="flex flex-col gap-4">
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-white/80 hover:text-[#4cafe8] transition-colors duration-300"
                >
                  <div className="bg-white/10 p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-['TacticSans-RegIt:Italic', sans-serif] text-sm md:text-base">
                    {phone}
                  </span>
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-[#4cafe8] transition-colors duration-300"
                >
                  <div className="bg-white/10 p-2 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-['TacticSans-RegIt:Italic', sans-serif] text-sm md:text-base">
                    {email}
                  </span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-['TacticSans-MedIt:Italic', sans-serif] italic text-xl md:text-2xl mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {defaultQuickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-['TacticSans-RegIt:Italic', sans-serif] text-white/70 hover:text-[#4cafe8] transition-colors duration-300 text-sm md:text-base block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Networks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-['TacticSans-MedIt:Italic', sans-serif] italic text-xl md:text-2xl mb-6 text-white">
              Our Networks
            </h4>
            <ul className="space-y-3">
              {defaultNetworks.map((network, index) => (
                <li key={index}>
                  <a
                    href={network.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['TacticSans-RegIt:Italic', sans-serif] text-white/70 hover:text-[#4cafe8] transition-colors duration-300 text-sm md:text-base block"
                  >
                    {network.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          className="border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-['TacticSans-RegIt:Italic', sans-serif] text-white/60 text-sm">
            © {currentYear} dlbcsouthend. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
  