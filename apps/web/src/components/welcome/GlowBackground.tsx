'use client';

import { useEffect, useRef } from 'react';

interface GlowBackgroundProps {
  colorWarm?: string;
  colorCool?: string;
}

export default function GlowBackground({
  colorWarm = 'rgba(212, 165, 116, ',
  colorCool = 'rgba(94, 234, 212, ',
}: GlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 光晕节点
    const nodes = [
      {
        x: width * 0.3,
        y: height * 0.35,
        radius: Math.min(width, height) * 0.45,
        vx: 0.35,
        vy: 0.25,
        colorPrefix: colorWarm,
        baseAlpha: 0.18,
      },
      {
        x: width * 0.7,
        y: height * 0.6,
        radius: Math.min(width, height) * 0.5,
        vx: -0.3,
        vy: -0.2,
        colorPrefix: colorCool,
        baseAlpha: 0.16,
      },
      {
        x: width * 0.5,
        y: height * 0.5,
        radius: Math.min(width, height) * 0.35,
        vx: 0.2,
        vy: -0.3,
        colorPrefix: colorWarm,
        baseAlpha: 0.12,
      },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 缓动鼠标跟随
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      nodes.forEach((node, idx) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < width * 0.1 || node.x > width * 0.9) node.vx *= -1;
        if (node.y < height * 0.1 || node.y > height * 0.9) node.vy *= -1;

        // 响应鼠标距离微调
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 600) * 40;

        const posX = node.x + (dx / (dist || 1)) * influence;
        const posY = node.y + (dy / (dist || 1)) * influence;

        const gradient = ctx.createRadialGradient(
          posX,
          posY,
          0,
          posX,
          posY,
          node.radius
        );

        gradient.addColorStop(0, `${node.colorPrefix}${node.baseAlpha})`);
        gradient.addColorStop(0.5, `${node.colorPrefix}${node.baseAlpha * 0.4})`);
        gradient.addColorStop(1, `${node.colorPrefix}0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(posX, posY, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 鼠标聚光微弱光斑
      const mouseGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        180
      );
      mouseGrad.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
      mouseGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colorWarm, colorCool]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ filter: 'blur(35px)' }}
    />
  );
}
