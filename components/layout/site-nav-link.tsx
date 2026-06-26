import Link from "next/link";

import { cn } from "@/lib/utils";

interface SiteNavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

/** Shared navigation link — used in Navbar and Footer */
export function SiteNavLink({
  href,
  children,
  className,
  onClick,
  external,
}: SiteNavLinkProps) {
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"));

  const classes = cn(
    "transition-colors hover:text-gold",
    className,
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}