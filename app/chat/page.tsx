import { Auth } from "@/components/auth";
import { Chatbot } from "@/components/chat";

export default function ChatPage() {
  return (
    <main>
      <h1>Vercel AI Chatbot</h1>
      <Auth />
      <Chatbot />
    </main>
  );
}
