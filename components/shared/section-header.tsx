import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title?: string;
  description?: string;
  className?: string;
  showDivider?: boolean;
}

/** Reusable section title block with optional gold divider */
export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  showDivider = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 text-center md:mb-10", className)}>
      <p className="mb-2 text-xs font-medium tracking-[3.5px] text-gold">
        {eyebrow}
      </p>
      {showDivider && (
        <div className="mx-auto mb-5 h-px w-20 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      )}
      {title && (
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60">
          {description}
        </p>
      )}
    </div>
  );
}