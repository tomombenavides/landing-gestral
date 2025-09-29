import type { ReactNode } from 'react';

type StepProps = {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
};

export function Step({ number, title, description, icon }: StepProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-brand-surface3/60 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-surface3 font-heading text-brand-ink text-lg" aria-hidden="true">
          {number}
        </span>
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-brand-ink">{title}</h3>
        <p className="text-sm text-brand-ink/80">{description}</p>
      </div>
    </div>
  );
}
