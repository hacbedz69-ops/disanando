import { useEffect, useMemo, useRef, useState } from "react";
import { Landmark, LogOut, Menu, Search, UserRound, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { categories, searchIndex } from "@/data/content";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { WelcomeDialog } from "@/components/site/WelcomeDialog";
import { useBookmarks } from "@/lib/bookmarks";
import { Link } from "@tanstack/react-router";
import { BookmarkCheck } from "lucide-react";

const navLinks = [
  { id: "trang-chu", label: "Trang chủ" },
  { id: "kham-pha", label: "Khám phá Thành tựu" },
  { id: "dong-thoi-gian", label: "Dòng thời gian" },
  { id: "danh-gia", label: "Đánh giá" },
  { id: "lien-he", label: "Liên hệ" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader() {
  const [active, setActive] = useState("trang-chu");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("Tất cả");
  const [authOpen, setAuthOpen] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);
  const [welcomeName, setWelcomeName] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const { user, fullName, signOut } = useAuth();
  const { ids: bookmarkIds } = useBookmarks();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const results = useMemo(() => {
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

    return searchIndex
      .filter((item) => (cat === "Tất cả" ? true : item.category === cat))
      .filter((item) => {
        if (terms.length === 0) return true;
        const haystack = normalize(
          `${item.title} ${item.subtitle} ${item.category} ${(item.keywords ?? []).join(" ")}`,
        );
        return haystack.includes(q) || terms.every((term) => haystack.includes(term));
      });
  }, [query, cat]);

  const groups = useMemo(
    () => [
      { label: "Thẻ Thành Tựu & Di Sản", items: results.filter((r) => !r.id.startsWith("tl-")).slice(0, 6) },
      { label: "Mốc Dòng Thời Gian Lịch Sử", items: results.filter((r) => r.id.startsWith("tl-")).slice(0, 5) },
    ],
    [results],
  );

  const openResult = (item: (typeof results)[number]) => {
    setSearchOpen(false);
    if (item.id.startsWith("tl-")) {
      openItem({ kind: "timeline", index: Number(item.id.slice(3)) });
    } else if (achievements.some((a) => a.id === item.id)) {
      openItem({ kind: "achievement", id: item.id });
    } else {
      scrollToId(item.target);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setCat("Tất cả");
  };

  useMemo(() => {
  }, [query, cat]);


  return (
    <header className="sticky top-0 z-50 border-b border-gold-deep/25 bg-parchment/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <button
          onClick={() => scrollToId("trang-chu")}
          className="flex shrink-0 items-center gap-2 text-left"
        >
          <span className="grid size-9 place-items-center rounded-full border border-gold-deep/40 bg-primary font-display text-sm font-bold text-primary-foreground">
            <Landmark className="size-5" aria-hidden="true" />
          </span>
          <span className="hidden font-display text-base font-bold leading-tight text-foreground sm:block">
            Di Sản Ấn Độ
          </span>
        </button>

        <nav className="ml-2 hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className={cn(
                "relative px-3 py-2 text-sm font-semibold transition-colors",
                active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300",
                  active === link.id ? "scale-x-100" : "scale-x-0",
                )}
              />
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div ref={searchRef} className="relative">
            <div className="flex items-center gap-2 rounded-full border border-gold-deep/30 bg-card px-3 py-1.5 shadow-sm">
              <Search className="size-4 text-primary" aria-hidden />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Tìm thời kỳ, khoa học, di tích..."
                aria-label="Tìm kiếm nội dung"
                className="w-32 bg-transparent text-sm outline-none placeholder:text-muted-foreground/80 sm:w-56"
              />
            </div>

            {searchOpen && (
              <div className="heritage-frame absolute right-0 top-12 w-[min(92vw,26rem)] rounded-xl bg-card p-3">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCat(c)}
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors",
                        cat === c
                          ? "border-transparent bg-primary text-primary-foreground"
                          : "border-gold-deep/30 text-muted-foreground hover:bg-secondary",
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <ul className="max-h-80 space-y-1 overflow-y-auto">
                  {results.length === 0 && (
                    <li className="px-2 py-6 text-center text-sm text-muted-foreground">
                      Không tìm thấy nội dung phù hợp.
                    </li>
                  )}
                  {results.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setSearchOpen(false);
                          scrollToId(item.target);
                        }}
                        className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-secondary"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          width={56}
                          height={56}
                          className="size-14 shrink-0 rounded-md border border-gold-deep/25 object-cover"
                        />
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold text-foreground">
                            {item.title}
                          </span>
                          <span className="block truncate text-xs text-muted-foreground">
                            {item.subtitle}
                          </span>
                          <span className="mt-0.5 inline-block rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-secondary-foreground">
                            {item.category}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            to="/da-luu"
            aria-label="Mục đã lưu"
            className="relative grid size-9 shrink-0 place-items-center rounded-full border border-gold-deep/35 bg-card text-primary transition-colors hover:bg-secondary"
          >
            <BookmarkCheck className="size-4" />
            {bookmarkIds.length > 0 && (
              <span className="absolute -right-1 -top-1 grid min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold leading-4 text-primary-foreground">
                {bookmarkIds.length}
              </span>
            )}
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 rounded-full border-gold-deep/35 bg-card px-3 hover:bg-secondary"
                >
                  <UserRound className="size-4 text-primary" />
                  <span className="hidden max-w-[10rem] truncate text-sm font-semibold sm:block">
                    {fullName?.trim() || "Độc giả"}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 border-gold-deep/30 bg-card">
                <DropdownMenuLabel className="truncate">
                  {fullName?.trim() || "Độc giả"}
                  <span className="block truncate text-xs font-normal text-muted-foreground">
                    {user.email}
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={async () => {
                    await signOut();
                    toast.success("Bạn đã đăng xuất.");
                  }}
                >
                  <LogOut className="mr-2 size-4" />
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              size="icon"
              aria-label="Đăng nhập hoặc đăng ký"
              onClick={() => setAuthOpen(true)}
              className="rounded-full border-gold-deep/35 bg-card hover:bg-secondary"
            >
              <UserRound className="size-4 text-primary" />
            </Button>
          )}

          <Button
            variant="outline"
            size="icon"
            aria-label="Mở menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-full border-gold-deep/35 bg-card lg:hidden"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-gold-deep/20 bg-parchment-deep/80 px-4 py-2 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setMenuOpen(false);
                scrollToId(link.id);
              }}
              className={cn(
                "block w-full border-b border-gold-deep/10 py-3 text-left text-sm font-semibold last:border-0",
                active === link.id ? "text-primary" : "text-foreground",
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}

      <AuthDialog
        open={authOpen}
        onOpenChange={setAuthOpen}
        onAuthed={(name) => {
          setWelcomeName(name);
          setWelcomeOpen(true);
        }}
      />
      <WelcomeDialog open={welcomeOpen} onOpenChange={setWelcomeOpen} name={welcomeName} />
    </header>
  );
}

function AuthDialog({
  open,
  onOpenChange,
  onAuthed,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onAuthed: (name: string | null) => void;
}) {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [signup, setSignup] = useState({ name: "", email: "", password: "", confirm: "" });
  const [busy, setBusy] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: login.email.trim(),
      password: login.password,
    });
    setBusy(false);
    if (error) {
      const msg = error.message.toLowerCase();
      toast.error(
        msg.includes("confirm")
          ? "Bạn hãy mở email và xác nhận tài khoản trước khi đăng nhập nhé."
          : "Không đăng nhập được: email hoặc mật khẩu chưa đúng.",
      );
      return;
    }
    let name = (data.user?.user_metadata?.['full_name'] as string | undefined) ?? null;
    if (data.user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", data.user.id)
        .maybeSingle();
      if (profile?.full_name) name = profile.full_name;
    }
    toast.success(`Xin chào ${name?.trim() || "Độc giả"}! Bạn đã đăng nhập thành công.`);
    onOpenChange(false);
    onAuthed(name);
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    if (signup.password !== signup.confirm) {
      toast.error("Mật khẩu nhập lại không khớp.");
      return;
    }
    setBusy(true);
    const name = signup.name.trim();
    const { error } = await supabase.auth.signUp({
      email: signup.email.trim(),
      password: signup.password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: name },
      },
    });
    setBusy(false);
    if (error) {
      const msg = error.message.toLowerCase();
      toast.error(
        msg.includes("already")
          ? "Email này đã có tài khoản. Bạn hãy đăng nhập nhé."
          : msg.includes("weak") || msg.includes("pwned")
            ? "Mật khẩu này quá dễ đoán. Bạn hãy chọn mật khẩu khác mạnh hơn nhé."
            : "Không tạo được tài khoản. Bạn thử lại giúp mình nhé.",
      );
      return;
    }
    toast.success(`Xin chào ${name || "Độc giả"}! Tài khoản của bạn đã được tạo.`);
    onOpenChange(false);
    onAuthed(name || null);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-gold-deep/30 bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Tài khoản độc giả</DialogTitle>
          <DialogDescription>
            Đăng nhập để lưu bài viết yêu thích và theo dõi hành trình học tập của bạn.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2 bg-secondary">
            <TabsTrigger value="login">Đăng nhập</TabsTrigger>
            <TabsTrigger value="signup">Đăng ký</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-4">
            <form
              className="space-y-3"
              onSubmit={handleLogin}
            >
              <div className="space-y-1.5">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  required
                  value={login.email}
                  onChange={(e) => setLogin({ ...login, email: e.target.value })}
                  placeholder="ban@email.com"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="login-password">Mật khẩu</Label>
                <Input
                  id="login-password"
                  type="password"
                  required
                  minLength={6}
                  value={login.password}
                  onChange={(e) => setLogin({ ...login, password: e.target.value })
                  }
                  placeholder="••••••••"
                />
              </div>
              <Button type="submit" className="w-full" disabled={busy}>
                {busy ? "Đang xử lý..." : "Đăng nhập"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="mt-4">
            <form
              className="space-y-3"
              onSubmit={handleSignup}
            >
              <div className="space-y-1.5">
                <Label htmlFor="signup-name">Họ và tên</Label>
                <Input
                  id="signup-name"
                  required
                  value={signup.name}
                  onChange={(e) => setSignup({ ...signup, name: e.target.value })}
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  required
                  value={signup.email}
                  onChange={(e) => setSignup({ ...signup, email: e.target.value })}
                  placeholder="ban@email.com"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="signup-password">Mật khẩu</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    required
                    minLength={6}
                    value={signup.password}
                    onChange={(e) => setSignup({ ...signup, password: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="signup-confirm">Nhập lại</Label>
                  <Input
                    id="signup-confirm"
                    type="password"
                    required
                    minLength={6}
                    value={signup.confirm}
                    onChange={(e) => setSignup({ ...signup, confirm: e.target.value })}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={busy}>
                {busy ? "Đang xử lý..." : "Tạo tài khoản"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
