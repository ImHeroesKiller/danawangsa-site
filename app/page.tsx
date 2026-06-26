import { BridgingSection } from "@/components/sections/bridging-section";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustBarSection } from "@/components/sections/trust-bar-section";

/** Homepage — teaser + overview, detail content lives on layanan pages */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ServicesSection />
      <BridgingSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}