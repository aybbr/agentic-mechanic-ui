"use client";

import React, { useState, useRef } from "react";
import { UploadCloud, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

const MAX_FILES = 5;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

type FileWithPreview = {
  file: File;
  preview: string;
  type: "image" | "pdf";
};

export function FileUploadForm() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    // Reset error
    setError(null);

    // Check if adding new files would exceed limit
    if (files.length + selectedFiles.length > MAX_FILES) {
      setError(`You can only upload up to ${MAX_FILES} files.`);
      return;
    }

    // Validate file types and size
    const newFiles: FileWithPreview[] = [];

    for (const file of selectedFiles) {
      // Check file type
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError("Only JPEG, PNG, and PDF files are allowed.");
        continue;
      }

      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        setError("Files must be less than 10MB.");
        continue;
      }

      // Create file preview
      const isImage = file.type.startsWith("image/");
      const preview = isImage
        ? URL.createObjectURL(file)
        : "/pdf-placeholder.png"; // You would need to create this asset

      newFiles.push({
        file,
        preview,
        type: isImage ? "image" : "pdf"
      });
    }

    setFiles(prev => [...prev, ...newFiles]);

    // Reset the input to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => {
      const updatedFiles = [...prev];

      // If it's an image, revoke the object URL to avoid memory leaks
      if (updatedFiles[index].type === "image") {
        URL.revokeObjectURL(updatedFiles[index].preview);
      }

      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setError("Please select at least one file to upload.");
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      // Simulate upload
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log("Files to be uploaded:", files.map(f => f.file));

      // Reset state after successful upload
      setFiles([]);

    } catch (error) {
      console.error("Error uploading files:", error);
      setError("An error occurred while uploading. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <UploadCloud className="w-5 h-5 text-green-600" />
        Upload Car Documents
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        Upload images or PDF documents related to the car (service history, vehicle reports, etc.).
      </p>

      <div className="mb-4">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors
            ${error ? 'border-red-300' : 'border-gray-300'}
            ${files.length >= MAX_FILES ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".jpg,.jpeg,.png,.pdf"
            disabled={files.length >= MAX_FILES}
          />

          <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop files here, or <span className="text-green-600 font-medium">browse</span>
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Up to {MAX_FILES} files (JPG, PNG, PDF) • Max 10MB each
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>

      {files.length > 0 && (
        <div className="space-y-3 mb-4">
          <h4 className="text-sm font-medium text-gray-700">Selected Files ({files.length}/{MAX_FILES})</h4>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-50 rounded p-2">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 rounded bg-gray-200 mr-2 overflow-hidden">
                    {file.type === "image" ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={file.preview}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <FileText className="h-6 w-6 text-gray-500" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="ml-2 flex-shrink-0 text-gray-400 hover:text-red-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button
        onClick={handleUpload}
        disabled={files.length === 0 || isUploading}
        className="w-full"
      >
        {isUploading ? "Uploading..." : "Upload Files"}
      </Button>
    </div>
  );
}
