'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import imgPrayerBackground from "../assets/26bf3427203ab706ca90f0ce691ce6257b9aac31.png";
import Image from "next/image";

export function PrayerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      <div className="relative w-full h-full max-w-[1440px] mx-auto">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image 
            alt="Prayer and Bible Study" 
            className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full" 
            src={imgPrayerBackground} 
          />
        </motion.div>
      </div>
    </section>
  );
}
