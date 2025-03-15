"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { LogoutButton } from "@/components/auth/LogoutButton";
import Link from "next/link";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <LogoutButton className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors">
                  Sign Out
                </LogoutButton>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Welcome!</h2>
                <p className="text-gray-600">
                  You are logged in as: <span className="font-medium">{user?.email}</span>
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="/"
                    className="bg-white border border-gray-200 hover:border-blue-500 rounded-lg p-4 flex flex-col items-center text-center transition-colors"
                  >
                    <span className="text-blue-600 font-medium">Home</span>
                    <span className="text-sm text-gray-500 mt-1">Return to the main site</span>
                  </Link>

                  <Link
                    href="/dashboard/profile"
                    className="bg-white border border-gray-200 hover:border-blue-500 rounded-lg p-4 flex flex-col items-center text-center transition-colors"
                  >
                    <span className="text-blue-600 font-medium">Profile</span>
                    <span className="text-sm text-gray-500 mt-1">Manage your account</span>
                  </Link>

                  <Link
                    href="/dashboard/settings"
                    className="bg-white border border-gray-200 hover:border-blue-500 rounded-lg p-4 flex flex-col items-center text-center transition-colors"
                  >
                    <span className="text-blue-600 font-medium">Settings</span>
                    <span className="text-sm text-gray-500 mt-1">Configure your preferences</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
