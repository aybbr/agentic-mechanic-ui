"use client";

import React from "react";

export default function PlanPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Plan</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Current Subscription</h2>
        <p className="text-gray-600 mb-6">
          Manage your subscription and upgrade options.
        </p>

        {/* This section will be implemented later */}
        <div className="p-8 text-center border border-dashed border-gray-300 rounded-md">
          <p className="text-gray-500">Pricing options will be available soon.</p>
        </div>
      </div>
    </div>
  );
}
