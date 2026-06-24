import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/section-header";
import { faqItems } from "@/lib/data/content";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
      <SectionHeader
        eyebrow="FAQ"
        title="Pertanyaan yang Sering Diajukan"
      />
      <Accordion type="single" collapsible className="space-y-3">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}