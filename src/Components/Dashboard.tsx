import React, { useState } from "react";
import DataInputForm from "./DataInputForm";
import Charts from "./Charts";
import Recommendations from "./Recommendations";
import Navbar from "./Navbar"; // Import the Navbar component
import { getChatGPTResponse } from "../services/api"; // Import your API call function

interface Data {
    id: number;
    value: number;
    temperature: string;
    weight: string;
    age: string;
    advice: string;
    recommendations?: string; // Add optional recommendations field
}

const Dashboard: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);

    const addData = async (newData: Data) => {
        const tempData: Data = {
            ...newData,
            advice: "Fetching diagnosis...",
            recommendations: "Fetching recommendations...", // Temporary placeholder
        };
    
        setData((prevData) => [...prevData, tempData]);
    
        try {
            const result = await getChatGPTResponse({
                temperature: newData.temperature,
                weight: newData.weight,
                age: newData.age,
            });
    
            setData((prevData) =>
                prevData.map((entry) =>
                    entry.id === newData.id
                        ? {
                              ...entry,
                              advice: result.diagnosis || "No diagnosis available.",
                              recommendations: result.reasoning || "No recommendations available.",
                          }
                        : entry
                )
            );
        } catch (error) {
            console.error("Error fetching data from API:", error);
            setData((prevData) =>
                prevData.map((entry) =>
                    entry.id === newData.id
                        ? {
                              ...entry,
                              advice: "Error fetching diagnosis.",
                              recommendations: "Error fetching recommendations.",
                          }
                        : entry
                )
            );
        }
    };
    

    return (
        <div
            style={{
                fontFamily: "'Roboto', sans-serif",
                height: "100vh", // Full viewport height
                overflow: "hidden", // Prevent horizontal overflow
                margin: 0,
            }}
        >
            {/* Include the Navbar at the top */}
            <Navbar />

            {/* Scrollable Content */}
            <div
                style={{
                    marginTop: "100px", // Offset for fixed navbar height
                    height: "calc(100vh - 100px)", // Full height minus navbar height
                    overflowY: "auto", // Enable vertical scrolling
                    backgroundColor: "#f9f9f9",
                    padding: "20px",
                    boxSizing: "border-box", // Include padding in height calculations
                }}
            >
                {/* Dashboard Header */}
                <div
                    style={{
                        background: "#3498db",
                        color: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        marginBottom: "20px",
                        textAlign: "center",
                    }}
                >
                    <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
                        Neonatal Monitoring Dashboard
                    </h1>
                    <p>Track vital parameters and receive actionable insights</p>
                </div>

                {/* Form Section */}
                <section
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        marginBottom: "20px",
                    }}
                >
                    <DataInputForm addData={addData} />
                </section>

                {/* Charts Section */}
                <section
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        marginBottom: "20px",
                    }}
                >
                    <h3 style={{ color: "#2c3e50", marginBottom: "10px" }}>Temperature Trends</h3>
                    <Charts data={data} />
                </section>

                {/* Recommendations Section */}
                <section
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        marginBottom: "20px",
                    }}
                >
                    <Recommendations data={data} />
                </section>

                {/* Footer */}
                <footer
                    style={{
                        marginTop: "20px",
                        textAlign: "center",
                        color: "#7f8c8d",
                        fontSize: "0.9rem",
                    }}
                >
                    © 2024 CareNest. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default Dashboard;
