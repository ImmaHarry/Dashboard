import React from "react";
import LineChart from "./LineChart";
import StatsCard from "./StatsCard";

const Dashboard = () => {
  return (
    <div className="h-screen w-full bg-black text-white p-4 flex flex-col ">
      {/* Top Bar: Dashboard Overview in One Line */}
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-xl font-bold">Dashboard Overview</h2>

        {/* Smaller Inputs */}
        <div className="flex items-center space-x-2">
          <input
            type="date"
            className="bg-gray-800 text-white px-2 py-1 text-xs rounded-md"
          />
          <select className="bg-gray-800 text-white px-2 py-1 text-xs rounded-md">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <button className="bg-blue-500 px-2 py-1 text-xs rounded-md text-white">
            Export CSV
          </button>
        </div>
      </div>

      {/* Greeting Message */}
      <h1 className="text-2xl font-bold mb-4">Good Evening, John Doe!</h1>

      {/* Main Container */}
      <div className="flex space-x-4">
        {/* Left Section - Stats and Metrics */}
        <div className="w-1/3 flex flex-col space-y-4">
          <StatsCard
            title="Total Tests Conducted"
            value="60"
            isProgressBar={true}
            details={[
              "Passed: 43",
              "Failed: 17",
              "Test Cases: 5",
              "Paraphrased: 3",
              "Iterations: 4",
            ]}
          />

          {/* Model Metrics */}
          <div className="text-white text-lg font-bold">Model Metrics</div>
          <div className="grid grid-cols-2 gap-2">
            <StatsCard title="Hallucination" value={32} isCircular={true} />
            <StatsCard title="LLM Drift Rate" value={17} isCircular={true} />
          </div>

          {/* Custom Metrics */}
          <div className="text-white text-lg font-bold">Custom Metrics</div>
          <div className="grid grid-cols-2 gap-2">
            <StatsCard title="Metric 1" value={91} isCircular={true} />
            <StatsCard title="Metric 2" value={97} isCircular={true} />
          </div>
        </div>

        {/* Right Section - Graphs in Same Container */}
        <div className="w-2/3 bg-gray-800 p-4 rounded-lg">
          <div className="text-white text-lg font-bold mb-2">
            Accuracy Comparison Data:
          </div>
          <div className="grid grid-cols-2 gap-4">
            <LineChart
              title="Across Files"
              labels={["File 1", "File 2", "File 3"]}
              datasets={[
                {
                  label: "Accuracy",
                  data: [20, 85, 75],
                  borderColor: "#3b82f6",
                },
              ]}
              height={150} // Reduce graph size
            />
            <LineChart
              title="Question wise"
              labels={["Q1", "Q2", "Q3", "Q4", "Q5"]}
              datasets={[
                {
                  label: "File 1",
                  data: [80, 95, 70, 85, 90],
                  borderColor: "#3b82f6",
                },
                {
                  label: "File 2",
                  data: [90, 85, 75, 90, 80],
                  borderColor: "#ef4444",
                },
                {
                  label: "File 3",
                  data: [30, 85, 65, 75, 85],
                  borderColor: "#22c55e",
                },
              ]}
              height={150} // Reduce graph size
            />
          </div>
        </div>
      </div>

      {/* Previous Tests Section - Directly Below Graphs */}
      <div className="w-full bg-gray-800 p-4 rounded-lg mt-4">
        <h2 className="text-lg font-bold mb-2">Previous Tests</h2>
        <div className="text-gray-400">No previous tests available.</div>
      </div>
    </div>
  );
};

export default Dashboard;
