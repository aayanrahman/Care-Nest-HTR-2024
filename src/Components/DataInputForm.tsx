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
        <form onSubmit={handleSubmit}>
            <label>
                Temperature:
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    required
                />
            </label>
            <label>
                Weight:
                <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />
            </label>
            <label>
                Age:
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Data</button>
        </form>
    );
};

export default DataInputForm;
