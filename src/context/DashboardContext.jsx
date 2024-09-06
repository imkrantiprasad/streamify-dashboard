import React, { createContext, useState, useEffect } from "react";
import mockData from "../data/mockData.json";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [metrics, setMetrics] = useState({});
  const [userGrowth, setUserGrowth] = useState([]);
  const [revenueDistribution, setRevenueDistribution] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    setMetrics(mockData.metrics);
    setUserGrowth(mockData.userGrowth);
    setRevenueDistribution(mockData.revenueDistribution);
    setTopSongs(mockData.topSongs);
    setStreams(mockData.streams);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        metrics,
        userGrowth,
        revenueDistribution,
        topSongs,
        streams,
        setStreams,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
