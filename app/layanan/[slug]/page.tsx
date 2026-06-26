import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetailContent } from "@/components/layanan/service-detail-content";
import { getServiceBySlug, services } from "@/lib/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: `Layanan Tidak Ditemukan • ${siteConfig.name}` };
  }

  return createPageMetadata({
    title: `${service.meta.title} • ${siteConfig.name}`,
    description: service.meta.description,
    path: service.path,
    imageAlt: `${service.meta.title} — ${siteConfig.name}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}