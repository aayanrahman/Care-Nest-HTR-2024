import React, { useState, ChangeEvent, FormEvent } from "react";
import { getChatGPTResponse } from "../services/api";
import { Data } from "../types";

interface DataInputFormProps {
    addData: (data: Data) => void;
}

interface FormData {
    temperature: string;
    weight: string;
    age: string;
}

const DataInputForm: React.FC<DataInputFormProps> = ({ addData }) => {
    const [formData, setFormData] = useState<FormData>({
        temperature: "",
        weight: "",
        age: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await getChatGPTResponse(formData);
        const newData: Data = {
            id: Date.now(),
            value: 0, // Set a default value or calculate it based on your requirements
            ...formData,
            advice: response,
        };
        addData(newData);
        setFormData({ temperature: "", weight: "", age: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Temperature:
                <input
                    type="number"
                    name="temperature"
                    value={formData.temperature}
                    onChange={handleChange}
                />
            </label>
            <label>
                Weight:
                <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default DataInputForm;