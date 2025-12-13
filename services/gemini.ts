import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let chatSession: Chat | null = null;

// Initialize the model
const getAiModel = () => {
  // NOTE: In a real production app, ensure process.env.API_KEY is defined.
  // The instructions explicitly state to use process.env.API_KEY.
  const apiKey = process.env.API_KEY; 
  
  if (!apiKey) {
    console.warn("API Key not found in environment variables.");
    // We return null here to handle the UI gracefully if no key is present
    return null;
  }

  const ai = new GoogleGenAI({ apiKey });
  return ai;
};

export const initializeChat = async (): Promise<boolean> => {
  const ai = getAiModel();
  if (!ai) return false;

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are a professional AI assistant for Vishnu Prasad J. 
        Your goal is to answer questions about his professional background, skills, and projects based strictly on the provided context.
        
        Context:
        ${RESUME_CONTEXT}
        
        Tone: Professional, polite, and concise. 
        If the answer is not in the context, strictly say "I don't have that information in Vishnu's portfolio context."
        Do not make up facts.
        `,
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return false;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    // Attempt to re-initialize if session was lost or never started
    const success = await initializeChat();
    if (!success) {
      return "I'm sorry, the AI service is currently unavailable. Please contact Vishnu directly via email.";
    }
  }

  try {
    if (chatSession) {
      const result: GenerateContentResponse = await chatSession.sendMessage({ message });
      return result.text || "I didn't quite get that. Could you rephrase?";
    }
    return "Connection error.";
  } catch (error) {
    console.error("Error sending message:", error);
    return "I encountered an error processing your request. Please try again later.";
  }
};
