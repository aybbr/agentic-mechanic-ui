"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

// Define the profile data type
interface UserProfile {
  id: string;
  first_name: string;
  last_name: string;
  country?: string;
  city?: string;
  average_distance_per_year?: number;
  distance_unit?: 'km' | 'miles';
  driving_environment?: 'city' | 'highway' | 'mixed';
  stripe_customer_id?: string;
  created_at?: string;
  updated_at?: string;
}

// Define the context type
interface UserContextType {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
}

// Create the context with default values
const UserContext = createContext<UserContextType>({
  user: null,
  profile: null,
  isLoading: true,
  updateProfile: async () => {},
});

// Custom hook to access the user context
export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user || !isAuthenticated) {
        setProfile(null);
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error);
        } else if (data) {
          setProfile(data as UserProfile);
        }
      } catch (error) {
        console.error("Unexpected error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!authLoading) {
      fetchProfile();
    }
  }, [user, isAuthenticated, authLoading, supabase]);

  // Function to update the user profile
  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user || !profile) return;

    try {
      const { error } = await supabase
        .from("profiles")
        .update(data)
        .eq("id", user.id);

      if (error) {
        throw error;
      }

      // Update local state
      setProfile({ ...profile, ...data });
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        profile,
        isLoading: isLoading || authLoading,
        updateProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
