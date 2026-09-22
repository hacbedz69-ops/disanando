import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const title = "Điều khoản sử dụng — Di Sản Ấn Độ";
const description =
  "Điều khoản sử dụng nội dung, tài khoản độc giả và bản quyền của cổng thông tin Di Sản Ấn Độ.";

export const Route = createFileRoute("/dieu-khoan-su-dung")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        to="/"
        search={{ q: "", category: "Tất cả", page: 1 }}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="size-4" /> Về trang chủ
      </Link>
      <h1 className="mt-6 font-display text-3xl font-bold text-foreground">Điều khoản sử dụng</h1>
      <div className="gold-rule mt-4 w-40" />
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground/90">
        <h2 className="font-display text-xl font-bold text-gold-deep">1. Mục đích</h2>
        <p>
          Toàn bộ nội dung trên Di Sản Ấn Độ phục vụ mục đích học tập, tham khảo và lan tỏa tri
          thức lịch sử — văn hóa, hoàn toàn phi thương mại.
        </p>
        <h2 className="font-display text-xl font-bold text-gold-deep">2. Tài khoản độc giả</h2>
        <p>
          Bạn chịu trách nhiệm bảo mật mật khẩu của mình và cam kết cung cấp thông tin chính xác.
          Chúng tôi có thể tạm khóa tài khoản có hành vi gây hại cho hệ thống.
        </p>
        <h2 className="font-display text-xl font-bold text-gold-deep">3. Bản quyền nội dung</h2>
        <p>
          Bài viết và hình minh họa được biên soạn cho trang này. Khi trích dẫn, vui lòng ghi rõ
          nguồn “Di Sản Ấn Độ”. Không sử dụng lại cho mục đích thương mại nếu chưa được đồng ý.
        </p>
        <h2 className="font-display text-xl font-bold text-gold-deep">4. Giới hạn trách nhiệm</h2>
        <p>
          Nội dung mang tính giáo dục tổng quan, có thể được cập nhật theo các nghiên cứu mới và
          không thay thế tài liệu học thuật chuyên sâu hay lời khuyên y khoa.
        </p>
        <h2 className="font-display text-xl font-bold text-gold-deep">5. Liên hệ</h2>
        <p>Mọi thắc mắc xin gửi về huynhbao0609@gmail.com hoặc Zalo 0818609211.</p>
      </div>
    </main>
  );
}
