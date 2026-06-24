import type { ProcessStep } from "@/types";

interface ProcessStepCardProps {
  step: ProcessStep;
}

export function ProcessStepCard({ step }: ProcessStepCardProps) {
  return (
    <article className="premium-card rounded-3xl p-6">
      <div className="step-number mb-4 flex h-8 w-8 items-center justify-center rounded-full">
        {step.step}
      </div>
      <h4 className="mb-2 text-lg font-semibold">{step.title}</h4>
      <p className="text-sm leading-relaxed text-white/65">{step.description}</p>
    </article>
  );
}