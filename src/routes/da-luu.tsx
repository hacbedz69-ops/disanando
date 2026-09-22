import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, BookmarkX, Search, Share2, Sparkles, Trash2 } from "lucide-react";
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
import { achievements, type Achievement } from "@/data/content";
import { useBookmarks } from "@/lib/bookmarks";

const title = "Mục đã lưu — Di Sản Ấn Độ";
const description =
  "Xem lại, tìm kiếm và bỏ lưu những thành tựu văn minh Ấn Độ mà bạn đã đánh dấu từ các cửa sổ chi tiết.";

export const Route = createFileRoute("/da-luu")({
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
  component: SavedPage,
});

function SavedPage() {
  const { ids, remove, clear } = useBookmarks();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Achievement | null>(null);

  const saved = useMemo(
    () => achievements.filter((a) => ids.includes(a.id)),
    [ids],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return saved;
    return saved.filter((a) =>
      `${a.title} ${a.summary} ${a.era} ${a.category} ${a.keywords.join(" ")}`
        .toLowerCase()
        .includes(q),
    );
  }, [saved, query]);

  const unsave = (a: Achievement) => {
    remove(a.id);
    if (selected?.id === a.id) setSelected(null);
    toast.success(`Đã bỏ lưu "${a.title}".`);
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

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Link
        to="/"
        search={{ q: "", category: "Tất cả", page: 1 }}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="size-4" /> Về trang chủ
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
        Bộ sưu tập của bạn
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-foreground">Thành tựu đã lưu</h1>
      <div className="gold-rule mt-4 w-40" />
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Tất cả chủ đề bạn đánh dấu "Lưu lại" trong cửa sổ chi tiết sẽ xuất hiện tại đây. Bạn có thể
        tìm kiếm nhanh, đọc lại nội dung đầy đủ hoặc bỏ lưu bất cứ lúc nào.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm trong mục đã lưu..."
            aria-label="Tìm trong mục đã lưu"
            className="border-gold-deep/30 bg-card pl-9"
          />
        </div>
        {saved.length > 0 && (
          <Button
            variant="outline"
            onClick={() => {
              clear();
              toast.success("Đã xoá toàn bộ mục đã lưu.");
            }}
            className="gap-2 border-gold-deep/35 bg-parchment"
          >
            <Trash2 className="size-4 text-primary" /> Xoá tất cả
          </Button>
        )}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Hiển thị {filtered.length} / {saved.length} mục đã lưu
      </p>

      {saved.length === 0 ? (
        <div className="mt-10 rounded-xl border border-gold-deep/25 bg-parchment-deep/50 p-10 text-center">
          <BookmarkX className="mx-auto size-8 text-primary" aria-hidden />
          <p className="mt-4 font-display text-lg font-bold text-foreground">
            Bạn chưa lưu thành tựu nào
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Mở một thành tựu bất kỳ và nhấn "Lưu lại" để thêm vào bộ sưu tập.
          </p>
          <Link
            to="/"
            search={{ q: "", category: "Tất cả", page: 1 }}
            hash="kham-pha"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <BookOpen className="size-4" /> Khám phá thành tựu
          </Link>
        </div>
      ) : filtered.length === 0 ? (
        <p className="mt-10 text-center text-muted-foreground">
          Không có mục đã lưu nào khớp với từ khoá của bạn.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <article
              key={a.id}
              className="heritage-frame group flex flex-col overflow-hidden rounded-xl bg-card"
            >
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-secondary-foreground">
                    {a.label}
                  </span>
                  <span className="text-xs font-semibold text-gold-deep">{a.era}</span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold text-foreground">{a.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setSelected(a)}
                    className="gap-2 border-gold-deep/35 bg-parchment"
                  >
                    <BookOpen className="size-4 text-primary" /> Đọc chi tiết
                  </Button>
                  <Button variant="outline" onClick={() => unsave(a)} className="gap-2 border-gold-deep/35 bg-parchment">
                    <BookmarkX className="size-4 text-primary" /> Bỏ lưu
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

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
                <Button variant="outline" onClick={() => unsave(selected)} className="gap-2 border-gold-deep/35 bg-parchment">
                  <BookmarkX className="size-4 text-primary" /> Bỏ lưu
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
                <h3 className="font-display text-base font-bold text-gold-deep">Dữ kiện chính</h3>
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
                <h3 className="font-display text-base font-bold text-gold-deep">Điều đáng ghi nhớ</h3>
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
    </main>
  );
}
