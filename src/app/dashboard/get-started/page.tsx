"use client";

import React, { useRef, useState } from "react";
import { Globe, UploadCloud } from "lucide-react";

export default function GetStartedPage() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);
    // Simulate API call
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
    // Simulate API call
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
