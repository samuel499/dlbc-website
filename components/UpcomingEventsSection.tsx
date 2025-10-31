'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import svgPaths from "../imports/svg-offc5ky6ha";

function BlueDotAccent() {
  return (
    <motion.div 
      className="absolute left-[20px] md:left-[48px] top-[80px] md:top-[90px] lg:top-[100px]"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#4cafe8]" />
    </motion.div>
  );
}

function DecorativeShape() {
  return (
    <motion.div 
      className="absolute left-[140px] md:left-[215px] top-[500px] md:top-[639px] h-[80px] md:h-[100px] w-[240px] md:w-[295px]"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-[-20%_-10.75%_-60%_-13.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 367 180">
          <g filter="url(#filter0_d_160_229)" id="Rectangle 8">
            <path d={svgPaths.pae299c0} fill="#4CAFE8" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="180" id="filter0_d_160_229" width="366.722" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_160_229" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_160_229" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
}



export function UpcomingEventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="relative w-full bg-[#fdfdfd] py-16 md:py-20 lg:py-24 min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
      <motion.div
        className="relative w-full max-w-[1440px] mx-auto px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Blue Dot Accent */}
        <BlueDotAccent />

        {/* Title */}
        <motion.p 
          className="font-['TacticSans-UltIt:Italic',_sans-serif] italic leading-[normal] text-[#2d2d2d] text-[48px] md:text-[72px] lg:text-[96px] absolute left-[80px] md:left-[calc(50%-605px)] top-[60px] md:top-[80px] w-[calc(100%-100px)] md:w-[956px]"
          variants={fadeInUp}
        >
          Upcoming Events
        </motion.p>

        {/* Description Text */}
        <motion.p 
          className="font-['TacticSans-RegIt:Italic',_sans-serif] italic leading-[1.4] md:leading-[normal] text-[#2d2d2d] text-[24px] md:text-[36px] lg:text-[48px] absolute left-[20px] md:left-[calc(50%-605px)] top-[200px] md:top-[243px] w-[calc(100%-40px)] md:w-[802px] pr-4 md:pr-0"
          variants={fadeInUp}
        >
          Stay connected with our upcoming programs designed to uplift your spirit, deepen your knowledge of God's Word, and prepare you for His coming.
        </motion.p>

        {/* Decorative Shape */}
        <DecorativeShape />
      </motion.div>
    </section>
  );
}
