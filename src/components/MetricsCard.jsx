import React from "react";

const MetricsCard = React.memo(({ title, value, icon }) => {
  return (
    <div className="bg-white shadow rounded-lg p-3 md:p-6 flex items-center">
      <div className="p-3 bg-blue-500 text-white rounded-full mr-4">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
});

export default MetricsCard;
