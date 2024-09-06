import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [metrics, setMetrics] = useState({});
  const [userGrowth, setUserGrowth] = useState([]);
  const [revenueDistribution, setRevenueDistribution] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const metricsRes = await axios.get("http://localhost:4000/metrics");
        const userGrowthRes = await axios.get(
          "http://localhost:4000/userGrowth"
        );
        const revenueRes = await axios.get(
          "http://localhost:4000/revenueDistribution"
        );
        const topSongsRes = await axios.get("http://localhost:4000/topSongs");
        const streamsRes = await axios.get("http://localhost:4000/streams");

        setMetrics(metricsRes.data);
        setUserGrowth(userGrowthRes.data);
        setRevenueDistribution(revenueRes.data);
        setTopSongs(topSongsRes.data);
        setStreams(streamsRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
