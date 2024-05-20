"use client";

import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import Markdown from "react-markdown";

export function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="">
      <div className="space-y-4">
        {messages.map((m) => (
          <div key={m.id} className="border-b pb-4">
            <div className="font-bold text-sm uppercase text-neutral-800">
              {m.role === "user" ? "User " : "AI"}
            </div>
            <Markdown className={"prose"}>{m.content}</Markdown>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="pb-4 px-1">
        <Input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
