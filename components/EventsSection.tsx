'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from "../imports/svg-7f1kt38i0r";
import imgFrame2121453211 from "../assets/d6d87d449b601242cf48ff584d9fa7432836c574.png";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Suffolk Region Couples Conference 2025",
    date: "Oct 04, 2025",
    time: "12:00 PM",
    location: "Kingswood Play Centre, Basildon SS16 5AD",
    shortDescription: "Love is God's gift, and when anchored in Him, it flourishes beautifully. This October, join us for the Suffolk Region Couples Conference 2025 — a refreshing gathering designed to strengthen marriages, inspire hope ......",
    fullDescription: "Love is God's gift, and when anchored in Him, it flourishes beautifully. This October, join us for the Suffolk Region Couples Conference 2025 — a refreshing gathering designed to strengthen marriages, inspire hope, and deepen connections. Whether you're newly married or have been together for years, this conference offers powerful sessions, inspiring testimonies, and practical tools to build a Christ-centered home. Join couples from across the region for a day filled with worship, fellowship, and transformation. Don't miss this opportunity to invest in your marriage and grow together in faith."
  },
  {
    id: 2,
    title: "Youth Fire Night - Ignite Your Faith",
    date: "Oct 18, 2025",
    time: "6:00 PM",
    location: "Deeper Life SouthEnd Church, Basildon SS16 4BJ",
    shortDescription: "A powerful night of worship, prayer, and fellowship for young people. Come experience the fire of the Holy Spirit as we gather to seek God's face together. This is a night you don't want to miss......",
    fullDescription: "Join us for Youth Fire Night - an electrifying evening designed exclusively for young believers ready to ignite their faith! This special gathering will feature dynamic worship sessions led by our youth praise team, powerful preaching from inspiring speakers, and dedicated prayer time where we seek God's face together. Whether you're navigating life's challenges, seeking direction, or simply want to grow deeper in your relationship with Christ, this night is for you. We'll have breakout sessions covering topics like faith in modern times, building godly relationships, and discovering your purpose. Bring your friends and be part of a generation that's passionate about Jesus!"
  },
  {
    id: 3,
    title: "Community Outreach - Serving Together",
    date: "Nov 02, 2025",
    time: "10:00 AM",
    location: "Basildon Town Square, Basildon SS14 1DL",
    shortDescription: "Join us as we take God's love to the streets! Our monthly community outreach is an opportunity to serve our neighbors, share the gospel, and make a tangible difference in Basildon. All are welcome......",
    fullDescription: "Be the hands and feet of Jesus in our community! Our Community Outreach initiative is a practical expression of God's love in action. We'll be distributing care packages to those in need, offering prayer for anyone who needs it, and sharing the hope of the gospel with our neighbors. This is more than just an event - it's a lifestyle of compassion and service that reflects Christ's heart for the lost and hurting. We'll meet at the church to pray and prepare before heading out together. No special skills required - just bring a willing heart and a servant's attitude. Whether you're greeting people, handing out food, or simply offering a listening ear, your presence matters. Let's show Basildon that the church cares!"
  }
];

function CalendarIcon() {
  return (
    <svg className="block w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path d={svgPaths.p3df18800} fill="var(--fill-0, #4CAFE8)" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="block w-[24px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
      <path d={svgPaths.p3def0600} fill="var(--fill-0, #4CAFE8)" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="block w-[18px] h-[22px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
      <path d={svgPaths.p17fa5700} fill="var(--fill-0, #4CAFE8)" />
    </svg>
  );
}

interface EventCardProps {
  event: Event;
  index: number;
  onSeeMore: () => void;
}

function EventCard({ event, index, onSeeMore }: EventCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[570px] w-full max-w-[1006px] mx-auto mb-[32px]"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div className="absolute h-[570px] left-[calc(50%-169px)] top-0 translate-x-[-50%] w-[1006px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[182.05%] left-[0.38%] max-w-none top-[0.85%] w-full object-cover" src={imgFrame2121453211} />
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        className="absolute bg-white h-auto min-h-[464px] left-[calc(50%+274px)] overflow-visible shadow-[0px_0px_40px_10px_rgba(76,175,232,0.25)] top-[53px] translate-x-[-50%] w-[90%] max-w-[796px] p-[30px] md:p-[48px]"
        whileHover={{ y: -5, boxShadow: "0px 10px 60px 20px rgba(76,175,232,0.35)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Date */}
        <div className="flex items-center gap-[12px] mb-[20px]">
          <CalendarIcon />
          <p className="font-['TacticSans-ThnIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[14px] md:text-[16px]">
            {event.date}
          </p>
        </div>

        {/* Title */}
        <h2 className="font-['TacticSans-MedIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] mb-[20px] md:mb-[24px]">
          {event.title}
        </h2>

        {/* Description */}
        <p className="font-['TacticSans-RegIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[18px] md:text-[24px] leading-[1.4] mb-[24px]">
          {event.shortDescription}
          <span 
            className="text-[#5856d6] cursor-pointer hover:underline ml-1"
            onClick={onSeeMore}
          >
            see more
          </span>
        </p>

        {/* Time */}
        <div className="flex items-center gap-[12px] mb-[16px]">
          <ClockIcon />
          <p className="font-['TacticSans-ThnIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[14px] md:text-[16px]">
            {event.time}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-[12px]">
          <LocationIcon />
          <p className="font-['TacticSans-ThnIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[14px] md:text-[16px] max-w-[250px]">
            {event.location}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-[20px] max-w-[900px] w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute right-[20px] top-[20px] z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-[24px] h-[24px] text-[#2d2d2d]" />
        </button>

        {/* Event Image */}
        <div className="w-full h-[300px] md:h-[400px] relative rounded-t-[20px] overflow-hidden">
          <img alt="" className="w-full h-full object-cover" src={imgFrame2121453211} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="p-[30px] md:p-[48px]">
          {/* Title */}
          <h2 className="font-['TacticSans-MedIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[36px] md:text-[48px] leading-[1.2] mb-[24px]">
            {event.title}
          </h2>

          {/* Event Details */}
          <div className="flex flex-col gap-[16px] mb-[32px]">
            <div className="flex items-center gap-[12px]">
              <CalendarIcon />
              <p className="font-['TacticSans-ThnIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[16px]">
                {event.date}
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <ClockIcon />
              <p className="font-['TacticSans-ThnIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[16px]">
                {event.time}
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <LocationIcon />
              <p className="font-['TacticSans-ThnIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[16px]">
                {event.location}
              </p>
            </div>
          </div>

          {/* Full Description */}
          <p className="font-['TacticSans-RegIt:Italic',_sans-serif] italic text-[#2d2d2d] text-[20px] md:text-[24px] leading-[1.6]">
            {event.fullDescription}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function EventsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const eventsPerPage = 2;
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const currentEvents = events.slice(
    currentPage * eventsPerPage,
    (currentPage + 1) * eventsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="relative bg-white py-[80px] md:py-[120px] -mt-[60px] md:-mt-[80px]">
      {/* Blue Bar at Top */}
      <div className="absolute top-0 left-0 right-0 h-[40px] md:h-[60px] bg-[#4cafe8] z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-[80px] md:pt-[100px]">
        {/* Event Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onSeeMore={() => setSelectedEvent(event)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {totalPages > 1 && (
          <motion.div
            className="flex items-center justify-center gap-[24px] mt-[40px] mb-[40px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Previous Button */}
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`flex items-center justify-center w-[48px] h-[48px] rounded-full border-2 transition-all duration-300 ${
                currentPage === 0
                  ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                  : 'border-[#4cafe8] text-[#4cafe8] hover:bg-[#4cafe8] hover:text-white'
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-[24px] h-[24px]" />
            </button>

            {/* Page Indicators */}
            <div className="flex gap-[12px]">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-[12px] h-[12px] rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-[#4cafe8] w-[40px]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`flex items-center justify-center w-[48px] h-[48px] rounded-full border-2 transition-all duration-300 ${
                currentPage === totalPages - 1
                  ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                  : 'border-[#4cafe8] text-[#4cafe8] hover:bg-[#4cafe8] hover:text-white'
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="w-[24px] h-[24px]" />
            </button>
          </motion.div>
        )}

        {/* Page Counter */}
        {totalPages > 1 && (
          <p className="text-center font-['Plus_Jakarta_Sans:Regular',_sans-serif] text-[#2d2d2d] text-[16px]">
            Page {currentPage + 1} of {totalPages}
          </p>
        )}
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
