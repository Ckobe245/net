'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface IntroSectionProps {
  id?: string;
  children: (isInView: boolean) => ReactNode;
}

export default function IntroSection({ id, children }: IntroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToNext = () => {
    const target = document.getElementById('platforms');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} ref={ref} className="py-20 sm:py-28 px-4 relative z-10">
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

      {/* 向下进入平台矩阵的箭头按钮 */}
      <div className="mt-12 flex justify-center">
        <motion.button
          type="button"
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-[#5eead4] transition-colors cursor-pointer group focus:outline-none"
          aria-label="向下滚动至多平台矩阵"
        >
          <span className="text-xs tracking-wider font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
            NEXT
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <svg
              className="w-5 h-5 text-zinc-400 group-hover:text-[#5eead4] transition-colors"
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
