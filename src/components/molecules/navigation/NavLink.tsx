import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { getTextColor } from '@/styles/theme';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function NavLink({
  href,
  children,
  className,
  activeClassName,
  isActive = false,
  onClick,
  ...props
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-medium transition-colors",
        getTextColor('gray', 700),
        "hover:text-green-600",
        isActive && (activeClassName || "text-green-600"),
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
}
