import React, { useContext } from "react";
import MetricsCard from "./MetricsCard";
import { FaUser, FaUsers, FaMusic, FaDollarSign, FaStar } from "react-icons/fa";
import { DashboardContext } from "../context/DashboardContext";

const Metrics = () => {
  const { metrics } = useContext(DashboardContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <MetricsCard
        title="Total Users"
        value={metrics.totalUsers}
        icon={<FaUser />}
      />
      <MetricsCard
        title="Active Users"
        value={metrics.activeUsers}
        icon={<FaUsers />}
      />
      <MetricsCard
        title="Total Streams"
        value={metrics.totalStreams}
        icon={<FaMusic />}
      />
      <MetricsCard
        title="Revenue"
        value={`$${metrics.revenue?.subscriptions + metrics.revenue?.ads}`}
        icon={<FaDollarSign />}
      />
      <MetricsCard
        title="Top Artist"
        value={metrics.topArtist}
        icon={<FaStar />}
      />
    </div>
  );
};

export default Metrics;
