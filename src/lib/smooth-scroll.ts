// Cuộn mượt tùy chỉnh với easing chậm rãi (mặc định ~900ms),
// tự trừ chiều cao thanh menu cố định ở đầu trang.
const HEADER_OFFSET = 80;

export function smoothScrollToId(id: string, duration = 900) {
  const el = document.getElementById(id);
  if (!el) return;
  const target = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  smoothScrollTo(Math.max(0, target), duration);
}

export function smoothScrollTo(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (Math.abs(diff) < 2) return;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (now: number) => {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    window.scrollTo(0, startY + diff * easeInOutCubic(t));
    if (t < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
