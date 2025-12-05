import { GoogleGenAI } from "@google/genai";

// Fix: Per Gemini API guidelines, the API key must be read directly from environment variables without fallbacks.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getCareerGuidance(interest: string): Promise<string> {
  const systemInstruction = `You are 'Saksham', a friendly and encouraging career guidance chatbot for the 'SkillUp India' app. Your goal is to help users discover potential career paths based on their interests. 

Please suggest 3 suitable skills or courses for them. 
- Keep the tone positive and motivational.
- Format the response as a simple, easy-to-read, multi-line string.
- Start with a friendly greeting.
- For each suggestion, provide a brief, one-sentence explanation of why it's a good fit.
- Do not use markdown like lists or bolding.
Example response:
That's a great field to be interested in! Here are a few paths you could explore:

Web Development: This is perfect for building websites and apps, turning creative ideas into reality.
Data Analytics: You can uncover hidden patterns in data to help businesses make smart decisions.
Cybersecurity: This involves protecting digital information from threats, a crucial skill in today's world.`;
  
  try {
    // Fix: Per Gemini API guidelines, use systemInstruction for persona and instructions.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `A user has expressed interest in '${interest}'.`,
      config: {
        systemInstruction,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get career guidance from AI service.");
  }
}