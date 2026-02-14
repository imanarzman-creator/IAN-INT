import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// System instruction for the career coach persona
const SYSTEM_INSTRUCTION = `
You are IAN (Intelligent Advisor Network), a world-class senior career coach and executive strategist. 
Your tone is professional, sophisticated, encouraging, yet direct and data-driven.
You specialize in resume optimization, interview preparation, salary negotiation, and executive presence.
Keep your answers concise (under 150 words usually) unless asked for a deep dive.
Always prioritize actionable advice over generic platitudes.
`;

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getApiKey = (): string | undefined => {
  try {
    // @ts-ignore
    if (typeof process !== 'undefined' && process.env) {
      // @ts-ignore
      return process.env.API_KEY;
    }
  } catch (e) {
    // ignore errors in environments where process is not defined
  }
  return undefined;
};

const getClient = () => {
  if (!genAI) {
    const apiKey = getApiKey();
    if (!apiKey) {
      console.warn("API_KEY is missing. AI features will respond with a placeholder.");
      return null;
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
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
    const client = getClient();
    if (!client) {
      return "Unable to connect to IAN Intelligence Network. Please ensure the API Configuration is set in your deployment environment.";
    }

    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, but I couldn't formulate a response at this moment.";
  } catch (error) {
    console.error("Error communicating with IAN:", error);
    // Reset session on error to prevent stuck states
    chatSession = null;
    return "I am currently experiencing high traffic or a network interruption. Please try again in a moment.";
  }
};

export const resetChat = () => {
  chatSession = null;
};