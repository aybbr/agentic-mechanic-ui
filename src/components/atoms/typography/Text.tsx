import React, { ElementType } from 'react';
import { cn } from '@/lib/utils';
import { getTextColor } from '@/styles/theme';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'body' | 'lead' | 'small' | 'caption';
  color?: string;
  as?: ElementType;
}

export function Text({
  children,
  className,
  variant = 'body',
  color,
  as = 'p',
  ...props
}: TextProps) {
  // Default styles based on variant
  const styles = {
    body: 'text-base leading-relaxed',
    lead: 'text-xl leading-relaxed',
    small: 'text-sm leading-normal',
    caption: 'text-xs leading-normal',
  };

  // Determine which color to use
  const textColor = color || getTextColor('gray', 600);

  // Create the className
  const textClassName = cn(
    styles[variant],
    textColor,
    className
  );

  const Component = as;

  return <Component className={textClassName} {...props}>{children}</Component>;
}
