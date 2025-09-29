import type { ReactNode } from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-brand-surface3/60 bg-white p-6 shadow-sm">
      <div className="h-10 w-10 rounded-full bg-brand-surface2 text-brand-primary flex items-center justify-center" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-brand-ink">{title}</h3>
      <p className="text-sm text-brand-ink/80">{description}</p>
    </article>
  );
}
