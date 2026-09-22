import { useCallback, useEffect, useState } from "react";

const KEY = "disan-bookmarks";
const EVENT = "disan-bookmarks-changed";

function read(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function write(ids: string[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    /* bỏ qua */
  }
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function useBookmarks() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => setIds(read());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const isSaved = useCallback((id: string) => ids.includes(id), [ids]);

  const toggle = useCallback((id: string) => {
    const current = read();
    const saved = current.includes(id);
    const next = saved ? current.filter((x) => x !== id) : [...current, id];
    write(next);
    setIds(next);
    return !saved;
  }, []);

  const remove = useCallback((id: string) => {
    const next = read().filter((x) => x !== id);
    write(next);
    setIds(next);
  }, []);

  const clear = useCallback(() => {
    write([]);
    setIds([]);
  }, []);

  return { ids, isSaved, toggle, remove, clear };
}
