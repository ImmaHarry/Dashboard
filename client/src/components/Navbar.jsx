import React from "react";

const Navbar = () => {
    return (
        <div className="bg-black flex justify-between items-center px-6 py-4 border-b border-white/20">
            <input
                type="text"
                placeholder="Search here..."
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded w-56 text-sm"
            />
            <div className="flex items-center space-x-3">
                <button className="text-gray-400 text-lg">🔔</button>
                <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-gray-700 rounded-full"></div>
                    <div>
                        <p className="text-xs">John Doe</p>
                        <p className="text-[10px] text-gray-400">john.doe@llmonitor.org</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
