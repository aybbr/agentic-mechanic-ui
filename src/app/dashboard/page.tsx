"use client";

import React from "react";
import { FileUploadForm } from "@/components/molecules/dashboard/FileUploadForm";
import { UrlInputForm } from "@/components/molecules/dashboard/UrlInputForm";
import { Globe, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  const [url, setUrl] = React.useState("");
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const [isUploading, setIsUploading] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

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
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Account</h1>

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
                <Globe className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold">Paste Car Advertisement URL</h3>
              </div>

              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                Advertisement URL
              </label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com/car-listing"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="mt-auto">
              <Button
                type="submit"
                disabled={isAnalyzing || !url.trim()}
                className="w-full h-11 text-white bg-green-500 hover:bg-green-600"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Car"}
              </Button>
            </div>
          </form>
        </div>

        {/* File Upload Section */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Upload Car Images</h2>
          <p className="text-gray-600 mb-6">
            Upload images of the car you want to analyze. Limited to 5 files (JPG, PNG, or PDF).
          </p>

          <form onSubmit={handleUpload} className="flex flex-col flex-grow">
            <div className="mb-4 flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <UploadCloud className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold">Upload Car Documents</h3>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
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
                  <span
                    className="text-green-600 font-medium cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
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
              <Button
                type="submit"
                disabled={isUploading || selectedFiles.length === 0}
                className="w-full h-11 text-white bg-green-500 hover:bg-green-600"
              >
                {isUploading ? "Uploading..." : "Upload Files"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
