'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryCarouselProps {
  images: GalleryImage[];
  title?: string;
}

export function GalleryCarousel({ images, title = "Gallery" }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={ref} className="relative w-full bg-[#fdfdfd] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['TacticSans-UltIt:Italic', sans-serif] italic text-[#2d2d2d] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4cafe8] to-[#1c4e80] mx-auto" />
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Image Display */}
          <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden bg-gray-100">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            </motion.div>

            {/* Navigation Arrows */}
            <NavigationButton
              direction="left"
              onClick={goToPrevious}
              disabled={images.length <= 1}
            />
            <NavigationButton
              direction="right"
              onClick={goToNext}
              disabled={images.length <= 1}
            />
          </div>

          {/* Thumbnail Dots */}
          <div className="flex justify-center gap-3 mt-6 md:mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-[#1c4e80]'
                    : 'w-3 h-3 bg-[#4cafe8]/40 hover:bg-[#4cafe8]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Navigation Button Component
function NavigationButton({ 
  direction, 
  onClick, 
  disabled 
}: { 
  direction: 'left' | 'right'; 
  onClick: () => void; 
  disabled?: boolean;
}) {
  const positionClass = direction === 'left' ? 'left-4' : 'right-4';
  
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#1c4e80] p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 disabled:opacity-0`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={direction === 'left' ? 'Previous image' : 'Next image'}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      ) : (
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      )}
    </motion.button>
  );
}
