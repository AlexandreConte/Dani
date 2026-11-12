
import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenAI } from "@google/genai";

import { assistantConfig } from "@/config/assistant";
import { buildAssistantInstruction } from "@/lib/ai/buildAssistantInstruction";

type ChatRole = "user" | "assistant";

interface ChatMessage {
  role: ChatRole;
  content: string;
}

type ApiResponse =
  | { reply: string }
  | { error: string };

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY não configurada.");
  }

  return new GoogleGenAI({ apiKey });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (!isRecord(value)) return false;

  return (
    (value.role === "user" || value.role === "assistant") &&
    typeof value.content === "string"
  );
}

function buildConversation(
  history: ChatMessage[],
  currentMessage: string
) {
  const previousMessages = history.map((message) => {
    const speaker =
      message.role === "user" ? "Visitante" : "Assistente";

    return `${speaker}: ${message.content}`;
  });

  return [
    "HISTÓRICO DA CONVERSA:",
    ...previousMessages,
    `Visitante: ${currentMessage}`,
    "Assistente:",
  ].join("\n\n");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Aceitamos somente requisições POST.
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      error: "Método não permitido.",
    });
  }

  try {
    const body: unknown = req.body;

    if (!isRecord(body)) {
      return res.status(400).json({
        error: "Requisição inválida.",
      });
    }

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!message || message.length > 1200) {
      return res.status(400).json({
        error: "Mensagem inválida.",
      });
    }

    const history: ChatMessage[] = Array.isArray(body.history)
      ? body.history
        .filter(isChatMessage)
        .slice(-8)
        .map((item) => ({
          role: item.role,
          content: item.content.slice(0, 1200),
        }))
      : [];

    const input = buildConversation(history, message);

    const ai = getGeminiClient();

    const response = await ai.interactions.create({
      model: process.env.GEMINI_MODEL || "gemini-3.8-flash",
      input,
      system_instruction:
        buildAssistantInstruction(assistantConfig),
      store: false,
      generation_config: {
        thinking_level: "minimal"
      },
    });

    const reply = response.output_text?.trim();

    if (!reply) {
      throw new Error("O Gemini não retornou uma resposta.");
    }

    return res.status(200).json({ reply });

  } catch (error) {
    console.error(
      "Erro ao processar mensagem:",
      error instanceof Error ? error.message : "Erro desconhecido"
    );

    return res.status(500).json({
      error: "Não foi possível processar sua mensagem.",
    });
  }
}
