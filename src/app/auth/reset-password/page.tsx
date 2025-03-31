import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { Logo } from "@/components/common/Logo";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reset Password | Agentic Mechanic",
  description: "Reset your Agentic Mechanic account password",
};

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-emerald-100 to-white -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-200/40 via-emerald-100/30 to-transparent -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-emerald-50/50 to-transparent -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_var(--tw-gradient-stops))] from-emerald-100/20 via-white/30 to-transparent -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Header with logo */}
      <div className="absolute top-8 left-8 animate-fade-in">
        <Link href="/" className="flex items-center">
          <Logo href={null} />
        </Link>
      </div>

      <div className="w-full max-w-md px-4 z-10 animate-fade-in">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl border border-white/20 overflow-hidden animate-float">
          <div className="px-8 py-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <h1 className="text-2xl font-bold animate-fade-in animation-delay-100">Reset Password</h1>
            <p className="text-green-100 mt-1 animate-fade-in animation-delay-200">We&apos;ll help you get back into your account</p>
          </div>

          <div className="p-8 animate-fade-in animation-delay-300">
            <ResetPasswordForm />

            <div className="mt-6 text-center">
              <Link
                href="/auth/login"
                className="text-sm text-gray-500 hover:text-green-600 transition-colors"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
