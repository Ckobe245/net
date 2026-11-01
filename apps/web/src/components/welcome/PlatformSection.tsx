'use client';

import { useState } from 'react';
import { PLATFORMS } from '@/lib/platforms';
import PlatformIcon from './PlatformIcon';
import QRCodeModal from './QRCodeModal';
import { motion } from 'framer-motion';

interface PlatformSectionProps {
  id?: string;
}

export default function PlatformSection({ id }: PlatformSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id={id} className="py-16 sm:py-24 px-4 relative z-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          多平台连接
        </h2>
        <p className="text-zinc-500 text-sm mt-2">
          选择你常在的平台，与小c一起探索更多可能
        </p>
      </motion.div>

      {/* 图标网格：Desktop 5 列，Tablet 3 列，Mobile 2 列 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {PLATFORMS.map((platform, idx) => (
          <PlatformIcon
            key={platform.id}
            platform={platform}
            index={idx}
            onClick={() => {
              if (platform.isModal) {
                setModalOpen(true);
              }
            }}
          />
        ))}
      </div>

      {/* 最后一页：返回首页按钮 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 flex justify-center"
      >
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel glass-panel-hover text-zinc-300 hover:text-white border border-white/10 hover:border-[#d4a574]/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#d4a574]/10"
        >
          <motion.svg
            className="w-4 h-4 text-[#d4a574] group-hover:-translate-y-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </motion.svg>
          <span className="text-sm font-medium tracking-wide">返回首页</span>
        </button>
      </motion.div>

      <QRCodeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
