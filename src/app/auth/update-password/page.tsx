"use client";

import { UpdatePasswordForm } from "@/components/auth/UpdatePasswordForm";
import { Logo } from "@/components/common/Logo";
import Link from "next/link";

export default function UpdatePasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex flex-col">
      {/* Header with Logo */}
      <div className="absolute top-8 left-8 animate-fade-in">
        <Link href="/" className="flex items-center">
          <Logo href={null} />
        </Link>
      </div>

      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Update Password</h1>
              <p className="text-gray-600 mt-2">
                Create a new password for your account
              </p>
            </div>

            <UpdatePasswordForm />
          </div>
        </div>
      </main>
    </div>
  );
}
