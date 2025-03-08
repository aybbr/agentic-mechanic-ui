import { useState } from "react";
import { X } from "lucide-react";
import { countries, Country } from "./countries";
import { z } from "zod";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  firstName: z.string().min(2, "First name is too short").max(50),
  lastName: z.string().min(2, "Last name is too short").max(50),
  email: z.string().email("Invalid email address"),
  country: z.string().min(2, "Please select your country"),
});

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      formSchema.parse(formData);
      setIsSubmitting(true);

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ firstName: "", lastName: "", email: "", country: "" });
      }, 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) newErrors[err.path[0].toString()] = err.message;
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              You&apos;re on the waitlist! We&apos;ll notify you when we launch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
            <p className="text-gray-600 mb-8">Be the first to know when we launch!</p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full rounded-lg border px-4 py-2.5 ${
                      errors.firstName ? "border-red-300" : "border-gray-300"
                    } focus:border-purple-500 focus:ring-purple-500`}
                  />
                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full rounded-lg border px-4 py-2.5 ${
                      errors.lastName ? "border-red-300" : "border-gray-300"
                    } focus:border-purple-500 focus:ring-purple-500`}
                  />
                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full rounded-lg border px-4 py-2.5 ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  } focus:border-purple-500 focus:ring-purple-500`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className={`w-full rounded-lg border px-4 py-2.5 ${
                    errors.country ? "border-red-300" : "border-gray-300"
                  } focus:border-purple-500 focus:ring-purple-500`}
                >
                  <option value="">Select a country</option>
                  {countries.map((country: Country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="mt-2 text-sm text-red-600">{errors.country}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
