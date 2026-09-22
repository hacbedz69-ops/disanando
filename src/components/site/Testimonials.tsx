import { Quote, Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/content";
import { SectionTitle } from "./Achievements";

export function Testimonials() {
  return (
    <section id="danh-gia" className="scroll-mt-24 border-y border-gold-deep/20 bg-parchment-deep/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionTitle
          eyebrow="Đánh Giá Từ Độc Giả"
          title="Những phản hồi từ người đọc"
          desc="Giáo viên, nghiên cứu sinh, sinh viên và hướng dẫn viên chia sẻ trải nghiệm sử dụng cổng thông tin."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="heritage-frame flex flex-col rounded-xl bg-card p-5">
              <Quote className="size-6 text-gold" aria-hidden />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <div className="mt-4 flex gap-0.5" aria-label={`${t.rating} trên 5 sao`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-gold-deep/20 pt-4">
                <Avatar className="size-10 border border-gold-deep/30">
                  <AvatarFallback className="bg-primary/15 font-display text-sm font-bold text-gold-deep">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <span>
                  <span className="block text-sm font-bold text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
