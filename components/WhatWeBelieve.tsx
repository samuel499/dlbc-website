'use client';

import { motion } from 'framer-motion';
import imgWhatWeBelieve from "../assets/48d2f945f60ce906b30eb06020bd38f232a5ca46.png";
import Image from "next/image";

export function WhatWeBelieve() {
  return (
    <div className="min-h-screen bg-gray-100 pt-[188px] pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Title */}
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-[#4cafe8] rounded-full"></div>
              <motion.h1 
                className="text-5xl font-bold text-gray-900 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                What We Believe"
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed italic max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We take the Bible as the final authority in all matters concerning Christian life and practice. Learn about the core doctrines that guide our teaching and worship.
            </motion.p>

            {/* Bible Verse Quote */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <blockquote className="text-lg text-gray-800 italic leading-relaxed mb-4">
                "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works."
              </blockquote>
              <cite className="text-[#4cafe8] font-semibold not-italic">
                Timothy 3:16-17 (KJV)
              </cite>
              
              {/* Decorative Blue Element */}
              <div className="absolute bottom-4 right-4 w-16 h-8 bg-[#4cafe8] rounded-lg transform rotate-12"></div>
            </motion.div>
          </motion.div>

          {/* Right Side - Pastor Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              <Image 
                src={imgWhatWeBelieve} 
                alt="Pastor Dr. W.F Kumuyi speaking" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Pastor Info Card */}
              <motion.div 
                className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  PASTOR DR W.F KUMUYI
                </h3>
                <p className="text-gray-600 text-sm italic">
                  General Superintendent, Deeper Life Bible Church
                </p>
              </motion.div>

              {/* Decorative Blue Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4cafe8] rounded-2xl opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#4cafe8] rounded-full opacity-60"></div>
            </div>
          </motion.div>
        </div>

        {/* Additional Content Section */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {/* Core Beliefs Cards */}
          {[
            {
              title: "Bible Authority",
              description: "We believe the Bible is the inspired, infallible Word of God and our ultimate authority."
            },
            {
              title: "Salvation by Grace",
              description: "Salvation is by grace through faith in Jesus Christ, not by works or human effort."
            },
            {
              title: "Holy Living",
              description: "We are called to live holy lives, separated from the world and dedicated to God."
            }
          ].map((belief, index) => (
            <motion.div
              key={belief.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + (index * 0.2), duration: 0.6 }}
            >
              <div className="w-3 h-3 bg-[#4cafe8] rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {belief.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {belief.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}