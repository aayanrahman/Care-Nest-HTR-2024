import React from "react";

interface RecommendationProps {
    data: {
        id: number;
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
            {data.map((entry) => (
                <div key={entry.id} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ddd" }}>
                    <h3>Entry {entry.id}</h3>
                    <p><strong>Temperature:</strong> {entry.temperature}</p>
                    <p><strong>Weight:</strong> {entry.weight}</p>
                    <p><strong>Age:</strong> {entry.age}</p>
                    <p>
                        <strong>Advice:</strong>{" "}
                        {entry.advice === "Fetching advice..." ? (
                            <em style={{ color: "orange" }}>{entry.advice}</em>
                        ) : entry.advice === "Error fetching advice." ? (
                            <em style={{ color: "red" }}>{entry.advice}</em>
                        ) : (
                            entry.advice
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;
