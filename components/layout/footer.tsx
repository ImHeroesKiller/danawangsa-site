import { Logo } from "@/components/layout/logo";
import { SiteNavLink } from "@/components/layout/site-nav-link";
import {
  footerCompanyLinks,
  footerContactLinks,
  footerLegalLinks,
  footerServiceLinks,
} from "@/lib/data/navigation";
import { siteConfig } from "@/lib/site-config";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold tracking-wider text-gold">
        {title}
      </h3>
      <ul className="space-y-2 text-sm text-white/55">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <SiteNavLink href={link.href} className="text-white/55">
              {link.label}
            </SiteNavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Logo compact />
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/45">
              {siteConfig.tagline}. Bukan lembaga pembiayaan — kami membantu
              merancang strategi bisnis & keuangan.
            </p>
          </div>

          <FooterColumn title="Layanan" links={footerServiceLinks} />
          <FooterColumn title="Perusahaan" links={footerCompanyLinks} />
          <FooterColumn title="Legal" links={footerLegalLinks} />
          <FooterColumn title="Kontak" links={footerContactLinks} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Danawangsa Capital — Strategic Advisory</p>
          <p className="text-white/30">
            Konsultan bisnis & keuangan strategis — bukan bank, bukan lembaga
            pembiayaan.
          </p>
        </div>
      </div>
    </footer>
  );
}