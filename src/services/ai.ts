import { GoogleGenerativeAI } from "@google/genai";

let genAI: GoogleGenerativeAI | null = null;

export function isAIConfigured(): boolean {
  return Boolean(import.meta.env.VITE_GOOGLE_API_KEY);
}

export function getAI() {
  if (!isAIConfigured()) {
    throw new Error("AI not configured");
  }

  if (!genAI) {
    genAI = new GoogleGenerativeAI(
      import.meta.env.VITE_GOOGLE_API_KEY as string
    );
  }

  return genAI;
}
