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

    // Driving habits
    tripFrequency: "daily" as "daily" | "few times a week" | "weekends only" | "rarely",
    tripLength: "mixed" as "short (<10 miles)" | "medium" | "long (>30 miles)" | "mixed",
    coldStartsPerWeek: "1-3" as "1-3" | "4-7" | "8+",

    // Environmental factors
    climateConditions: "moderate" as "cold/snow" | "moderate" | "hot/humid" | "coastal/salty",
    parkingSituation: "street" as "garage" | "covered" | "street" | "varies",
    roadQuality: "good" as "poor/bumpy" | "average" | "good",
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

        // Driving habits
        tripFrequency: profile.trip_frequency || "daily",
        tripLength: profile.trip_length || "mixed",
        coldStartsPerWeek: profile.cold_starts_per_week || "1-3",

        // Environmental factors
        climateConditions: profile.climate_conditions || "moderate",
        parkingSituation: profile.parking_situation || "street",
        roadQuality: profile.road_quality || "good",
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

        // Driving habits
        trip_frequency: formData.tripFrequency,
        trip_length: formData.tripLength,
        cold_starts_per_week: formData.coldStartsPerWeek,

        // Environmental factors
        climate_conditions: formData.climateConditions,
        parking_situation: formData.parkingSituation,
        road_quality: formData.roadQuality,
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

          <div className="space-y-6">
            {/* Personal Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h2>
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
            </div>

            {/* Location */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Location</h2>
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
            </div>

            {/* Driving Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Driving Information</h2>
              <div className="space-y-4">
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

                <div>
                  <label htmlFor="tripFrequency" className="block text-sm font-medium text-gray-700 mb-1">
                    Driving Frequency
                  </label>
                  <select
                    id="tripFrequency"
                    name="tripFrequency"
                    value={formData.tripFrequency}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="daily">Daily</option>
                    <option value="few times a week">Few times a week</option>
                    <option value="weekends only">Weekends only</option>
                    <option value="rarely">Rarely</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="tripLength" className="block text-sm font-medium text-gray-700 mb-1">
                    Typical Trip Length
                  </label>
                  <select
                    id="tripLength"
                    name="tripLength"
                    value={formData.tripLength}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="short (<10 miles)">Short (&lt;10 miles)</option>
                    <option value="medium">Medium</option>
                    <option value="long (>30 miles)">Long (&gt;30 miles)</option>
                    <option value="mixed">Mixed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="coldStartsPerWeek" className="block text-sm font-medium text-gray-700 mb-1">
                    Cold Starts per Week
                  </label>
                  <select
                    id="coldStartsPerWeek"
                    name="coldStartsPerWeek"
                    value={formData.coldStartsPerWeek}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="1-3">1-3</option>
                    <option value="4-7">4-7</option>
                    <option value="8+">8+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Environmental Factors */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Environmental Factors</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="climateConditions" className="block text-sm font-medium text-gray-700 mb-1">
                    Climate Conditions
                  </label>
                  <select
                    id="climateConditions"
                    name="climateConditions"
                    value={formData.climateConditions}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="cold/snow">Cold/Snow</option>
                    <option value="moderate">Moderate</option>
                    <option value="hot/humid">Hot/Humid</option>
                    <option value="coastal/salty">Coastal/Salty</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="parkingSituation" className="block text-sm font-medium text-gray-700 mb-1">
                    Parking Situation
                  </label>
                  <select
                    id="parkingSituation"
                    name="parkingSituation"
                    value={formData.parkingSituation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="garage">Garage</option>
                    <option value="covered">Covered</option>
                    <option value="street">Street</option>
                    <option value="varies">Varies</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="roadQuality" className="block text-sm font-medium text-gray-700 mb-1">
                    Road Quality
                  </label>
                  <select
                    id="roadQuality"
                    name="roadQuality"
                    value={formData.roadQuality}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="poor/bumpy">Poor/Bumpy</option>
                    <option value="average">Average</option>
                    <option value="good">Good</option>
                  </select>
                </div>
              </div>
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
