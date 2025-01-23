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

        const prompt = `Act as a neonatal specialist. Analyze these clinical parameters for a preterm infant:
        - Core Temperature: ${data.temperature}°C  
        - Current Weight: ${data.weight} lbs  
        - Postnatal Age: ${data.age} weeks  

        Provide a structured response:
        1. Clinical Assessment: Identify potential diagnoses based on these values  
        2. Care Protocol: Evidence-based medical rationale and urgent intervention steps  

        Format strictly as:
        1. [Diagnosis]  
        2. [Reasoning]  

        Include only factual medical analysis, no disclaimers.`;

        // Generate response
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // More robust parsing
        const parts = text.split(/\d+\.\s+/);  // Split by numbered list items
        const diagnosis = parts[1]?.replace(/\*\*/g, '') || "No diagnosis available";
        const reasoning = parts[2]?.replace(/\*\*/g, '') || "No recommendations available";

        return {
            diagnosis: diagnosis.trim(),
            reasoning: reasoning.trim()
        };
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        throw error;
    }
};
