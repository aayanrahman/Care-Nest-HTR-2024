import React from "react";
import { Line } from "react-chartjs-2";

interface ChartsProps {
    data: {
        temperature: string;
        weight: string;
        age: string;
        advice: string;
    }[];
}

const Charts: React.FC<ChartsProps> = ({ data }) => {
    const chartData = {
        labels: data.map((_, index) => `Entry ${index + 1}`),
        datasets: [
            {
                label: "Temperature",
                data: data.map((d) => parseFloat(d.temperature)),
                borderColor: "blue",
                fill: false,
            },
            {
                label: "Weight",
                data: data.map((d) => parseFloat(d.weight)),
                borderColor: "green",
                fill: false,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default Charts;