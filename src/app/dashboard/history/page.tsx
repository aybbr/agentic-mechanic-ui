"use client";

import React from "react";
import { CarHistoryList } from "@/components/molecules/dashboard/CarHistoryList";

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My History</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Your Car Analysis History</h2>
        <p className="text-gray-600 mb-6">
          View your past car analysis results and reports.
        </p>
        <CarHistoryList />
      </div>
    </div>
  );
}
