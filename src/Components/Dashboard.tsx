import React, { useState } from "react";
import DataInputForm from "./DataInputForm.tsx";
import Charts from "./Charts.tsx";
import Recommendations from "./Recommendations.tsx";

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

    const addData = (newData: Data) => {
        setData((prevData) => [...prevData, newData]);
    };

    return (
        <div>
            <h1>Neonatal Monitoring Dashboard</h1>
            <DataInputForm addData={addData} />
            <Charts data={data} />
            <Recommendations data={data} />
        </div>
    );
};

export default Dashboard;