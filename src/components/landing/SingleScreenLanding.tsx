"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Upload, FileText, BarChart, ArrowRight, Menu, X, ChevronRight, Car, Clock, Shield, DollarSign } from "lucide-react";

export function SingleScreenLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Navigation */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
          <nav className="max-w-3xl mx-auto backdrop-blur-md shadow-lg rounded-full border border-white/20">
            <div className="px-8 py-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-blue-800">
                    Agentic<span className="text-blue-500">|</span>Mechanic
                  </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Features
                  </Link>
                  <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    How It Works
                  </Link>
                  <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Contact
                  </Link>
                  <span className="bg-blue-100/80 text-blue-800 px-2.5 py-1 rounded-full font-medium">
                    6
                  </span>
                </div>

                {/* Try It Now Button */}
                <div className="hidden md:block">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
                    Try It Now
                  </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-700 hover:text-blue-800 focus:outline-none"
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden backdrop-blur-md rounded-xl mt-2 shadow-lg mx-4 border border-white/20 fixed top-20 left-0 right-0 z-50">
                <div className="px-4 pt-2 pb-3 space-y-2">
                  <Link
                    href="#features"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50/50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50/50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How It Works
                  </Link>
                  <Link
                    href="#contact"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50/50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <button
                    className="w-full text-left px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full transition-all shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Try It Now
                  </button>
                </div>
              </div>
            )}
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36 pb-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Never Get Surprised By Hidden Car Problems Again
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Upload the car's service history and get instant insights to buy smarter and avoid hidden surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center transition-all shadow-md hover:shadow-lg">
                  Try It Now <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="border border-gray-300 hover:border-blue-500 bg-white/50 backdrop-blur-sm text-gray-700 hover:text-blue-600 px-6 py-3 rounded-full font-medium transition-all hover:shadow-md">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 max-w-md mx-auto animate-float">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                  <Upload size={48} className="mx-auto mb-4 text-blue-600" />
                  <p className="text-gray-600">Drop your service history here</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="flex items-start">
                    <FileText size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Service History Analysis</h3>
                      <p className="text-sm text-gray-600">Regular maintenance detected. Last oil change at 36,071 km.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <BarChart size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Cost Estimation</h3>
                      <p className="text-sm text-gray-600">Upcoming maintenance: ~$320 in the next 6 months</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -z-10 top-1/3 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -z-10 bottom-1/4 right-1/4 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Smart Car Buyers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered tools help you make informed decisions when buying a used car.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Service History Analyzer */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <FileText size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service History Analyzer</h3>
                <p className="text-gray-600 mb-4">
                  Upload service history images or text and get an AI-generated report detailing maintenance consistency, potential issues, and upcoming service needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Simple Upload – Drop your service log image—handwritten or printed—and we'll handle the rest.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Smart AI Analysis – Our AI decodes your log to spot patterns, issues, and future needs.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Clear Reports – Get a straightforward summary to make confident buying decisions.</span>
                  </li>
                </ul>
              </div>

              {/* Cost Estimator */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <DollarSign size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ownership Cost Estimator</h3>
                <p className="text-gray-600 mb-4">
                  Get detailed estimates for taxes, insurance, tire changes, and maintenance costs based on the car's history, age, and your location.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Personalized Estimates – Tailored to your driving habits, location, and the specific vehicle.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive Coverage – Includes taxes, insurance, maintenance, and unexpected repairs.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Future Planning – Forecast expenses for the next 1-5 years of ownership.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three simple steps to get insights about your potential car purchase.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="mb-6 flex justify-center">
                  <Upload size={48} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Upload Your Service Log</h3>
                <p className="text-gray-600 text-center">
                  Simply upload an image of the service history or paste text. We support handwritten logs, printed documents, and digital formats.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="mb-6 flex justify-center">
                  <Car size={48} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">AI Analyzes the Data</h3>
                <p className="text-gray-600 text-center">
                  Our advanced AI extracts and processes every detail with cutting-edge technology, identifying patterns and potential issues.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="mb-6 flex justify-center">
                  <FileText size={48} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Get Your Report</h3>
                <p className="text-gray-600 text-center">
                  Receive comprehensive insights on maintenance history, red flags, upcoming needs, and estimated ownership costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">See What Buyers Are Saying!</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Coming soon—real stories from users who saved time and money with Agentic Mechanic.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4 italic">
                  "This app made me feel like a pro at the dealership! I knew exactly what to look for and what questions to ask."
                </p>
                <p className="font-medium text-gray-900">— Future User</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4 italic">
                  "I avoided a costly mistake thanks to the service history analysis. It spotted maintenance issues the seller didn't mention."
                </p>
                <p className="font-medium text-gray-900">— Future User</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4 italic">
                  "The cost estimator was spot on! I was able to budget accurately for my first year of ownership."
                </p>
                <p className="font-medium text-gray-900">— Future User</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to buy your next car with confidence?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Start analyzing service histories and estimating ownership costs today.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-medium text-lg transition-colors">
              Sign Up Free
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Agentic Mechanic</h3>
              <p className="mb-4">
                AI-powered insights for smarter car buying decisions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Service History Analyzer</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Ownership Cost Estimator</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">VIN Lookup</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Careers</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-4">Stay Updated</h3>
              <p className="mb-4">Subscribe to our newsletter for the latest features and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Agentic Mechanic. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
