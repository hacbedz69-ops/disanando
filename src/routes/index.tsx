import { categories } from "@/data/content";
import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Achievements } from "@/components/site/Achievements";
import { Timeline } from "@/components/site/Timeline";
import { Testimonials } from "@/components/site/Testimonials";
import { Social } from "@/components/site/Social";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AiAssistant } from "@/components/site/AiAssistant";

const title = "Di Sản Ấn Độ — Lịch Sử, Văn Hóa & Thành Tựu";
const description =
  "Cổng thông tin tiếng Việt về lịch sử, triết học, khoa học và di sản Ấn Độ: từ Indus, Maurya, Gupta đến Mughal và thành tựu hiện đại.";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search['q'] === "string" ? search['q'] : "",
    category: categories.find(c => c === search['category']) ?? "Tất cả",
    page: Math.max(1, Math.floor(Number(search['page'])) || 1),
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Achievements />
        <Timeline />
        <Testimonials />
        <Social />
      </main>
      <SiteFooter />
      <AiAssistant />
    </div>
  );
}
