"use client"; // Indica que este componente se renderiza en el cliente

import type { GenerationSeriesItem } from "@/types/dashboard";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface GenerationPowerChartProps {
  series: GenerationSeriesItem[];
}

export function GenerationPowerChart({ series}: GenerationPowerChartProps) {
    
  return (
    <div className="h-80 rounded-lg border border-(--color-border) bg-white p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={series} margin={{ top: 12, right: 16, left: 8, bottom: 8 }}>
          <CartesianGrid stroke="#d9e2ec" strokeDasharray="3 3" />

          <XAxis
            dataKey="hour"
            tick={{ fill: "#1F3F7A", fontSize: 12 }}
            axisLine={{ stroke: "#d9e2ec" }}
            tickLine={{ stroke: "#d9e2ec" }}
          />

          <YAxis
            yAxisId="left"
            tick={{ fill: "#1F3F7A", fontSize: 12 }}
            axisLine={{ stroke: "#d9e2ec" }}
            tickLine={{ stroke: "#d9e2ec" }}
          />

          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#1F3F7A", fontSize: 12 }}
            axisLine={{ stroke: "#d9e2ec" }}
            tickLine={{ stroke: "#d9e2ec" }}
          />

          <Tooltip />
          <Legend />

          <Area
            yAxisId="left"
            type="monotone"
            dataKey="generationKw"
            name="Generación (kW)"
            stroke="#5BA85B"
            fill="#5BA85B"
            fillOpacity={0.75}
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="irradianceWm2"
            name="Irradiancia (W/m²)"
            stroke="#D5B43B"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}