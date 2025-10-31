'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import svgPaths from "../imports/svg-x6toc1biup";
import imgFrame2121453193 from "../assets/ee58c30feb4a35ed12879e27d4ea798a62e51be8.png";
import imgFrame2121453194 from "../assets/ab5b177bac98f4160531363f92b969c748fb3991.png";
import imgFrame2121453195 from "../assets/9e910c2cd3241d00a70a6e70808946855fa74d16.png";
import Image from "next/image";

function Frame2121453193() {
  return (
    <div className="h-[180px] md:h-[242.388px] relative rounded-[20px] md:rounded-[30px] shadow-[0px_0px_40px_10px_rgba(76,175,232,0.25)] w-[130px] md:w-[177.751px]">
      <Image alt="Church community gathering" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] md:rounded-[30px] size-full" src={imgFrame2121453193} />
    </div>
  );
}

function Frame2121453194() {
  return (
    <div className="h-[165px] md:h-[223.617px] relative rounded-[20px] md:rounded-[30px] shadow-[0px_0px_40px_10px_rgba(76,175,232,0.25)] w-[130px] md:w-[177.69px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px] md:rounded-[30px]">
        <Image alt="Church service" className="absolute h-[108.36%] left-[-40.7%] max-w-none top-[-7.99%] w-[181.82%]" src={imgFrame2121453194} />
      </div>
    </div>
  );
}

function Frame2121453196() {
  return (
    <div className="h-[165px] md:h-[223.617px] relative rounded-[20px] md:rounded-[30px] shadow-[0px_0px_40px_10px_rgba(76,175,232,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[130px] md:w-[177.69px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px] md:rounded-[30px]">
        <Image alt="Church worship" className="absolute h-[108.36%] left-[-40.7%] max-w-none top-[-7.99%] w-[181.82%]" src={imgFrame2121453194} />
      </div>
    </div>
  );
}

function Frame2121453195() {
  return (
    <div className="h-[105px] md:h-[140.731px] relative rounded-[20px] md:rounded-[30px] shadow-[0px_0px_40px_10px_rgba(76,175,232,0.25)] w-[165px] md:w-[222.206px]">
      <Image alt="Church members" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] md:rounded-[30px] size-full" src={imgFrame2121453195} />
    </div>
  );
}

function After() {
  return <div className="absolute bg-[#27abc9] h-10 left-0 right-0 rounded-[20px] top-0" data-name="::after" />;
}

function TiAngleUp() {
  return (
    <div className="absolute h-2.5 left-[calc(50%-0.09px)] top-[13.33px] translate-x-[-50%] w-[8.993px]" data-name="ti-angle-up">
      <p className="absolute font-['Inter:Regular', sans-serif] font-normal leading-[9px] left-[4.5px] not-italic text-[9px] text-center text-white top-0 translate-x-[-50%] w-[8.993px]"></p>
    </div>
  );
}

function LinkBackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="bg-[#197084] relative rounded-[20px] size-full cursor-pointer hover:bg-[#1a7d94] transition-colors" 
      data-name="Link back-to-top"
      onClick={scrollToTop}
    >
      <After />
      <TiAngleUp />
    </div>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Pop-up animation for images - starts from center, then moves to final position
  const imagePopUpVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      x: 100,
      y: 100,
    },
    visible: (custom: { finalX: number; finalY: number; delay: number }) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 1.2,
        delay: custom.delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: {
          type: "spring",
          damping: 10,
          stiffness: 100,
        }
      },
    }),
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="relative w-full bg-[#fdfdfd] overflow-hidden py-12 md:py-20">
      <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Mobile: Stack images horizontally in a grid */}
        <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
          <motion.div 
            variants={imagePopUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ finalX: 0, finalY: 0, delay: 0.2 }}
          >
            <div className="flex-none rotate-[-8deg]">
              <Frame2121453193 />
            </div>
          </motion.div>

          <motion.div 
            variants={imagePopUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ finalX: 0, finalY: 0, delay: 0.4 }}
          >
            <div className="flex-none rotate-[10deg]">
              <Frame2121453196 />
            </div>
          </motion.div>

          <motion.div 
            variants={imagePopUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ finalX: 0, finalY: 0, delay: 0.6 }}
          >
            <div className="flex-none rotate-[-4deg]">
              <Frame2121453194 />
            </div>
          </motion.div>

          <motion.div 
            variants={imagePopUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ finalX: 0, finalY: 0, delay: 0.7 }}
          >
            <div className="flex-none rotate-[8deg]">
              <Frame2121453195 />
            </div>
          </motion.div>
        </div>

        {/* Desktop: Left Side - "D" Photo Collage */}
        <div className="hidden md:block absolute left-8 top-0 w-[450px] h-[600px]">
          {/* Photo 1 - Top left of "D" */}
          <motion.div 
            className="absolute left-[20px] top-[20px]" 
            variants={imagePopUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ finalX: 0, finalY: 0, delay: 0.2 }}
          >
            <div className="flex-none rotate-[-8deg]">
              <Frame2121453193 />
            </div>
          </motion.div>

          {/* Photo 2 - Middle left of "D" */}
          <motion.div 
            className="absolute left-[10px] top-[180px]" 
            variants={imagePopUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ finalX: 0, finalY: 0, delay: 0.4 }}
          >
            <div className="flex-none rotate-[-4deg]">
              <Frame2121453194 />
            </div>
          </motion.div>

          {/* Photo 3 - Bottom left of "D" */}
          <motion.div 
            className="absolute left-[30px] top-[340px]" 
            variants={imagePopUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ finalX: 0, finalY: 0, delay: 0.6 }}
          >
            <div className="flex-none rotate-[-6deg]">
              <Frame2121453193 />
            </div>
          </motion.div>

          {/* Photo 4 - Top right curve of "D" */}
          <motion.div 
            className="absolute left-[210px] top-[60px]" 
            variants={imagePopUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ finalX: 0, finalY: 0, delay: 0.5 }}
          >
            <div className="flex-none rotate-[10deg]">
              <Frame2121453196 />
            </div>
          </motion.div>

          {/* Photo 5 - Bottom right curve of "D" */}
          <motion.div 
            className="absolute left-[230px] top-[280px]" 
            variants={imagePopUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={{ finalX: 0, finalY: 0, delay: 0.7 }}
          >
            <div className="flex-none rotate-[8deg]">
              <Frame2121453195 />
            </div>
          </motion.div>
        </div>

        {/* Right Side - Text Content */}
        <div className="relative md:ml-[500px]">
          
          {/* Header with Blue Dot - Single Line */}
          <motion.div 
            className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8"
            variants={slideInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1 }}
          >
            <motion.div 
              className="relative w-5 h-5 md:w-6 md:h-6 flex-shrink-0 cursor-pointer group"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                bounce: 0.6, 
                delay: 1 
              }}
              whileHover={{ scale: 1.2 }}
            >
              {/* Main circle */}
              <div className="absolute inset-0 w-5 h-5 md:w-6 md:h-6 bg-[#4cafe8] rounded-full shadow-lg" />
              
              {/* Pulsing effect */}
              <motion.div 
                className="absolute inset-0 w-5 h-5 md:w-6 md:h-6 bg-[#4cafe8] rounded-full opacity-30"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Glow effect on hover */}
              <motion.div 
                className="absolute inset-0 w-5 h-5 md:w-6 md:h-6 bg-[#4cafe8] rounded-full blur-md opacity-0 group-hover:opacity-70"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <h2 className="font-['TacticSans-UltIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[48px] md:text-[60px] lg:text-[80px] leading-none whitespace-nowrap">
              About us
            </h2>
          </motion.div>

          {/* Description Text - Directly under header */}
          <motion.div 
            className="mb-8 md:mb-12"
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1.4 }}
          >
            <p className="font-['TacticSans-RegIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[20px] md:text-[28px] lg:text-[36px] leading-[1.4] max-w-full md:max-w-[700px]">
              We're a Bible-rooted, prayerful community committed to discipleship, worship and local outreach. Our ministry has grown through committed Bible teaching and practical service to families and communities.
            </p>
          </motion.div>

          {/* Blue Slanted Rectangular Bar - Directly under text */}
          <motion.div 
            className="inline-block mb-8 md:mb-0"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
          >
            <div className="h-[60px] md:h-[80px] w-[200px] md:w-[260px]">
              <div className="h-[60px] md:h-[80px] relative w-[200px] md:w-[260px]">
                <div className="absolute inset-[-20%_-10.75%_-60%_-13.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 367 180">
                    <g filter="url(#filter0_d_47_160)" id="Rectangle 7">
                      <path d={svgPaths.pae299c0} fill="#4CAFE8" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="180" id="filter0_d_47_160" width="366.722" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="20" />
                        <feGaussianBlur stdDeviation="20" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_47_160" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_47_160" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div 
            className="hidden md:block absolute right-0 bottom-[-40px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 2.2 }}
          >
            <div className="h-[40px] w-[42.181px]">
              <LinkBackToTop />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
