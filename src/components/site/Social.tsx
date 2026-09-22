import { Facebook, Youtube } from "lucide-react";

import { SectionTitle } from "./Achievements";

const socials = [
  {
    name: "Facebook",
    handle: "facebook.com/hbaooo1",
    url: "https://www.facebook.com/hbaooo1/",
    desc: "Bài viết ngắn, hình ảnh di sản và thảo luận cùng cộng đồng yêu lịch sử.",
    Icon: Facebook,
  },
  {
    name: "YouTube",
    handle: "@Hbaooo1",
    url: "https://www.youtube.com/@Hbaooo1",
    desc: "Video kể chuyện về các triều đại, phát minh và kiến trúc Ấn Độ.",
    Icon: Youtube,
  },
];

export function Social() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <SectionTitle
        eyebrow="Kết nối"
        title="Theo dõi kênh của chúng tôi"
        desc="Cập nhật nội dung mới về lịch sử, khoa học và văn hóa Ấn Độ mỗi tuần."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {socials.map(({ name, handle, url, desc, Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="heritage-frame group flex items-start gap-4 rounded-xl bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold to-primary text-primary-foreground">
              <Icon className="size-6" />
            </span>
            <span>
              <span className="block font-display text-lg font-bold text-foreground">{name}</span>
              <span className="block text-sm font-semibold text-gold-deep">{handle}</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{desc}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
