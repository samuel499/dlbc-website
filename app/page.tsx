"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import imgFrame4 from "../assets/809ee5c3463ae88314b8d0c99e963f2cd4c475af.png";
import imgDlbc1 from "../assets/73abb69066aa35b5a918fdf33372492b361bf848.png";
import imgGallery1 from "../assets/bbb989e48d9b1decc89776bd7017047b43e65fbd.png";
import imgGallery2 from "../assets/9e910c2cd3241d00a70a6e70808946855fa74d16.png";
import imgGallery3 from "../assets/ab5b177bac98f4160531363f92b969c748fb3991.png";
import imgGallery4 from "../assets/d6d87d449b601242cf48ff584d9fa7432836c574.png";
import imgGallery6 from "../assets/df48ec78c11550d1289a711543cd8ec8f5d086c7.png";
import imgGallery7 from "../assets/gallery1.jpg";
import imgGallery8 from "../assets/gallery2.jpg";
import imgGallery9 from "../assets/gallery3.jpg";
import imgGallery10 from "../assets/gallery4.jpg";
import imgGallery12 from "../assets/gallery6.jpg";
import imgGallery13 from "../assets/gallery7.jpg";
import imgGallery14 from "../assets/gallery8.jpg";
import imgGallery15 from "../assets/gallery9.jpg";
import imgGallery16 from "../assets/gallery10.jpg";
import imgGallery17 from "../assets/gallery11.jpg";
import { AnimatedText } from "../components/AnimatedText";
import { InteractiveMap } from "../components/InteractiveMap";
import { WhatWeBelieveSection } from "../components/WhatWeBelieveSection";
import { DoctrineSection } from "../components/DoctrineSection";
import { ScriptureSection } from "../components/ScriptureSection";
import { AboutSection } from "../components/AboutSection";
import { PrayerSection } from "../components/PrayerSection";
import { WelcomeMessageSection } from "../components/WelcomeMessageSection";
import { WorshipWithUsSection } from "../components/WorshipWithUsSection";
import { ScriptureBanner } from "../components/ScriptureBanner";
import { GalleryCarousel } from "../components/GalleryCarousel";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { DonationSection } from "../components/DonationSection";
import { UpcomingEventsSection } from "../components/UpcomingEventsSection";
import { EventsSection } from "../components/EventsSection";
import { BackToTopButton } from "../components/BackToTopButton";

function NavMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "what-we-believe", label: "What We Believe" },
    { id: "doctrine", label: "Doctrine" },
    { id: "about", label: "About" },
    { id: "worship", label: "Worship" },
    { id: "gallery", label: "Gallery" },
    { id: "events", label: "Events" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div
        className="hidden lg:flex absolute content-stretch font-['Plus_Jakarta_Sans:Regular', sans-serif] font-normal gap-5 xl:gap-10 items-center leading-[normal] left-1/2 text-[14px] xl:text-4 text-nowrap text-white top-11 md:top-[54px] translate-x-[-50%] whitespace-pre z-20"
        data-name="Nav menu"
      >
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
                className="font-['Plus_Jakarta_Sans:Regular', sans-serif] text-6 text-white cursor-pointer hover:text-[#4cafe8] transition-colors"
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
    <div className="bg-[#4cafe8] box-border content-stretch flex gap-2.5 h-10 md:h-12 items-center justify-center px-5 md:px-[26px] py-2.5 md:py-3 relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#3ba3d9] transition-colors">
      <p className="font-['Plus_Jakarta_Sans:SemiBold', sans-serif] font-semibold leading-[normal] relative shrink-0 text-4 md:text-[18px] text-nowrap text-white whitespace-pre">
        View Live
      </p>
    </div>
  );
}

function Frame1116607059() {
  return (
    <div className="hidden lg:flex absolute content-stretch gap-3 items-center right-8 top-10 z-20">
      <Frame1116607029 />
    </div>
  );
}

function Frame2121453184() {
  return (
    <div className="absolute h-[60px] md:h-20 lg:h-32 left-0 top-0 w-full z-20">
      <div className="h-[60px] md:h-20 lg:h-32 overflow-clip relative rounded-[inherit] w-full">
        <NavMenu />
        <Frame1116607059 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Frame1116607030() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="relative w-full md:w-auto md:absolute box-border content-stretch flex gap-2.5 h-12 items-center justify-center left-0 md:left-0 px-[26px] py-3 rounded-[100px] md:top-[257px] mb-4 md:mb-0 cursor-pointer mx-auto md:mx-0 max-w-[200px] md:max-w-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollToSection("about")}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#4cafe8] border-[3px] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <p className="font-['Plus_Jakarta_Sans:SemiBold', sans-serif] font-semibold leading-[normal] relative shrink-0 text-4 md:text-[18px] text-nowrap text-white whitespace-pre">
        Discover More
      </p>
    </motion.div>
  );
}

function Frame2121453185() {
  return (
    <div className="relative md:absolute h-auto md:h-[305px] left-0 md:left-12 px-4 md:px-0 top-20 sm:top-[120px] md:top-[483px] w-full md:w-[531px] flex flex-col">
      <motion.p
        className="font-['TacticSans-UltIt:Italic', sans-serif] italic leading-[1.2] md:leading-[normal] text-[28px] sm:text-[36px] md:text-[48px] text-white w-full md:w-[531px] mb-4 md:mb-0 md:absolute md:h-[116px] md:left-0 md:top-[30px] order-1"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Transforming lives. Restoring hope.
      </motion.p>
      <motion.p
        className="font-['TacticSans-Reg:Regular', sans-serif] h-auto md:h-[87px] leading-[1.4] md:leading-[normal] not-italic text-4 sm:text-[20px] md:text-6 text-white w-full md:w-[487px] mb-4 md:mb-0 md:absolute md:left-0 md:top-[158px] order-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        A community rooted in scripture, prayer and compassionate service. Join
        us this Sunday.
      </motion.p>
      <div className="order-3">
        <Frame1116607030 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[600px] md:h-[860px] left-0 overflow-clip top-10 md:top-[60px] w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          alt=""
          className="absolute max-w-none object-center md:object-50%-50% object-cover size-full"
          src={imgFrame4}
        />
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
    <div className="bg-[#1c4e80] h-20 md:h-[100px] lg:h-[143.534px] overflow-visible relative w-40 md:w-[200px] lg:w-[307.178px]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="rotate-[50.055deg]">
          <div
            className="h-12 md:h-[42px] lg:h-[46px] relative w-14 md:w-[52px] lg:w-[57px]"
            data-name="dlbc 1"
          >
            <div className="relative overflow-hidden pointer-events-none w-full h-full">
              <Image
                alt="Deeper Life Bible Church Logo"
                className="object-contain w-full h-full"
                src={imgDlbc1}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollingText() {
  const text =
    "Welcome to Deeper Life Bible Church — SouthEnd District. You're part of the family. Info: +44 7570 283305 | dlbcsouthend@gmail.com";

  return (
    <div className="absolute bg-[#4cafe8] h-10 md:h-[60px] left-0 overflow-hidden top-0 w-full z-30">
      <div className="absolute flex items-center h-full">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: [0, -1440] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <p className="font-['Italianno:Regular', sans-serif] text-4 md:text-[20px] lg:text-6 text-white px-4 md:px-6 lg:px-8">
            {text}
          </p>
          <p className="font-['Italianno:Regular', sans-serif] text-4 md:text-[20px] lg:text-6 text-white px-4 md:px-6 lg:px-8">
            {text}
          </p>
          <p className="font-['Italianno:Regular', sans-serif] text-4 md:text-[20px] lg:text-6 text-white px-4 md:px-6 lg:px-8">
            {text}
          </p>
        </motion.div>
      </div>

      {/* Simplified logo positioning for mobile */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[309.945deg] origin-center">
        <Frame2 />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="relative w-full max-w-[1440px] mx-auto overflow-x-hidden">
        {/* Hero Section with integrated header */}
        <section
          id="home"
          className="relative h-[640px] md:h-[860px] lg:h-[920px] bg-black"
        >
          <Frame4 />
          <ScrollingText />
        </section>

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
        <section id="prayer" className="relative md:-mt-20">
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

        {/* Scripture Banner */}
        <ScriptureBanner
          imageSrc={imgFrame4.src}
          scripture={`"Behold, how good and how pleasant it is for brethren to dwell together in unity!"`}
          reference="Psalm 133:1 (KJV)"
        />

        {/* Gallery Section */}
        <section id="gallery">
          <GalleryCarousel
            images={[
              { src: imgGallery1.src, alt: "Church gathering" },
              { src: imgGallery2.src, alt: "Church service" },
              { src: imgGallery3.src, alt: "Community event" },
              { src: imgGallery4.src, alt: "Worship service" },
              // { src: imgGallery5.src, alt: "Bible study" },
              { src: imgGallery6.src, alt: "Fellowship time" },
              { src: imgGallery7.src, alt: "Fellowship time" },
              { src: imgGallery8.src, alt: "Fellowship time" },
              { src: imgGallery9.src, alt: "Fellowship time" },
              { src: imgGallery10.src, alt: "Fellowship time" },
              // { src: imgGallery11.src, alt: "Fellowship time" },
              { src: imgGallery12.src, alt: "Fellowship time" },
              { src: imgGallery13.src, alt: "Fellowship time" },
              { src: imgGallery14.src, alt: "Fellowship time" },
              { src: imgGallery15.src, alt: "Fellowship time" },
              { src: imgGallery16.src, alt: "Fellowship time" },
              { src: imgGallery17.src, alt: "Fellowship time" },
              // { src: imgGallery18.src, alt: "Fellowship time" },
            ]}
            title="Moments of Fellowship,"
            subtitle="Memories of Faith"
          />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection
            backgroundImage={imgFrame4.src}
            cardImage={imgDlbc1.src}
            cardQuote="Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God."
            cardReference="Philippians 4:6 (KJV)"
          />
        </section>

        {/* Footer */}
        <Footer
          logoSrc={imgDlbc1.src}
          description="We take the Bible as the final authority in all matters concerning Christian life and practice."
          phone="https://wa.me/447570283305"
          email="dlbcsouthend@gmail.com"
          quickLinks={[
            { label: "Home", href: "#home" },
            { label: "What We Believe", href: "#what-we-believe" },
            { label: "About", href: "#about" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" },
            { label: "Worship", href: "#worship" },
            { label: "Events", href: "#events" },
          ]}
          networkLocations={[
            { name: "gckhq.org", url: "https://gckhq.org" },
            { name: "dclm-uk.org", url: "https://dclm-uk.org" },
            { name: "dclm.org", url: "https://dclm.org" },
          ]}
        />
      </div>

      {/* Back to Top Button - Fixed to viewport */}
      <BackToTopButton />
    </>
  );
}
