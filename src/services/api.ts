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
                    { role: "system", content: "You are a neonatal care assistant." },
                    {
                        role: "user",
                        content: `Provide advice for a baby with temperature ${data.temperature}, weight ${data.weight}, and age ${data.age}.`,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer YOUR_OPENAI_API_KEY`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
        return "Error retrieving advice.";
    }
};