import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import OverviewDashboard from "./components/Dashboard";
import PreviousResultsDashboard from "./components/PreviousResults";

const App = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex h-screen w-screen bg-black text-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 overflow-auto h-full">
          {activeTab === "Overview" && <OverviewDashboard />}
          {activeTab === "More Metrics" && <PreviousResultsDashboard />}
        </main>
      </div>
    </div>
  );
};

export default App;
