import React from "react";
import GaugeChart from "react-gauge-chart";

const GaugeChartComponent = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <h2 className="text-lg font-bold text-white">Accuracy</h2>
            <GaugeChart id="gauge-chart" nrOfLevels={20} percent={0.82} />
            <p className="text-2xl font-bold text-white">81.9</p>
        </div>
    );
};

export default GaugeChartComponent;
