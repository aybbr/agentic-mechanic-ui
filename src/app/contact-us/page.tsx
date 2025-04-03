import { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";

export const metadata: Metadata = {
  title: "Contact Us | Agentic Mechanic",
  description: "Get in touch with the Agentic Mechanic team. We&apos;re here to help with any questions or feedback.",
};

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Header with Logo */}
      <div className="absolute top-8 left-8 animate-fade-in">
        <Link href="/" className="flex items-center">
          <Logo href={null} />
        </Link>
      </div>

      <main className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-emerald-100">
            <div className="md:flex">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white p-8 md:w-1/3">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-emerald-50">
                      123 Innovation Drive<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a href="mailto:info@agenticmechanic.com" className="text-emerald-50 hover:text-white transition-colors">
                      info@agenticmechanic.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <a href="tel:+14155551234" className="text-emerald-50 hover:text-white transition-colors">
                      +1 (415) 555-1234
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                    <p className="text-emerald-50">
                      Monday - Friday: 9AM - 5PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://x.com/agenticmechanic" className="text-emerald-50 hover:text-white transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/company/agentic-mechanic" className="text-emerald-50 hover:text-white transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 md:w-2/3">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h1>
                <p className="text-gray-600 mb-8">
                  Have a question, feedback, or need assistance? Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/70 backdrop-blur-sm"
                        placeholder="Your first name"
                      />
                    </div>

                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/70 backdrop-blur-sm"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/70 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/70 backdrop-blur-sm"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/70 backdrop-blur-sm"
                      placeholder="Your message..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
