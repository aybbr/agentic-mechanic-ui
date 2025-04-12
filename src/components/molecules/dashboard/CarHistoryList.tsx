"use client";

import React from "react";
import { FileText, Car, Calendar, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Mock data for car history entries
const MOCK_HISTORY = [
  {
    id: "1",
    carName: "2020 Toyota Camry",
    date: "2023-12-15T14:30:00Z",
    status: "completed",
    score: 87,
    method: "file",
    files: 3
  },
  {
    id: "2",
    carName: "2018 Honda Accord",
    date: "2023-11-28T10:15:00Z",
    status: "completed",
    score: 92,
    method: "url",
    url: "https://example.com/car-listing/12345"
  },
  {
    id: "3",
    carName: "2019 Mazda CX-5",
    date: "2023-10-05T16:45:00Z",
    status: "completed",
    score: 65,
    method: "file",
    files: 2
  }
];

export function CarHistoryList() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-50";
    if (score >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Car Analysis History
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          View your previous car analyses and reports
        </p>
      </div>

      {MOCK_HISTORY.length === 0 ? (
        <div className="p-6 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-sm font-medium text-gray-900">No history yet</h3>
          <p className="text-xs text-gray-500 mt-1">
            Your car analysis history will appear here
          </p>
        </div>
      ) : (
        <div className="divide-y divide-gray-200">
          {MOCK_HISTORY.map((item) => (
            <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Car className="h-5 w-5 text-gray-500" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      {item.carName}
                    </h4>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <Calendar className="mr-1 h-3 w-3" />
                      {formatDate(item.date)}

                      <span className="mx-2">•</span>

                      <span>
                        {item.method === "file"
                          ? `${item.files} file${item.files !== 1 ? "s" : ""}`
                          : "URL analysis"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(item.score)}`}>
                    Score: {item.score}
                  </div>

                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <Button variant="outline" className="w-full text-sm" size="sm">
          Load More
        </Button>
      </div>
    </div>
  );
}
