import React from "react";

const StatsCard = ({
  title,
  value,
  details = [],
  isProgressBar = false,
  isCircular = false,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 w-full">
      {/* Heading on Top */}
      <h3 className="text-lg  text-white text-center">{title}</h3>

      {/* Display Percentage in White */}
      {!isCircular && isProgressBar && (
        <h2 className="text-3xl font-bold text-white">{value}</h2>
      )}

      {/* Circular Progress Bar */}
      {isCircular ? (
        <div className="relative">
          <svg className="w-20 h-20" viewBox="0 0 100 100">
            <circle
              className="text-gray-500"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            <circle
              className="text-green-500"
              strokeWidth="10"
              strokeDasharray="251"
              strokeDashoffset={(1 - value / 100) * 251}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
          </svg>
          {/* White Percentage Text Above the Circle */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl ">
            {value}%
          </div>
        </div>
      ) : isProgressBar ? (
        // Green Straight Progress Bar
        <div className="w-full">
          <div className="w-full bg-gray-600 h-4 rounded">
            <div
              className="bg-green-500 h-4 rounded"
              style={{ width: value }}
            ></div>
          </div>
        </div>
      ) : (
        <h2 className="text-3xl font-bold text-white">{value}</h2>
      )}

      {/* Bullet Points */}
      {details.length > 0 && (
        <div className="text-sm text-gray-400">
          <ul className="flex flex-wrap gap-4 justify-center">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 inline-block mr-2"></span>
              {details[0]}
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-red-500 inline-block mr-2"></span>
              {details[1]}
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 inline-block mr-2"></span>
              {details[2]}
            </li>
          </ul>
          <ul className="flex flex-wrap gap-4 justify-center mt-2">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 inline-block mr-2"></span>
              {details[3]}
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-purple-500 inline-block mr-2"></span>
              {details[4]}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
