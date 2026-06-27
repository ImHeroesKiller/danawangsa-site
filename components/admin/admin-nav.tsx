"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/admin/ida-analytics", label: "Analytics" },
  { href: "/admin/ida-conversations", label: "Conversations" },
] as const;

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <header className="border-b border-white/10 bg-black/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <div className="flex items-center gap-6">
          <Link href="/admin/ida-analytics" className="text-sm font-semibold text-gold">
            IDA Admin
          </Link>
          <nav className="flex gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-1.5 text-sm transition-colors",
                  pathname.startsWith(item.href)
                    ? "bg-gold/15 text-gold"
                    : "text-white/60 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <button
          type="button"
          onClick={() => void handleLogout()}
          className="text-xs text-white/50 transition-colors hover:text-white"
        >
          Logout
        </button>
      </div>
    </header>
  );
}