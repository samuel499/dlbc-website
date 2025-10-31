'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed left-[20px] md:left-[40px] bottom-[40px] md:bottom-[60px] bg-[#4cafe8] hover:bg-[#3ba3d9] h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 z-50 shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label="Back to top"
        >
          <ChevronUp className="text-white w-[24px] h-[24px] md:w-[28px] md:h-[28px]" strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
