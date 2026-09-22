import { ArrowRight, CalendarClock, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-india.jpg";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section id="trang-chu" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-deep/35 bg-parchment-deep px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            <Sparkles className="size-3.5" /> Cổng thông tin di sản
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Ấn Độ: Nôi Văn Minh &amp; Những Thành Tựu Rực Rỡ
          </h1>
          <div className="gold-rule my-5 max-w-sm" />
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Khám phá chiều sâu lịch sử, triết học, khoa học và di sản vĩ đại của văn minh Ấn Độ qua
            các thời kỳ.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => scrollToId("kham-pha")} className="gap-2">
              Khám Phá Ngay <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToId("dong-thoi-gian")}
              className="gap-2 border-gold-deep/40 bg-card"
            >
              <CalendarClock className="size-4 text-primary" /> Xem Dòng Thời Gian
            </Button>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              { k: "5.000+", v: "năm lịch sử" },
              { k: "6", v: "lĩnh vực thành tựu" },
              { k: "7", v: "thời kỳ tiêu biểu" },
            ].map((s) => (
              <div key={s.v} className="heritage-frame rounded-lg bg-card/70 px-3 py-3 text-center">
                <dt className="font-display text-xl font-bold text-gold-deep">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="heritage-frame overflow-hidden rounded-2xl">
          <img
            src={heroImg}
            alt="Tranh minh họa di sản Ấn Độ: đền cổ, Taj Mahal và bản đồ thiên văn"
            width={1600}
            height={912}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
