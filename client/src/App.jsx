import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import OverviewDashboard from "./components/Dashboard";
import PreviousResultsDashboard from "./components/PreviousResults";

// JSON Data Provided to us for the Dashboard
const jsonData = {
  file_accuracy_comparison: {
    files: [
      { name: "cd0810cc", accuracy: 20 },
      { name: "cd0810cc", accuracy: 85 },
      { name: "cd0810cc", accuracy: 75 },
    ],
  },
  question_wise_accuracy: [
    { question_number: 1, cd0810cc: 80, cd0810cc: 90, cd0810cc: 30 },
    { question_number: 2, cd0810cc: 95, cd0810cc: 85, cd0810cc: 85 },
    { question_number: 3, cd0810cc: 70, cd0810cc: 75, cd0810cc: 65 },
    { question_number: 4, cd0810cc: 85, cd0810cc: 90, cd0810cc: 75 },
    { question_number: 5, cd0810cc: 90, cd0810cc: 80, cd0810cc: 85 },
  ],
  previous_test_runs: [
    {
      uuid: "cd0810cc-3ab8-4d0e-80c2-06f160f502f6",
      project_name: "medLLM",
      run_date: "2024-12-01",
      run_time: "00:00:00",
      run_by: "John Doe",
      run_duration: "0",
      description:
        "This dataset contains the test cases for evaluating the responses of a medical chatbot regarding the dosing of Eliquis for DVT/PE.",
    },
    {
      uuid: "cd0810cc-3ab8-4d0e-80c2-06f160f502f9",
      project_name: "medLLM",
      run_date: "2024-12-07",
      run_time: "09:17:37",
      run_by: "John Doe",
      run_duration: "0",
      description:
        "This dataset contains the test cases for evaluating the responses of a medical chatbot regarding the dosing of Eliquis for DVT/PE.",
    },
    {
      uuid: "cd0810cc-3ab8-4d0e-80c2-06f160f502f7",
      project_name: "medLLM",
      run_date: "2024-12-06",
      run_time: "21:27:17",
      run_by: "John Doe",
      run_duration: "0",
      description:
        "This dataset contains the test cases for evaluating the responses of a medical chatbot regarding the dosing of Eliquis for DVT/PE.",
    },
  ],
  test_results: {
    uuid: "cd0810cc-3ab8-4d0e-80c2-06f160f502f7",
    main_questions: ["What should be the dose of eliquis"],
    paraphrased_questions: [["What is the recommended dosage for Eliquis?"]],
    test_cases: [
      [
        [
          {
            case: 1,
            response:
              "The response provides general information about Eliquis dosage but does not specify the standard dosage for adults. It mentions that the dosage is determined by a doctor and varies based on the condition being treated, but it does not provide specific standard dosages for adults.",
          },
          {
            case: 2,
            response:
              "The response does not specify the standard dosage of Eliquis for children. It only mentions the typical dosages and uses for adults, and it does not address pediatric dosing specifically.",
          },
        ],
      ],
    ],
  },
};

const App = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="relative flex h-screen w-screen bg-zinc-950 text-white">
      {/* Grid Background for Dashboard */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                    `,
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Main App Content */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1 relative z-10">
        <Navbar />
        <main className="p-6 overflow-auto h-full">
          {activeTab === "Overview" && <OverviewDashboard />}
          {activeTab === "Previous Results" && (
            <PreviousResultsDashboard data={jsonData} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
