import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DashboardContext } from "../context/DashboardContext";

const COLORS = ["#0088FE", "#00C49F"];

const RevenueDistributionChart = () => {
  const { revenueDistribution } = useContext(DashboardContext);

  return (
    <div className="bg-white shadow rounded-lg p-3 md:p-6">
      <h2 className="text-xl font-semibold mb-4">Revenue Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={revenueDistribution}
            dataKey="value"
            nameKey="source"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          >
            {revenueDistribution.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                cursor="pointer"
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueDistributionChart;
