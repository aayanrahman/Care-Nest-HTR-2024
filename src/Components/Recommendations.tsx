import React from "react";

interface RecommendationProps {
    data: {
        id: number;
        temperature: string;
        weight: string;
        age: string;
        advice: string;
        recommendations?: string; // Optional field
    }[];
}

const Recommendations: React.FC<RecommendationProps> = ({ data }) => {
    return (
        <div>
            <h2>Advice and Recommendations</h2>
            {data.map((entry) => (
                <div
                    key={entry.id}
                    style={{
                        background: "white",
                        padding: "15px",
                        borderRadius: "8px",
                        marginBottom: "15px",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h3 style={{ color: "#3498db" }}>Entry {entry.id}</h3>
                    <p>
                        <strong>Temperature:</strong> {entry.temperature}°C
                    </p>
                    <p>
                        <strong>Weight:</strong> {entry.weight} lb
                    </p>
                    <p>
                        <strong>Age:</strong> {entry.age} weeks
                    </p>
                    <p style={{ color: "green", fontWeight: "bold" }}>Diagnosis:</p>
                    <p>{entry.advice}</p>
                    <p style={{ color: "orange", fontWeight: "bold" }}>Recommendations:</p>
                    <p>{entry.recommendations}</p> {/* Render recommendations */}
                </div>
            ))}
        </div>
    );
};

export default Recommendations;
