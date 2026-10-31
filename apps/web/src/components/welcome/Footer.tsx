'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 text-center text-xs text-zinc-600 border-t border-white/5 relative z-10 mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-zinc-400">小c</span>
          <span>© {currentYear} All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-500">
          <span>xzzcy.com</span>
          <span>·</span>
          <span>生活日常 × 科技 AI</span>
        </div>
      </div>
    </footer>
  );
}
