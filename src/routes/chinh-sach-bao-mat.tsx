import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const title = "Chính sách bảo mật — Di Sản Ấn Độ";
const description =
  "Cách cổng thông tin Di Sản Ấn Độ thu thập, sử dụng và bảo vệ thông tin cá nhân của độc giả.";

export const Route = createFileRoute("/chinh-sach-bao-mat")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        to="/"
        search={{ q: "", category: "Tất cả", page: 1 }}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="size-4" /> Về trang chủ
      </Link>
      <h1 className="mt-6 font-display text-3xl font-bold text-foreground">Chính sách bảo mật</h1>
      <div className="gold-rule mt-4 w-40" />
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground/90">
        <p>
          Di Sản Ấn Độ là cổng thông tin giáo dục phi thương mại. Chúng tôi tôn trọng và bảo vệ
          thông tin cá nhân của mọi độc giả.
        </p>
        <h2 className="font-display text-xl font-bold text-gold-deep">1. Thông tin thu thập</h2>
        <p>
          Khi bạn tạo tài khoản độc giả, chúng tôi lưu họ tên và địa chỉ email bạn cung cấp nhằm
          hiển thị lời chào và quản lý phiên đăng nhập. Chúng tôi không thu thập thông tin thanh
          toán.
        </p>
        <h2 className="font-display text-xl font-bold text-gold-deep">2. Mục đích sử dụng</h2>
        <p>
          Thông tin chỉ dùng để xác thực tài khoản, cá nhân hóa trải nghiệm đọc và cải thiện nội
          dung. Chúng tôi không bán hay chia sẻ dữ liệu cho bên thứ ba vì mục đích quảng cáo.
        </p>
        <h2 className="font-display text-xl font-bold text-gold-deep">3. Lưu trữ & bảo mật</h2>
        <p>
          Dữ liệu được lưu trên hạ tầng máy chủ có mã hóa, mỗi độc giả chỉ truy cập được hồ sơ của
          chính mình. Mục đã lưu (bookmark) được giữ ngay trên trình duyệt của bạn.
        </p>
        <h2 className="font-display text-xl font-bold text-gold-deep">4. Quyền của bạn</h2>
        <p>
          Bạn có thể yêu cầu xem, chỉnh sửa hoặc xóa tài khoản bất cứ lúc nào qua email
          huynhbao0609@gmail.com hoặc Zalo 0818609211.
        </p>
      </div>
    </main>
  );
}
