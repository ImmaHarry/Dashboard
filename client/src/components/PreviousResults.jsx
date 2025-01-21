import React from "react";

const PreviousResults = ({ data }) => {
  const { previous_test_runs, test_results } = data;

  return (
    <div className="pt-16 px-6 flex flex-col space-y-6">
      {/* Test Runs Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Previous Test Runs</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-black">
            <tr>
              <th className="border border-gray-300 p-2 text-left">Run ID</th>
              <th className="border border-gray-300 p-2 text-left">
                Project Name
              </th>
              <th className="border border-gray-300 p-2 text-left">Run Date</th>
              <th className="border border-gray-300 p-2 text-left">Run Time</th>
              <th className="border border-gray-300 p-2 text-left">Run By</th>
              <th className="border border-gray-300 p-2 text-left">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {previous_test_runs.map((run, index) => (
              <tr key={index} className="bg-black">
                <td className="border border-gray-300 p-2">{run.uuid}</td>
                <td className="border border-gray-300 p-2">
                  {run.project_name}
                </td>
                <td className="border border-gray-300 p-2">{run.run_date}</td>
                <td className="border border-gray-300 p-2">{run.run_time}</td>
                <td className="border border-gray-300 p-2">{run.run_by}</td>
                <td className="border border-gray-300 p-2">
                  {run.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Test Results Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Test Results</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Main Questions</h3>
            <ul className="list-disc pl-5">
              {test_results.main_questions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Paraphrased Questions</h3>
            <ul className="list-disc pl-5">
              {test_results.paraphrased_questions.map((questions, index) => (
                <li key={index}>{questions.join(", ")}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Test Cases</h3>
            {test_results.test_cases[0][0].map((testCase, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold">Case {testCase.case}</h4>
                <p>{testCase.response}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousResults;
