'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  children: ReactNode;
}

export default function HeroSection({ children }: HeroSectionProps) {
  const scrollToNext = () => {
    const target = document.getElementById('intro');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center px-4 relative z-10">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {children}

        {/* 向下滚动提示 / 点击进入下一页 */}
        <motion.button
          type="button"
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 hover:text-[#d4a574] transition-colors cursor-pointer group focus:outline-none"
          aria-label="向下滚动至下一节"
        >
          <span className="text-xs tracking-widest font-medium group-hover:tracking-wider transition-all">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <svg
              className="w-5 h-5 text-zinc-400 group-hover:text-[#d4a574] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
