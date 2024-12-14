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
                gap: "15px", // Space between form fields
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                maxWidth: "400px", // Constrain form width
                margin: "0 auto", // Center horizontally
            }}
        >
            <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                Temperature:
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    required
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        fontSize: "1rem",
                    }}
                />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                Weight:
                <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        fontSize: "1rem",
                    }}
                />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                Age:
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        fontSize: "1rem",
                    }}
                />
            </label>
            <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#3498db",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "1rem",
                }}
            >
                Add Data
            </button>
        </form>
    );
};

export default DataInputForm;
