import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { achievements, timeline } from "@/data/content";
import { createLovableAiGatewayRunIdFetch } from "@/lib/ai-gateway.server";

function buildContext() {
  const cards = achievements.map(
    (a) =>
      `### ${a.title} [${a.category} · ${a.era}]\n${a.summary}\n${a.context.join(" ")}\nDữ kiện: ${a.facts
        .map((f) => `${f.label}: ${f.value}`)
        .join("; ")}`,
  );
  const events = timeline.map(
    (t) =>
      `### ${t.period} — ${t.title} [${t.category}]\n${t.description}\n${t.context.join(" ")}\nNổi bật: ${t.highlights.join(", ")}`,
  );
  return `## THẺ THÀNH TỰU\n${cards.join("\n\n")}\n\n## DÒNG THỜI GIAN\n${events.join("\n\n")}`;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const key = process.env["LOVABLE_API_KEY"];
        if (!key) return new Response("Thiếu cấu hình AI", { status: 500 });
        const body = (await request.json()) as { messages?: UIMessage[] };
        const messages = (body.messages ?? []).slice(-12);

        const runIdFetch = createLovableAiGatewayRunIdFetch();
        const lovable = createOpenAI({
          baseURL: "https://ai.gateway.lovable.dev/v1",
          apiKey: key,
          headers: { "Lovable-API-Key": key, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
          fetch: runIdFetch.fetch,
        });

        const result = streamText({
          model: lovable.responses("openai/gpt-6-astra"),
          system: `Bạn là "AI Trợ Giảng" của cổng thông tin Di Sản Ấn Độ. Luôn trả lời bằng tiếng Việt, lịch sự, chính xác và tôn trọng văn hóa, tôn giáo. Ưu tiên dựa vào nội dung của cổng thông tin dưới đây; nếu câu hỏi vượt ngoài nội dung, có thể dùng kiến thức chung đáng tin cậy nhưng nói rõ điều đó. Không bịa đặt số liệu. Trả lời ngắn gọn (tối đa khoảng 200 từ), dùng gạch đầu dòng khi hợp lý, và gợi ý thẻ/mốc liên quan trên trang.\n\n${buildContext()}`,
          messages: await convertToModelMessages(messages),
          abortSignal: request.signal,
          providerOptions: {
            openai: {
              forceReasoning: true,
              reasoningEffort: "low",
              reasoningSummary: "auto",
              store: false,
              include: ["reasoning.encrypted_content"],
            },
          },
        });
        return result.toUIMessageStreamResponse({
          onError: (e) => {
            const msg = String((e as Error)?.message ?? e);
            if (msg.includes("429")) return "Hệ thống đang bận, vui lòng thử lại sau ít phút.";
            if (msg.includes("402")) return "Đã hết hạn mức AI của cổng thông tin.";
            return "Không thể trả lời lúc này. Vui lòng thử lại.";
          },
        });
      },
    },
  },
});
