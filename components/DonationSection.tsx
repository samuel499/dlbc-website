'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CreditCard, Heart } from 'lucide-react';
import imgFrame2121453208 from "../assets/df48ec78c11550d1289a711543cd8ec8f5d086c7.png";

export function DonationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Replace this with your actual Stripe payment link
  const stripePaymentUrl = "https://donate.stripe.com/your-payment-link";

  const handleDonateClick = () => {
    window.open(stripePaymentUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textLineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 1.5,
        type: "spring",
        bounce: 0.4
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden"
    >
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#1c4e80] inset-0" />
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <img 
            alt="" 
            className="absolute h-full md:h-[133.2%] left-0 max-w-none top-0 md:top-[-8.26%] w-full object-cover" 
            src={imgFrame2121453208} 
          />
        </div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px] px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Donation Information */}
        <motion.div 
          className="font-['TacticSans-UltIt:Italic',_sans-serif] italic leading-[1.5] md:leading-[normal] text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-center text-white max-w-[90%] md:max-w-[802px] mb-8 md:mb-12"
          variants={containerVariants}
        >
          <motion.p className="mb-4 md:mb-6" variants={textLineVariants}>
            ONLINE DONATIONS
          </motion.p>
          
          <motion.p className="mb-2 md:mb-3" variants={textLineVariants}>
            ACCOUNT NAME: DEEPER CHRISTIAN LIFE MINISTRY
          </motion.p>
          
          <motion.p className="mb-2 md:mb-3" variants={textLineVariants}>
            ACCOUNT NUMBER: 9319 4639
          </motion.p>
          
          <motion.p className="mb-2 md:mb-3" variants={textLineVariants}>
            Sort code: 201226
          </motion.p>
          
          <motion.p className="mb-6 md:mb-8" variants={textLineVariants}>
            Reference: Dlbc Southend
          </motion.p>
        </motion.div>

        {/* Animated Stripe Payment Button */}
        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleDonateClick}
            className="group relative bg-[#4cafe8] hover:bg-[#3ba3d9] text-white font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full text-[18px] md:text-[22px] lg:text-[24px] shadow-[0px_8px_24px_rgba(76,175,232,0.4)] hover:shadow-[0px_12px_32px_rgba(76,175,232,0.6)] transition-all duration-300 flex items-center gap-3 md:gap-4"
          >
            {/* Animated Heart Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-5 h-5 md:w-6 md:h-6 fill-white" />
            </motion.div>
            
            <span>Donate with Card</span>
            
            {/* Credit Card Icon */}
            <CreditCard className="w-5 h-5 md:w-6 md:h-6" />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 rounded-full"
              animate={{
                x: [-200, 200],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear"
              }}
            />
          </button>
        </motion.div>

        {/* Supporting Text */}
        <motion.p
          className="font-['TacticSans-RegIt:Italic',_sans-serif] italic text-white text-[14px] md:text-[16px] text-center mt-6 md:mt-8 max-w-[90%] md:max-w-[600px] opacity-90"
          variants={textLineVariants}
          transition={{ delay: 2 }}
        >
          Your generous donation helps us continue our mission of spreading the Gospel and serving our community.
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-16 h-16 md:w-20 md:h-20 border-2 border-[#4cafe8] rounded-full opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-[15%] right-[8%] w-12 h-12 md:w-16 md:h-16 border-2 border-[#4cafe8] rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Pulsing Dots */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-3 h-3 md:w-4 md:h-4 bg-[#4cafe8] rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-[25%] left-[12%] w-2 h-2 md:w-3 md:h-3 bg-[#4cafe8] rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </section>
  );
}
