import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import imgFrame4 from "../assets/809ee5c3463ae88314b8d0c99e963f2cd4c475af.png";
import imgDlbc1 from "../assets/73abb69066aa35b5a918fdf33372492b361bf848.png";
import { AnimatedText } from './components/AnimatedText';
import { InteractiveMap } from './components/InteractiveMap';
import { WhatWeBelieveSection } from './components/WhatWeBelieveSection';
import { DoctrineSection } from './components/DoctrineSection';
import { ScriptureSection } from './components/ScriptureSection';
import { AboutSection } from './components/AboutSection';
import { PrayerSection } from './components/PrayerSection';
import { WelcomeMessageSection } from './components/WelcomeMessageSection';
import { WorshipWithUsSection } from './components/WorshipWithUsSection';
import { DonationSection } from './components/DonationSection';
import { UpcomingEventsSection } from './components/UpcomingEventsSection';
import { EventsSection } from './components/EventsSection';
import { BackToTopButton } from './components/BackToTopButton';

function NavMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'what-we-believe', label: 'What We Believe' },
    { id: 'doctrine', label: 'Doctrine' },
    { id: 'about', label: 'About' },
    { id: 'donate', label: 'Donate' },
    { id: 'events', label: 'Events' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex absolute content-stretch font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal gap-[20px] xl:gap-[40px] items-center leading-[normal] left-1/2 text-[14px] xl:text-[16px] text-nowrap text-white top-[44px] md:top-[54px] translate-x-[-50%] whitespace-pre z-20" data-name="Nav menu">
        {menuItems.map((item) => (
          <p 
            key={item.id}
            className="relative shrink-0 cursor-pointer hover:text-[#4cafe8] transition-colors" 
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </p>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden absolute right-4 top-4 z-50 text-white p-2 hover:text-[#4cafe8] transition-colors bg-[rgba(0,0,0,0.3)] rounded-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="lg:hidden fixed inset-0 bg-[#1c4e80] z-40 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col gap-8 text-center">
            {menuItems.map((item) => (
              <p 
                key={item.id}
                className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] text-[24px] text-white cursor-pointer hover:text-[#4cafe8] transition-colors" 
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </p>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}

function Frame1116607029() {
  return (
    <div className="bg-[#4cafe8] box-border content-stretch flex gap-[10px] h-[40px] md:h-[48px] items-center justify-center px-[20px] md:px-[26px] py-[10px] md:py-[12px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#3ba3d9] transition-colors">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] md:text-[18px] text-nowrap text-white whitespace-pre">View Live</p>
    </div>
  );
}

function Frame1116607059() {
  return (
    <div className="hidden lg:flex absolute content-stretch gap-[12px] items-center right-8 top-[40px] z-20">
      <Frame1116607029 />
    </div>
  );
}

function Frame2121453184() {
  return (
    <div className="absolute h-[60px] md:h-[80px] lg:h-[128px] left-0 top-0 w-full z-20">
      <div className="h-[60px] md:h-[80px] lg:h-[128px] overflow-clip relative rounded-[inherit] w-full">
        {/* <NavMenu /> */}
        <Frame1116607059 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1116607030() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="relative w-full md:w-auto md:absolute box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center left-0 md:left-0 px-[26px] py-[12px] rounded-[100px] md:top-[257px] mb-4 md:mb-0 cursor-pointer mx-auto md:mx-0 max-w-[200px] md:max-w-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollToSection('about')}
    >
      <div aria-hidden="true" className="absolute border-[#4cafe8] border-[3px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] md:text-[18px] text-nowrap text-white whitespace-pre">Discover More</p>
    </motion.div>
  );
}

function Frame2121453185() {
  return (
    <div className="relative md:absolute h-auto md:h-[305px] left-0 md:left-[48px] px-4 md:px-0 top-[80px] sm:top-[120px] md:top-[483px] w-full md:w-[531px] flex flex-col">
      <motion.p 
        className="font-['TacticSans-UltIt:Italic',_sans-serif] italic leading-[1.2] md:leading-[normal] text-[28px] sm:text-[36px] md:text-[48px] text-white w-full md:w-[531px] mb-4 md:mb-0 md:absolute md:h-[116px] md:left-0 md:top-[30px] order-1"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Transforming lives. Restoring hope.
      </motion.p>
      <motion.p 
        className="font-['TacticSans-Reg:Regular',_sans-serif] h-auto md:h-[87px] leading-[1.4] md:leading-[normal] not-italic text-[16px] sm:text-[20px] md:text-[24px] text-white w-full md:w-[487px] mb-4 md:mb-0 md:absolute md:left-0 md:top-[158px] order-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        A community rooted in scripture, prayer and compassionate service. Join us this Sunday.
      </motion.p>
      <div className="order-3">
        <Frame1116607030 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[600px] md:h-[860px] left-0 overflow-clip top-[40px] md:top-[60px] w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-center md:object-50%-50% object-cover size-full" src={imgFrame4} />
        <div className="absolute bg-[rgba(0,0,0,0.5)] md:bg-[rgba(0,0,0,0.4)] inset-0" />
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
    <div className="bg-[#1c4e80] h-[80px] md:h-[100px] lg:h-[143.534px] overflow-clip relative w-[160px] md:w-[200px] lg:w-[307.178px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7666651606559753)+(var(--transform-inner-height)*0.6420471668243408)))] items-center justify-center left-[30px] md:left-[40px] lg:left-[55.24px] top-[calc(50%+14px)] md:top-[calc(50%+16px)] lg:top-[calc(50%+18.969px)] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.7666651606559753)+(var(--transform-inner-width)*0.6420471668243408)))]" style={{ "--transform-inner-width": "57", "--transform-inner-height": "46" } as React.CSSProperties}>
        <div className="flex-none rotate-[50.055deg]">
          <div className="h-[36px] md:h-[42px] lg:h-[46px] relative w-[44px] md:w-[52px] lg:w-[57px]" data-name="dlbc 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Deeper Life Bible Church Logo" className="absolute h-[111.38%] left-0 max-w-none top-[-0.26%] w-full" src={imgDlbc1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollingText() {
  const text = "Welcome to Deeper Life Bible Church — SouthEnd District. You're part of the family. Info: +44 7570 283305 | dlbcsouthend@gmail.com";
  
  return (
    <div className="absolute bg-[#4cafe8] h-[40px] md:h-[60px] left-0 overflow-hidden top-0 w-full z-30">
      <div className="absolute flex items-center h-full">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: [0, -1440] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <p className="font-['Italianno:Regular',_sans-serif] text-[16px] md:text-[20px] lg:text-[24px] text-white px-4 md:px-6 lg:px-8">
            {text}
          </p>
          <p className="font-['Italianno:Regular',_sans-serif] text-[16px] md:text-[20px] lg:text-[24px] text-white px-4 md:px-6 lg:px-8">
            {text}
          </p>
          <p className="font-['Italianno:Regular',_sans-serif] text-[16px] md:text-[20px] lg:text-[24px] text-white px-4 md:px-6 lg:px-8">
            {text}
          </p>
        </motion.div>
      </div>
      
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7666651606559753)+(var(--transform-inner-height)*0.6420471668243408)))] items-center justify-center left-[-50px] md:left-[-60px] lg:left-[-78.6px] top-[-100px] md:left-[-120px] lg:top-[-193.86px] w-[calc(1px*((var(--transform-inner-height)*0.7666651606559753)+(var(--transform-inner-width)*0.6420471668243408)))]" style={{ "--transform-inner-width": "307.171875", "--transform-inner-height": "143.53125" } as React.CSSProperties}>
        <div className="flex-none rotate-[309.945deg]">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="relative w-full max-w-[1440px] mx-auto overflow-x-hidden">
      {/* Hero Section with integrated header */}
      {/* <section id="home" className="relative h-[640px] md:h-[860px] lg:h-[920px] bg-black">
        <Frame4 />
        <ScrollingText />
      </section> */}
      
      {/* What We Believe Section */}
      <section id="what-we-believe">
        <WhatWeBelieveSection />
      </section>
      
      {/* Doctrine Section */}
      <section id="doctrine">
        <DoctrineSection />
      </section>
      
      {/* Scripture Section */}
      <section id="scripture">
        <ScriptureSection />
      </section>
      
      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* Prayer Section - Slight overlap with About section */}
      <section id="prayer" className="relative md:-mt-[80px]">
        <PrayerSection />
      </section>
      
      {/* Welcome Message Section - Overlaps Prayer Section with parallax effect */}
      <section id="welcome" className="relative z-10 md:-mt-[200px]">
        <WelcomeMessageSection />
      </section>
      
      {/* Worship With Us Section */}
      <section id="worship">
        <WorshipWithUsSection />
      </section>
      
      {/* Donation Section */}
      <section id="donate">
        <DonationSection />
      </section>
      
      {/* Upcoming Events Section */}
      <section id="events">
        <UpcomingEventsSection />
      </section>
      
      {/* Events Section - Overlaps Upcoming Events */}
      <EventsSection />
      </div>
      
      {/* Back to Top Button - Fixed to viewport */}
      <BackToTopButton />
    </>
  );
}
