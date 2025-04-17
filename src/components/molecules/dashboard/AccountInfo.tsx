"use client";

import React from "react";
import { User, Mail, Calendar, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/components/auth/AuthProvider";

export function AccountInfo() {
  const { user } = useAuth();

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";

    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Account Information
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Manage your account details and settings
        </p>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
            <User className="h-8 w-8 text-green-600" />
          </div>

          <div>
            <h4 className="text-xl font-medium text-gray-900">
              {user?.email?.split('@')[0] || "User"}
            </h4>
            <p className="text-sm text-gray-600">
              {user?.email || "Email not available"}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200">
            <div className="sm:w-1/3 flex items-center text-sm font-medium text-gray-500">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </div>
            <div className="sm:w-2/3 mt-1 sm:mt-0 text-sm text-gray-900">
              {user?.email || "Not available"}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200">
            <div className="sm:w-1/3 flex items-center text-sm font-medium text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              Account Created
            </div>
            <div className="sm:w-2/3 mt-1 sm:mt-0 text-sm text-gray-900">
              {formatDate(user?.created_at)}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200">
            <div className="sm:w-1/3 flex items-center text-sm font-medium text-gray-500">
              <User className="h-4 w-4 mr-2" />
              Current Plan
            </div>
            <div className="sm:w-2/3 mt-1 sm:mt-0 text-sm text-gray-900 flex items-center">
              <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-medium">
                Free Tier
              </span>
              <Button variant="ghost" size="sm" className="ml-2 text-xs">
                <Edit2 className="h-3 w-3 mr-1" />
                Upgrade
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <Button variant="outline" className="flex-1">
            Reset Password
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
