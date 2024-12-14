import React from "react";

interface RecommendationProps {
    data: {
        temperature: string;
        weight: string;
        age: string;
        advice: string;
    }[];
}

const Recommendations: React.FC<RecommendationProps> = ({ data }) => {
    return (
        <div>
            <h2>Advice and Recommendations</h2>
            {data.map((entry, index) => (
                <div key={index}>
                    <h3>Entry {index + 1}</h3>
                    <p>Temperature: {entry.temperature}</p>
                    <p>Weight: {entry.weight}</p>
                    <p>Age: {entry.age}</p>
                    <p>Advice: {entry.advice}</p>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;