"use client";

import { IconRobot, IconRobotOff } from "@tabler/icons-react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

type ChatRole = "user" | "assistant";

interface ChatMessage {
  role: ChatRole;
  content: string;
}

interface BusinessAssistantChatProps {
  assistantName: string;
  businessName: string;
  contactUrl?: string;
}

export default function BusinessAssistantChat({
  assistantName,
  businessName,
  contactUrl,
}: BusinessAssistantChatProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: `Olá! Sou o ${assistantName} da ${businessName}. Como posso ajudar?`,
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading, isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = input.trim();

    if (!message || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: message,
    };

    // Guardamos as mensagens anteriores antes de atualizar o estado.
    const history = messages.slice(-8);

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message,
          history,
        }),
      });

      const data: {
        reply?: string;
        error?: string;
      } = await response.json();

      if (!response.ok || !data.reply) {
        throw new Error(data.error || "Erro ao enviar mensagem.");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply!,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Desculpe, não consegui processar sua mensagem. Você também pode entrar em contato diretamente com a clínica.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-24 z-50">

      {/* Janela de conversa */}
      {isOpen && (
        <section
          aria-label={`Chat com ${assistantName}`}
          className="
            mb-4 flex
            h-[min(560px,calc(100vh-110px))]
            w-[min(380px,calc(100vw-40px))]
            flex-col overflow-hidden
            rounded-2xl border border-gray-200
            bg-white shadow-2xl
          "
        >
          {/* Cabeçalho */}
          <header className="flex items-center justify-between bg-teal-700 p-4 text-white">
            <div>
              <h2 className="font-semibold">
                {assistantName}
              </h2>

              <p className="text-xs text-teal-100">
                {businessName}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar conversa"
              className="rounded-lg px-3 py-1 hover:bg-teal-600"
            >
              ✕
            </button>
          </header>

          {/* Mensagens */}
          <div
            role="log"
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user"
                  ? "justify-end"
                  : "justify-start"
                  }`}
              >
                <div
                  className={`
                    max-w-[85%] rounded-2xl px-4 py-3
                    text-sm leading-relaxed
                    whitespace-pre-wrap break-words
                    ${message.role === "user"
                      ? "rounded-br-sm bg-teal-700 text-white"
                      : "rounded-bl-sm bg-white text-gray-800 shadow-sm"
                    }
                  `}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
                  Digitando...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Aviso */}
          <div className="border-t bg-white px-3 pt-2">
            <p className="text-center text-xs text-gray-500">
              Assistente virtual. Não realiza avaliações
              ou diagnósticos odontológicos.
            </p>
          </div>

          {/* Contato humano */}
          {contactUrl && (
            <div className="bg-white px-3 pt-2">
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block rounded-lg border border-teal-700
                  px-3 py-2 text-center text-sm font-medium
                  text-teal-700 hover:bg-teal-50
                "
              >
                Falar diretamente com a clínica
              </a>
            </div>
          )}

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t bg-white p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Digite sua mensagem..."
              maxLength={1200}
              disabled={isLoading}
              className="
                min-w-0 flex-1 rounded-xl border
                border-gray-300 px-3 py-2 text-sm
                text-gray-900 outline-none
                focus:border-teal-600 focus:ring-1
                focus:ring-teal-600
              "
            />

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="
                rounded-xl bg-teal-700 px-4
                text-sm font-medium text-white
                hover:bg-teal-800
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Enviar
            </button>
          </form>
        </section>
      )}

      {/* Botão flutuante */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        className="
          fixed bottom-36 right-4 -z-10 w-[50px] h-[50px] p-[6px]
          flex-center rounded-full
          hover:scale-105 focus:scale-105 transition-all
          bg-white
          border border-zinc-300 cursor-pointer
          shadow-md
        "
      >
        {isOpen ? <IconRobotOff size={35} stroke={1.5} /> : <IconRobot size={35} stroke={1.5} />}
      </button>
    </div>
  );
}
