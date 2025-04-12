"use client";

import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { theme, getTextColor } from '@/styles/theme';
import { Logo } from '@/components/common/Logo';
import { NavLink } from '@/components/molecules/navigation/NavLink';
import { Button } from '@/components/atoms/buttons/Button';
import { LogoutButton } from '@/components/auth/LogoutButton';
import { useAuth } from '@/components/auth/AuthProvider';
import { useUIStore } from '@/store/uiStore';
import Link from 'next/link';

interface NavigationLink {
  label: string;
  href: string;
}

interface MainNavigationProps {
  links?: NavigationLink[];
}

export function MainNavigation({
  links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ]
}: MainNavigationProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const { isMenuOpen, toggleMenu, closeMenu, openWaitlist } = useUIStore();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className={cn(
        "max-w-3xl mx-auto rounded-full",
        theme.backgrounds.glass,
        theme.shadows.lg,
        theme.borders.light
      )}>
        <div className="px-8 py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              ) : isAuthenticated ? (
                <>
                  <NavLink
                    href="/dashboard"
                    className={getTextColor('primary', 600)}
                  >
                    Dashboard
                  </NavLink>
                  <LogoutButton />
                </>
              ) : (
                <>
                  <NavLink
                    href="/auth/login"
                    className={getTextColor('primary', 600)}
                  >
                    Log in
                  </NavLink>
                  <Link href="/auth/signup">
                    <Button variant="primary">
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={cn(
                  "focus:outline-none",
                  getTextColor('gray', 700),
                  "hover:text-green-800"
                )}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={cn(
            "md:hidden fixed top-20 left-0 right-0 z-50 mx-4 rounded-xl bg-emerald-50/95 backdrop-blur-md",
            theme.shadows.lg,
            theme.borders.light
          )}>
            <div className="px-4 pt-2 pb-3 space-y-2">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md hover:bg-emerald-100/80"
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Mobile Auth Links */}
              {isLoading ? (
                <div className="flex justify-center py-2">
                  <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : isAuthenticated ? (
                <>
                  <NavLink
                    href="/dashboard"
                    className={cn(
                      "block px-3 py-2 rounded-md",
                      getTextColor('primary', 600),
                      "hover:bg-emerald-100/80"
                    )}
                    onClick={closeMenu}
                  >
                    Dashboard
                  </NavLink>
                  <div className="px-3 py-2">
                    <LogoutButton className="text-red-600 hover:text-red-800 font-medium" />
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    href="/auth/login"
                    className={cn(
                      "block px-3 py-2 rounded-md",
                      getTextColor('primary', 600),
                      "hover:bg-emerald-100/80"
                    )}
                    onClick={closeMenu}
                  >
                    Log in
                  </NavLink>
                  <Link href="/auth/signup" onClick={closeMenu}>
                    <Button
                      variant="primary"
                      className="w-full"
                    >
                      Sign up
                    </Button>
                  </Link>
                </>
              )}

              <Button
                variant="secondary"
                className="w-full mt-2"
                onClick={() => {
                  openWaitlist();
                  closeMenu();
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
