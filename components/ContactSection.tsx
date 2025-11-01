'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ContactForm } from './ContactForm';

interface ContactSectionProps {
  backgroundImage: string;
  cardImage: string;
  cardQuote: string;
  cardReference: string;
}

export function ContactSection({ 
  backgroundImage, 
  cardImage, 
  cardQuote,
  cardReference 
}: ContactSectionProps) {
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

          {/* Quote Card with Background Image */}
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
                alt="Scripture background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c4e80]/95 via-[#1c4e80]/80 to-[#1c4e80]/60" />
            </div>

            {/* Card Content - Bible Quote */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 md:p-8 lg:p-12">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="font-['TacticSans-UltIt:Italic', sans-serif] italic text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-6">
                  &ldquo;{cardQuote}&rdquo;
                </p>
                <p className="font-['TacticSans-Bld', sans-serif] text-[#4cafe8] text-lg md:text-xl lg:text-2xl">
                  {cardReference}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
