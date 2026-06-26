import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

interface SiteNavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
  isActive?: boolean;
}

/** Shared navigation link — used in Navbar and Footer */
export function SiteNavLink({
  href,
  children,
  className,
  onClick,
  external,
  isActive = false,
}: SiteNavLinkProps) {
  const isExternal =
    external ??
    (href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("#"));

  const classes = cn(
    "transition-colors",
    isActive ? "font-medium text-gold" : "text-white/75 hover:text-gold",
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
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}