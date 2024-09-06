import React from "react";
import Metrics from "./Metrics";
import UserGrowthChart from "./UserGrowthChart";
import RevenueDistributionChart from "./RevenueDistributionChart";
import TopSongsChart from "./TopSongsChart";
import StreamsTable from "./StreamsTable";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="p-3 md:p-6">
        <Metrics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <UserGrowthChart />
          <RevenueDistributionChart />
          <TopSongsChart />
        </div>
        <StreamsTable />
      </main>
    </div>
  );
};

export default Dashboard;
