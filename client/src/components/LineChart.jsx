import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = ({ title, labels, datasets }) => {
  // Fallback message if data is not provided
  if (!labels || !datasets || datasets.length === 0) {
    return <p>No data available to render the chart.</p>;
  }

  // Prepare the data object for the chart
  const chartData = {
    labels,
    datasets: datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: dataset.borderColor || "#3b82f6",
      borderWidth: 2,
      pointRadius: 4,
      fill: false,
    })),
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2
        className="
                text-white
                text-lg
                font-bold
                mb-2
            "
      >
        {title}
      </h2>
      <Line className="" data={chartData} />
    </div>
  );
};

export default LineChart;
