'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
      <FormInput
        id="name"
        name="name"
        label="Full Name"
        type="text"
        placeholder="John Doe"
        required
      />
      
      <FormInput
        id="email"
        name="email"
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        required
      />
      
      <FormInput
        id="phone"
        name="phone"
        label="Phone Number"
        type="tel"
        placeholder="+44 123 456 7890"
      />
      
      <FormTextarea
        id="message"
        name="message"
        label="Message"
        placeholder="Tell us how we can help you..."
        rows={5}
        required
      />

      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-[#4cafe8] to-[#1c4e80] text-white font-['TacticSans-MedIt:Italic', sans-serif] py-3 md:py-4 px-6 rounded-lg text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </form>
  );
}

// Form Input Component
interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

function FormInput({ id, name, label, type, placeholder, required }: FormInputProps) {
  return (
    <div>
      <label 
        htmlFor={id} 
        className="block text-white font-['TacticSans-RegIt:Italic', sans-serif] text-sm md:text-base mb-2"
      >
        {label} {required && <span className="text-[#4cafe8]">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#4cafe8] focus:ring-2 focus:ring-[#4cafe8]/30 transition-all"
      />
    </div>
  );
}

// Form Textarea Component
interface FormTextareaProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

function FormTextarea({ id, name, label, placeholder, rows = 4, required }: FormTextareaProps) {
  return (
    <div>
      <label 
        htmlFor={id} 
        className="block text-white font-['TacticSans-RegIt:Italic', sans-serif] text-sm md:text-base mb-2"
      >
        {label} {required && <span className="text-[#4cafe8]">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#4cafe8] focus:ring-2 focus:ring-[#4cafe8]/30 transition-all resize-none"
      />
    </div>
  );
}
