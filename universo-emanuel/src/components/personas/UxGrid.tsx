"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Eraser, PenLine, Trash2 } from "lucide-react";

type Tool = "pen" | "eraser";
const COLORS = ["#F24E1E", "#0D99FF", "#14AE5C", "#FFFFFF"];

export function UxGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [tool, setTool] = useState<Tool>("pen");
  const [color, setColor] = useState(COLORS[0]);

  const paintBackground = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    context.fillStyle = "#1E1E1E";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineCap = "round";
    context.lineJoin = "round";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 1200;
    canvas.height = 720;
    paintBackground();
  }, []);

  const point = (event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const bounds = canvas.getBoundingClientRect();
    return { x: (event.clientX - bounds.left) * (canvas.width / bounds.width), y: (event.clientY - bounds.top) * (canvas.height / bounds.height) };
  };

  const start = (event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const position = point(event);
    if (!canvas || !context || !position) return;
    canvas.setPointerCapture(event.pointerId);
    setDrawing(true);
    context.beginPath();
    context.moveTo(position.x, position.y);
  };

  const draw = (event: PointerEvent<HTMLCanvasElement>) => {
    if (!drawing) return;
    const context = canvasRef.current?.getContext("2d");
    const position = point(event);
    if (!context || !position) return;
    context.lineWidth = tool === "eraser" ? 44 : 7;
    context.strokeStyle = tool === "eraser" ? "#1E1E1E" : color;
    context.lineTo(position.x, position.y);
    context.stroke();
    context.beginPath();
    context.moveTo(position.x, position.y);
  };

  const stop = () => {
    setDrawing(false);
    canvasRef.current?.getContext("2d")?.beginPath();
  };

  return <div className="overflow-hidden rounded-xl border border-white/10 bg-[#242424] shadow-2xl"><div className="flex items-center justify-between border-b border-white/10 px-4 py-3"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F24E1E]">Rascunho livre</p><p className="mt-1 text-xs text-white/45">Desenhe uma hipótese. Depois teste se ela ajuda alguém.</p></div><div className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#1E1E1E] p-1"><button onClick={() => setTool("pen")} aria-label="Lápis" className={`rounded p-2 ${tool === "pen" ? "bg-[#F24E1E] text-white" : "text-white/55 hover:text-white"}`}><PenLine size={15} /></button><button onClick={() => setTool("eraser")} aria-label="Borracha" className={`rounded p-2 ${tool === "eraser" ? "bg-[#F24E1E] text-white" : "text-white/55 hover:text-white"}`}><Eraser size={15} /></button><button onClick={paintBackground} aria-label="Limpar desenho" className="rounded p-2 text-white/55 hover:text-red-300"><Trash2 size={15} /></button></div></div><div className="relative bg-[#1E1E1E] p-3" style={{ backgroundImage: "linear-gradient(#ffffff09 1px, transparent 1px), linear-gradient(90deg, #ffffff09 1px, transparent 1px)", backgroundSize: "24px 24px" }}><canvas ref={canvasRef} onPointerDown={start} onPointerMove={draw} onPointerUp={stop} onPointerLeave={stop} className="aspect-[5/3] w-full cursor-crosshair rounded-lg border border-[#F24E1E]/50 bg-[#1E1E1E] touch-none" /><div className="absolute bottom-6 left-6 flex gap-2">{COLORS.map((item) => <button key={item} onClick={() => { setColor(item); setTool("pen"); }} aria-label={`Cor ${item}`} className={`h-4 w-4 rounded-full border border-white/30 ${color === item && tool === "pen" ? "ring-2 ring-white ring-offset-2 ring-offset-[#1E1E1E]" : ""}`} style={{ backgroundColor: item }} />)}</div></div></div>;
}
