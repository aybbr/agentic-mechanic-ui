"use client";

import React from "react";
import {
  User,
  CreditCard,
  Clock,
  Menu,
  LogOut,
  Home,
  PlayCircle
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/common/Logo";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { useUser } from "@/components/auth/UserContext";

interface SidebarNavProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: SidebarNavProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { user, profile, isLoading } = useUser();

  // Construct the user's full name or use email as fallback
  const displayName = React.useMemo(() => {
    if (isLoading) return "Loading...";

    if (profile && (profile.first_name || profile.last_name)) {
      return `${profile.first_name || ''} ${profile.last_name || ''}`.trim();
    }

    return user?.email || "User";
  }, [user, profile, isLoading]);

  // Get user email
  const userEmail = user?.email || "";

  const routes = [
    {
      icon: PlayCircle,
      label: "Get Started",
      href: "/dashboard/get-started",
      active: pathname === "/dashboard/get-started",
    },
    {
      icon: CreditCard,
      label: "My Plan",
      href: "/dashboard/plan",
      active: pathname === "/dashboard/plan",
    },
    {
      icon: Clock,
      label: "My History",
      href: "/dashboard/history",
      active: pathname === "/dashboard/history",
    },
    {
      icon: User,
      label: "My Account",
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      icon: Home,
      label: "Back to Home",
      href: "/",
      active: false,
    },
  ];

  return (
    <div className="h-full relative font-sans">
      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden fixed z-50 top-4 left-4 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Sidebar Navigation */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out transform font-sans",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex flex-col h-full p-4">
          <div className="py-4 pl-4">
            <Logo href="/" />
          </div>

          <nav className="flex-1 pt-8">
            <ul className="space-y-2">
              {routes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={cn(
                      "flex items-center gap-x-3 p-3 text-sm rounded-md hover:bg-gray-100 font-sans",
                      route.active ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-700"
                    )}
                  >
                    <route.icon className="h-5 w-5" />
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t pt-4 space-y-3">
            <div className="flex items-center p-3 gap-x-3">
              <div className="rounded-full bg-gray-100 p-1">
                <User className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium font-sans">{displayName}</p>
                <p className="text-xs text-gray-500 font-sans">{userEmail}</p>
              </div>
            </div>

            <div className="px-3">
              <LogoutButton
                redirectTo="/auth/login"
                className="w-full flex items-center gap-x-2 justify-center text-red-600 hover:text-red-700 hover:bg-red-50 border-red-100 font-sans rounded-md h-10 border"
              >
                <div className="flex items-center gap-x-2">
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </div>
              </LogoutButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:pl-72 min-h-screen bg-gray-50">
        <main className="h-full py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
