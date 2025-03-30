import { ButtonHTMLAttributes } from 'react';
import { theme } from '@/styles/theme';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'cta';
  size?: 'sm' | 'md' | 'lg';
}

const buttonVariants = {
  primary: `bg-gradient-to-r ${theme.gradients.button.primary} text-white ${theme.shadows.md}`,
  secondary: `bg-gradient-to-r ${theme.gradients.button.secondary} text-white ${theme.shadows.md}`,
  outline: theme.gradients.button.outline,
  cta: `bg-gradient-to-r ${theme.gradients.button.cta} text-white ${theme.shadows.lg}`,
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full font-medium transition-all',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  );
}
