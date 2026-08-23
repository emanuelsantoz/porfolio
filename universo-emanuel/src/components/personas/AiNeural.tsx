"use client";

import { useEffect, useMemo, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
};

export function AiNeural() {
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
        s = (s * 1664525 + 1013904223) % 4294967296;
        return s / 4294967296;
      };
    })();

    const createNodes = () => {
      const count = Math.floor(Math.min(90, Math.max(42, (width * height) / 42000)));
      const nodes: Node[] = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: random() * width,
          y: random() * height,
          vx: (random() - 0.5) * 0.18,
          vy: (random() - 0.5) * 0.18,
          r: 1.2 + random() * 2.8,
          phase: random() * Math.PI * 2,
        });
      }
      return nodes;
    };

    let nodes = createNodes();

    const draw = (t: number) => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createRadialGradient(width * 0.2, height * 0.2, 0, width * 0.5, height * 0.5, Math.max(width, height));
      bg.addColorStop(0, "rgba(20, 8, 48, 0.95)");
      bg.addColorStop(1, "rgba(5, 4, 18, 0.9)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const hubX = width * 0.5;
      const hubY = height * 0.45;
      const hubPulse = 0.6 + 0.4 * Math.sin(t * 0.0012);
      const hubR = 90 + hubPulse * 35;

      const hubGlow = ctx.createRadialGradient(hubX, hubY, 0, hubX, hubY, hubR);
      hubGlow.addColorStop(0, "rgba(168, 85, 247, 0.16)");
      hubGlow.addColorStop(1, "rgba(168, 85, 247, 0)");
      ctx.fillStyle = hubGlow;
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubR, 0, Math.PI * 2);
      ctx.fill();

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      });

      const maxDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > maxDist) continue;

          const alpha = (1 - dist / maxDist) * 0.22;
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      nodes.forEach((n) => {
        const pulse = 0.55 + 0.45 * Math.sin(t * 0.002 + n.phase);
        const r = n.r + pulse * 1.2;

        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6);
        g.addColorStop(0, "rgba(168, 85, 247, 0.16)");
        g.addColorStop(1, "rgba(168, 85, 247, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(168, 85, 247, 0.75)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      const scanX = (t * 0.06) % (width + 240) - 120;
      const scanGrad = ctx.createLinearGradient(scanX - 120, 0, scanX + 120, 0);
      scanGrad.addColorStop(0, "rgba(168, 85, 247, 0)");
      scanGrad.addColorStop(0.5, "rgba(168, 85, 247, 0.08)");
      scanGrad.addColorStop(1, "rgba(168, 85, 247, 0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(scanX - 120, 0, 240, height);
    };

    let raf = 0;
    const loop = (time: number) => {
      draw(time);
      raf = window.requestAnimationFrame(loop);
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      nodes = createNodes();
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
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none"
    />
  );
}

