import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <div className="flex h-screen w-screen bg-black text-white">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="p-6 overflow-auto h-full">
                    <Dashboard />
                </main>
            </div>
        </div>
    );
};

export default App;
