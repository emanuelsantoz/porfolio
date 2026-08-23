"use client";

import { useEffect, useMemo, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function DataStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const seed = useMemo(() => Math.floor(Math.random() * 1_000_000), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const random = (() => {
      let s = seed;
      return () => {
        s = (s * 1103515245 + 12345) % 2147483648;
        return s / 2147483648;
      };
    })();

    const createPoints = () => {
      const count = Math.floor(Math.min(160, Math.max(60, (width * height) / 28000)));
      const points: Point[] = [];
      for (let i = 0; i < count; i++) {
        points.push({
          x: random() * width,
          y: random() * height,
          vx: (random() - 0.5) * 0.25,
          vy: (random() - 0.5) * 0.25,
          r: 1 + random() * 2.2,
        });
      }
      return points;
    };

    let points = createPoints();

    const draw = (t: number) => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, "rgba(1, 8, 18, 0.95)");
      bg.addColorStop(1, "rgba(2, 10, 26, 0.85)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const gridGap = 48;
      ctx.strokeStyle = "rgba(16, 185, 129, 0.08)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridGap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridGap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const bandCount = 7;
      for (let i = 0; i < bandCount; i++) {
        const phase = (t * 0.0003 + i / bandCount) % 1;
        const y = phase * height;
        const h = 90;

        const g = ctx.createLinearGradient(0, y - h, 0, y + h);
        g.addColorStop(0, "rgba(16, 185, 129, 0)");
        g.addColorStop(0.5, "rgba(16, 185, 129, 0.08)");
        g.addColorStop(1, "rgba(16, 185, 129, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, y - h, width, h * 2);
      }

      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      });

      ctx.strokeStyle = "rgba(16, 185, 129, 0.16)";
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 120) continue;
          const alpha = (1 - dist / 120) * 0.22;
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      points.forEach((p) => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.002 + p.x * 0.01);
        const r = p.r + pulse * 0.8;

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 5);
        glow.addColorStop(0, "rgba(16, 185, 129, 0.2)");
        glow.addColorStop(1, "rgba(16, 185, 129, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(16, 185, 129, 0.75)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    let raf = 0;
    const loop = (time: number) => {
      draw(time);
      raf = window.requestAnimationFrame(loop);
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      points = createPoints();
    };

    window.addEventListener("resize", onResize);
    raf = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [seed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-28 pointer-events-none"
    />
  );
}

