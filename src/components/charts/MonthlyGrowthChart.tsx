'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { cn } from '@/lib/utils';

interface MonthlyGrowthChartProps {
  className?: string;
}

const defaultData = [
  { month: 'Ian', value: 100 },
  { month: 'Feb', value: 115 },
  { month: 'Mar', value: 135 },
  { month: 'Apr', value: 152 },
  { month: 'Mai', value: 178 },
  { month: 'Iun', value: 195 },
  { month: 'Iul', value: 220 },
  { month: 'Aug', value: 245 },
  { month: 'Sep', value: 268 },
  { month: 'Oct', value: 300 },
  { month: 'Nov', value: 335 },
  { month: 'Dec', value: 380 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: { month: string } }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-lg px-3 py-2 shadow-lg">
      <p className="text-text-secondary text-xs">{payload[0].payload.month}</p>
      <p className="text-accent-primary font-mono text-sm font-bold">
        +{payload[0].value} programari
      </p>
    </div>
  );
}

function MonthlyGrowthChart({ className }: MonthlyGrowthChartProps) {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn('w-full', className)}
    >
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={defaultData}
          margin={{ top: 10, right: 10, left: -15, bottom: 5 }}
        >
          <defs>
            <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.06)"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fill: '#8B8B9E', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#8B8B9E', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: 'rgba(124, 58, 237, 0.2)' }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#7C3AED"
            strokeWidth={2.5}
            fill="url(#growthGradient)"
            isAnimationActive={isInView}
            animationDuration={1500}
            animationEasing="ease-out"
            dot={false}
            activeDot={{
              r: 5,
              fill: '#7C3AED',
              stroke: '#0A0A0F',
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export { MonthlyGrowthChart };
export type { MonthlyGrowthChartProps };
