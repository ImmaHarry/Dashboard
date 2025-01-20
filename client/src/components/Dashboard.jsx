import React from "react";
import GaugeChart from "./GaugeChart";
import LineChart from "./LineChart";
import StatsCard from "./StatsCard";

const Dashboard = () => {
    return (
        <div className="pt-16 px-6 flex flex-col space-y-6">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-4">
                <StatsCard title="Test Statistics" details={[
                    "Total Tests: 60", "Test Cases: 5", "Paraphrased: 3", "Iterations: 4", "Passed: 42", "Failed: 17"
                ]} />
                <GaugeChart />
                <StatsCard title="Hallucination Rate" value="32.0%" textColor="text-red-500" />
                <StatsCard title="LLM Drift Rate" value="17.0%" textColor="text-green-500" />
                <StatsCard title="Custom Metric 1" value="91.0%" textColor="text-red-500" />
                <StatsCard title="Custom Metric 2" value="97.0%" textColor="text-red-500" />
            </div>

            {/* Bottom Graph Section */}
            <div className="grid grid-cols-2 gap-6">
                <LineChart title="Accuracy Comparison Across Files" />
                <LineChart title="Question-wise Accuracy Comparison" />
            </div>
        </div>
    );
};

export default Dashboard;