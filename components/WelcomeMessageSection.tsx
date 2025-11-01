'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import imgFrame2121453199 from "../assets/bbb989e48d9b1decc89776bd7017047b43e65fbd.png";
import imgSouthend1 from "../assets/ddef11e3b02574ec5550f4f45615c149dbdd9694.png";
import Image from "next/image";

function Frame2121453200() {
  return (
    <div className="bg-[#1c4e80] rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 w-full max-w-full md:max-w-[820px] lg:max-w-[500px] mx-auto shadow-lg">
      <p className="font-['TacticSans-MedIt:Italic', sans-serif] italic leading-relaxed text-[#f1f1f1] text-sm sm:text-base md:text-lg lg:text-xl text-center">
        "And they continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers." — Acts 2:42 (KJV)
      </p>
    </div>
  );
}

export function WelcomeMessageSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
    <section ref={sectionRef} className="relative w-full min-h-[700px] md:min-h-[900px] lg:min-h-[1000px] overflow-visible py-8 md:py-12">
      <motion.div 
        ref={containerRef}
        className="relative w-full h-full max-w-[1440px] mx-auto overflow-hidden rounded-t-2xl md:rounded-t-[40px] lg:rounded-t-[60px] shadow-2xl"
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
          <Image 
            alt="" 
            className="absolute max-w-none object-center object-cover opacity-10 size-full" 
            src={imgFrame2121453199} 
          />
        </motion.div>

        {/* Large background text watermark */}
        <motion.p 
          className="hidden lg:block absolute font-['TacticSans-UltIt:Italic', sans-serif] italic leading-none text-[120px] xl:text-[200px] text-[rgba(255,255,255,0.08)] top-[-50px] xl:top-[-109px] left-1/2 -translate-x-1/2 w-full max-w-[1195px] pointer-events-none text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Welcome Message
        </motion.p>

        {/* Content Container - Flexbox Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 w-full lg:w-auto lg:max-w-[600px] xl:max-w-[750px] space-y-6 md:space-y-8">
            
            {/* Welcome Message Text */}
            <motion.div 
              className="font-['TacticSans-BlkIt:Italic', sans-serif] italic leading-relaxed text-[#f1f1f1]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
                "You are Welcome to our Site and Services. Your Spiritual and holistic welfare is our concern. Come and Experience the Best of God by Repentance from sins and Accepting Jesus Christ as your Lord and Saviour. Please let us bear your burdens with you."
              </p>
            </motion.div>

            {/* Pastor Name */}
            <motion.p 
              className="font-['TacticSans-MedIt:Italic', sans-serif] italic leading-normal text-2xl sm:text-3xl md:text-4xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              (PASTOR PEACE)
            </motion.p>

            {/* Scripture Quote Box - Mobile only */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Frame2121453200 />
            </motion.div>
          </div>

          {/* Right Side - Pastor Image with Overlapping Scripture Box */}
          <motion.div 
            className="hidden lg:block relative shrink-0 w-full lg:w-[400px] xl:w-[550px] h-[600px] xl:h-[700px] mt-8 lg:mt-0" 
            data-name="southend 1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full h-full overflow-visible rounded-2xl">
              <Image 
                alt="Pastor Peace" 
                className="object-cover object-top w-full h-full scale-110 mt-6 rounded-2xl" 
                src={imgSouthend1}
                priority
              />
              
              {/* Scripture Box Overlapping Bottom Right of Image */}
              <motion.div
                className="absolute bottom-[-30px] right-[-40px] z-20"
                initial={{ opacity: 0, y: 30, x: 30 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 30, x: 30 }}
                transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Frame2121453200 />
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Pastor Image - Smaller version for tablets and mobile */}
          <motion.div 
            className="lg:hidden relative w-full max-w-[400px] mx-auto h-[350px] sm:h-[450px] md:h-[500px] mt-2" 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
              <Image 
                alt="Pastor Peace" 
                className="object-cover object-top w-full h-full" 
                src={imgSouthend1}
                priority
              />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}