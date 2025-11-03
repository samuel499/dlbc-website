'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ScriptureBannerProps {
  imageSrc: string;
  scripture: string;
  reference: string;
  imageAlt?: string;
}

export function ScriptureBanner({ 
  imageSrc, 
  scripture, 
  reference,
  imageAlt = "Scripture background"
}: ScriptureBannerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden"
    >
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-[#1c4e80]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-30"
          priority={false}
        />
      </div>

      {/* Overlay Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#1c4e80]/40 to-[#4cafe8]/40" /> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-8">
        <motion.div
          className="max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-['TacticSans-UltIt:Italic', sans-serif] italic text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-4">
            {scripture}
          </p>
          <p className="font-['TacticSans-MedIt:Italic', sans-serif] italic text-white/90 text-xl md:text-2xl">
            {reference}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
