'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LiveDemoEmbedProps {
  title: string;
  description: string;
  className?: string;
}

function WaveformSVG() {
  const bars = 40;
  return (
    <svg
      viewBox={`0 0 ${bars * 6} 40`}
      className="w-full h-10 opacity-40"
      preserveAspectRatio="none"
    >
      {Array.from({ length: bars }).map((_, i) => {
        const height = 8 + Math.sin(i * 0.5) * 12 + Math.cos(i * 0.3) * 8;
        return (
          <rect
            key={i}
            x={i * 6}
            y={20 - height / 2}
            width="3"
            height={height}
            rx="1.5"
            fill="#7C3AED"
          />
        );
      })}
    </svg>
  );
}

function LiveDemoEmbed({ title, description, className }: LiveDemoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={cn('section-padding', className)}>
      <div className="container-site max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-bg-card border border-border-subtle rounded-2xl p-6 lg:p-8"
        >
          <p className="text-accent-primary text-xs font-mono uppercase tracking-wider mb-3">
            Demo live
          </p>
          <h3 className="font-satoshi font-bold text-xl text-text-primary mb-2">
            {title}
          </h3>
          <p className="text-text-secondary text-sm mb-6">{description}</p>

          {/* Waveform */}
          <div className="mb-6">
            <WaveformSVG />
          </div>

          {/* Play button area */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-accent-primary flex items-center justify-center shadow-glow hover:shadow-glow-lg transition-shadow duration-300 flex-shrink-0"
            >
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="5" y="4" width="3.5" height="12" rx="1" fill="#0A0A0F" />
                  <rect x="11.5" y="4" width="3.5" height="12" rx="1" fill="#0A0A0F" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6.5 4L16 10L6.5 16V4Z" fill="#0A0A0F" />
                </svg>
              )}
            </button>

            <div className="flex-1">
              <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent-primary rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: isPlaying ? '65%' : '0%' }}
                  transition={{ duration: isPlaying ? 15 : 0.3 }}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-text-secondary text-xs font-mono">
                  {isPlaying ? '0:28' : '0:00'}
                </span>
                <span className="text-text-secondary text-xs font-mono">0:45</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-text-secondary text-xs italic">
            Asculta cum suna agentul tau
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export { LiveDemoEmbed };
export type { LiveDemoEmbedProps };
