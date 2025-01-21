import React from "react";
import { FaCalendarAlt, FaDownload } from "react-icons/fa";

const PreviousResults = ({ data }) => {
  const { previous_test_runs, test_results } = data;

  return (
    <div className="pt-6 px-6 flex flex-col space-y-6">
      {/* Dashboard Overview Section */}
      <div className="flex items-center justify-between w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-200">Dashboard Overview</h2>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Date Picker */}
          <div className="flex items-center bg-gray-700 h-8 text-gray-400 px-3 py-1 rounded-md space-x-2">
            <FaCalendarAlt className="text-gray-500" />
            <span className="text-sm">21/12/2024 - 21/01/2025</span>
          </div>

          {/* Filter Dropdown */}
          <select className="bg-gray-700 text-gray-400 px-3 py-1 h-8 text-sm rounded-md focus:outline-none">
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

      {/* Division Line */}
      <div className="border-t border-gray-700"></div>

      {/* Test Runs Section */}
      <div>
        <h2 className="text-2xl font-extrabold text-gray-200 uppercase tracking-wide mb-1">
          Previous Test Runs
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          Here's a list of all the test runs conducted previously.
        </p>

        {/* Table */}

        <div>
          <div className="overflow-x-auto rounded-lg shadow-lg bg-black">
            <table className="w-full text-left text-sm text-gray-300">
              {/* Table Header */}
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white uppercase text-xs tracking-wider">
                  <th scope="col" className="px-6 py-3">
                    Run ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Project Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Run Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Run Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Run By
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {previous_test_runs.map((run, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-transparent" : "bg-gray-800/50"
                    } hover:bg-gray-800/80 transition-all duration-200`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-200">
                      {run.uuid}
                    </td>
                    <td className="px-6 py-4">{run.project_name}</td>
                    <td className="px-6 py-4">{run.run_date}</td>
                    <td className="px-6 py-4">{run.run_time}</td>
                    <td className="px-6 py-4">{run.run_by}</td>
                    <td className="px-6 py-4">{run.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Division Line */}
      <div className="border-t border-gray-700 my-4"></div>
      {/* Test Results Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-300 uppercase tracking-wide mb-6 flex items-center space-x-3">
          <span className="tracking-wide text-gray-300">Test Results</span>
        </h2>
        <div className="space-y-8">
          {/* Main Questions */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 flex items-center space-x-2">
              <i className="ri-question-line"></i>
              <span>Main Questions</span>
            </h3>
            <ul className="list-disc pl-5 mt-2 text-gray-300">
              {test_results.main_questions.map((question, index) => (
                <li key={index} className="mb-1">
                  {question}
                </li>
              ))}
            </ul>
          </div>

          {/* Paraphrased Questions */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 flex items-center space-x-2">
              <i className="ri-file-text-line"></i>
              <span>Paraphrased Questions</span>
            </h3>
            <ul className="list-disc pl-5 mt-2 text-gray-300">
              {test_results.paraphrased_questions.map((questions, index) => (
                <li key={index} className="mb-1">
                  {questions.join(", ")}
                </li>
              ))}
            </ul>
          </div>

          {/* Test Cases */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 flex items-center space-x-2">
              <i className="ri-code-box-line"></i>
              <span>Test Cases</span>
            </h3>
            <div className="space-y-4 mt-2">
              {test_results.test_cases[0][0].map((testCase, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-800/50 rounded-lg shadow-inner"
                >
                  <h4 className="font-semibold text-gray-300 mb-2">
                    Case {testCase.case}
                  </h4>
                  <p className="text-gray-400">{testCase.response}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousResults;
