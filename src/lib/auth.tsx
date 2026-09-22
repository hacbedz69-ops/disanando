import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";

import { supabase } from "@/integrations/supabase/client";

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  fullName: string | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const userId = session?.user.id ?? null;
  const metaName = (session?.user.user_metadata?.['full_name'] as string | undefined) ?? null;

  useEffect(() => {
    if (!userId) {
      setFullName(null);
      return;
    }
    setFullName(metaName);
    let cancelled = false;
    supabase
      .from("profiles")
      .select("full_name")
      .eq("id", userId)
      .maybeSingle()
      .then(({ data }) => {
        if (!cancelled && data?.full_name) setFullName(data.full_name);
      });
    return () => {
      cancelled = true;
    };
  }, [userId, metaName]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user: session?.user ?? null,
      session,
      fullName,
      loading,
      signOut: async () => {
        await supabase.auth.signOut();
      },
    }),
    [session, fullName, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
