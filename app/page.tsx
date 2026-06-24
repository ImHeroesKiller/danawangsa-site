import { BridgingSection } from "@/components/sections/bridging-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FeeSection } from "@/components/sections/fee-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { PositioningSection } from "@/components/sections/positioning-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustBarSection } from "@/components/sections/trust-bar-section";
import { ValueSection } from "@/components/sections/value-section";
import { WhyUsSection } from "@/components/sections/why-us-section";

/** Homepage — composes all marketing sections from modular components */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <PositioningSection />
      <IntroSection />
      <ServicesSection />
      <BridgingSection />
      <ProcessSection />
      <FeeSection />
      <TestimonialsSection />
      <ValueSection />
      <WhyUsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}