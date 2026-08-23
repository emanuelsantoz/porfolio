"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pen, Eraser, Trash2, MousePointer2 } from "lucide-react";

export function UxGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [color, setColor] = useState('#E85D3F');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Fixed size for the drawing area
    canvas.width = 600;
    canvas.height = 400;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // White background for the canvas frame
    ctx.fillStyle = '#1E1E1E';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) ctx.beginPath();
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.lineWidth = tool === 'eraser' ? 20 : 3;
    ctx.strokeStyle = tool === 'eraser' ? '#1E1E1E' : color;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    ctx.fillStyle = '#1E1E1E';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#1E1E1E] overflow-hidden">
      {/* Figma-style Grid Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #555 1px, transparent 1px),
            linear-gradient(to bottom, #555 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Drawing Frame Container */}
      <div className="absolute top-24 right-8 z-40 flex flex-col gap-2">
        <div className="text-[#E85D3F] text-xs font-bold font-mono">Frame 1: Ideation Board</div>
        <div className="relative group">
          <canvas
            ref={canvasRef}
            className="border-2 border-[#E85D3F] rounded-lg shadow-2xl cursor-crosshair bg-[#1E1E1E]"
            style={{ width: '600px', height: '400px' }}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onMouseMove={draw}
          />
          
          {/* Floating Toolbar attached to Frame */}
          <div className="absolute top-4 left-4 bg-[#2C2C2C] p-2 rounded-lg shadow-xl border border-[#444] flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={() => setTool('pen')}
              className={`p-1.5 rounded hover:bg-[#444] transition-colors ${tool === 'pen' ? 'bg-[#E85D3F] text-white' : 'text-gray-400'}`}
            >
              <Pen size={16} />
            </button>
            <button 
              onClick={() => setTool('eraser')}
              className={`p-1.5 rounded hover:bg-[#444] transition-colors ${tool === 'eraser' ? 'bg-[#E85D3F] text-white' : 'text-gray-400'}`}
            >
              <Eraser size={16} />
            </button>
            <div className="w-full h-[1px] bg-[#444]" />
            <div className="flex flex-col gap-2 items-center">
              {['#E85D3F', '#00C2FF', '#00FF94', '#FFFFFF'].map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setColor(c);
                    setTool('pen');
                  }}
                  className={`w-3 h-3 rounded-full border border-white/20 hover:scale-125 transition-transform ${color === c && tool === 'pen' ? 'ring-2 ring-white' : ''}`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div className="w-full h-[1px] bg-[#444]" />
            <button 
              onClick={clearCanvas}
              className="p-1.5 rounded hover:bg-red-900/50 text-red-400 transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
          
          {/* Label Hint */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-0 transition-opacity">
            <span className="text-white font-mono text-sm">Rabisque sua ideia aqui...</span>
          </div>
        </div>
      </div>


      {/* Interactive Cursor Follower (Figma Style) */}
      <motion.div
        className="absolute z-40 pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      >
        <MousePointer2 className="text-black fill-black stroke-white" size={24} />
        <div 
          className="ml-4 -mt-4 text-white text-xs px-2 py-1 rounded font-medium shadow-md whitespace-nowrap"
          style={{ backgroundColor: color }}
        >
          Emanuel
        </div>
      </motion.div>

      {/* Decorative Frames (Background) */}
      <div className="absolute top-20 right-20 w-64 h-40 border-2 border-[#E85D3F] opacity-30 rounded-lg pointer-events-none">
        <div className="absolute -top-6 left-0 text-[#E85D3F] text-xs font-bold bg-[#1E1E1E] px-1">Frame 1</div>
      </div>
      <div className="absolute bottom-40 left-20 w-80 h-56 border-2 border-[#00C2FF] opacity-20 rounded-lg pointer-events-none">
        <div className="absolute -top-6 left-0 text-[#00C2FF] text-xs font-bold bg-[#1E1E1E] px-1">Wireframe</div>
      </div>
    </div>
  );
}
