import React from "react";

const StatsCard = ({ title, value, textColor, details }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold">{title}</h2>
            {value && <p className={`text-xl font-semibold ${textColor}`}>{value}</p>}
            {details && details.map((item, index) => (
                <p key={index} className="text-sm text-gray-400">{item}</p>
            ))}
        </div>
    );
};

export default StatsCard;