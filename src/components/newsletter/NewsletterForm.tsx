import { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      // Validate email
      emailSchema.parse(email);

      setIsSubmitting(true);

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to subscribe");
      }

      // Success
      setSuccess(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={isSubmitting || success}
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isSubmitting || success}
          >
            {isSubmitting ? "Subscribing..." : success ? "Subscribed!" : "Subscribe"}
          </button>
        </div>
        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        {success && <p className="text-green-400 text-sm mt-1">Thanks for subscribing!</p>}
      </form>
    </div>
  );
}
