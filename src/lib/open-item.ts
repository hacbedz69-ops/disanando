export type OpenItemDetail =
  | { kind: "achievement"; id: string }
  | { kind: "timeline"; index: number };

const EVENT = "portal:open-item";

export function openItem(detail: OpenItemDetail) {
  window.dispatchEvent(new CustomEvent<OpenItemDetail>(EVENT, { detail }));
}

export function onOpenItem(handler: (d: OpenItemDetail) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<OpenItemDetail>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
