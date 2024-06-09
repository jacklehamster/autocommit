import OpenAI from "openai";

const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: 'org-uktBsveUaXeMNXTgnjk5JlBA',
  project: 'proj_uu8vcMnZuKCi5ppPZwej7YCD', //  ai-commit
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
      "content": `Generate git comments based on the git diff provided. The first line should be a general summary, then list each changes identified line by line.`,
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
