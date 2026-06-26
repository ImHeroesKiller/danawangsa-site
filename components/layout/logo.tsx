import { Link } from "@/lib/i18n/navigation";

export function Logo({ compact = false }: { compact?: boolean }) {
  const content = (
    <div className="flex items-center gap-x-3.5">
      <div
        className={`flex items-center justify-center border border-gold rounded-2xl ${
          compact ? "h-7 w-7" : "h-10 w-10"
        }`}
      >
        <span
          className={`heading-serif font-bold tracking-[-3.5px] text-gold ${
            compact ? "text-lg" : "text-3xl"
          }`}
        >
          DC
        </span>
      </div>
      {!compact && (
        <div className="leading-none">
          <div className="text-[21px] font-semibold tracking-[-1.2px]">
            DANAWANGSA
          </div>
          <div className="-mt-1 text-[9px] tracking-[3.5px] text-gold">
            CAPITAL
          </div>
        </div>
      )}
    </div>
  );

  if (compact) return content;

  return (
    <Link href="/" className="transition-opacity hover:opacity-90">
      {content}
    </Link>
  );
}