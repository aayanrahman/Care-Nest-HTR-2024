import React, { useState } from "react";
import DataInputForm from "./DataInputForm";
import Charts from "./Charts";
import Recommendations from "./Recommendations";
import { getChatGPTResponse } from "../services/api"; // Import your API call function

interface Data {
    id: number;
    value: number;
    temperature: string;
    weight: string;
    age: string;
    advice: string;
}

const Dashboard: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);

    // Function to add new data from the form
    const addData = async (newData: Data) => {
        // Set a temporary "Fetching advice..." placeholder for advice
        const tempData: Data = { ...newData, advice: "Fetching advice..." };

        // Add the new entry to the state
        setData((prevData) => [...prevData, tempData]);

        try {
            // Fetch advice from OpenAI API
            const advice = await getChatGPTResponse({
                temperature: newData.temperature,
                weight: newData.weight,
                age: newData.age,
            });

            // Update the specific entry's advice once fetched
            setData((prevData) =>
                prevData.map((entry) =>
                    entry.id === newData.id ? { ...entry, advice } : entry
                )
            );
        } catch (error) {
            console.error("Error fetching advice:", error);
            // If the API call fails, show an error message in advice
            setData((prevData) =>
                prevData.map((entry) =>
                    entry.id === newData.id
                        ? { ...entry, advice: "Error fetching advice." }
                        : entry
                )
            );
        }
    };

    return (
        <div>
            <h1>Neonatal Monitoring Dashboard</h1>
            <DataInputForm addData={addData} />
            <Charts data={data} /> {/* Pass data to Charts */}
            <Recommendations data={data} /> {/* Pass data to Recommendations */}
        </div>
    );
};

export default Dashboard;
