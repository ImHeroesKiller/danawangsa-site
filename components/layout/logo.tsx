import Image from "next/image";

import { Link } from "@/lib/i18n/navigation";

const LOGO_WIDTH = 809;
const LOGO_HEIGHT = 437;

export function Logo({ compact = false }: { compact?: boolean }) {
  const height = compact ? 28 : 40;
  const width = Math.round((LOGO_WIDTH / LOGO_HEIGHT) * height);

  const content = (
    <Image
      src="/logo.png"
      alt="Danawangsa Capital"
      width={width}
      height={height}
      className={compact ? "h-7 w-auto" : "h-10 w-auto"}
      priority
    />
  );

  if (compact) return content;

  return (
    <Link href="/" className="transition-opacity hover:opacity-90">
      {content}
    </Link>
  );
}