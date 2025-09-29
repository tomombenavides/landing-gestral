'use client';

import { useState } from 'react';

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-brand-surface3/60 bg-white shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="font-medium text-brand-ink">{question}</span>
        <span className="text-brand-primary" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      {open ? (
        <div className="border-t border-brand-surface3/60 px-6 py-4 text-sm text-brand-ink/80">
          {answer}
        </div>
      ) : null}
    </div>
  );
}
