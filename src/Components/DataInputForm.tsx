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
                gap: "25px", // Adjusted gap between elements for better spacing
                height: "100vh", // Full viewport height
                width: "100vw", // Full viewport width
                backgroundColor: "#f9f9f9",
                padding: "30px", // Extra padding for better spacing on small screens
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px", // Increased gap between fields
                    width: "100%",
                    maxWidth: "400px",
                }}
            >
                <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "1rem", fontWeight: "500" }}>Temperature (°C):</span>
                    <input
                        type="text"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                        required
                        style={{
                            padding: "12px",
                            borderRadius: "6px",
                            border: "1px solid #ddd",
                            fontSize: "1rem",
                        }}
                    />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "1rem", fontWeight: "500" }}>Weight: (lbs)</span>
                    <input
                        type="text"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                        style={{
                            padding: "12px",
                            borderRadius: "6px",
                            border: "1px solid #ddd",
                            fontSize: "1rem",
                        }}
                    />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "1rem", fontWeight: "500" }}>Age: (weeks)</span>
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        style={{
                            padding: "12px",
                            borderRadius: "6px",
                            border: "1px solid #ddd",
                            fontSize: "1rem",
                        }}
                    />
                </label>
                <button
                    type="submit"
                    style={{
                        padding: "15px 20px",
                        backgroundColor: "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        width: "100%", // Button takes full width of form
                        fontWeight: "600",
                    }}
                >
                    Add Data
                </button>
            </div>
        </form>
    );
};

export default DataInputForm;
