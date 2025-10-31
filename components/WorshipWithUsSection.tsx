'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import imgPastorKumuyi31 from "../assets/89fa95729f4951199dc1e0214d5900ff429b178a.png";
import Image from "next/image";

function ServiceCard({ 
  day, 
  title, 
  location, 
  time, 
  dayBg, 
  circleFill, 
  borderColor,
  hasShadow = false,
  delay = 0,
  topPosition,
  leftPosition,
  mobileTopPosition,
  mobileLeftPosition
}: { 
  day: string;
  title: string;
  location: string;
  time: string;
  dayBg: string;
  circleFill: string;
  borderColor: string;
  hasShadow?: boolean;
  delay?: number;
  topPosition: string;
  leftPosition: string;
  mobileTopPosition: string;
  mobileLeftPosition: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      className="relative md:absolute h-auto md:h-[514px] w-full md:w-[660px] mb-8 md:mb-0 z-10"
      style={{ 
        top: typeof window !== 'undefined' && window.innerWidth >= 768 ? topPosition : mobileTopPosition,
        left: typeof window !== 'undefined' && window.innerWidth >= 768 ? leftPosition : mobileLeftPosition
      }}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Body */}
      <motion.div 
        className={`relative md:absolute ${hasShadow ? 'bg-[#f4faf8] shadow-[0px_0px_40px_10px_rgba(76,175,232,0.25)]' : 'bg-[#fdfdfd]'} h-auto md:h-[450px] left-0 overflow-visible md:overflow-clip top-[64px] w-full md:w-[660px] p-6 md:p-0`}
        whileHover={{ y: -10, boxShadow: '0px 10px 50px 15px rgba(76,175,232,0.3)' }}
        transition={{ duration: 0.3 }}
      >
        <motion.p 
          className="font-['TacticSans-MedIt:Italic',_sans-serif] italic leading-[normal] text-[#2d2d2d] text-[32px] sm:text-[40px] md:text-[48px] md:absolute md:h-[116px] md:left-[calc(50%-272px)] md:top-[calc(50%-112px)] md:w-[521px] mb-4 md:mb-0"
          animate={isHovered ? { x: 8 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.p>
        <motion.p 
          className={`font-['TacticSans-RegIt:Italic',_sans-serif] italic leading-[normal] text-[#2d2d2d] text-[20px] sm:text-[26px] md:text-[32px] md:absolute md:h-[151px] md:left-[calc(50%-272px)] md:top-[calc(50%+20px)] mb-4 md:mb-0 ${
            day === 'TUESDAY' ? 'md:w-[492px]' : 'md:w-[457px]'
          }`}
          animate={isHovered ? { x: 8 } : { x: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {location}
        </motion.p>
        
        {/* Time Circle */}
        <motion.div 
          className="relative md:absolute h-[180px] md:h-[242px] md:left-[451px] md:top-[298px] w-[200px] md:w-[256px] mx-auto md:mx-0"
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 242">
            <ellipse cx="128" cy="121" fill={circleFill} rx="128" ry="121" />
          </svg>
          <div className="absolute font-['TacticSans-MedIt:Italic',_sans-serif] italic leading-[normal] text-[20px] md:text-[24px] text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[152px]">
            <p className="mb-0">{time.split('\n')[0]} </p>
            <p className="mb-0">-</p>
            <p>{time.split('\n')[1]}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Day Label */}
      <motion.div 
        className="relative md:absolute left-0 md:left-[97px] top-0 mb-4 md:mb-0"
        initial={{ rotate: 358, scale: 0.8 }}
        animate={isInView ? { rotate: 358, scale: 1 } : { rotate: 358, scale: 0.8 }}
        transition={{ duration: 0.6, delay: delay + 0.2, type: "spring", bounce: 0.4 }}
        whileHover={{ scale: 1.08, rotate: 0 }}
      >
        <div className={`${dayBg} h-[90px] md:h-[118px] relative w-full md:w-[316px]`}>
          <div className="h-[90px] md:h-[118px] overflow-clip relative rounded-[inherit] w-full md:w-[316px]">
            <p className={`absolute font-['TacticSans-UltIt:Italic',_sans-serif] italic leading-[normal] text-[36px] md:text-[48px] text-white text-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}>
              {day}
            </p>
          </div>
          <div aria-hidden="true" className={`absolute border-2 ${borderColor} border-dashed inset-[-2px] pointer-events-none`} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WorshipWithUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="relative w-full min-h-screen md:min-h-[2178px] bg-[#fdfdfd] overflow-hidden py-12 md:py-0">
      <div className="relative w-full h-full max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Watermark Background Text */}
        <motion.p 
          className="absolute font-['TacticSans-UltIt:Italic',_sans-serif] italic leading-[normal] text-[60px] sm:text-[120px] md:text-[200px] text-[rgba(45,45,45,0.15)] top-0 left-4 md:left-[calc(50%-798.5px)] w-full md:w-[1195px] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          Worship With Us
        </motion.p>

        {/* "Come and Be Blessed" Heading */}
        <motion.p 
          className="relative md:absolute font-['TacticSans-MedIt:Italic',_sans-serif] italic leading-[normal] text-[#2d2d2d] text-[48px] sm:text-[72px] md:text-[96px] mb-12 md:mb-0 md:left-[calc(50%+80.5px)] md:top-[calc(50%-536px)] w-full md:w-[491.963px]"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          "Come and Be Blessed"
        </motion.p>

        {/* Service Cards Container */}
        <div className="relative md:absolute md:inset-0 flex flex-col md:block gap-0">
          {/* Sunday Service Card */}
          <ServiceCard
            day="SUNDAY"
            title="SUNDAY WORSHIP SERVICE"
            location="@ST PETER'S COMMUNITY HALL, EASTBOURNE GROVE WESTCLIFF ON SEA, SSO OQF"
            time={`10:00AM\n1:00PM`}
            dayBg="bg-[#4cafe8]"
            circleFill="#1C4E80"
            borderColor="border-[#1c4e80]"
            hasShadow={true}
            delay={0.6}
            topPosition="466px"
            leftPosition="33px"
            mobileTopPosition="0"
            mobileLeftPosition="0"
          />

          {/* Tuesday Bible Study Card */}
          <ServiceCard
            day="TUESDAY"
            title="TUESDAY BIBLE STUDY"
            location="@ST EDMUND'S COMMUNITY HALL, ST EDMUND'S CLOSE, SOUTHEND ON SEA, SS2 4SS"
            time={`06:30PM\n08:30PM`}
            dayBg="bg-[#1c4e80]"
            circleFill="#4CAFE8"
            borderColor="border-[#4cafe8]"
            hasShadow={false}
            delay={0.8}
            topPosition="1070px"
            leftPosition="716px"
            mobileTopPosition="0"
            mobileLeftPosition="0"
          />

          {/* Friday Revival Hour Card */}
          <ServiceCard
            day="FRIDAY"
            title="FRIDAY REVIVAL HOUR"
            location="@ST PETER'S COMMUNITY HALL, EASTBOURNE GROVE WESTCLIFF ON SEA, SSO OQF"
            time={`06:30PM\n08:30PM`}
            dayBg="bg-[#4cafe8]"
            circleFill="#1C4E80"
            borderColor="border-[#1c4e80]"
            hasShadow={true}
            delay={1}
            topPosition="1664px"
            leftPosition="33px"
            mobileTopPosition="0"
            mobileLeftPosition="0"
          />
        </div>

        {/* Pastor Image - Behind the cards */}
        <motion.div 
          className="hidden md:block absolute h-[765px] left-0 top-[1022px] w-[716px] z-0" 
          data-name="pastor-kumuyi3 1"
          initial={{ opacity: 0, x: -120, scale: 0.9 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -120, scale: 0.9 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image alt="Pastor Kumuyi" className="absolute h-full left-[-19.81%] max-w-none top-0 w-[147.4%]" src={imgPastorKumuyi31} />
          </div>
        </motion.div>

        {/* Scripture Quote */}
        <motion.div 
          className="relative md:absolute font-['TacticSans-UltIt:Italic',_sans-serif] italic leading-[normal] text-[#1c4e80] text-[24px] sm:text-[30px] md:text-[36px] text-center md:text-right mt-12 md:mt-0 md:left-[calc(50%+656.5px)] md:top-[calc(50%+662px)] md:translate-x-[-100%] w-full md:w-[602px] z-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-0">{` "Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching." `}</p>
          <p>Hebrews 10:25</p>
        </motion.div>
      </div>
    </section>
  );
}
