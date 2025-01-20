import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = ({ title }) => {
    const data = {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
            {
                label: "File 1",
                data: [30, 50, 80, 60, 90],
                borderColor: "#3b82f6",
                fill: false,
            },
            {
                label: "File 2",
                data: [20, 40, 70, 55, 85],
                borderColor: "#ef4444",
                fill: false,
            },
        ],
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <Line data={data} />
        </div>
    );
};

export default LineChart;