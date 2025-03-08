import { ChatInterface } from "@/components/chat/ChatInterface";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/common/Logo";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50/50 to-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-gradient-to-b from-white/80 to-white/40">
        <nav className="max-w-7xl mx-auto backdrop-blur-md shadow-lg rounded-full border border-white/20">
          <div className="px-8 py-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <ArrowLeft size={20} />
                  <span>Back to Home</span>
                </Link>
                <Logo href="/" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content with proper spacing */}
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* URL Input Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-purple-100/30 h-[calc(100vh-8rem)] overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Try Our AI Analysis</h2>
              <p className="text-gray-600 mb-6">
                Enter a car listing URL or upload service history documents to get instant insights.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                    Car Listing URL
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="url"
                      id="url"
                      className="block w-full rounded-l-md border-gray-300 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                      placeholder="https://example.com/car-listing"
                    />
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      Analyze
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-2 text-gray-500">or</span>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Service History
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md hover:border-purple-500 transition-colors">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Interface with adjusted height */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100/30 overflow-hidden h-[calc(100vh-8rem)]">
              <ChatInterface />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
