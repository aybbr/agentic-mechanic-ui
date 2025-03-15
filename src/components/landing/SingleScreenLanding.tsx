"use client";

import { useState } from "react";
import Link from "next/link";
import { Upload, FileText, BarChart, ArrowRight, Menu, X, ChevronRight, DollarSign } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { WaitlistModal } from "@/components/waitlist/WaitlistModal";
//import { PricingSection } from "../pricing/PricingSection";

export function SingleScreenLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Navigation */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-white overflow-hidden">
        {/* Updated background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-blue-100/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-blue-50/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_var(--tw-gradient-stops))] from-blue-100/20 via-white/30 to-transparent"></div>

        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
          <nav className="max-w-3xl mx-auto backdrop-blur-md shadow-lg rounded-full border border-white/20">
            <div className="px-8 py-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Logo />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Features
                  </Link>
                  <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    How It Works
                  </Link>
                  {/* <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Pricing
                  </Link> */}
                  <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Contact
                  </Link>
                </div>

                {/* Try It Now Button */}
                <div className="hidden md:block">
                  <button
                    onClick={openWaitlist}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
                  >
                    Join Waitlist
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
                    onClick={openWaitlist}
                  >
                    Join Waitlist
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
              Discover the True Cost of Your Next Car.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
              Agentic Mechanic combines your driving habits, location, and car details to reveal every expense—from taxes to tires.
                Upload any car&apos;s service history and instantly understand its true condition and uncover future costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWaitlist}
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                >
                  Join Waitlist <ArrowRight size={18} className="ml-2" />
                </button>
                <Link href="/how-it-works" className="border border-gray-300 hover:border-purple-500 bg-white/50 backdrop-blur-sm text-gray-700 hover:text-purple-600 px-6 py-3 rounded-full font-medium transition-all hover:shadow-md">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 max-w-md mx-auto animate-float">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                  <Upload size={48} className="mx-auto mb-4 text-blue-600" />
                  <p className="text-gray-600">Drop any service history - we can read handwritten logs, scanned documents, or digital files</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="flex items-start">
                    <FileText size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Smart History Analysis</h3>
                      <p className="text-sm text-gray-600">Major repairs identified: Transmission replaced at 85,000 km. Next major service due in 5,000 km.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <BarChart size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Cost Prediction</h3>
                      <p className="text-sm text-gray-600">Estimated maintenance costs for next 12 months: $2,800 (Including timing belt replacement)</p>
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
        <section id="features" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            {/* ... existing background elements ... */}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Make Informed Decisions, Avoid Costly Mistakes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don&apos;t rely on guesswork or seller promises. Get data-driven insights about any used car&apos;s true condition and future costs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Service History Analyzer */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <FileText size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Service History Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Our AI reads and analyzes any service history format, uncovering hidden issues, maintenance patterns, and potential red flags that could cost you thousands.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Identifies missed maintenance and potential future problems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Verifies if service intervals match manufacturer recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Spots patterns that could indicate recurring problems</span>
                  </li>
                </ul>
              </div>

              {/* Cost Estimator */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <DollarSign size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Cost Predictions</h3>
                <p className="text-gray-600 mb-4">
                  Know exactly what you&apos;re getting into with accurate maintenance and repair cost forecasts based on the car&apos;s actual history and condition.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Predicts upcoming maintenance costs with timeline estimates</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Compares costs against similar models in your area</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Helps negotiate better prices based on needed repairs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50 relative overflow-hidden">
          {/* ... existing background elements ... */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Three Steps to Smarter Car Buying</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get detailed insights about any used car in minutes, not hours.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Upload Service History</h3>
                <p className="text-gray-600 text-center">
                  Simply snap a photo or upload the service history. We handle all formats - even messy handwritten logs.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="mb-6 flex justify-center">
                  <FileText size={48} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Get Instant Analysis</h3>
                <p className="text-gray-600 text-center">
                  Our AI analyzes the history, identifies issues, and predicts future maintenance needs and costs.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="mb-6 flex justify-center">
                  <BarChart size={48} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Make Better Decisions</h3>
                <p className="text-gray-600 text-center">
                  Use our insights to negotiate better prices, avoid problem cars, and budget for future costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <PricingSection openWaitlist={openWaitlist} /> */}

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Smart Car Buyers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be among the first to access our AI-powered car history analysis tool.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4 italic">
                  &ldquo;I almost bought a car with transmission issues that would have cost $4,000 to fix. This tool spotted the warning signs in the service history that I missed.&rdquo;
                </p>
                <p className="font-medium text-gray-900">— Early Beta User</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4 italic">
                  &ldquo;The cost predictions were spot on. I used them to negotiate $2,500 off the price because of upcoming maintenance needs.&rdquo;
                </p>
                <p className="font-medium text-gray-900">— Early Beta User</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4 italic">
                  &ldquo;Finally, a tool that makes sense of messy service records. Saved me hours of research and helped me avoid a money pit.&rdquo;
                </p>
                <p className="font-medium text-gray-900">— Early Beta User</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/30 via-transparent to-transparent"></div>

          {/* Car gauge background element */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.07]">
            {/* Outer circle */}
            <div className="absolute inset-0 border-[40px] border-white/40 rounded-full"></div>
            {/* Inner circle */}
            <div className="absolute inset-[100px] border-[20px] border-white/30 rounded-full"></div>
            {/* Gauge markings */}
            <div className="absolute inset-[60px] flex items-center justify-center">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-8 bg-white/60"
                  style={{ transform: `rotate(${i * 30}deg) translateY(-240px)` }}
                ></div>
              ))}
            </div>
            {/* Gauge numbers */}
            <div className="absolute inset-[80px] flex items-center justify-center">
              {[0, 2, 4, 6, 8].map((num, i) => (
                <div
                  key={i}
                  className="absolute text-white/60 text-2xl font-bold"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-220px) rotate(-${i * 45}deg)`
                  }}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl font-bold mb-6">Be First to Access Smart Car History Analysis</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our waitlist to get early access and special launch pricing. Start making data-driven car buying decisions.
            </p>
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

      {/* Add modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}
