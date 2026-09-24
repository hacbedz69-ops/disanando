import { useEffect, useState } from "react";
import { onOpenItem } from "@/lib/open-item";
import { Landmark, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { timeline, type TimelineEvent } from "@/data/content";
import { SectionTitle } from "./Achievements";

export function Timeline() {
  const [selected, setSelected] = useState<TimelineEvent | null>(null);
  useEffect(() => onOpenItem((d) => {
    if (d.kind !== "timeline") return;
    document.getElementById(`moc-${d.index}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    setSelected(timeline[d.index] ?? null);
  }), []);
  return (
    <section id="dong-thoi-gian" className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <SectionTitle eyebrow="Dòng thời gian" title="Dòng Thời Gian Lịch Sử & Thành Tựu Ấn Độ" desc="Nhấn vào từng mốc thời gian để khám phá bối cảnh lịch sử, triều đại và các phát minh tiêu biểu." />

        <nav aria-label="Chuyển nhanh đến mốc thời gian" className="mt-8 flex flex-wrap justify-center gap-2">
          {timeline.map((item, i) => (
            <Button
              key={item.period}
              variant="outline"
              onClick={() => document.getElementById(`moc-${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
              className="rounded-full border-gold-deep/35 bg-parchment px-3 py-1.5 text-xs font-semibold"
            >
              {item.period}
            </Button>
          ))}
        </nav>

        <ol className="mt-10 space-y-4 border-l-2 border-gold/60 pl-6 sm:pl-10">
          {timeline.map((item, i) => <li key={item.title} id={`moc-${i}`} className="relative scroll-mt-28">
            <span className="absolute -left-[calc(1.5rem+9px)] top-5 size-4 rounded-full border-2 border-gold-deep bg-parchment sm:-left-[calc(2.5rem+9px)]" />
            <Button variant="ghost" onClick={() => setSelected(item)} className="heritage-frame block h-auto w-full whitespace-normal rounded-lg bg-card p-5 text-left hover:bg-secondary">
              <span className="flex flex-wrap gap-2 text-xs font-semibold text-gold-deep"><span>{item.period}</span><span>· {item.tag.toUpperCase()}</span></span>
              <span className="mt-3 flex items-start gap-2 font-display text-lg font-bold"><Landmark className="mt-1 size-4 shrink-0 text-primary" />{item.title}<ArrowUpRight className="ml-auto size-4 shrink-0" /></span>
              <span className="mt-2 block text-sm font-normal leading-relaxed text-muted-foreground">{item.description}</span>
              <span className="mt-3 flex flex-wrap gap-2">{item.highlights.map(h => <span key={h} className="rounded-full border border-gold-deep/30 bg-parchment px-3 py-1 text-xs font-normal">{h}</span>)}</span>
            </Button>
          </li>)}
        </ol>
      </div>
      <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelected(null); }}>
        <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto border-gold-deep/30 bg-card">
          {selected && <><DialogHeader><DialogTitle className="font-display text-2xl">{selected.title}</DialogTitle><DialogDescription>{selected.period} · {selected.tag}</DialogDescription></DialogHeader>
            <div className="space-y-3">{selected.context.map(p => <p key={p} className="text-sm leading-relaxed">{p}</p>)}</div>
            <h3 className="font-display font-bold text-gold-deep">Dữ kiện chính</h3>
            <dl className="grid gap-4 sm:grid-cols-2">{selected.facts.map(f => <div key={f.label}><dt className="text-xs text-muted-foreground">{f.label}</dt><dd className="mt-1 text-sm font-semibold">{f.value}</dd></div>)}</dl>
          </>}
        </DialogContent>
      </Dialog>
    </section>
  );
}
