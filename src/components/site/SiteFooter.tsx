import { Facebook, Landmark, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";

const socialIcons = [
  { label: "Facebook", href: "https://www.facebook.com/hbaooo1/", Icon: Facebook, external: true },
  { label: "YouTube", href: "https://www.youtube.com/@Hbaooo1", Icon: Youtube, external: true },
  { label: "Zalo: 0818609211", href: "https://zalo.me/0818609211", Icon: MessageCircle, external: true },
  { label: "Email", href: "mailto:huynhbao0609@gmail.com", Icon: Mail, external: false },
];

const quickLinks = [
  { id: "trang-chu", label: "Trang chủ" },
  { id: "kham-pha", label: "Khám phá Thành tựu" },
  { id: "dong-thoi-gian", label: "Dòng thời gian" },
  { id: "danh-gia", label: "Đánh giá" },
];

export function SiteFooter() {
  return (
    <footer id="lien-he" className="scroll-mt-24 border-t border-gold-deep/25 bg-parchment-deep/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-full border border-gold-deep/40 bg-primary font-display text-sm font-bold text-primary-foreground">
                <Landmark className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold text-foreground">Di Sản Ấn Độ</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cổng thông tin giáo dục tiếng Việt về lịch sử, văn hóa, khoa học và những thành tựu
              vĩ đại của văn minh Ấn Độ.
            </p>
            <div className="gold-rule mt-5 w-32" />
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-foreground">Liên kết nhanh</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => smoothScrollToId(l.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/da-luu"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Mục đã lưu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-foreground">Liên hệ</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                <a
                  href="mailto:huynhbao0609@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  huynhbao0609@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                <a
                  href="tel:0818609211"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Điện thoại: 0818609211
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="size-4 text-primary" />
                <span className="text-muted-foreground">Zalo: 0818609211</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-gold-deep/20 pt-6">
          <div className="font-display text-xs tracking-[0.35em] text-gold-deep">◆ ❖ ◆</div>

          <div className="flex items-center gap-2">
            {socialIcons.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid size-8 place-items-center rounded-full border border-gold-deep/30 bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Di Sản Ấn Độ — Cổng thông tin giáo dục phi thương mại. Mọi
            quyền được bảo lưu.
          </p>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <Link to="/chinh-sach-bao-mat" className="transition-colors hover:text-primary">
              Chính sách bảo mật
            </Link>
            <span className="text-gold-deep/50">·</span>
            <Link to="/dieu-khoan-su-dung" className="transition-colors hover:text-primary">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
