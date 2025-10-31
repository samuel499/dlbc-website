'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import svgPaths from "../imports/svg-q4tqebegkv";
import imgPastorKumuyi311 from "../assets/e63d112cea8d304bc6fd2f9365bd4f93c00bde7d.png";

export function WhatWeBelieveSection() {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="relative w-full overflow-hidden pb-20 md:pb-24 lg:pb-32" style={{ backgroundColor: 'rgba(28, 78, 128, 0.08)' }}>
      <motion.div 
        className="relative w-full max-w-[1440px] mx-auto min-h-[800px] md:min-h-[1000px] lg:min-h-[1450px]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Mobile Layout */}
        <div className="lg:hidden px-4 py-12">
          {/* Blue dot accent - Mobile */}
          <motion.div 
            className="flex justify-center mb-6"
            variants={{
              hidden: { scale: 0 },
              visible: { 
                scale: 1,
                transition: { duration: 0.6, type: "spring", bounce: 0.4 }
              }
            }}
          >
            <div className="relative">
              <div className="w-5 h-5 bg-[#4cafe8] rounded-full shadow-lg"></div>
              <motion.div 
                className="absolute inset-0 w-5 h-5 bg-[#4cafe8] rounded-full opacity-30"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Title - Mobile */}
          <motion.h2 
            className="font-['TacticSans-UltIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[42px] sm:text-[60px] leading-[1.1] mb-6 text-center"
            variants={fadeInUp}
          >
            What We Believe"
          </motion.h2>

          {/* Subtext - Mobile */}
          <motion.p 
            className="font-['TacticSans-RegIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[18px] sm:text-[20px] leading-[1.4] text-center mb-8"
            variants={fadeInUp}
          >
            We take the Bible as the final authority in all matters concerning Christian life and practice. Learn about the core doctrines that guide our teaching and worship.
          </motion.p>

          {/* Pastor Image - Mobile */}
          <motion.div 
            className="relative mx-auto mb-8 w-full max-w-[350px]"
            variants={slideInFromLeft}
          >
            <div className="relative h-[450px]">
              {/* Blue background */}
              <div className="absolute bg-[#4cafe8] h-[280px] w-[220px] rounded-[30px] left-1/2 -translate-x-1/2 top-[60px]" />
              
              {/* Pastor Image */}
              <div className="absolute h-[350px] w-[300px] left-1/2 -translate-x-1/2 top-0">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="Pastor Dr W.F Kumuyi" className="absolute h-[100.28%] left-[-39.01%] max-w-none top-[4.73%] w-[197.49%]" src={imgPastorKumuyi311} />
                </div>
              </div>

              {/* Name Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#e3eff6] h-[90px] rounded-lg flex flex-col items-center justify-center px-4">
                <p className="font-['TacticSans-MedIt:Italic',_sans-serif] italic text-[22px] text-[#2d2d2d] text-center mb-1">PASTOR DR W.F KUMUYI</p>
                <p className="font-['TacticSans-RegIt:Italic',_sans-serif] italic text-[15px] text-[#2d2d2d] text-center">General Superintendent, Deeper Life Bible Church</p>
              </div>
            </div>
          </motion.div>

          {/* Scripture Quote - Mobile */}
          <motion.div 
            className="space-y-4 text-center mb-8"
            variants={slideInFromRight}
          >
            <p className="font-['TacticSans-MedIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[24px] sm:text-[28px] leading-[1.3]">
              "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works."
            </p>
            <p className="font-['TacticSans-MedIt:Italic',_sans-serif] italic text-[#1c4e80] text-[20px]">
              2 Timothy 3:16–17 (KJV)
            </p>
          </motion.div>
        </div>

        {/* Desktop Layout - Exact Figma positioning */}
        <div className="hidden lg:block">
          {/* "What We Believe" Title - Right side */}
          <motion.p 
            className="absolute font-['TacticSans-UltIt:Italic',_sans-serif] h-[226px] italic leading-[normal] left-[calc(50%+162px)] text-[#2d2d2d] text-[96px] top-[80px] w-[510px]"
            variants={slideInFromRight}
          >
            What We Believe"
          </motion.p>

          {/* Subtext - Left side, above pastor image */}
          <motion.p 
            className="absolute font-['TacticSans-RegIt:Italic',_sans-serif] h-[116px] italic leading-[normal] left-[calc(50%-450px)] text-[#2d2d2d] text-[22px] text-center top-[330px] translate-x-[-50%] w-[650px]"
            variants={fadeInUp}
          >
            We take the Bible as the final authority in all matters concerning Christian life and practice. Learn about the core doctrines that guide our teaching and worship.
          </motion.p>

          {/* Pastor Image Content - Left side */}
          <motion.div 
            className="absolute h-[968px] left-[-53px] top-[439px] w-[789px]"
            variants={slideInFromLeft}
          >
            {/* Blue background shape */}
            <div className="absolute bg-[#4cafe8] h-[657px] left-[135px] rounded-[50px] top-[268px] w-[519px]" />
            
            {/* Pastor Image */}
            <div className="absolute h-[887px] left-0 top-0 w-[789px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Pastor Dr W.F Kumuyi" className="absolute h-[100.28%] left-[-39.01%] max-w-none top-[4.73%] w-[197.49%]" src={imgPastorKumuyi311} />
              </div>
            </div>

            {/* Name Badge */}
            <div className="absolute bg-[#e3eff6] h-[118px] left-[100px] top-[850px] w-[600px]" />
            <div className="absolute h-[71px] italic leading-[normal] left-[120px] text-[#2d2d2d] top-[874px] w-[560px]">
              <p className="absolute font-['TacticSans-RegIt:Italic',_sans-serif] h-[21px] left-[calc(50%-280px)] text-[20px] top-[50px] w-[560px]">General Superintendent, Deeper Life Bible Church</p>
              <p className="absolute font-['TacticSans-MedIt:Italic',_sans-serif] h-[42px] left-[calc(50%-280px)] text-[36px] top-0 w-[560px]">PASTOR DR W.F KUMUYI</p>
            </div>
          </motion.div>

          {/* Scripture Quote - Right side */}
          <motion.p 
            className="absolute font-['TacticSans-MedIt:Italic',_sans-serif] h-[464px] italic leading-[normal] right-[60px] text-[#2d2d2d] text-[48px] text-right top-[494px] w-[620px]"
            variants={slideInFromRight}
          >
            "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:
            <br aria-hidden="true" />
            {` That the man of God may be perfect, throughly furnished unto all good works."`}
          </motion.p>

          {/* Scripture Reference - Right side, below quote */}
          <motion.p 
            className="absolute font-['TacticSans-MedIt:Italic',_sans-serif] h-[42px] italic leading-[normal] right-[60px] text-[#1c4e80] text-[36px] text-right top-[982px] w-[466px]"
            variants={fadeInUp}
          >
            2 Timothy 3:16–17 (KJV)
          </motion.p>

          {/* Blue accent element - Bottom right, below scripture */}
          <motion.div 
            className="absolute h-[100px] left-[990px] top-[1072px] w-[295px]"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
          >
            <div className="h-[100px] w-[295px]">
              <div className="absolute inset-[-20%_-10.75%_-60%_-13.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 367 180">
                  <g filter="url(#filter0_d_152_51)" id="Rectangle 8">
                    <path d={svgPaths.pae299c0} fill="#4CAFE8" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="180" id="filter0_d_152_51" width="366.722" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="20" />
                      <feGaussianBlur stdDeviation="20" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_152_51" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_152_51" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Blue dot accent - Top center */}
          <motion.div 
            className="absolute left-[calc(50%-10px)] top-[60px] z-10"
            variants={{
              hidden: { scale: 0 },
              visible: { 
                scale: 1,
                transition: { duration: 0.6, type: "spring", bounce: 0.4 }
              }
            }}
          >
            <div className="w-5 h-5 bg-[#4cafe8] rounded-full shadow-lg"></div>
            <motion.div 
              className="absolute inset-0 w-5 h-5 bg-[#4cafe8] rounded-full opacity-30"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
