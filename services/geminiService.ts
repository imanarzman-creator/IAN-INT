import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Declare process for TypeScript compatibility in browser environments
declare const process: any;

const SYSTEM_INSTRUCTION = `
You are IAN (Intelligent Advisor Network), a world-class senior career coach and executive strategist. 
Your tone is professional, sophisticated, encouraging, yet direct and data-driven.
You specialize in resume optimization, interview preparation, salary negotiation, and executive presence.
Keep your answers concise (under 150 words usually) unless asked for a deep dive.
Always prioritize actionable advice over generic platitudes.
`;

let chatSession: Chat | null = null;

export const checkApiKey = async (): Promise<boolean> => {
  try {
    // Check for process.env.API_KEY safely
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) return true;
  } catch (e) {
    // Ignore ReferenceError if process is not defined
  }
  
  // Otherwise, check if the user has selected a key in the AI Studio environment.
  if (typeof window !== 'undefined' && (window as any).aistudio) {
    return await (window as any).aistudio.hasSelectedApiKey();
  }
  return false;
};

export const requestApiKey = async (): Promise<void> => {
  if (typeof window !== 'undefined' && (window as any).aistudio) {
    await (window as any).aistudio.openSelectKey();
    // Reset session to force re-initialization with the new key
    chatSession = null;
  }
};

const getClient = () => {
  let apiKey = '';
  try {
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      apiKey = process.env.API_KEY;
    }
  } catch (e) {
    console.warn("Error accessing process.env");
  }

  if (!apiKey) {
    console.warn("API_KEY is missing.");
    return null;
  }
  // Always create a new instance to ensure we use the latest key
  return new GoogleGenAI({ apiKey });
};

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const client = getClient();
    if (!client) {
      throw new Error("API Key not configured");
    }
    
    chatSession = client.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToIan = async (message: string): Promise<string> => {
  try {
    // Ensure we have a valid client/session before sending
    // This allows lazy initialization if the key was just set
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, but I couldn't formulate a response at this moment.";
  } catch (error) {
    console.error("Error communicating with IAN:", error);
    chatSession = null;
    return "I am unable to process your request at the moment. Please ensure your API connection is active.";
  }
};

export const resetChat = () => {
  chatSession = null;
};