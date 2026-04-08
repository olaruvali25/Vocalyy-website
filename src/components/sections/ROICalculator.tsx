'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from '@/components/ui/GlowCard';
import { ROIBarChart } from '@/components/charts/ROIBarChart';
import { cn } from '@/lib/utils';

interface ROICalculatorProps {
  className?: string;
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="text-text-primary text-sm font-medium">{label}</label>
        <span className="font-mono text-accent-primary font-bold text-lg">
          {value}{suffix || ''}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step || 1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-bg-elevated [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-primary [&::-webkit-slider-thumb]:shadow-glow [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-accent-primary [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
        style={{
          background: `linear-gradient(to right, #7C3AED 0%, #7C3AED ${pct}%, #191928 ${pct}%, #191928 100%)`,
        }}
      />
      <div className="flex justify-between text-xs text-text-secondary mt-1">
        <span>{min}{suffix || ''}</span>
        <span>{max}{suffix || ''}</span>
      </div>
    </div>
  );
}

function ROICalculator({ className }: ROICalculatorProps) {
  const [callsPerDay, setCallsPerDay] = useState(20);
  const [missedPercent, setMissedPercent] = useState(30);
  const [avgValue, setAvgValue] = useState(150);

  const results = useMemo(() => {
    const missedCallsPerDay = (callsPerDay * missedPercent) / 100;
    const monthlyMissedCalls = missedCallsPerDay * 22;
    const monthlyLoss = Math.round(monthlyMissedCalls * avgValue);
    const agentCost = callsPerDay <= 15 ? 299 : callsPerDay <= 30 ? 499 : 699;
    const netGain = monthlyLoss - agentCost;
    return { monthlyLoss, agentCost, netGain };
  }, [callsPerDay, missedPercent, avgValue]);

  return (
    <section className={cn('section-padding', className)}>
      <div className="container-site max-w-4xl mx-auto">
        <GlowCard padding="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <SliderInput
                label="Apeluri pe zi"
                value={callsPerDay}
                min={5}
                max={50}
                onChange={setCallsPerDay}
              />
              <SliderInput
                label="Apeluri pierdute"
                value={missedPercent}
                min={10}
                max={80}
                suffix="%"
                onChange={setMissedPercent}
              />
              <SliderInput
                label="Valoare medie programare"
                value={avgValue}
                min={50}
                max={500}
                step={10}
                suffix="\u20AC"
                onChange={setAvgValue}
              />
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-bg-secondary rounded-xl p-5 border border-border-subtle">
                  <p className="text-text-secondary text-xs uppercase tracking-wider mb-1">
                    Pierdere lunara estimata
                  </p>
                  <motion.p
                    key={results.monthlyLoss}
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-mono text-3xl font-bold text-negative"
                  >
                    -{results.monthlyLoss.toLocaleString('ro-RO')}{'\u20AC'}
                  </motion.p>
                </div>

                <div className="bg-bg-secondary rounded-xl p-5 border border-border-subtle">
                  <p className="text-text-secondary text-xs uppercase tracking-wider mb-1">
                    Cost agent vocal AI
                  </p>
                  <motion.p
                    key={results.agentCost}
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-mono text-3xl font-bold text-neutral"
                  >
                    {results.agentCost}{'\u20AC'}/luna
                  </motion.p>
                </div>

                <div className="bg-accent-primary/5 rounded-xl p-5 border border-accent-primary/20 shadow-glow">
                  <p className="text-text-secondary text-xs uppercase tracking-wider mb-1">
                    Castig net lunar
                  </p>
                  <motion.p
                    key={results.netGain}
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-mono text-3xl font-bold text-accent-primary"
                  >
                    +{results.netGain.toLocaleString('ro-RO')}{'\u20AC'}
                  </motion.p>
                </div>
              </div>

              <ROIBarChart
                monthlyLoss={results.monthlyLoss}
                agentCost={results.agentCost}
                netGain={results.netGain}
              />
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}

export { ROICalculator };
export type { ROICalculatorProps };
