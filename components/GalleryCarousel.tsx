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
  subtitle?: string;
}

export function GalleryCarousel({ 
  images, 
  title = "Moments of Fellowship,", 
  subtitle = "Memories of Faith" 
}: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section ref={ref} className="relative w-full bg-[#fdfdfd] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header with Title and Navigation - Desktop */}
        <div className="hidden md:flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['TacticSans-RegIt:Italic', sans-serif] italic text-[#4cafe8] text-3xl lg:text-4xl mb-2">
              {title}
            </h2>
            <h3 className="font-['TacticSans-Bld', sans-serif] text-[#2d2d2d] text-4xl lg:text-5xl">
              {subtitle}
            </h3>
          </motion.div>

          {/* Navigation Arrows - Desktop */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={goToPrevious}
              className="bg-[#4cafe8] hover:bg-[#1c4e80] text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="bg-[#1c4e80] hover:bg-[#4cafe8] text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Mobile Header */}
        <motion.div
          className="md:hidden text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['TacticSans-RegIt:Italic', sans-serif] italic text-[#4cafe8] text-2xl mb-1">
            {title}
          </h2>
          <h3 className="font-['TacticSans-Bld', sans-serif] text-[#2d2d2d] text-3xl">
            {subtitle}
          </h3>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Desktop: 3 Images in a Row */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % images.length;
              return (
                <motion.div
                  key={`desktop-${index}-${offset}`}
                  className="relative w-full h-[300px] lg:h-[350px] rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: offset * 0.1 }}
                >
                  <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: Single Image with Navigation Overlay */}
          <div className="md:hidden relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
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

              {/* Mobile Navigation Arrows - Overlay on Image */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  onClick={goToPrevious}
                  className="bg-white/90 hover:bg-white text-[#1c4e80] p-3 rounded-full transition-all duration-300 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="bg-white/90 hover:bg-white text-[#1c4e80] p-3 rounded-full transition-all duration-300 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#1c4e80] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
