"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  mobileLeftPosition,
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
      className="relative w-full md:flex-1 md:max-w-[600px]"
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 80, scale: 0.9 }
      }
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Day Label */}
      <motion.div
        className="relative mb-4 md:mb-6 inline-block"
        initial={{ rotate: 358, scale: 0.8 }}
        animate={
          isInView ? { rotate: 358, scale: 1 } : { rotate: 358, scale: 0.8 }
        }
        transition={{
          duration: 0.6,
          delay: delay + 0.2,
          type: "spring",
          bounce: 0.4,
        }}
        whileHover={{ scale: 1.08, rotate: 0 }}
      >
        <div
          className={`${dayBg} h-[90px] md:h-[100px] relative w-[280px] md:w-[300px]`}
        >
          <div className="h-full overflow-clip relative rounded-[inherit] w-full">
            <p
              className={`absolute font-['TacticSans-UltIt:Italic', sans-serif] italic leading-[normal] text-[36px] md:text-[44px] text-white text-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}
            >
              {day}
            </p>
          </div>
          <div
            aria-hidden="true"
            className={`absolute border-2 ${borderColor} border-dashed -inset-0.5 pointer-events-none`}
          />
        </div>
      </motion.div>

      {/* Card Body - With overflow-hidden to clip the circle */}
      <motion.div
        className={`relative ${
          hasShadow
            ? "bg-[#f4faf8] shadow-[0px_0px_40px_10px_rgba(76,175,232,0.25)]"
            : "bg-[#fdfdfd]"
        } w-full p-8 md:p-10 pb-16 md:pb-20 rounded-lg border border-gray-100 overflow-hidden`}
        whileHover={{
          y: -10,
          boxShadow: "0px 10px 50px 15px rgba(76,175,232,0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className="font-['TacticSans-MedIt:Italic', sans-serif] italic leading-[1.2] text-[#2d2d2d] text-[28px] sm:text-[32px] md:text-[36px] mb-4 md:mb-6"
          animate={isHovered ? { x: 8 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.p>
        <motion.p
          className="font-['TacticSans-RegIt:Italic', sans-serif] italic leading-[1.3] text-[#2d2d2d] text-[18px] sm:text-[20px] md:text-[24px]"
          animate={isHovered ? { x: 8 } : { x: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {location}
        </motion.p>

        {/* Time Circle - Inside the card, positioned at bottom-right, partially cut off */}
        <motion.div
          className="absolute -bottom-10 md:bottom-[-45px] -right-10 md:right-[-50px] h-40 md:h-[180px] w-40 md:w-[180px]"
          animate={
            isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 256 242"
          >
            <ellipse cx="128" cy="121" fill={circleFill} rx="128" ry="121" />
          </svg>
          <div className="absolute font-['TacticSans-MedIt:Italic', sans-serif] italic leading-[1.2] text-[16px] md:text-[18px] text-center text-white top-[25%] left-1/2 -translate-x-1/2 w-[100px]">
            <p className="mb-0">{time.split("\n")[0]}</p>
            <p className="mb-0">-</p>
            <p>{time.split("\n")[1]}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function WorshipWithUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#fdfdfd] overflow-hidden py-12 md:py-20"
    >
      <div className="relative w-full h-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Watermark Background Text */}
        <motion.p
          className="absolute font-['TacticSans-UltIt:Italic', sans-serif] italic leading-[normal] text-[60px] sm:text-[120px] md:text-[200px] text-[rgba(45,45,45,0.15)] top-0 left-4 md:left-8 w-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          Worship With Us
        </motion.p>

        {/* Service Cards Container - Now using Flexbox for proper responsive layout */}
        <div className="flex flex-col gap-16 md:gap-20">
          {/* Sunday Service - Row 1 (Card on Left, "Come and Be Blessed" text on Right on desktop) */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
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
              topPosition="0"
              leftPosition="0"
              mobileTopPosition="0"
              mobileLeftPosition="0"
            />

            {/* "Come and Be Blessed" Heading beside Sunday card */}
            <motion.p
              className="font-['TacticSans-MedIt:Italic', sans-serif] italic leading-[1.1] text-[#2d2d2d] text-[48px] sm:text-[60px] md:text-[72px] lg:text-[96px] text-center md:text-left md:flex-1"
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              "Come and Be Blessed"
            </motion.p>
          </div>

          {/* Tuesday Bible Study - Row 2 (Pastor Image on Left, Card on Right on desktop) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
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
              topPosition="0"
              leftPosition="0"
              mobileTopPosition="0"
              mobileLeftPosition="0"
            />

            {/* Pastor Image */}
            <motion.div
              className="w-full md:w-[500px] lg:w-[600px] h-[300px] md:h-[400px] lg:h-[500px] relative md:flex-1"
              data-name="pastor-kumuyi3 1"
              initial={{ opacity: 0, x: -120, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: -120, scale: 0.9 }
              }
              transition={{
                duration: 1.2,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  alt="Pastor Kumuyi"
                  className="object-cover object-top w-full h-full"
                  src={imgPastorKumuyi31}
                />
              </div>
            </motion.div>
          </div>

          {/* Friday Revival Hour - Row 3 (Card on Left, Bible Quote on Right on desktop) */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
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
              topPosition="0"
              leftPosition="0"
              mobileTopPosition="0"
              mobileLeftPosition="0"
            />

            {/* Scripture Quote beside Friday card */}
            <motion.div
              className="font-['TacticSans-UltIt:Italic', sans-serif] italic leading-[1.3] text-[#1c4e80] text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-left md:flex-1"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4">{` "Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching." `}</p>
              <p className="font-bold">Hebrews 10:25</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
