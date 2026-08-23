"use client";

import { useEffect, useMemo, useRef } from "react";

type Node = {
  x: number;
  y: number;
  r: number;
};

type Edge = {
  a: number;
  b: number;
  speed: number;
  offset: number;
};

export function AutomationPipeline() {
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

    const createGraph = () => {
      const w = width;
      const h = height;

      const left = w * 0.14;
      const right = w * 0.86;
      const top = h * 0.18;
      const bottom = h * 0.82;

      const lanes = 4;
      const steps = 5;
      const nodes: Node[] = [];

      for (let lane = 0; lane < lanes; lane++) {
        for (let step = 0; step < steps; step++) {
          const x = left + ((right - left) * step) / (steps - 1);
          const y = top + ((bottom - top) * lane) / (lanes - 1);
          nodes.push({
            x,
            y,
            r: 5 + random() * 4,
          });
        }
      }

      const edges: Edge[] = [];
      for (let lane = 0; lane < lanes; lane++) {
        for (let step = 0; step < steps - 1; step++) {
          const a = lane * steps + step;
          const b = lane * steps + step + 1;
          edges.push({
            a,
            b,
            speed: 0.002 + random() * 0.004,
            offset: random(),
          });
        }
      }

      for (let lane = 0; lane < lanes - 1; lane++) {
        const a = lane * steps + 2;
        const b = (lane + 1) * steps + 2;
        edges.push({
          a,
          b,
          speed: 0.0015 + random() * 0.003,
          offset: random(),
        });
      }

      return { nodes, edges };
    };

    let graph = createGraph();

    const draw = (t: number) => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, "rgba(2, 6, 23, 0.95)");
      bg.addColorStop(1, "rgba(3, 7, 18, 0.85)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 1;

      graph.edges.forEach((edge) => {
        const a = graph.nodes[edge.a];
        const b = graph.nodes[edge.b];
        const dx = b.x - a.x;
        const dy = b.y - a.y;

        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, "rgba(56, 189, 248, 0.12)");
        grad.addColorStop(1, "rgba(56, 189, 248, 0.25)");
        ctx.strokeStyle = grad;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        const p = (edge.offset + t * edge.speed) % 1;
        const px = a.x + dx * p;
        const py = a.y + dy * p;
        const glow = 10;

        ctx.fillStyle = "rgba(56, 189, 248, 0.5)";
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();

        const g = ctx.createRadialGradient(px, py, 0, px, py, glow);
        g.addColorStop(0, "rgba(56, 189, 248, 0.22)");
        g.addColorStop(1, "rgba(56, 189, 248, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, glow, 0, Math.PI * 2);
        ctx.fill();
      });

      graph.nodes.forEach((node) => {
        const pulse = 0.55 + 0.45 * Math.sin(t * 0.003 + node.x * 0.001);
        const r = node.r + pulse * 1.5;

        const outer = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 3.5);
        outer.addColorStop(0, "rgba(56, 189, 248, 0.22)");
        outer.addColorStop(1, "rgba(56, 189, 248, 0)");
        ctx.fillStyle = outer;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(56, 189, 248, 0.85)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 0.45, 0, Math.PI * 2);
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
      graph = createGraph();
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

