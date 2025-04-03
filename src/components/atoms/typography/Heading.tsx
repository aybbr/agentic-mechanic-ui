import React, { ElementType } from 'react';
import { cn } from '@/lib/utils';
import { getTextColor } from '@/styles/theme';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  color?: string;
  as?: ElementType;
}

export function Heading({
  level = 1,
  children,
  className,
  color,
  as,
  ...props
}: HeadingProps) {
  // Default styles based on heading level
  const styles = {
    1: 'text-4xl sm:text-5xl font-bold leading-tight',
    2: 'text-3xl font-bold leading-tight',
    3: 'text-xl font-bold leading-tight',
    4: 'text-lg font-semibold leading-snug',
    5: 'text-base font-semibold leading-snug',
    6: 'text-sm font-semibold leading-snug',
  };

  // Determine which color to use
  const textColor = color || getTextColor('gray', 900);

  // Create the className
  const headingClassName = cn(
    styles[level],
    textColor,
    className
  );

  // Use the provided "as" prop or default to the heading level
  const Component = as || (`h${level}` as ElementType);

  return <Component className={headingClassName} {...props}>{children}</Component>;
}
