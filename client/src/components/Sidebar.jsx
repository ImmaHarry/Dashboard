import React, { useState } from "react";

const Sidebar = ({ setActiveTab }) => {
    return (
        <div className="w-64 bg-black p-5 border-r border-white/20">
            {/* Logo Section */}
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
                {/* Custom Symbol: Increasing Brackets with Centered Dot */}
                <div className="relative flex items-center mr-2">
                    <span className="text-blue-400 text-3xl">(</span>
                    <span className="text-2xl text-blue-400 absolute left-[10px]">(</span>
                    <span className="text-lg text-blue-400 absolute left-[20px] top-[4px]">.</span>
                    <span className="text-2xl text-blue-400 absolute left-[27px]">)</span>
                    <span className="text-3xl text-blue-400 absolute left-[35px]">)</span>
                </div>
                <h1 className="text-lg font-bold text-white">LLMonitor</h1>
            </div>

            {/* Navigation */}
            <nav className="mt-4">
                <ul>
                    <li className="mb-2">
                        <button
                            onClick={() => setActiveTab("Overview")}
                            className="w-full text-left px-3 py-1 text-sm rounded flex items-center bg-gray-900 text-white hover:text-blue-400"
                        >
                            📊 <span className="ml-2">Overview</span>
                        </button>
                   </li>
                    <li className="mb-2">
                        <button
                            onClick={() => setActiveTab("Previous Results")}
                            className="w-full text-left px-3 py-1 text-sm rounded flex items-center bg-gray-900 text-white hover:text-blue-400"
                        >
                            📜 <span className="ml-2">Previous Results</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
