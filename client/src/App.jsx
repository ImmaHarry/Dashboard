import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="flex h-screen bg-black text-white">
            <Sidebar />
            <div className="flex flex-col flex-1 border-l border-white/10">
                <Navbar />
                <main className="p-6">
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                        <h1 className="text-xl font-semibold">Dashboard Overview</h1>
                        <div className="flex items-center space-x-2">
                            <button className="bg-gray-800 px-3 py-1 text-sm rounded flex items-center">
                                📅 <span className="ml-1">21 Dec - 21 Jan</span>
                            </button>
                            <button className="bg-gray-800 px-3 py-1 text-sm rounded">Daily ▼</button>
                            <button className="bg-blue-500 px-3 py-1 text-sm rounded">Export CSV</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
