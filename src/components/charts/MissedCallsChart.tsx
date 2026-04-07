'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { cn } from '@/lib/utils';

interface MissedCallsChartData {
  industry: string;
  value: number;
}

interface MissedCallsChartProps {
  data: MissedCallsChartData[];
  className?: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: MissedCallsChartData }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-lg px-3 py-2 shadow-lg">
      <p className="text-text-primary text-sm font-medium">{item.payload.industry}</p>
      <p className="text-accent-primary font-mono text-sm font-bold">{item.value}%</p>
    </div>
  );
}

function MissedCallsChart({ data, className }: MissedCallsChartProps) {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn('w-full', className)}
    >
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.06)"
            vertical={false}
          />
          <XAxis
            dataKey="industry"
            tick={{ fill: '#8B8B9E', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
            tickLine={false}
            angle={-30}
            textAnchor="end"
            height={60}
          />
          <YAxis
            tick={{ fill: '#8B8B9E', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `${v}%`}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(124, 58, 237, 0.05)' }}
          />
          <Bar
            dataKey="value"
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
            isAnimationActive={isInView}
            animationDuration={1200}
            animationEasing="ease-out"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill="#7C3AED"
                fillOpacity={0.85}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.3))',
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export { MissedCallsChart };
export type { MissedCallsChartProps, MissedCallsChartData };
