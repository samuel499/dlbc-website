'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import svgPaths from "../imports/svg-75nplmhdea";

function Group1() {
  return (
    <div className="absolute left-5 md:left-12 top-5 md:top-6 size-[60px] md:size-20">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Group 1">
          <circle cx="40" cy="40" fill="var(--fill-0, #4CAFE8)" id="Ellipse 1" r="40" />
          <g id="Group">
            <path d={svgPaths.p2ec1f000} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p1ad8cb00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute left-5 md:left-12 top-5 md:top-6 size-[60px] md:size-20">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Group 1">
          <circle cx="40" cy="40" fill="var(--fill-0, #4CAFE8)" id="Ellipse 1" r="40" />
        </g>
      </svg>
      <div className="absolute left-4 md:left-[22px] top-3 md:top-4 w-8 md:w-[43px] h-7 md:h-[38px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 38">
          <path d={svgPaths.p3de27f00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute left-5 md:left-12 top-5 md:top-6 size-[60px] md:size-20">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Group 1">
          <circle cx="40" cy="40" fill="var(--fill-0, #4CAFE8)" id="Ellipse 1" r="40" />
          <path d={svgPaths.p32159c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute left-5 md:left-12 top-5 md:top-6 size-[60px] md:size-20">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Group 1">
          <circle cx="40" cy="40" fill="var(--fill-0, #4CAFE8)" id="Ellipse 1" r="40" />
          <g id="Sparkles">
            <path d={svgPaths.p1dc54900} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p372968f0} fill="var(--fill-0, #FAF9FB)" id="Vector_2" />
            <path d={svgPaths.pf842d00} fill="var(--fill-0, #FAFAFA)" id="Vector_3" />
            <path d={svgPaths.p35c5c400} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p37874c40} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p2479b900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pc8ff480} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.pec0c400} fill="var(--fill-0, #FAFAFA)" id="Vector_8" />
            <path d={svgPaths.p2ea71d00} fill="var(--fill-0, white)" id="Vector_9" />
            <path d={svgPaths.p128d3e80} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p157d5e00} fill="var(--fill-0, white)" id="Vector_11" />
            <path d="M53 53H51.375V54.625H53V53Z" fill="var(--fill-0, white)" id="Vector_12" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute left-5 md:left-12 top-5 md:top-6 size-[60px] md:size-20">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Group 1">
          <circle cx="40" cy="40" fill="var(--fill-0, #4CAFE8)" id="Ellipse 1" r="40" />
          <path d={svgPaths.p30537300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DoctrineCard({ 
  icon, 
  title, 
  description
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <motion.div 
      className="relative w-full bg-white overflow-clip shadow-lg cursor-pointer p-6 md:p-0 md:h-[265px] rounded-lg md:rounded-none"
      whileHover={{ 
        y: -8, 
        boxShadow: "0px 12px 24px 0px rgba(76,175,232,0.35)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {icon}
      </motion.div>
      <motion.p 
        className="font-['TacticSans-MedIt:Italic', sans-serif] italic leading-[normal] text-[#4cafe8] text-[28px] md:text-[36px] mt-[100px] md:mt-0 md:absolute md:left-12 md:top-[calc(50%-42px)] mb-3 md:mb-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.p>
      <p className="font-['TacticSans-RegIt:Italic', sans-serif] italic leading-[1.4] md:leading-[normal] text-[#2d2d2d] text-[18px] md:text-6 md:absolute md:left-12 md:right-12 md:bottom-[37px]">{description}</p>
    </motion.div>
  );
}

function Frame1116607030() {
  return (
    <motion.div 
      className="bg-[#4cafe8] box-border content-stretch flex gap-2.5 h-[70px] md:h-[93px] items-center justify-center mx-auto px-5 md:px-[26px] py-2.5 md:py-3 rounded-[100px] w-full max-w-[300px] md:max-w-[408px] cursor-pointer"
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "#3ba3d9",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <a href="https://dclm-uk.org/about/what-we-believe/" className="font-['Plus_Jakarta_Sans:SemiBold', sans-serif] font-semibold leading-[normal] relative shrink-0 text-5 md:text-6 text-nowrap text-white whitespace-pre">Learn More</a>
    </motion.div>
  );
}

export function DoctrineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-[#fdfdfd] py-12 md:py-20">
      <motion.div 
        ref={ref}
        className="relative w-full max-w-[1440px] mx-auto overflow-hidden px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Background title */}
        <motion.p 
          className="font-['TacticSans-UltIt:Italic', sans-serif] italic leading-[normal] text-[60px] sm:text-[100px] md:text-[140px] lg:text-[200px] text-[rgba(45,45,45,0.08)] text-center md:text-left mb-12 md:mb-0 md:absolute md:left-0 md:top-0 w-full pointer-events-none"
          variants={titleVariants}
        >
          Doctrine
        </motion.p>

        {/* Doctrine cards with staggered animations */}
        <div className="flex flex-col gap-6 md:gap-8 pt-32 md:pt-72 lg:pt-80">
          <motion.div 
            className="w-full max-w-[730px] mx-auto md:mx-0 md:ml-auto"
            variants={itemVariants}
          >
            <DoctrineCard
              icon={<Group1 />}
              title="The Holy Bible"
              description="The inspired Word of God and final authority for faith and practice."
            />
          </motion.div>

          <motion.div 
            className="w-full max-w-[730px] mx-auto md:mx-0"
            variants={itemVariants}
          >
            <DoctrineCard
              icon={<Group2 />}
              title="The God Head"
              description="One true God, eternally existent in three persons: Father, Son, and Holy Spirit."
            />
          </motion.div>

          <motion.div 
            className="w-full max-w-[730px] mx-auto md:mx-0 md:ml-auto"
            variants={itemVariants}
          >
            <DoctrineCard
              icon={<Group3 />}
              title="The Lord Jesus Christ"
              description="His incarnation, atoning death, resurrection, and eternal reign."
            />
          </motion.div>

          <motion.div 
            className="w-full max-w-[730px] mx-auto md:mx-0"
            variants={itemVariants}
          >
            <DoctrineCard
              icon={<Group4 />}
              title="Santification"
              description="A life of holiness, separation from sin, and dedication to God."
            />
          </motion.div>

          <motion.div 
            className="w-full max-w-[730px] mx-auto md:mx-0 md:ml-auto"
            variants={itemVariants}
          >
            <DoctrineCard
              icon={<Group5 />}
              title="The Holy Spirit"
              description="Baptism and infilling for power, guidance, and effective witness."
            />
          </motion.div>
        </div>

        {/* Learn More button */}
        <motion.div 
          className="mt-12 md:mt-16"
          variants={itemVariants}
          onClick={() => window.open("https://dclm-uk.org/about/what-we-believe/")}
        >
          <Frame1116607030 />
        </motion.div>
      </motion.div>
    </section>
  );
}
