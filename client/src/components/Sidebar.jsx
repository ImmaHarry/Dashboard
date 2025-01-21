import React, { useState } from "react";
import { BsGraphUp } from "react-icons/bs";
import { MdMonitorHeart } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { LuGauge } from "react-icons/lu";
        import { MdHistory } from "react-icons/md"; // Import the new icon

        const Sidebar = ({ activeTab,setActiveTab }) => {
          const [collapsed, setCollapsed] = useState(false);
        
          return (
            <div
              className={`flex flex-col bg-zinc-900 border-r border-zinc-800 text-white h-screen ${
                collapsed ? "w-24" : "w-64"
              } transition-all duration-300`}
            >
              {/* Logo and Collapse Toggle */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        {/* Placeholder for Logo SVG */}
        <div className="flex items-center">
          <svg
            width="37"
            height="28"
            viewBox="0 0 37 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5814 0.451684C31.2892 0.179367 30.9027 0.0311146 30.5033 0.0381614C30.1039 0.0452083 29.7228 0.207004 29.4403 0.489461C29.1579 0.771919 28.9961 1.15298 28.989 1.55238C28.982 1.95177 29.1303 2.33831 29.4026 2.63055C30.8343 4.06213 31.9699 5.76168 32.7448 7.63218C33.5196 9.50268 33.9184 11.5075 33.9184 13.5321C33.9184 15.5567 33.5196 17.5615 32.7448 19.432C31.9699 21.3025 30.8343 23.0021 29.4026 24.4336C29.1216 24.7243 28.966 25.1136 28.9694 25.5178C28.9727 25.9221 29.1346 26.3088 29.4203 26.5948C29.706 26.8808 30.0926 27.0431 30.4968 27.0468C30.9011 27.0505 31.2906 26.8953 31.5814 26.6146C33.2993 24.8967 34.662 22.8573 35.5918 20.6128C36.5215 18.3682 37 15.9626 37 13.5331C37 11.1037 36.5215 8.69801 35.5918 6.45349C34.662 4.20897 33.2993 2.16956 31.5814 0.451684ZM7.59948 2.63261C7.88869 2.3434 8.05117 1.95115 8.05117 1.54215C8.05117 1.13314 7.88869 0.740893 7.59948 0.451684C7.31027 0.162475 6.91802 3.04731e-09 6.50902 0C6.10002 -3.04731e-09 5.70777 0.162475 5.41856 0.451684C3.70066 2.16956 2.33796 4.20897 1.40824 6.45349C0.47852 8.69801 0 11.1037 0 13.5331C0 15.9626 0.47852 18.3682 1.40824 20.6128C2.33796 22.8573 3.70066 24.8967 5.41856 26.6146C5.55969 26.766 5.72989 26.8875 5.919 26.9718C6.10811 27.056 6.31225 27.1014 6.51925 27.105C6.72625 27.1087 6.93186 27.0706 7.12383 26.993C7.31579 26.9155 7.49017 26.8001 7.63656 26.6537C7.78295 26.5073 7.89836 26.3329 7.9759 26.141C8.05344 25.949 8.09151 25.7434 8.08786 25.5364C8.08421 25.3294 8.0389 25.1253 7.95464 24.9361C7.87038 24.747 7.74889 24.5768 7.59743 24.4357C6.16575 23.0041 5.03007 21.3046 4.25524 19.4341C3.48042 17.5636 3.08162 15.5588 3.08162 13.5342C3.08162 11.5095 3.48042 9.50473 4.25524 7.63424C5.03007 5.76374 6.1678 4.06418 7.59948 2.63261Z"
              fill="url(#paint0_radial_1_17)"
            />
            <path
              d="M23.5875 6.26474C23.8765 5.97604 24.2684 5.81388 24.6769 5.81388C25.0854 5.81388 25.4773 5.97604 25.7663 6.26474C26.721 7.21915 27.4783 8.35227 27.9949 9.5994C28.5116 10.8465 28.7776 12.1832 28.7776 13.5331C28.7776 14.883 28.5116 16.2197 27.9949 17.4669C27.4783 18.714 26.721 19.8471 25.7663 20.8015C25.4754 21.0822 25.0859 21.2374 24.6817 21.2337C24.2775 21.23 23.8909 21.0677 23.6052 20.7817C23.3195 20.4957 23.1576 20.109 23.1542 19.7048C23.1509 19.3006 23.3065 18.9112 23.5875 18.6206C24.2556 17.9525 24.7856 17.1594 25.1472 16.2865C25.5088 15.4136 25.6949 14.478 25.6949 13.5331C25.6949 12.5883 25.5088 11.6527 25.1472 10.7798C24.7856 9.90687 24.2556 9.11374 23.5875 8.44567C23.2988 8.15661 23.1366 7.76477 23.1366 7.35623C23.1366 6.94769 23.2988 6.5538 23.5875 6.26474ZM13.4125 6.26474C13.5558 6.40791 13.6695 6.57791 13.747 6.76501C13.8245 6.95212 13.8644 7.15267 13.8644 7.35521C13.8644 7.55774 13.8245 7.75829 13.747 7.9454C13.6695 8.1325 13.5558 8.3025 13.4125 8.44567C12.7444 9.11374 12.2144 9.90687 11.8528 10.7798C11.4912 11.6527 11.3051 12.5883 11.3051 13.5331C11.3051 14.478 11.4912 15.4136 11.8528 16.2865C12.2144 17.1594 12.7444 17.9525 13.4125 18.6206C13.6849 18.9128 13.8331 19.2994 13.8261 19.6988C13.819 20.0981 13.6572 20.4792 13.3748 20.7617C13.0923 21.0441 12.7112 21.2059 12.3119 21.213C11.9125 21.22 11.5259 21.0718 11.2337 20.7994C9.30691 18.8721 8.22451 16.2584 8.22451 13.5331C8.22451 10.8078 9.30691 8.19415 11.2337 6.2668C11.5227 5.9781 11.9146 5.81594 12.3231 5.81594C12.7317 5.81594 13.1235 5.97604 13.4125 6.26474ZM20.5555 13.5331C20.5555 14.0783 20.339 14.6011 19.9535 14.9866C19.568 15.3721 19.0452 15.5887 18.5 15.5887C17.9548 15.5887 17.432 15.3721 17.0465 14.9866C16.661 14.6011 16.4445 14.0783 16.4445 13.5331C16.4445 12.988 16.661 12.4651 17.0465 12.0796C17.432 11.6942 17.9548 11.4776 18.5 11.4776C19.0452 11.4776 19.568 11.6942 19.9535 12.0796C20.339 12.4651 20.5555 12.988 20.5555 13.5331Z"
              fill="url(#paint1_radial_1_17)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1_17"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(18.5 13.5526) rotate(90) scale(37.4474 51.1175)"
              >
                <stop stop-color="#1E88E5" />
                <stop offset="1" stop-color="#062F54" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_1_17"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(18.501 13.5238) rotate(90) scale(21.3034 28.3952)"
              >
                <stop stop-color="#1E88E5" />
                <stop offset="1" stop-color="#062F54" />
              </radialGradient>
            </defs>
          </svg>

          {!collapsed && (
            <span className="ml-3 text-lg font-semibold">LLMonitor</span>
          )}
        </div>
        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-none w-8 h-8 flex items-center justify-center rounded-md ml-4"
        >
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M14.3333 1H2.66667C1.74619 1 1 1.74619 1 2.66667V14.3333C1 15.2538 1.74619 16 2.66667 16H14.3333C15.2538 16 16 15.2538 16 14.3333V2.66667C16 1.74619 15.2538 1 14.3333 1Z"
              stroke="#5A5A5A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 1V16"
              stroke="#5A5A5A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}

      <nav className="flex-1 mt-6">
        {!collapsed && (
          <span className="text-gray-400 ml-4 text-xs text-left capitalize block font-medium">
            MAIN FEATURES
          </span>
        )}
        <ul className="p-2">
          <li
            className={`px-4 py-3 rounded-md cursor-pointer ${
              activeTab === "Overview" ? "bg-[#1E88E5] bg-opacity-25 text-[#1E88E5]" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("Overview")}
          >
            {collapsed ? (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-opacity-25">
                <BsGraphUp className="text-[#1E88E5]" />
              </div>
            ) : (
              <span className="flex items-center gap-x-2 text-xl">
                <BsGraphUp className="text-xl" />
                Overview
              </span>
            )}
          </li>

          <li
            className={`px-4 py-3 rounded-md cursor-pointer ${
              activeTab === "Previous Results" ? "bg-[#1E88E5] bg-opacity-25 text-[#1E88E5]" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("Previous Results")}
          >
            {collapsed ? (
              <div className="w-8 h-8 flex items-center justify-center rounded-full">
                <MdHistory />
              </div>
            ) : (
              <span className="flex items-center gap-x-2 text-xl">
                <MdHistory /> Previous Results
              </span>
            )}
          </li>

          <li
            className={`px-4 py-3 rounded-md cursor-pointer ${
              activeTab === "Monitoring" ? "bg-[#1E88E5] bg-opacity-25 text-[#1E88E5]" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("Monitoring")}
          >
            {collapsed ? (
              <div className="w-8 h-8 flex items-center justify-center rounded-full">
                <MdMonitorHeart />
              </div>
            ) : (
              <span className="flex items-center gap-x-2 text-xl">
                <MdMonitorHeart /> Monitoring
              </span>
            )}
          </li>

          <li
            className={`px-4 py-3 rounded-md cursor-pointer ${
              activeTab === "Metrics" ? "bg-[#1E88E5] bg-opacity-25 text-[#1E88E5]" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("Metrics")}
          >
            {collapsed ? (
              <div className="w-8 h-8 flex items-center justify-center rounded-full">
                <LuGauge />
              </div>
            ) : (
              <span className="flex items-center gap-x-2 text-xl">
                <LuGauge /> Metrics
              </span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;