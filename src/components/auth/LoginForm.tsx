"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Loader2 } from "lucide-react";
import { getGradient } from "@/styles/theme";

type LoginFormProps = {
  redirectTo?: string;
};

export function LoginForm({ redirectTo = "/dashboard/get-started" }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      router.push(redirectTo);
      router.refresh();
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      <div className="space-y-4 animate-fade-in animation-delay-400">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <Mail size={16} className="text-gray-400" />
            <span>Email</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <Lock size={16} className="text-gray-400" />
            <span>Password</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
            placeholder="••••••••"
          />
        </div>
      </div>

      <div className="flex items-center justify-end animate-fade-in animation-delay-450">
        <Link href="/auth/reset-password" className="text-sm text-green-600 hover:text-green-800 transition-colors">
          Forgot your password?
        </Link>
      </div>

      <div className="animate-fade-in animation-delay-500">
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r ${getGradient('button', 'primary')} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200`}
        >
          {loading ? (
            <div className="flex items-center">
              <Loader2 size={18} className="animate-spin mr-2" />
              Logging in...
            </div>
          ) : (
            "Log in"
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 animate-fade-in">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 text-center animate-fade-in animation-delay-600">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="font-medium text-green-600 hover:text-green-500 transition-colors">
            Create an account
          </Link>
        </p>
      </div>
    </form>
  );
}
