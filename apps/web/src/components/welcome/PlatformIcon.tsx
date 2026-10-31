'use client';

import { motion } from 'framer-motion';
import { PlatformItem } from '@/types';
import { Tv, Music, BookOpen, MessageCircle, Video } from 'lucide-react';

interface PlatformIconProps {
  platform: PlatformItem;
  onClick?: () => void;
  index: number;
}

export default function PlatformIcon({ platform, onClick, index }: PlatformIconProps) {
  const isWarm = platform.colorType === 'warm';

  const renderIcon = () => {
    switch (platform.icon) {
      case 'douyin':
        return <Music className="w-6 h-6 text-[#5eead4]" />;
      case 'bilibili':
        return <Tv className="w-6 h-6 text-[#5eead4]" />;
      case 'xiaohongshu':
        return <BookOpen className="w-6 h-6 text-[#d4a574]" />;
      case 'channels':
        return <Video className="w-6 h-6 text-[#d4a574]" />;
      case 'wechat':
        return <MessageCircle className="w-6 h-6 text-[#d4a574]" />;
      default:
        return <Music className="w-6 h-6 text-zinc-300" />;
    }
  };

  const itemContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`glass-panel glass-panel-hover p-4 sm:p-5 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 relative group overflow-hidden ${
        isWarm
          ? 'hover:border-[#d4a574]/40 hover:shadow-[0_0_20px_rgba(212,165,116,0.15)]'
          : 'hover:border-[#5eead4]/40 hover:shadow-[0_0_20px_rgba(94,234,212,0.15)]'
      }`}
    >
      <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
        {renderIcon()}
      </div>
      <div className="text-center">
        <h3 className="text-zinc-200 text-sm font-semibold tracking-wide">{platform.name}</h3>
        <p className="text-zinc-500 text-xs mt-0.5">{platform.label}</p>
      </div>
    </motion.div>
  );

  if (platform.isModal) {
    return (
      <div onClick={onClick} className="w-full">
        {itemContent}
      </div>
    );
  }

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full focus:outline-none"
    >
      {itemContent}
    </a>
  );
}
