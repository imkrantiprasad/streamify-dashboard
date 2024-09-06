import React from "react";
import Metrics from "./Metrics";
import UserGrowthChart from "./UserGrowthChart";
import RevenueDistributionChart from "./RevenueDistributionChart";
import TopSongsChart from "./TopSongsChart";
import StreamsTable from "./StreamsTable";
import Header from "./Header";
import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

const Dashboard = () => {
  const { setStreams } = useContext(DashboardContext);

  const handleRevenueClick = (source) => {
    // Implement filtering logic based on revenue source
    // For example, filter streams where revenue source matches
    // Since streams don't have revenue source, this is a placeholder
    // You might need to adjust your data structure
    console.log(`Clicked on revenue source: ${source}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="p-6">
        <Metrics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <UserGrowthChart />
          <RevenueDistributionChart onClick={handleRevenueClick} />
          <TopSongsChart />
        </div>
        <StreamsTable />
      </main>
    </div>
  );
};

export default Dashboard;
