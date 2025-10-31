'use client';

import { motion } from 'framer-motion';
import imgFrame4 from "../assets/809ee5c3463ae88314b8d0c99e963f2cd4c475af.png";
import imgGeminiGeneratedImageYkrb9Sykrb9Sykrb1 from "../assets/102280c9c92381e2f30567e6847f414120be06f4.png";
import imgDlbc1 from "../assets/73abb69066aa35b5a918fdf33372492b361bf848.png";
import { AnimatedText } from '../components/AnimatedText';
import { InteractiveMap } from '../components/InteractiveMap';
import Image from "next/image";

function NavMenu() {
  return (
    <div className="absolute content-stretch flex font-['Plus_Jakarta_Sans:Regular', sans-serif] font-normal gap-10 items-center leading-[normal] left-1/2 text-[16px] text-nowrap text-white top-[54px] translate-x-[-50%] whitespace-pre" data-name="Nav menu">
      <p className="relative shrink-0 cursor-pointer hover:text-[#4cafe8] transition-colors">Home</p>
      <p className="relative shrink-0 cursor-pointer hover:text-[#4cafe8] transition-colors">About</p>
      <p className="relative shrink-0 cursor-pointer hover:text-[#4cafe8] transition-colors">What We Believe</p>
      <p className="relative shrink-0 cursor-pointer hover:text-[#4cafe8] transition-colors">Sermons</p>
      <p className="relative shrink-0 cursor-pointer hover:text-[#4cafe8] transition-colors">Events</p>
      <p className="relative shrink-0 cursor-pointer hover:text-[#4cafe8] transition-colors">{`Contact `}</p>
    </div>
  );
}

function Frame1116607029() {
  return (
    <div className="bg-[#4cafe8] box-border content-stretch flex gap-2.5 h-12 items-center justify-center px-[26px] py-3 relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#3ba3d9] transition-colors">
      <p className="font-['Plus_Jakarta_Sans:SemiBold', sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">View Live</p>
    </div>
  );
}

function Frame1116607059() {
  return (
    <div className="absolute content-stretch flex gap-3 items-center left-[1185px] top-10">
      <Frame1116607029 />
    </div>
  );
}

function Frame2121453184() {
  return (
    <div className="absolute h-32 left-0 top-0 w-[1440px]">
      <div className="h-32 overflow-clip relative rounded-[inherit] w-[1440px]">
        <NavMenu />
        <Frame1116607059 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1116607030() {
  return (
    <motion.div 
      className="absolute box-border content-stretch flex gap-2.5 h-12 items-center justify-center left-0 px-[26px] py-3 rounded-[100px] top-[257px] cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border-[#4cafe8] border-[3px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Plus_Jakarta_Sans:SemiBold', sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Discover More</p>
    </motion.div>
  );
}

function Frame2121453185() {
  return (
    <div className="absolute h-[305px] left-12 top-[483px] w-[531px]">
      <Frame1116607030 />
      <motion.p 
        className="absolute font-['TacticSans-Reg:Regular', sans-serif] h-[87px] leading-[normal] left-0 not-italic text-[24px] text-white top-[158px] w-[487px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        A community rooted in scripture, prayer and compassionate service. Join us this Sunday.
      </motion.p>
      <motion.p 
        className="absolute font-['TacticSans-UltIt:Italic', sans-serif] h-[116px] italic leading-[normal] left-0 text-[48px] text-white top-[30px] w-[531px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Transforming lives. Restoring hope.
      </motion.p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[860px] left-0 overflow-clip top-[60px] w-[1440px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame4} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <Frame2121453184 />
      <Frame2121453185 />
      <AnimatedText />
      <InteractiveMap />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#1c4e80] h-[143.534px] overflow-clip relative w-[307.178px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7666651606559753)+(var(--transform-inner-height)*0.6420471668243408)))] items-center justify-center left-[55.24px] top-[calc(50%+18.969px)] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.7666651606559753)+(var(--transform-inner-width)*0.6420471668243408)))]" style={{ "--transform-inner-width": "57", "--transform-inner-height": "46" } as React.CSSProperties}>
        <div className="flex-none rotate-[50.055deg]">
          <div className="h-[46px] relative w-[57px]" data-name="dlbc 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image alt="Deeper Life Bible Church Logo" className="absolute h-[111.38%] left-0 max-w-none top-[-0.26%] w-full" src={imgDlbc1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollingText() {
  const text = "Welcome to Deeper Life Bible Church — SouthEnd District. You're part of the family. Info: +44 7570 283305 |dlbcsouthend@gmail.com";
  
  return (
    <div className="absolute bg-[#4cafe8] h-[60px] left-0 overflow-hidden top-0 w-[1440px]">
      <div className="absolute flex items-center h-full">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: [0, -1440] }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <p className="font-['Italianno:Regular',_sans-serif] text-[24px] text-white px-8">
            {text}
          </p>
          <p className="font-['Italianno:Regular',_sans-serif] text-[24px] text-white px-8">
            {text}
          </p>
          <p className="font-['Italianno:Regular',_sans-serif] text-[24px] text-white px-8">
            {text}
          </p>
        </motion.div>
      </div>
      
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7666651606559753)+(var(--transform-inner-height)*0.6420471668243408)))] items-center justify-center left-[-78.6px] top-[-193.86px] w-[calc(1px*((var(--transform-inner-height)*0.7666651606559753)+(var(--transform-inner-width)*0.6420471668243408)))]" style={{ "--transform-inner-width": "307.171875", "--transform-inner-height": "143.53125" } as React.CSSProperties}>
        <div className="flex-none rotate-[309.945deg]">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative size-full min-h-screen bg-black">
      <Frame4 />
      <ScrollingText />
    </div>
  );
}