"use client";

import React, { useRef, useState } from "react";
import { Globe, UploadCloud, Plus, Minus, Car, MapPin, CloudRain, Warehouse, Calendar, Navigation } from "lucide-react";

export default function GetStartedPage() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showInfoForm, setShowInfoForm] = useState(false);

  // Driving habits and environmental factors form state
  const [drivingInfo, setDrivingInfo] = useState({
    tripFrequency: "daily",
    tripLength: "mixed",
    coldStarts: "1-3",
    climate: "moderate",
    parking: "street",
    roadQuality: "good"
  });

  const handleDrivingInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDrivingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);
    // Simulate API call with driving info
    console.log("Analyzing with driving info:", drivingInfo);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsAnalyzing(false);
    setUrl("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(Array.from(e.target.files).slice(0, 5));
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFiles.length) return;

    setIsUploading(true);
    // Simulate API call with driving info
    console.log("Uploading with driving info:", drivingInfo);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsUploading(false);
    setSelectedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="container px-4 py-10 mx-auto max-w-6xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Get Started</h1>

      {/* Optional driving info form with expand/collapse functionality */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowInfoForm(!showInfoForm)}
        >
          <div className="flex items-center gap-3">
            <Car className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-semibold">
              Add Details for More Accurate Analysis
            </h2>
          </div>
          <button
            className="text-emerald-600 hover:text-emerald-700 rounded-full p-1"
          >
            {showInfoForm ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>

        {showInfoForm && (
          <>
            <p className="text-gray-600 mt-3 mb-4">
              Adding more details about your driving habits and environment helps us provide a more accurate analysis of maintenance costs and issues.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {/* Driving Habits Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-medium text-gray-700">Driving Frequency</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["daily", "few times a week", "weekends only", "rarely"].map((option) => (
                    <label
                      key={option}
                      className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer transition-colors ${
                        drivingInfo.tripFrequency === option
                          ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tripFrequency"
                        value={option}
                        checked={drivingInfo.tripFrequency === option}
                        onChange={handleDrivingInfoChange}
                        className="sr-only"
                      />
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Navigation className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-medium text-gray-700">Typical Trip Length</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["short (<10 miles)", "medium", "long (>30 miles)", "mixed"].map((option) => (
                    <label
                      key={option}
                      className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer transition-colors ${
                        drivingInfo.tripLength === option
                          ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tripLength"
                        value={option}
                        checked={drivingInfo.tripLength === option}
                        onChange={handleDrivingInfoChange}
                        className="sr-only"
                      />
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-medium text-gray-700">Cold Starts per Week</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["1-3", "4-7", "8+"].map((option) => (
                    <label
                      key={option}
                      className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer transition-colors ${
                        drivingInfo.coldStarts === option
                          ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="coldStarts"
                        value={option}
                        checked={drivingInfo.coldStarts === option}
                        onChange={handleDrivingInfoChange}
                        className="sr-only"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Environmental Factors Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <CloudRain className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-medium text-gray-700">Climate Conditions</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["cold/snow", "moderate", "hot/humid", "coastal/salty"].map((option) => (
                    <label
                      key={option}
                      className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer transition-colors ${
                        drivingInfo.climate === option
                          ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="climate"
                        value={option}
                        checked={drivingInfo.climate === option}
                        onChange={handleDrivingInfoChange}
                        className="sr-only"
                      />
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Warehouse className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-medium text-gray-700">Parking Situation</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["garage", "covered", "street", "varies"].map((option) => (
                    <label
                      key={option}
                      className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer transition-colors ${
                        drivingInfo.parking === option
                          ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="parking"
                        value={option}
                        checked={drivingInfo.parking === option}
                        onChange={handleDrivingInfoChange}
                        className="sr-only"
                      />
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-medium text-gray-700">Road Quality</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["poor/bumpy", "average", "good"].map((option) => (
                    <label
                      key={option}
                      className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer transition-colors ${
                        drivingInfo.roadQuality === option
                          ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="roadQuality"
                        value={option}
                        checked={drivingInfo.roadQuality === option}
                        onChange={handleDrivingInfoChange}
                        className="sr-only"
                      />
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* URL Input Section */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Analyze Car from URL</h2>
          <p className="text-gray-600 mb-6">
            Paste a URL to a car listing or advertisement to analyze it automatically.
          </p>

          <form onSubmit={handleUrlSubmit} className="flex flex-col flex-grow">
            <div className="mb-4 flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-semibold">Paste Car Advertisement URL</h3>
              </div>

              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                Advertisement URL
              </label>
              <input
                id="url"
                type="url"
                placeholder="https://example.com/car-listing"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div className="mt-auto">
              <button
                type="submit"
                disabled={isAnalyzing || !url.trim()}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Car"}
              </button>
            </div>
          </form>
        </div>

        {/* File Upload Section */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Upload Car Documents</h2>
          <p className="text-gray-600 mb-6">
            Upload service history or images of the car you want to analyze. Limited to 5 files (JPG, PNG, or PDF).
          </p>

          <form onSubmit={handleUpload} className="flex flex-col flex-grow">
            <div className="mb-4 flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <UploadCloud className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-semibold">Upload Documents</h3>
              </div>

              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />

                <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Drag and drop files here, or{" "}
                  <span className="text-emerald-600 font-medium cursor-pointer">
                    browse
                  </span>
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Up to 5 files (JPG, PNG, PDF) • Max 10MB each
                </p>
              </div>

              {selectedFiles.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700">
                    Selected files: {selectedFiles.length}
                  </p>
                  <ul className="text-xs text-gray-500 mt-1">
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-auto">
              <button
                type="submit"
                disabled={isUploading || selectedFiles.length === 0}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
              >
                {isUploading ? "Uploading..." : "Upload Files"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
