'use client';

import { useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ComparisonSliderProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}

function ComparisonSlider({
  leftContent,
  rightContent,
  leftLabel = 'Inainte',
  rightLabel = 'Dupa',
  className,
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden rounded-xl border border-border-subtle cursor-col-resize select-none',
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      <div className="relative w-full">
        <div className="w-full">{rightContent}</div>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          {leftContent}
        </div>
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-accent-primary z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center shadow-glow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L3 10L7 16" stroke="#0A0A0F" strokeWidth="2" strokeLinecap="round" />
            <path d="M13 4L17 10L13 16" stroke="#0A0A0F" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="absolute top-3 left-3 z-20">
        <span className="px-2 py-1 text-xs font-medium bg-bg-primary/80 text-text-secondary rounded">
          {leftLabel}
        </span>
      </div>
      <div className="absolute top-3 right-3 z-20">
        <span className="px-2 py-1 text-xs font-medium bg-bg-primary/80 text-accent-primary rounded">
          {rightLabel}
        </span>
      </div>
    </div>
  );
}

export { ComparisonSlider };
export type { ComparisonSliderProps };
