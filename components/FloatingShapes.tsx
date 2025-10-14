'use client';

import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  type: 'circle' | 'square' | 'triangle';
  color: string;
}

interface FloatingShapesProps {
  count?: number;
  colors?: string[];
}

export default function FloatingShapes({
  count = 8,
  colors = ['#0066ff', '#00D9FF', '#7C3AED', '#F59E0B', '#EC4899']
}: FloatingShapesProps) {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generatedShapes: Shape[] = [];
    const types: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];

    for (let i = 0; i < count; i++) {
      generatedShapes.push({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setShapes(generatedShapes);
  }, [count, colors]);

  const renderShape = (shape: Shape) => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: 0.1,
      animation: `floatSlow ${shape.duration}s ease-in-out infinite`,
      animationDelay: `${shape.delay}s`,
      pointerEvents: 'none',
    };

    switch (shape.type) {
      case 'circle':
        return (
          <div
            key={shape.id}
            className="blob-shape"
            style={{
              ...baseStyle,
              background: shape.color,
              filter: 'blur(40px)',
            }}
          />
        );
      case 'square':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              background: `linear-gradient(135deg, ${shape.color}80, transparent)`,
              borderRadius: '20%',
              transform: 'rotate(45deg)',
              filter: 'blur(30px)',
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}40`,
              filter: 'blur(25px)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => renderShape(shape))}
    </div>
  );
}
