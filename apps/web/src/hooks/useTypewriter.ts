'use client';

import { useState, useEffect } from 'react';
import { TypewriterStatus } from '@/types';

export function useTypewriter(lines: string[], start: boolean = false, speed: number = 60) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [status, setStatus] = useState<TypewriterStatus>('idle');

  useEffect(() => {
    if (!start) return;

    setStatus('typing');
    const timer = setInterval(() => {
      const targetLine = lines[currentLineIndex];

      if (!targetLine) {
        setStatus('done');
        clearInterval(timer);
        return;
      }

      if (currentCharIndex < targetLine.length) {
        const nextChar = currentCharIndex + 1;
        setCurrentCharIndex(nextChar);
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[currentLineIndex] = targetLine.slice(0, nextChar);
          return next;
        });
      } else {
        if (currentLineIndex < lines.length - 1) {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        } else {
          setStatus('done');
          clearInterval(timer);
        }
      }
    }, speed);

    return () => clearInterval(timer);
  }, [start, lines, currentLineIndex, currentCharIndex, speed]);

  return {
    displayedLines,
    status,
    isComplete: status === 'done',
  };
}
