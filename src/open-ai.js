import OpenAI from "openai";
import { systemPrompt } from "./system-prompt.js";

const openai = process.env.OPENAI_API_KEY?.length ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
  project: process.env.OPENAI_PROJECT_AI_COMMIT, //  ai-commit
}) : undefined;

/**
 * @param {string} diff
 */
export async function generateComments(
    diff,
    model = "gpt-3.5-turbo-1106") {
  if (!openai) {
    return "";
  }
  const allMessages = [
    {
      "role": "system",
      "content": systemPrompt,
    },
    {
      "role": "user",
      "content": diff,
    }
  ];
  
  const response = await openai.chat.completions.create({
    model,
    messages: allMessages,
  }, {
  }); 
  const comment = response.choices[0].message.content;

  return comment; 
}
