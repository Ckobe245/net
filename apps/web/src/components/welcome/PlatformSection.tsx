'use client';

import { useState } from 'react';
import { PLATFORMS } from '@/lib/platforms';
import PlatformIcon from './PlatformIcon';
import QRCodeModal from './QRCodeModal';
import { motion } from 'framer-motion';

export default function PlatformSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 px-4 relative z-10 max-w-5xl mx-auto">
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

      <QRCodeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
