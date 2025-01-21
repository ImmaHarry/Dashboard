import React from "react";
import LineChart from "./LineChart";
import CircularInfo from "./CircularInformation";
import StatsCard from "./StatsCard";
import { FaCalendarAlt, FaDownload } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="h-fit w-full bg-opacity-75 text-white p-4 flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full mb-4">
        {/* Title */}
        <h2 className="text-3xl font-bold">Dashboard Overview</h2>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Date Picker */}
          <div className="flex items-center bg-gray-800 h-8 text-gray-400 px-3 py-1 rounded-md space-x-2">
            <FaCalendarAlt className="text-gray-500" />
            <span className="text-sm">21/12/2024 - 21/01/2025</span>
          </div>

          {/* Filter Dropdown */}
          <select className="bg-gray-800 text-gray-400 px-3 py-1 h-8 text-sm rounded-md focus:outline-none">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>

          {/* Export Button */}
          <button className="bg-blue-500 text-sm text-white px-3 py-1 h-8 rounded-md flex items-center space-x-2">
            <FaDownload />
            <span>Export as CSV</span>
          </button>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-gray-700 mb-4"></div>

      {/* Greeting Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Good Evening, John Doe!</h1>
        <p className="text-gray-400 text-sm">
          Here's an overview of your dashboard metrics and performance.
        </p>
      </div>
{/* Main Container */}
<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
  {/* Left Section - Stats and Metrics */}
  <div className="w-full lg:w-1/2 flex flex-col space-y-4">
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
    <div className="text-white text-xl font-bold">Model Metrics</div>
    <div className="grid grid-cols-2 gap-2">
      <CircularInfo title="Hallucination" value={32} isCircular={true} />
      <CircularInfo title="LLM Drift Rate" value={17} isCircular={true} />
    </div>

    {/* Custom Metrics */}
    <div className="text-white text-xl font-bold">Custom Metrics</div>
    <div className="grid grid-cols-2 gap-2">
      <CircularInfo title="Metric 1" value={91} isCircular={true} />
      <CircularInfo title="Metric 2" value={97} isCircular={true} />
    </div>
  </div>

{/* Right Section - Graphs */}
<div className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-lg">
  <div className="text-gray-300 text-2xl font-semibold mb-4">
    Accuracy Comparison Data:
  </div>
  {/* Two Line Charts Stacked Vertically */}
  <div className="flex flex-col space-y-16 ">
    {/* Line Chart 1 */}
    <div className="w-full max-w-full sm:max-w-md h-[200px]">
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
      />
    </div>

    {/* Line Chart 2 */}
    <div className="w-full max-w-full sm:max-w-md h-[200px]">
      <LineChart
        title="Question-wise"
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
      />
    </div>
  </div>
</div>


</div>
</div>
  );
};

export default Dashboard;
