"use client";

import { SignupForm } from "@/components/auth/SignupForm";
import { Logo } from "@/components/common/Logo";
import Link from "next/link";

export default function SignupPage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
              <p className="text-gray-600 mt-2">
                Join Agentic Mechanic to get started
              </p>
            </div>

            <SignupForm />
          </div>
        </div>
      </main>
    </div>
  );
}
