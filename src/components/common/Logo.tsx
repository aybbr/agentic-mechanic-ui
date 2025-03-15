"use client";

import Link from "next/link";

interface LogoProps {
  href?: string | null;
}

export function Logo({ href = "/" }: LogoProps) {
  const LogoContent = () => (
    <div className="flex items-center group">
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
        Agentic
      </span>
      <span className="mx-1">·</span>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent">
        Mechanic
      </span>
    </div>
  );

  // Only render Link if href is a non-empty string
  if (href && typeof href === 'string') {
    return (
      <Link href={href} className="hover:opacity-90 transition-opacity">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}
