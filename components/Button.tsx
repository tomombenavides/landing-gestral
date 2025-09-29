import Link from 'next/link';
import clsx from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type' | 'href'> & {
    href: string;
    newTab?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primaryButton text-white hover:brightness-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary',
  secondary:
    'bg-transparent text-brand-ink border border-brand-surface4 hover:bg-brand-surface3 focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
  ghost:
    'bg-transparent text-brand-ink hover:bg-brand-surface2 focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2'
};

export function Button(props: ButtonProps) {
  if ('href' in props && props.href) {
    const { href, variant = 'primary', className, children, newTab, ...rest } = props;
    const baseStyles = clsx(
      'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-150 focus:outline-none',
      variantStyles[variant],
      className
    );

    if (href.startsWith('http')) {
      const { target, rel, ...anchorRest } = rest;
      const computedTarget = newTab ? '_blank' : target;
      const computedRel = newTab ? 'noreferrer' : rel;

      return (
        <a
          {...anchorRest}
          className={baseStyles}
          href={href}
          target={computedTarget}
          rel={computedRel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link {...rest} href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  const { variant = 'primary', className, children, type = 'button', ...rest } = props as ButtonAsButton;
  const baseStyles = clsx(
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-150 focus:outline-none',
    variantStyles[variant],
    className
  );

  return (
    <button type={type} className={baseStyles} {...rest}>
      {children}
    </button>
  );
}
