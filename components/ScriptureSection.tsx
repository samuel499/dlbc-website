'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import imgScriptureBackground from "../assets/e4826e1bdee620140fad4b256ff6105ab825a1e1.png";
import Image from "next/image";

export function ScriptureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          alt="" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
          src={imgScriptureBackground} 
        />
      </div>

      {/* Blue Overlay */}
      <div 
        className="absolute inset-0 bg-[#1c4e80] opacity-[0.89]" 
        data-name="elementor-background-overlay" 
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8">
        {/* Main Scripture Quote */}
        <motion.p 
          className="font-['TacticSans-BldIt:Italic',_sans-serif] italic leading-[1.4] text-[18px] md:text-[20px] lg:text-[24px] text-center text-white max-w-[90%] md:max-w-[800px] mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          "Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching."
        </motion.p>

        {/* Scripture Reference */}
        <motion.p 
          className="font-['TacticSans-BldIt:Italic',_sans-serif] italic leading-[normal] text-[16px] md:text-[18px] lg:text-[20px] text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Hebrews 10:25 (KJV)
        </motion.p>
      </div>
    </section>
  );
}
