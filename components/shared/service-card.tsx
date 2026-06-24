import { Check } from "lucide-react";

import type { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      className={cn(
        "premium-card flex flex-col rounded-3xl p-7",
        className,
      )}
    >
      <div className="mb-7 flex items-start justify-between">
        <div>
          <div className="service-number">{service.number}</div>
          <p className="mt-0.5 text-xs font-medium tracking-wider text-gold">
            {service.category}
          </p>
        </div>
        <Icon className="mt-1 h-8 w-8 text-gold/70" strokeWidth={1.5} />
      </div>
      <h3 className="mb-4 text-[21px] font-semibold leading-tight tracking-tight">
        {service.title}
      </h3>
      <p className="mb-5 flex-1 text-[14.5px] text-white/70">
        {service.description}
      </p>
      <ul className="mt-auto space-y-1.5 text-sm text-white/80">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-x-2">
            <Check className="h-3 w-3 shrink-0 text-gold" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}