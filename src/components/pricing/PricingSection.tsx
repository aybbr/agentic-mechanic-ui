import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingSectionProps {
  openWaitlist: () => void;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  perAnalysis?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free Trial",
    price: "$0",
    description: "Try our service with a sample report",
    features: [
      "Sample vehicle history analysis",
      "Basic cost prediction",
      "Limited feature access",
      "24-hour access"
    ]
  },
  {
    name: "Single Analysis",
    price: "$35",
    description: "Perfect for one-time car evaluation",
    features: [
      "Full vehicle history analysis",
      "Detailed cost predictions",
      "Maintenance timeline",
      "Export to PDF",
      "30-day access to report"
    ],
    perAnalysis: "$35/report"
  },
  {
    name: "Bundle of 3",
    price: "$90",
    description: "Compare multiple vehicles",
    features: [
      "Everything in Single Analysis",
      "Compare vehicles side by side",
      "Priority support",
      "60-day access to reports",
      "Save $15 vs single reports"
    ],
    isPopular: true,
    perAnalysis: "$30/report"
  },
  {
    name: "Bundle of 5",
    price: "$140",
    description: "Best for serious car shoppers",
    features: [
      "Everything in Bundle of 3",
      "Extended 90-day access",
      "Vehicle price negotiation tips",
      "Market comparison data",
      "Save $35 vs single reports"
    ],
    perAnalysis: "$28/report"
  }
];

export function PricingSection({ openWaitlist }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your car buying journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`relative ${tier.isPopular ? 'border-purple-400 shadow-lg' : ''}`}>
              {tier.isPopular && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-indigo-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.perAnalysis && (
                    <span className="text-sm text-gray-500 ml-2">
                      ({tier.perAnalysis})
                    </span>
                  )}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check size={18} className="text-purple-600 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <button
                  onClick={openWaitlist}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                    tier.isPopular
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg'
                      : 'bg-white border border-gray-200 hover:border-purple-400 text-gray-900 hover:bg-purple-50'
                  }`}
                >
                  Join Waitlist
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
