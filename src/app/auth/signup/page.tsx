"use client";

import { SignupForm } from "@/components/auth/SignupForm";
import { Logo } from "@/components/common/Logo";
import Link from "next/link";
import Image from "next/image";
import { getGradient } from "@/styles/theme";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden">
      {/* Background gradients */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradient('hero', 'primary')} z-0`}></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-200/40 via-green-100/30 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-green-50/50 to-transparent z-0"></div>

      {/* Header with Logo */}
      <header className="relative z-10 p-8">
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Logo href={null} />
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center relative z-10 px-4 py-8">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row shadow-xl rounded-2xl overflow-hidden">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white/90 backdrop-blur-sm p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold text-gray-900">Create your account</h1>
              <p className="text-gray-600 mt-2 mb-8">
                Join Agentic Mechanic to get AI-powered insights for your vehicle
              </p>

              <SignupForm />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 bg-emerald-50 hidden lg:block relative overflow-hidden">
            {/* Modern Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-green-500/5 to-transparent z-10"></div>

            <Image
              src="/images/signup.png"
              alt="Car mechanic using AI technology"
              width={800}
              height={1000}
              className="object-cover w-full h-full"
              priority
            />

            {/* Modern Content Card */}
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 z-20">
              <h2 className="text-2xl font-bold mb-2 text-emerald-800">Don&apos;t rely on guesswork or seller promises</h2>
              <p className="text-sm text-gray-700">
                Our AI helps you save time and money when buying or maintaining your vehicle.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 p-4 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Agentic Mechanic. All rights reserved.</p>
      </footer>
    </div>
  );
}
