"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Globe } from "lucide-react";

export function UrlInputForm() {
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsSubmitting(true);

    try {
      // This would be replaced with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Submitted URL:", url);

      // Reset form after successful submission
      setUrl("");
    } catch (error) {
      console.error("Error submitting URL:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Globe className="w-5 h-5 text-green-600" />
        Paste Car Advertisement URL
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        Enter the URL of the car advertisement you want to analyze.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="car-url" className="block text-sm font-medium text-gray-700 mb-1">
            Advertisement URL
          </label>
          <Input
            id="car-url"
            type="url"
            placeholder="https://example.com/car-listing"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Analyzing..." : "Analyze Car"}
        </Button>
      </form>
    </div>
  );
}
