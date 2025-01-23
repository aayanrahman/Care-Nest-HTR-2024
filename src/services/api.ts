import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY as string);

interface HealthData {
    temperature: string;
    weight: string;
    age: string;
}

export const getGeminiResponse = async (data: HealthData) => {
    try {
        // Initialize the model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Construct the prompt
        const prompt = `Given these vital signs for a neonate:
            Temperature: ${data.temperature}°C
            Weight: ${data.weight}lbs
            Age: ${data.age} weeks
            
            Please provide:
            1. A medical diagnosis based on these parameters
            2. Reasoning and recommendations for care`;

        // Generate response
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Parse the response - you might need to adjust this based on how you want to structure the response
        const [diagnosis, reasoning] = text.split('\n\n');

        return {
            diagnosis: diagnosis.replace('1. ', '').trim(),
            reasoning: reasoning.replace('2. ', '').trim()
        };
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        throw error;
    }
};
