import axios from "axios";

interface FormData {
    temperature: string;
    weight: string;
    age: string;
}

interface ChatGPTResponse {
    diagnosis: string;
    reasoning: string;
}

interface OpenAIResponse {
    choices: {
        message: {
            content: string;
        };
    }[];
}

export const getChatGPTResponse = async (data: FormData): Promise<ChatGPTResponse> => {
    try {
        const response = await axios.post<OpenAIResponse>(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are a neonatal health diagnostic assistant. Your task is to help doctors quickly understand the condition of a baby.",
                    },
                    {
                        role: "user",
                        content: `A baby has the following parameters:
                        - Temperature: ${data.temperature}°C
                        - Weight: ${data.weight} lb
                        - Age: ${data.age} weeks.

                        Provide:
                        1. A concise diagnosis (3-5 words) to summarize the condition.
                         Clear, actionable recommendations (1-2 sentences) that are easy to follow.`,
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

        const fullResponse = response.data.choices?.[0]?.message?.content?.trim();
        if (!fullResponse) {
            throw new Error("Invalid response from OpenAI API.");
        }

        // Split response into diagnosis and recommendations
        const [diagnosis, recommendations] = fullResponse.split("Recommendations:");

        return {
            diagnosis: diagnosis?.replace("Diagnosis:", "").trim() || "No diagnosis available.",
            reasoning: recommendations?.trim() || "No recommendations available.",
        };
    } catch (error: any) {
        console.error("Error fetching response from OpenAI API:", error.response || error);
        return {
            diagnosis: "Error fetching diagnosis.",
            reasoning: "Error fetching recommendations.",
        };
    }
};
