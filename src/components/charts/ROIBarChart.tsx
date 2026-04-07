'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { cn } from '@/lib/utils';

interface ROIBarChartProps {
  monthlyLoss: number;
  agentCost: number;
  netGain: number;
  className?: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: { name: string; value: number } }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-lg px-3 py-2 shadow-lg">
      <p className="text-text-primary text-sm">{item.payload.name}</p>
      <p className="font-mono text-sm font-bold text-accent-primary">
        {item.value.toLocaleString('ro-RO')}{'\u20AC'}
      </p>
    </div>
  );
}

const barColors = ['#EF4444', '#D946EF', '#7C3AED'];

function ROIBarChart({ monthlyLoss, agentCost, netGain, className }: ROIBarChartProps) {
  const data = [
    { name: 'Pierdere', value: monthlyLoss },
    { name: 'Cost agent', value: agentCost },
    { name: 'Castig net', value: netGain },
  ];

  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 5, left: -15, bottom: 5 }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: '#8B8B9E', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#8B8B9E', fontSize: 10, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(124, 58, 237, 0.05)' }}
          />
          <Bar
            dataKey="value"
            radius={[6, 6, 0, 0]}
            maxBarSize={48}
            animationDuration={800}
            animationEasing="ease-out"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={barColors[index]}
                fillOpacity={index === 2 ? 1 : 0.7}
                style={
                  index === 2
                    ? { filter: 'drop-shadow(0 0 10px rgba(124, 58, 237, 0.4))' }
                    : undefined
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export { ROIBarChart };
export type { ROIBarChartProps };
