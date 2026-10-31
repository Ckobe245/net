'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface IntroSectionProps {
  children: (isInView: boolean) => ReactNode;
}

export default function IntroSection({ children }: IntroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 sm:py-28 px-4 relative z-10">
      <div className="max-w-2xl mx-auto glass-panel p-6 sm:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
        {/* 背景光晕装饰 */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#5eead4]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#d4a574]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="text-xs text-zinc-500 ml-2 font-mono">intro.terminal</span>
        </div>

        {children(isInView)}
      </div>
    </section>
  );
}
