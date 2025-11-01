'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface ContactSectionProps {
  backgroundImage: string;
  cardImage: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

export function ContactSection({ backgroundImage, cardImage, contactInfo }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-[#1c4e80] overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Contact background"
          fill
          className="object-cover opacity-20"
          priority={false}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c4e80]/80 to-[#4cafe8]/60" />

      {/* Large "Contact" Watermark */}
      <div className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 z-0">
        <h2 className="font-['TacticSans-UltIt:Italic', sans-serif] italic text-white/5 text-[120px] sm:text-[180px] md:text-[240px] lg:text-[300px] leading-none whitespace-nowrap">
          Contact
        </h2>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['TacticSans-MedIt:Italic', sans-serif] italic text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            Get In Touch
          </h2>
          <p className="font-['TacticSans-RegIt:Italic', sans-serif] italic text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions or prayer requests.
          </p>
        </motion.div>

        {/* Form and Info Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Contact Form - Glassmorphism */}
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-['TacticSans-MedIt:Italic', sans-serif] italic text-white text-2xl md:text-3xl mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </motion.div>

          {/* Contact Info Card with Background Image */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl min-h-[400px] lg:min-h-full"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Card Background Image */}
            <div className="absolute inset-0">
              <Image
                src={cardImage}
                alt="Church building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c4e80]/95 via-[#1c4e80]/70 to-[#1c4e80]/50" />
            </div>

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 lg:p-10">
              <h3 className="font-['TacticSans-UltIt:Italic', sans-serif] italic text-white text-3xl md:text-4xl mb-8">
                Visit Us
              </h3>
              
              <ContactInfoItem
                icon={<MapPin className="w-6 h-6" />}
                label="Address"
                value={contactInfo.address}
              />
              
              <ContactInfoItem
                icon={<Phone className="w-6 h-6" />}
                label="Phone"
                value={contactInfo.phone}
              />
              
              <ContactInfoItem
                icon={<Mail className="w-6 h-6" />}
                label="Email"
                value={contactInfo.email}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Contact Info Item Component
interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ContactInfoItem({ icon, label, value }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4 mb-6 last:mb-0">
      <div className="flex-shrink-0 bg-[#4cafe8] text-white p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="font-['TacticSans-MedIt:Italic', sans-serif] text-[#4cafe8] text-sm mb-1">
          {label}
        </p>
        <p className="font-['TacticSans-RegIt:Italic', sans-serif] text-white text-base md:text-lg">
          {value}
        </p>
      </div>
    </div>
  );
}
