'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  children: ReactNode;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center px-4 relative z-10">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {children}

        {/* 向下滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-wider"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1 h-3 rounded-full bg-zinc-500/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
