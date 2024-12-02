"use client";
import { FC } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ActivityData {
  month: string;
  value: number;
}

interface ActivityChartProps {
  activity: ActivityData[];
}

interface CustomTooltipProps {
  active: boolean;
  payload: any[];
  label: string;
}

const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg rounded">
        <p className="font-bold">{label}</p>
        {payload.map((item, index) => (
          <p key={index} style={{ color: item.fill }}>
            {item.name}: {item.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default function ActivityChart({ activity }: ActivityChartProps) {
  return (
    <div className="p-6 bg-white rounded-lg w-full h-[57vh]">
      <h3 className="text-xl font-semibold text-gray-800">Activity</h3>
      <div className="h-80 mt-6 -ml-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activity}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <Tooltip
              content={<CustomTooltip active={false} payload={[]} label="" />}
              cursor={false}
            />
            <Bar
              dataKey="value"
              fill="#1B59F8CC"
              background={{ fill: "#F7F7F7" }}
              barSize={15}
              radius={[10, 10, 0, 0]}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
