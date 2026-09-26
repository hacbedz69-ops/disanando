import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Bot, Send, Sparkles, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const suggestions = [
  "Số 0 ra đời như thế nào?",
  "Khác biệt giữa Bà La Môn giáo và Hindu giáo?",
  "Gió mùa ảnh hưởng gì đến nông nghiệp Ấn Độ?",
];

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, status, error, stop } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, status]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t || busy) return;
    sendMessage({ text: t });
    setInput("");
  };

  return (
    <>
      <Button
        onClick={() => setOpen((v) => !v)}
        aria-label="Mở AI Trợ Giảng"
        className="fixed bottom-5 right-5 z-50 h-12 gap-2 rounded-full px-5 shadow-lg"
      >
        {open ? <X className="size-5" /> : <Bot className="size-5" />}
        <span className="hidden sm:inline">AI Trợ Giảng</span>
      </Button>

      {open && (
        <div className="heritage-frame fixed bottom-20 right-5 z-50 flex h-[min(70vh,34rem)] w-[min(92vw,24rem)] flex-col overflow-hidden rounded-xl bg-card">
          <div className="border-b border-gold-deep/25 bg-parchment-deep/60 px-4 py-3">
            <p className="flex items-center gap-2 font-display font-bold text-foreground">
              <Sparkles className="size-4 text-primary" /> AI Trợ Giảng
            </p>
            <p className="text-xs text-muted-foreground">Hỏi về lịch sử, văn hóa, địa lý, tôn giáo, ẩm thực Ấn Độ</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Xin chào! Bạn muốn tìm hiểu điều gì?</p>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full rounded-lg border border-gold-deep/30 bg-parchment px-3 py-2 text-left text-sm hover:bg-secondary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m) => {
              const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
              const thinking = m.parts.some((p) => p.type === "reasoning");
              return (
                <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                      m.role === "user"
                        ? "whitespace-pre-wrap bg-primary text-primary-foreground"
                        : "ai-markdown bg-parchment-deep/60 text-foreground",
                    )}
                  >
                    {text ? (
                      m.role === "user" ? (
                        text
                      ) : (
                        <ReactMarkdown>{text}</ReactMarkdown>
                      )
                    ) : thinking ? (
                      <span className="italic text-muted-foreground">Đang suy nghĩ…</span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
            {status === "submitted" && <p className="text-xs italic text-muted-foreground">Đang suy nghĩ…</p>}
            {error && (
              <p className="rounded-md border border-destructive/40 p-2 text-xs text-destructive">
                {error.message || "Không thể trả lời lúc này. Vui lòng thử lại."}
              </p>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-gold-deep/25 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập câu hỏi của bạn…"
              aria-label="Câu hỏi cho AI Trợ Giảng"
              className="flex-1 rounded-md border border-gold-deep/30 bg-background px-3 text-sm outline-none focus:border-primary"
            />
            {busy ? (
              <Button type="button" variant="outline" onClick={() => stop()}>Dừng</Button>
            ) : (
              <Button type="submit" size="icon" aria-label="Gửi"><Send className="size-4" /></Button>
            )}
          </form>
        </div>
      )}
    </>
  );
}
