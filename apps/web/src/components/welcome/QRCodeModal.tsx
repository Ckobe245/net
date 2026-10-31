'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  desc?: string;
}

export default function QRCodeModal({
  isOpen,
  onClose,
  title = '关注微信公众号',
  desc = '微信扫一扫，获取更多深度思考与干货交流',
}: QRCodeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* 模态弹窗卡片 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-sm glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="关闭"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-zinc-100 mb-1">{title}</h3>
            <p className="text-xs text-zinc-400 mb-6">{desc}</p>

            {/* 二维码展示区 (Mock 占位) */}
            <div className="w-52 h-52 bg-white rounded-xl p-3 flex flex-col items-center justify-center shadow-lg relative group">
              {/* 二维码占位矢量 */}
              <div className="w-full h-full border-2 border-dashed border-zinc-300 rounded-lg flex flex-col items-center justify-center text-zinc-700 p-2">
                <div className="grid grid-cols-6 gap-1 w-32 h-32 opacity-80 mb-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-xs ${
                        (i % 2 === 0 && i % 3 === 0) || i < 6 || i % 6 === 0
                          ? 'bg-zinc-900'
                          : 'bg-zinc-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-zinc-500 font-mono tracking-tight">
                  公众号二维码占位
                </span>
              </div>
            </div>

            <p className="mt-5 text-[11px] text-zinc-500">
              后续替换为正式微信公众号二维码
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
