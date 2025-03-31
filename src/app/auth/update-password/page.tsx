import { UpdatePasswordForm } from "@/components/auth/UpdatePasswordForm";
import { Logo } from "@/components/common/Logo";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Update Password | Agentic Mechanic",
  description: "Set a new password for your Agentic Mechanic account",
};

export default function UpdatePasswordPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-white -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-blue-100/30 to-transparent -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-blue-50/50 to-transparent -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_var(--tw-gradient-stops))] from-blue-100/20 via-white/30 to-transparent -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Header with logo */}
      <div className="absolute top-8 left-8 animate-fade-in">
        <Link href="/" className="flex items-center">
          <Logo href={null} />
        </Link>
      </div>

      <div className="w-full max-w-md px-4 z-10 animate-fade-in">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl border border-white/20 overflow-hidden animate-float">
          <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <h1 className="text-2xl font-bold animate-fade-in animation-delay-100">Set New Password</h1>
            <p className="text-blue-100 mt-1 animate-fade-in animation-delay-200">Create a secure password for your account</p>
          </div>

          <div className="p-8 animate-fade-in animation-delay-300">
            <UpdatePasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
}
