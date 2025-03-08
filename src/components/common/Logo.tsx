"use client";

import { Gauge } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  href?: string;
}

export function Logo({ href = "/" }: LogoProps) {
  const LogoContent = () => (
    <div className="flex items-center space-x-2 group">
      <div className="relative">
        <Gauge
          size={24}
          className="text-indigo-600 group-hover:text-purple-600 transition-colors"
          strokeWidth={2.5}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        Agentic<span className="text-purple-500">|</span>Mechanic
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-90 transition-opacity">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}
