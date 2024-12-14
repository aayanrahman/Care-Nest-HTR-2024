import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartsProps {
    data: { id: number; value: number; temperature: string }[];
}

const Charts: React.FC<ChartsProps> = ({ data }) => {
    const chartData = {
        labels: data.map((entry) => `Entry ${entry.id}`),
        datasets: [
            {
                label: "Temperature (°C)",
                data: data.map((entry) => entry.value), // Use numeric temperature values
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Temperature Trends",
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default Charts;
