'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  quickLinks?: FooterLink[];
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    email?: string;
  };
}

export function Footer({ quickLinks, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const defaultQuickLinks: FooterLink[] = quickLinks || [
    { label: 'About Us', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-br from-[#1c4e80] via-[#2d5f8d] to-[#1c4e80] text-white overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4cafe8] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4cafe8] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          
          {/* Church Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-['TacticSans-UltIt:Italic', sans-serif] italic text-3xl md:text-4xl text-[#4cafe8] mb-4">
              DLBC Southend
            </h3>
            <p className="font-['TacticSans-RegIt:Italic', sans-serif] italic text-white/80 text-sm md:text-base leading-relaxed">
              Deeper Life Bible Church - A community of faith, fellowship, and spiritual growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-['TacticSans-MedIt:Italic', sans-serif] italic text-xl md:text-2xl mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {defaultQuickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-['TacticSans-RegIt:Italic', sans-serif] text-white/70 hover:text-[#4cafe8] transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-['TacticSans-MedIt:Italic', sans-serif] italic text-xl md:text-2xl mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <SocialIcon
                href={socialLinks?.facebook || '#'}
                icon={<Facebook className="w-5 h-5" />}
                label="Facebook"
              />
              <SocialIcon
                href={socialLinks?.instagram || '#'}
                icon={<Instagram className="w-5 h-5" />}
                label="Instagram"
              />
              <SocialIcon
                href={socialLinks?.youtube || '#'}
                icon={<Youtube className="w-5 h-5" />}
                label="YouTube"
              />
              <SocialIcon
                href={socialLinks?.email || '#'}
                icon={<Mail className="w-5 h-5" />}
                label="Email"
              />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['TacticSans-RegIt:Italic', sans-serif] italic text-white/60 text-sm text-center md:text-left">
            © {currentYear} Deeper Life Bible Church. All rights reserved.
          </p>
          
          {/* Southend Text */}
          <motion.p
            className="font-['TacticSans-UltIt:Italic', sans-serif] italic text-[#4cafe8] text-2xl md:text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Southend
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

// Social Icon Component
interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      className="bg-white/10 hover:bg-[#4cafe8] text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}
