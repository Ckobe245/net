'use client';

import GlowBackground from '@/components/welcome/GlowBackground';
import HeroSection from '@/components/welcome/HeroSection';
import AnimatedTitle from '@/components/welcome/AnimatedTitle';
import IntroSection from '@/components/welcome/IntroSection';
import TypewriterText from '@/components/welcome/TypewriterText';
import PlatformSection from '@/components/welcome/PlatformSection';
import Footer from '@/components/welcome/Footer';
import { INTRO_LINES } from '@/lib/constants';

export default function WelcomePage() {
  return (
    <main className="relative min-h-screen bg-[#08080c] text-[#e4e4e7] overflow-hidden selection:bg-[#d4a574]/30 selection:text-white">
      {/* 动态流动光晕背景（Canvas） */}
      <GlowBackground />

      {/* 首屏容器 + 标题渐入 */}
      <HeroSection>
        <AnimatedTitle />
      </HeroSection>

      {/* 打字机自我介绍（滚动触发） */}
      <IntroSection>
        {(isInView) => <TypewriterText lines={INTRO_LINES} start={isInView} />}
      </IntroSection>

      {/* 多平台引流矩阵 */}
      <PlatformSection />

      {/* 极简页脚 */}
      <Footer />
    </main>
  );
}
