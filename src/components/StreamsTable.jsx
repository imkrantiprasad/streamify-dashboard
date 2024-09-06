import React, { useContext, useState, useMemo } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const StreamsTable = () => {
  const { streams } = useContext(DashboardContext);
  const [sortConfig, setSortConfig] = useState({
    key: "dateStreamed",
    direction: "descending",
  });
  const [filters, setFilters] = useState({ artist: "", songName: "" });

  const sortedStreams = useMemo(() => {
    let sortableStreams = [...streams];

    if (filters.artist) {
      sortableStreams = sortableStreams.filter((stream) =>
        stream.artist.toLowerCase().includes(filters.artist.toLowerCase())
      );
    }

    if (filters.songName) {
      sortableStreams = sortableStreams.filter((stream) =>
        stream.songName.toLowerCase().includes(filters.songName.toLowerCase())
      );
    }

    if (sortConfig !== null) {
      sortableStreams.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableStreams;
  }, [streams, sortConfig, filters]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      if (sortConfig.direction === "ascending") {
        return <FaSortUp />;
      } else {
        return <FaSortDown />;
      }
    } else {
      return <FaSort />;
    }
  };

  const getHeaderClass = (key) => {
    return sortConfig.key === key
      ? "font-semibold text-gray-900"
      : "text-gray-600";
  };

  return (
    <div className="bg-white shadow rounded-lg p-3 md:p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Streams</h2>
      <div className="md:flex md:space-x-4 mb-4">
        <input
          type="text"
          name="songName"
          placeholder="Filter by Song Name"
          value={filters.songName}
          onChange={handleFilterChange}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          name="artist"
          placeholder="Filter by Artist"
          value={filters.artist}
          onChange={handleFilterChange}
          className="border rounded px-3 py-2 mt-3 md:mt-0"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th
                className={`py-2 px-4 border-b cursor-pointer text-left ${getHeaderClass(
                  "songName"
                )}`}
                onClick={() => requestSort("songName")}
              >
                <div className="flex items-center space-x-2">
                  <span>Song Name</span> {getSortIcon("songName")}
                </div>
              </th>
              <th
                className={`py-2 px-4 border-b cursor-pointer text-left ${getHeaderClass(
                  "artist"
                )}`}
                onClick={() => requestSort("artist")}
              >
                <div className="flex items-center space-x-2">
                  <span>Artist</span> {getSortIcon("artist")}
                </div>
              </th>
              <th
                className={`py-2 px-4 border-b cursor-pointer text-left ${getHeaderClass(
                  "dateStreamed"
                )}`}
                onClick={() => requestSort("dateStreamed")}
              >
                <div className="flex items-center space-x-2">
                  <span>Date Streamed</span> {getSortIcon("dateStreamed")}
                </div>
              </th>
              <th
                className={`py-2 px-4 border-b cursor-pointer text-left ${getHeaderClass(
                  "streamCount"
                )}`}
                onClick={() => requestSort("streamCount")}
              >
                <div className="flex items-center space-x-2">
                  <span>Stream Count</span> {getSortIcon("streamCount")}
                </div>
              </th>
              <th
                className={`py-2 px-4 border-b cursor-pointer text-left ${getHeaderClass(
                  "userId"
                )}`}
                onClick={() => requestSort("userId")}
              >
                <div className="flex items-center space-x-2">
                  <span>User ID</span> {getSortIcon("userId")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedStreams.map((stream, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{stream.songName}</td>
                <td className="py-2 px-4 border-b">{stream.artist}</td>
                <td className="py-2 px-4 border-b">{stream.dateStreamed}</td>
                <td className="py-2 px-4 border-b">{stream.streamCount}</td>
                <td className="py-2 px-4 border-b">{stream.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StreamsTable;
