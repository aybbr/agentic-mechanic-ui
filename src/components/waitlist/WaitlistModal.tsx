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
  carOwnership: z.enum(["first_time", "current_owner", "previous_owner"], {
    required_error: "Please select your car ownership status",
  }),
  interestedIn: z.array(z.string()).min(1, "Please select at least one interest"),
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
    carOwnership: "",
    interestedIn: [] as string[],
  });

  if (!isOpen) return null;

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(value)
        ? prev.interestedIn.filter((item) => item !== value)
        : [...prev.interestedIn, value],
    }));
  };

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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          carOwnership: "",
          interestedIn: [],
        });
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
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full relative overflow-hidden">
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
                  Country of Residence
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Car Ownership Status
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="carOwnership"
                      value="first_time"
                      checked={formData.carOwnership === "first_time"}
                      onChange={(e) => setFormData({ ...formData, carOwnership: e.target.value })}
                      className="text-purple-600 focus:ring-purple-500 h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700">First-time car buyer</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="carOwnership"
                      value="current_owner"
                      checked={formData.carOwnership === "current_owner"}
                      onChange={(e) => setFormData({ ...formData, carOwnership: e.target.value })}
                      className="text-purple-600 focus:ring-purple-500 h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700">Current car owner</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="carOwnership"
                      value="previous_owner"
                      checked={formData.carOwnership === "previous_owner"}
                      onChange={(e) => setFormData({ ...formData, carOwnership: e.target.value })}
                      className="text-purple-600 focus:ring-purple-500 h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700">Previous car owner</span>
                  </label>
                </div>
                {errors.carOwnership && (
                  <p className="mt-2 text-sm text-red-600">{errors.carOwnership}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I&apos;m interested in (select all that apply)
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      name="interestedIn"
                      type="checkbox"
                      value="service_history"
                      checked={formData.interestedIn.includes("service_history")}
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                      className="text-purple-600 focus:ring-purple-500 h-4 w-4 rounded"
                    />
                    <span className="ml-2 text-gray-700">Service history analysis</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      name="interestedIn"
                      type="checkbox"
                      value="cost_prediction"
                      checked={formData.interestedIn.includes("cost_prediction")}
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                      className="text-purple-600 focus:ring-purple-500 h-4 w-4 rounded"
                    />
                    <span className="ml-2 text-gray-700">Future cost predictions</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      name="interestedIn"
                      type="checkbox"
                      value="market_comparison"
                      checked={formData.interestedIn.includes("market_comparison")}
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                      className="text-purple-600 focus:ring-purple-500 h-4 w-4 rounded"
                    />
                    <span className="ml-2 text-gray-700">Market price comparison</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      name="interestedIn"
                      type="checkbox"
                      value="negotiation"
                      checked={formData.interestedIn.includes("negotiation")}
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                      className="text-purple-600 focus:ring-purple-500 h-4 w-4 rounded"
                    />
                    <span className="ml-2 text-gray-700">Negotiation assistance</span>
                  </label>
                </div>
                {errors.interestedIn && (
                  <p className="mt-2 text-sm text-red-600">{errors.interestedIn}</p>
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
