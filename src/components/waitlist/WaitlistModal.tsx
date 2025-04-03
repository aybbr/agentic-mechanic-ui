import { useState, useMemo, useRef, useEffect } from "react";
import { X, Check, Search, ChevronDown } from "lucide-react";
import { countries } from "./countries";
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
  carOwnership: z.string().refine((val) => ["first_time", "current_owner", "previous_owner"].includes(val), {
    message: "Please select an option"
  }),
  interestedIn: z.array(z.string()).min(1, "Please select at least one interest"),
});

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [countrySearch, setCountrySearch] = useState("");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    carOwnership: "",
    interestedIn: [] as string[],
  });

  // Filter countries based on search input
  const filteredCountries = useMemo(() => {
    if (!countrySearch) return countries;
    const search = countrySearch.toLowerCase();
    return countries.filter(country =>
      country.name.toLowerCase().includes(search)
    );
  }, [countrySearch]);

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get selected country name
  const selectedCountryName = useMemo(() => {
    if (!formData.country) return "";
    const country = countries.find(c => c.code === formData.country);
    return country ? country.name : "";
  }, [formData.country]);

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
                    } focus:border-green-500 focus:ring-green-500 bg-white/70 backdrop-blur-sm`}
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
                    } focus:border-green-500 focus:ring-green-500 bg-white/70 backdrop-blur-sm`}
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
                  } focus:border-green-500 focus:ring-green-500 bg-white/70 backdrop-blur-sm`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="country-input" className="block text-sm font-medium text-gray-700 mb-2">
                  Country of Residence
                </label>
                <div className="relative" ref={countryDropdownRef}>
                  <div
                    className={`flex items-center justify-between w-full rounded-lg border px-4 py-2.5 cursor-pointer ${
                      errors.country ? "border-red-300" : "border-gray-300"
                    } focus:border-green-500 bg-white/70 backdrop-blur-sm`}
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  >
                    <span className={selectedCountryName ? "text-gray-900" : "text-gray-400"}>
                      {selectedCountryName || "Select your country"}
                    </span>
                    <ChevronDown size={18} className="text-gray-500" />
                  </div>

                  {isCountryDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
                      <div className="sticky top-0 bg-white p-2 border-b border-gray-100">
                        <div className="relative">
                          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            id="country-input"
                            placeholder="Search countries..."
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 rounded-md border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                      <ul className="py-1">
                        {filteredCountries.length === 0 ? (
                          <li className="px-4 py-2 text-gray-500 text-sm">No countries found</li>
                        ) : (
                          filteredCountries.map((country) => (
                            <li
                              key={country.code}
                              className={`px-4 py-2 cursor-pointer hover:bg-green-50 flex items-center ${
                                formData.country === country.code ? "bg-green-50" : ""
                              }`}
                              onClick={() => {
                                setFormData({ ...formData, country: country.code });
                                setIsCountryDropdownOpen(false);
                                setCountrySearch("");
                              }}
                            >
                              <span className="flex-grow">{country.name}</span>
                              {formData.country === country.code && (
                                <Check size={16} className="text-green-600" />
                              )}
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  )}
                </div>
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
                      className="text-green-600 focus:ring-green-500 h-4 w-4"
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
                      className="text-green-600 focus:ring-green-500 h-4 w-4"
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
                      className="text-green-600 focus:ring-green-500 h-4 w-4"
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
                      className="text-green-600 focus:ring-green-500 h-4 w-4 rounded"
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
                      className="text-green-600 focus:ring-green-500 h-4 w-4 rounded"
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
                      className="text-green-600 focus:ring-green-500 h-4 w-4 rounded"
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
                      className="text-green-600 focus:ring-green-500 h-4 w-4 rounded"
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
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 mt-8"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
