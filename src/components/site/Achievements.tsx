import { useMemo, useState } from "react";
import {
  Bookmark,
  BookmarkCheck,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Route } from "@/routes/index";
import { cn } from "@/lib/utils";
import { achievements, categories, type Achievement } from "@/data/content";
import { useBookmarks } from "@/lib/bookmarks";

export function Achievements() {
  const { q: query, category: cat, page } = Route.useSearch();
  const navigate = Route.useNavigate();
  const setQuery = (q: string) => navigate({ to: ".", search: (prev) => ({ ...prev, q, page: 1 }), resetScroll: false });
  const setCat = (category: (typeof categories)[number]) => navigate({ to: ".", search: (prev) => ({ ...prev, category, page: 1 }), resetScroll: false });
  const [selected, setSelected] = useState<Achievement | null>(null);
  const { isSaved, toggle } = useBookmarks();

  const toggleBookmark = (a: Achievement) => {
    const nowSaved = toggle(a.id);
    toast.success(
      nowSaved ? `Đã lưu "${a.title}" vào mục đã lưu.` : "Đã bỏ khỏi mục đã lưu.",
    );
  };

  const share = async (a: Achievement) => {
    const url = `${window.location.origin}/?q=${encodeURIComponent(a.title)}&category=${encodeURIComponent("Tất cả")}&page=1#kham-pha`;
    try {
      if (navigator.share) {
        await navigator.share({ title: a.title, text: a.summary, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      toast.success("Đã sao chép liên kết chia sẻ.");
    } catch {
      /* người dùng hủy chia sẻ */
    }
  };

  const filtered = useMemo(() => {
    const normalize = (value: string) =>
      value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/\s+/g, " ")
        .trim();

    const q = normalize(query);
    const terms = q.length === 0 ? [] : q.split(" ").filter(Boolean);

    return achievements
      .filter((a) => (cat === "Tất cả" ? true : a.category === cat))
      .filter((a) => {
        if (terms.length === 0) return true;
        const haystack = normalize(
          `${a.title} ${a.summary} ${a.era} ${a.label} ${a.keywords.join(" ")}`,
        );
        return haystack.includes(q) || terms.every((term) => haystack.includes(term));
      });
  }, [query, cat]);


  const pageCount = Math.max(1, Math.ceil(filtered.length / 6));
  const currentPage = Math.min(page, pageCount);
  const setPage = (page: number) => navigate({ to: ".", search: (prev) => ({ ...prev, page }), resetScroll: false });

  return (
    <section id="kham-pha" className="scroll-mt-24 border-y border-gold-deep/20 bg-parchment-deep/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionTitle
          eyebrow="Khám phá Thành tựu"
          title="21 Trụ Cột Văn Minh & Di Sản Ấn Độ"
          desc="Hành trình khám phá tri thức toàn diện từ Khoa học, Lịch sử, Kiến trúc đến Ẩm thực, Y học và Trò chơi trí tuệ."
        />

        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-stretch gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ví dụ: số 0, Ashoka, Ayurveda, Taj Mahal..."
              aria-label="Tìm kiếm thành tựu"
              className="border-gold-deep/30 bg-card pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Button
                variant="outline"
                aria-pressed={cat === c}
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                  cat === c
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-gold-deep/30 bg-card text-muted-foreground hover:bg-secondary",
                )}
              >
                {c}
              </Button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Hiển thị {filtered.length} / {achievements.length} chủ đề
        </p>

        <div key={`${cat}-${query}-${currentPage}`} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300">
          {filtered.slice((currentPage - 1) * 6, currentPage * 6).map((a) => (
            <article
              onClick={() => setSelected(a)}
              key={a.id}
              className="heritage-frame group flex flex-col overflow-hidden rounded-xl bg-card transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-secondary-foreground">
                    {a.label}
                  </span>
                  <span className="text-xs font-semibold text-gold-deep">{a.era}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.summary}
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSelected(a)}
                  className="mt-4 gap-2 border-gold-deep/35 bg-parchment"
                >
                  <BookOpen className="size-4 text-primary" /> Đọc chi tiết
                </Button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length > 0 && <nav aria-label="Phân trang thành tựu" className="mt-8 flex items-center justify-center gap-2">
          <Button variant="outline" className="border-primary" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}><ChevronLeft className="size-4" /><span className="hidden sm:inline">Trang trước</span></Button>
          {Array.from({length: pageCount}, (_, i) => i + 1).map(n => <Button key={n} aria-label={`Trang ${n}`} aria-current={currentPage === n ? "page" : undefined} variant={currentPage === n ? "default" : "outline"} className="border border-primary" onClick={() => setPage(n)}>{n}</Button>)}
          <Button variant="outline" className="border-primary" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)}><span className="hidden sm:inline">Trang sau</span><ChevronRight className="size-4" /></Button>
        </nav>}

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            Không có chủ đề nào khớp với tìm kiếm của bạn.
          </p>
        )}
      </div>

      <Dialog open={!!selected} onOpenChange={(v) => !v && setSelected(null)}>
        <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto border-gold-deep/30 bg-card">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{selected.title}</DialogTitle>
                <DialogDescription>
                  {selected.category} · {selected.era}
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  onClick={() => share(selected)}
                  className="gap-2 border-gold-deep/35 bg-parchment"
                >
                  <Share2 className="size-4 text-primary" /> Chia sẻ
                </Button>
                <Button
                  variant={isSaved(selected.id) ? "default" : "outline"}
                  aria-pressed={isSaved(selected.id)}
                  onClick={() => toggleBookmark(selected)}
                  className={cn(
                    "gap-2",
                    isSaved(selected.id)
                      ? ""
                      : "border-gold-deep/35 bg-parchment",
                  )}
                >
                  {isSaved(selected.id) ? (
                    <>
                      <BookmarkCheck className="size-4" /> Đã lưu
                    </>
                  ) : (
                    <>
                      <Bookmark className="size-4 text-primary" /> Lưu lại
                    </>
                  )}
                </Button>
              </div>


              <img
                src={selected.image}
                alt={selected.title}
                loading="lazy"
                width={1024}
                height={768}
                className="mt-2 w-full rounded-lg border border-gold-deep/25 object-cover"
              />

              <div className="mt-5 space-y-3">
                {selected.context.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-foreground/90">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-display text-base font-bold text-gold-deep">Dữ kiện chính</h4>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {selected.facts.map((f) => (
                    <div
                      key={f.label}
                      className="rounded-lg border border-gold-deep/25 bg-parchment-deep/50 p-3"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        {f.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-display text-base font-bold text-gold-deep">Điều đáng ghi nhớ</h4>
                <ul className="mt-3 space-y-2">
                  {selected.takeaways.map((t) => (
                    <li key={t} className="flex gap-2 text-sm text-foreground/90">
                      <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">{eyebrow}</p>
      <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <div className="gold-rule mx-auto mt-4 w-40" />
      {desc && <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{desc}</p>}
    </div>
  );
}
