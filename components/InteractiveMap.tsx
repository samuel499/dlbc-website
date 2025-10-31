'use client';

import { motion } from 'framer-motion';
import { Navigation, MousePointer } from 'lucide-react';
import { useState } from 'react';
import imgMapImage from "../assets/102280c9c92381e2f30567e6847f414120be06f4.png";

export function InteractiveMap() {
  const [isHovered, setIsHovered] = useState(false);
  const churchAddress = "Deeper Life Bible Church, Southend, UK";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(churchAddress)}`;

  const handleMapClick = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <motion.div 
      className="absolute right-4 md:right-[48px] bottom-[20px] md:bottom-auto md:top-[505px] lg:top-[605px] w-[140px] md:w-[180px] lg:w-[200px] h-[105px] md:h-[135px] lg:h-[150px] cursor-pointer z-20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleMapClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      {/* Map Container */}
      <div className="relative w-full h-full rounded-lg shadow-lg overflow-hidden border-2 border-[#4cafe8]">
        {/* Actual Map Image */}
        <img 
          src={imgMapImage} 
          alt="Map showing Deeper Life Bible Church location" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <motion.div 
          className="absolute inset-0 bg-[#1c4e80] flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.9 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="flex flex-col items-center gap-2 text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: isHovered ? 1 : 0.8, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.div
              animate={{ 
                y: [0, -3, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MousePointer className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8" />
            </motion.div>
            <div className="text-center">
              <p className="text-[10px] md:text-xs font-medium mb-1">Click for Directions</p>
              <div className="flex items-center gap-1 justify-center">
                <Navigation className="w-2 md:w-3 h-2 md:h-3" />
                <span className="text-[8px] md:text-[10px]">Google Maps</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Map Label - Always visible */}
        <div className="absolute bottom-1 left-1 right-1 bg-white bg-opacity-90 rounded px-1 py-0.5">
          <p className="text-[9px] md:text-[10px] lg:text-xs font-medium text-gray-800 text-center truncate">
            DLBC Southend
          </p>
        </div>
      </div>

      {/* Pulsing Ring Animation - Only when not hovered */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 border-2 border-[#4cafe8] rounded-full pointer-events-none"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: isHovered ? 0 : [0.7, 0, 0.7]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
