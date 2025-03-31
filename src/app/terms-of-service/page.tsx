import { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";

export const metadata: Metadata = {
  title: "Terms of Service | Agentic Mechanic",
  description: "Terms of Service for Agentic Mechanic - Learn about the terms governing your use of our platform.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Header with Logo */}
      <div className="absolute top-8 left-8 animate-fade-in">
        <Link href="/" className="flex items-center">
          <Logo href={null} />
        </Link>
      </div>

      <main className="pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-emerald-100 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Agentic Mechanic. These terms and conditions outline the rules and regulations for the use of our website and services.
              </p>
              <p className="mb-4">
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Agentic Mechanic's website if you do not accept all of the terms and conditions stated on this page.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. License to Use</h2>
              <p className="mb-4">
                Unless otherwise stated, Agentic Mechanic and/or its licensors own the intellectual property rights for all material on the site. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
              </p>
              <p className="mb-4">You must not:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>Republish material from this website</li>
                <li>Sell, rent or sub-license material from the website</li>
                <li>Reproduce, duplicate or copy material from the website</li>
                <li>Redistribute content from Agentic Mechanic (unless content is specifically made for redistribution)</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. User Accounts</h2>
              <p className="mb-4">
                When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the service.
              </p>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Services and Pricing</h2>
              <p className="mb-4">
                We reserve the right to modify or discontinue, temporarily or permanently, any service with or without notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the service.
              </p>
              <p className="mb-4">
                All prices are subject to change without notice. We reserve the right to modify or discontinue any service without notice at any time.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Limitations of Liability</h2>
              <p className="mb-4">
                In no event shall Agentic Mechanic, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              <p className="mb-4">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at: <a href="mailto:legal@agenticmechanic.com" className="text-green-600 hover:text-green-700 transition-colors">legal@agenticmechanic.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
