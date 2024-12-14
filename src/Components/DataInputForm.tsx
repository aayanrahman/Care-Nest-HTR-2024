import React, { useState } from "react";

interface Data {
    id: number;
    value: number;
    temperature: string;
    weight: string;
    age: string;
    advice: string;
}

interface DataInputFormProps {
    addData: (newData: Data) => void;
}

const DataInputForm: React.FC<DataInputFormProps> = ({ addData }) => {
    const [temperature, setTemperature] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [age, setAge] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newData: Data = {
            id: Date.now(),
            value: parseFloat(temperature), // Assuming a numeric value for the chart
            temperature,
            weight,
            age,
            advice: "Fetching advice...", // Placeholder for the advice
        };
        addData(newData);

        // Clear inputs
        setTemperature("");
        setWeight("");
        setAge("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px", // Reduced gap between elements
                height: "100vh", // Full viewport height
                width: "100vw", // Full viewport width
                backgroundColor: "#f9f9f9",
                padding: "10px", // Reduced padding
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px", // Smaller gap between fields
                    width: "100%",
                    maxWidth: "300px", // Reduced max width for a compact form
                }}
            >
                <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>Temperature:</span>
                    <input
                        type="text"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                        required
                        style={{
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ddd",
                            fontSize: "0.9rem",
                        }}
                    />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>Weight:</span>
                    <input
                        type="text"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                        style={{
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ddd",
                            fontSize: "0.9rem",
                        }}
                    />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>Age:</span>
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        style={{
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ddd",
                            fontSize: "0.9rem",
                        }}
                    />
                </label>
                <button
                    type="submit"
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        width: "100%", // Button takes full width of form
                        fontWeight: "500",
                    }}
                >
                    Add Data
                </button>
            </div>
        </form>
    );
};

export default DataInputForm;
