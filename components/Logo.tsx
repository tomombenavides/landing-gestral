import Image from 'next/image';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

type LogoProps = {
  variant?: 'light' | 'dark';
  href?: string;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href'>;

export function Logo({ variant = 'light', href = '/', ...props }: LogoProps) {
  const src = variant === 'dark' ? '/gestral_logo_outline_dark.svg' : '/gestral_logo_outline.svg';

  return (
    <Link href={href} aria-label="Inicio Gestral" {...props}>
      <Image
        src={src}
        alt="Gestral"
        width={144}
        height={40}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}
