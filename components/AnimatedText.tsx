'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  const texts = [
    "Welcome to Deeper Life Bible Church",
    "Join us this Sunday",
    "A community of faith",
    "Experience God's love"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="hidden md:block absolute h-[250px] md:h-[300px] lg:h-[390px] left-4 md:left-1/2 top-[140px] md:top-40 lg:top-[188px] right-4 md:right-auto md:w-[400px] lg:w-[553px] overflow-hidden z-10">
      <motion.p 
        ref={textRef}
        key={currentIndex}
        className="font-['TacticSans-ThnIt:Italic', sans-serif] h-[250px] md:h-[300px] lg:h-[390px] italic leading-[1.1] md:leading-[1.15] lg:leading-[normal] text-[48px] md:text-[60px] lg:text-[80px] text-white w-full"
        initial={{ 
          x: 600, 
          opacity: 0,
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        }}
        animate={{ 
          x: 0, 
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        }}
        exit={{ 
          x: -600, 
          opacity: 0,
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.1, 0.25, 1],
          clipPath: { duration: 1.2, ease: "easeInOut" }
        }}
      >
        {texts[currentIndex]}
      </motion.p>
    </div>
  );
}
