import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAPI_API_KEY,
  modelName: "gpt-4o",
});
