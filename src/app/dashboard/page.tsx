"use client";

import React, { useState } from "react";
import { useUser } from "@/components/auth/UserContext";

export default function DashboardPage() {
  const { profile, updateProfile, isLoading } = useUser();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    averageDistancePerYear: "",
    distanceUnit: "km" as "km" | "miles",
    drivingEnvironment: "mixed" as "city" | "highway" | "mixed",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Initialize form data when profile is loaded
  React.useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.first_name || "",
        lastName: profile.last_name || "",
        country: profile.country || "",
        city: profile.city || "",
        averageDistancePerYear: profile.average_distance_per_year?.toString() || "",
        distanceUnit: profile.distance_unit || "km",
        drivingEnvironment: profile.driving_environment || "mixed",
      });
    }
  }, [profile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccessMessage("");

    try {
      await updateProfile({
        first_name: formData.firstName,
        last_name: formData.lastName,
        country: formData.country,
        city: formData.city,
        average_distance_per_year: formData.averageDistancePerYear ? Number(formData.averageDistancePerYear) : undefined,
        distance_unit: formData.distanceUnit,
        driving_environment: formData.drivingEnvironment,
      });
      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container px-4 py-10 mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-4">My Account</h1>
          <div className="flex justify-center items-center h-40">
            <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-10 mx-auto max-w-4xl">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-4">My Account</h1>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
              {successMessage}
            </div>
          )}

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="averageDistancePerYear" className="block text-sm font-medium text-gray-700 mb-1">
                Average Distance Per Year
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="averageDistancePerYear"
                  name="averageDistancePerYear"
                  value={formData.averageDistancePerYear}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
                <select
                  name="distanceUnit"
                  value={formData.distanceUnit}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="km">km</option>
                  <option value="miles">miles</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="drivingEnvironment" className="block text-sm font-medium text-gray-700 mb-1">
                Driving Environment
              </label>
              <select
                id="drivingEnvironment"
                name="drivingEnvironment"
                value={formData.drivingEnvironment}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="city">City</option>
                <option value="highway">Highway</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSaving}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
