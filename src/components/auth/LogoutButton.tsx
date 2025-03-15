"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

type LogoutButtonProps = {
  redirectTo?: string;
  className?: string;
  children?: React.ReactNode;
};

export function LogoutButton({
  redirectTo = "/",
  className = "text-red-600 hover:text-red-800 font-medium",
  children = "Log out"
}: LogoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    setLoading(true);

    try {
      await supabase.auth.signOut();
      router.push(redirectTo);
      router.refresh();
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={`${className} ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {loading ? "Logging out..." : children}
    </button>
  );
}
