"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

export function ConversationFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [locale, setLocale] = useState(searchParams.get("locale") ?? "");
  const [converted, setConverted] = useState(
    searchParams.get("converted") ?? "",
  );
  const [from, setFrom] = useState(searchParams.get("from") ?? "");
  const [to, setTo] = useState(searchParams.get("to") ?? "");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (locale) params.set("locale", locale);
    if (converted) params.set("converted", converted);
    if (from) params.set("from", from);
    if (to) params.set("to", to);

    const query = params.toString();
    router.push(
      query ? `/admin/ida-conversations?${query}` : "/admin/ida-conversations",
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-end gap-3 rounded-2xl border border-white/10 bg-surface p-4"
    >
      <div>
        <label className="text-xs text-white/45">Locale</label>
        <select
          value={locale}
          onChange={(event) => setLocale(event.target.value)}
          className="mt-1 block rounded-xl border border-white/15 bg-black px-3 py-2 text-sm"
        >
          <option value="">All</option>
          <option value="id">ID</option>
          <option value="en">EN</option>
          <option value="zh">ZH</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-white/45">Converted</label>
        <select
          value={converted}
          onChange={(event) => setConverted(event.target.value)}
          className="mt-1 block rounded-xl border border-white/15 bg-black px-3 py-2 text-sm"
        >
          <option value="">All</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-white/45">From</label>
        <input
          type="date"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          className="mt-1 block rounded-xl border border-white/15 bg-black px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="text-xs text-white/45">To</label>
        <input
          type="date"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          className="mt-1 block rounded-xl border border-white/15 bg-black px-3 py-2 text-sm"
        />
      </div>
      <button
        type="submit"
        className="rounded-2xl bg-gold px-4 py-2 text-sm font-semibold text-background hover:bg-gold-dark"
      >
        Filter
      </button>
    </form>
  );
}