import { HTMLAttributes } from 'react';
import { theme } from '@/styles/theme';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'glass' | 'translucent';
  border?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
}

const cardVariants = {
  primary: `bg-gradient-to-br ${theme.gradients.card.primary}`,
  glass: theme.backgrounds.glass,
  translucent: theme.backgrounds.translucent,
};

const cardShadows = {
  sm: theme.shadows.sm,
  md: theme.shadows.md,
  lg: theme.shadows.lg,
  none: '',
};

export function Card({
  variant = 'primary',
  border = true,
  shadow = 'sm',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6',
        cardVariants[variant],
        cardShadows[shadow],
        border && theme.borders.gray,
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 px-6", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  )
}

export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
