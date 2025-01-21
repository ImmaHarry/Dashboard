import React from "react";

const CircularProgress = ({ percentage }) => {
  const strokeWidth = 8;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      className="w-24 h-24"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle
        className="text-gray-500"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      {/* Progress Circle */}
      <circle
        className="text-green-500"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      {/* Percentage Text */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dy=".3em"
        className="text-white text-lg font-bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgress;
