'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import imgFrame2121453199 from "../assets/bbb989e48d9b1decc89776bd7017047b43e65fbd.png";
import imgSouthend1 from "../assets/ddef11e3b02574ec5550f4f45615c149dbdd9694.png";
import Image from "next/image";

function Frame2121453200() {
  return (
    <div className="relative md:absolute bg-[#1c4e80] h-auto md:h-[157px] left-0 md:left-[620px] rounded-3 top-0 md:top-[823px] w-full md:w-[820px] p-4 md:p-0">
      <p className="font-['TacticSans-MedIt:Italic', sans-serif] italic leading-[1.4] md:leading-[normal] text-[#f1f1f1] text-[18px] md:text-6 text-center md:text-left md:absolute md:h-[87px] md:left-[calc(50%-327px)] md:top-[calc(50%-43.5px)] md:w-[654px]">"And they continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers." — Acts 2:42 (KJV)</p>
    </div>
  );
}

export function WelcomeMessageSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-200px" });

  // Card parallax scroll effect - creates the "pulling" animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform values for the card slide-up effect
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.95, 1, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);

  return (
    <section ref={sectionRef} className="relative w-full h-[800px] md:h-[1000px] overflow-visible">
      <motion.div 
        ref={containerRef}
        className="relative w-full h-full max-w-[1440px] mx-auto overflow-hidden rounded-t-2xl md:rounded-t-6 shadow-2xl"
        style={{ 
          y: cardY,
          scale: cardScale,
          opacity: cardOpacity
        }}
      >
        {/* Background */}
        <motion.div 
          aria-hidden="true" 
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute bg-[#1c4e80] inset-0" />
          <Image alt="" className="absolute max-w-none object-50%-50% object-cover opacity-10 size-full" src={imgFrame2121453199} />
        </motion.div>

        {/* Large background text watermark */}
        <motion.p 
          className="hidden md:block absolute font-['TacticSans-UltIt:Italic', sans-serif] italic leading-[normal] text-[100px] lg:text-[200px] text-[rgba(255,255,255,0.08)] top-[-50px] md:top-[-109px] left-0 md:left-[calc(50%-100px)] w-full md:w-[1195px] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Welcome Message
        </motion.p>

        {/* Pastor Image - Fixed height */}
        <motion.div 
          className="hidden md:block absolute h-[600px] lg:h-[849px] right-0 lg:left-[779px] -top-5 lg:top-[-26px] w-[600px] lg:w-[791px]" 
          data-name="southend 1"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image alt="Pastor Peace" className="absolute h-[227.12%] left-[-44.76%] max-w-none top-[-33.71%] w-[182.86%]" src={imgSouthend1} />
          </div>
        </motion.div>

        {/* Welcome Message Text */}
        <motion.div 
          className="relative md:absolute font-['TacticSans-BlkIt:Italic', sans-serif] italic leading-[1.4] md:leading-[normal] left-0 md:left-[calc(50%-672px)] text-[#f1f1f1] text-6 sm:text-[32px] md:text-[40px] lg:text-[48px] top-10 md:top-[163px] w-full md:w-[821px] px-4 md:px-0"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-0">{`"You are Welcome to our Site and Services . Your Spiritual and holistic welfare is our concern. Come and Experience the Best  of God by Repentance from sins and Accepting Jesus Christ as your Lord and Saviour. Please let us bear your burdens with you."`}</p>
          <p>&nbsp;</p>
        </motion.div>

        {/* Scripture Quote Box */}
        <motion.div
          className="relative md:absolute top-80 md:top-auto px-4 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Frame2121453200 />
        </motion.div>

        {/* Pastor Name */}
        <motion.p 
          className="relative md:absolute font-['TacticSans-MedIt:Italic', sans-serif] italic leading-[normal] left-0 md:left-[calc(50%-564px)] text-[28px] md:text-[36px] text-white top-[280px] md:top-[774px] w-full md:w-[355px] text-center md:text-left px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          (PASTOR PEACE)
        </motion.p>
      </motion.div>
    </section>
  );
}
