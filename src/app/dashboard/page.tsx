"use client";

import { useState } from "react";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/components/auth/AuthProvider";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { Logo } from "@/components/common/Logo";
import Link from "next/link";
import { ChatInterface } from "@/components/chat/ChatInterface";

export default function DashboardPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"chat" | "history" | "account">("chat");

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <Logo href={null} />
                </Link>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`${
                      activeTab === "chat"
                        ? "border-green-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Chat
                  </button>
                  <button
                    onClick={() => setActiveTab("history")}
                    className={`${
                      activeTab === "history"
                        ? "border-green-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    History
                  </button>
                  <button
                    onClick={() => setActiveTab("account")}
                    className={`${
                      activeTab === "account"
                        ? "border-green-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Account
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-700 mr-4">
                  {user?.email}
                </p>
                <LogoutButton />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            {activeTab === "chat" && (
              <div className="h-[calc(100vh-4rem)]">
                <ChatInterface />
              </div>
            )}
            {activeTab === "history" && (
              <div className="py-6">
                <h2 className="text-2xl font-bold text-gray-900">Your History</h2>
                <p className="mt-4 text-gray-600">
                  Your past conversations and analysis will appear here.
                </p>
              </div>
            )}
            {activeTab === "account" && (
              <div className="py-6">
                <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
                <div className="mt-4 p-4 bg-white rounded-lg shadow">
                  <p>
                    <strong>Email:</strong> {user?.email}
                  </p>
                  <p className="mt-2">
                    <strong>Account created:</strong>{" "}
                    {user?.created_at
                      ? new Date(user.created_at).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
