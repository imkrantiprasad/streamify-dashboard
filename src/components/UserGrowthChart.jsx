import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DashboardContext } from "../context/DashboardContext";

const UserGrowthChart = () => {
  const { userGrowth } = useContext(DashboardContext);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        User Growth (Last 12 Months)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={userGrowth}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
          <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
