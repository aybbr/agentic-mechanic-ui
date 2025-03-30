import { HTMLAttributes } from 'react';
import { theme } from '@/styles/theme';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  shade?: keyof typeof theme.colors.primary;
  gradient?: keyof typeof theme.gradients;
  gradientVariant?: keyof (typeof theme.gradients)[keyof typeof theme.gradients];
}

export function Section({
  variant = 'primary',
  shade = 50,
  gradient,
  gradientVariant = 'primary',
  className,
  ...props
}: SectionProps) {
  const baseClasses = gradient && gradientVariant
    ? `bg-gradient-to-br ${theme.gradients[gradient][gradientVariant as keyof (typeof theme.gradients)[typeof gradient]]}`
    : `bg-${theme.colors[variant][shade]}`;

  return (
    <section
      className={cn(
        'relative py-20 overflow-hidden',
        baseClasses,
        className
      )}
      {...props}
    />
  );
}

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  titleColor?: string;
  descriptionColor?: string;
}

export function SectionHeader({
  title,
  description,
  align = 'center',
  titleColor = `text-${theme.colors.gray[900]}`,
  descriptionColor = `text-${theme.colors.gray[600]}`,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        className
      )}
      {...props}
    >
      <h2 className={cn(
        'text-3xl font-bold mb-4',
        titleColor
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-xl max-w-3xl',
          align === 'center' && 'mx-auto',
          descriptionColor
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
