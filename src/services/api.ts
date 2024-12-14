import axios from "axios";

interface FormData {
    temperature: string;
    weight: string;
    age: string;
}

export const getChatGPTResponse = async (data: FormData): Promise<string> => {
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a neonatal health diagnostic assistant." },
                    {
                        role: "user",
                        content: `Diagnose the potential condition of a baby with a temperature of ${data.temperature}°C, a weight of ${data.weight} kg, and an age of ${data.age} months. Provide a diagnosis based on these parameters and explain your reasoning.`,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error fetching diagnosis:", error);
        return "Error retrieving diagnosis.";
    }
};
