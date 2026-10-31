'use client';

import { useTypewriter } from '@/hooks/useTypewriter';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  lines: string[];
  start?: boolean;
}

export default function TypewriterText({ lines, start = true }: TypewriterTextProps) {
  const { displayedLines, isComplete } = useTypewriter(lines, start, 55);

  return (
    <div className="font-mono text-zinc-300 leading-relaxed space-y-3 sm:space-y-4 text-base sm:text-xl">
      {lines.map((_, index) => {
        const text = displayedLines[index] || '';
        const isCurrentLine = displayedLines.length - 1 === index || (displayedLines.length === 0 && index === 0);

        return (
          <div key={index} className="min-h-[1.75rem] flex items-center flex-wrap">
            <span>{text}</span>
            {isCurrentLine && !isComplete && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-5 bg-[#5eead4] ml-1.5 align-middle"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
