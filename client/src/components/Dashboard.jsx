import React from "react";
import GaugeChart from "./GaugeChart";
import LineChart from "./LineChart";
import StatsCard from "./StatsCard";

const Dashboard = () => {
    // Example data for file accuracy comparison
    const fileAccuracyComparison = {
        files: [
            { name: "File 1", accuracy: 20 },
            { name: "File 2", accuracy: 85 },
            { name: "File 3", accuracy: 75 },
        ],
    };

    // Preparing data for the file accuracy chart
    const fileLabels = fileAccuracyComparison.files.map((file, index) => `File ${index + 1}`);
    const fileDatasets = [
        {
            label: "Accuracy",
            data: fileAccuracyComparison.files.map((file) => file.accuracy),
            borderColor: "#3b82f6",
        },
    ];

    // Example data for question-wise accuracy
    const questionWiseAccuracy = [
        { question_number: 1, file1: 80, file2: 90, file3: 30 },
        { question_number: 2, file1: 95, file2: 85, file3: 85 },
        { question_number: 3, file1: 70, file2: 75, file3: 65 },
        { question_number: 4, file1: 85, file2: 90, file3: 75 },
        { question_number: 5, file1: 90, file2: 80, file3: 85 },
    ];

    // Preparing data for the question-wise accuracy chart
    const questionLabels = questionWiseAccuracy.map((q) => `Q${q.question_number}`);
    const questionDatasets = [
        {
            label: "File 1",
            data: questionWiseAccuracy.map((q) => q.file1),
            borderColor: "#3b82f6",
        },
        {
            label: "File 2",
            data: questionWiseAccuracy.map((q) => q.file2),
            borderColor: "#ef4444",
        },
        {
            label: "File 3",
            data: questionWiseAccuracy.map((q) => q.file3),
            borderColor: "#22c55e",
        },
    ];

    return (
        <div className="pt-16 px-6 flex flex-col space-y-6">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-4">
                <StatsCard
                    title="Test Statistics"
                    details={[
                        "Total Tests: 60",
                        "Test Cases: 5",
                        "Paraphrased: 3",
                        "Iterations: 4",
                        "Passed: 42",
                        "Failed: 17",
                    ]}
                />
                <GaugeChart />
                <StatsCard title="Hallucination Rate" value="32.0%" textColor="text-red-500" />
                <StatsCard title="LLM Drift Rate" value="17.0%" textColor="text-green-500" />
                <StatsCard title="Custom Metric 1" value="91.0%" textColor="text-red-500" />
                <StatsCard title="Custom Metric 2" value="97.0%" textColor="text-red-500" />
            </div>

            {/* Bottom Graph Section */}
            <div className="grid grid-cols-2 gap-6">
                <LineChart
                    title="Accuracy Comparison Across Files"
                    labels={fileLabels}
                    datasets={fileDatasets}
                />
                <LineChart
                    title="Question-wise Accuracy Comparison"
                    labels={questionLabels}
                    datasets={questionDatasets}
                />
            </div>
        </div>
    );
};

export default Dashboard;
