'use client';

import { motion } from 'framer-motion';

export default function AnimatedTitle() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* 科技/生活 标头符号 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#d4a574] via-zinc-700 to-[#5eead4] shadow-[0_0_25px_rgba(212,165,116,0.2)] mb-6 flex items-center justify-center"
      >
        <div className="w-full h-full rounded-full bg-[#111118] flex items-center justify-center text-2xl sm:text-3xl font-bold tracking-widest text-zinc-100">
          C
        </div>
      </motion.div>

      {/* 主标题 */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-100"
      >
        小c
      </motion.h1>

      {/* 视觉分割线 */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex items-center gap-3 my-4 sm:my-5"
      >
        <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#d4a574]/60" />
        <span className="text-[#d4a574] text-xs sm:text-sm tracking-widest">✦</span>
        <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#5eead4]/60" />
      </motion.div>

      {/* 双轨内容方向标签 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-base sm:text-xl font-medium tracking-wide flex items-center gap-3"
      >
        <span className="text-[#d4a574] drop-shadow-[0_0_10px_rgba(212,165,116,0.3)]">
          生活日常
        </span>
        <span className="text-zinc-500 font-light text-sm">×</span>
        <span className="text-[#5eead4] drop-shadow-[0_0_10px_rgba(94,234,212,0.3)]">
          科技 AI
        </span>
      </motion.div>
    </div>
  );
}
