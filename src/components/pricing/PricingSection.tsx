import React from 'react';
import { PricingCard, PricingCardProps } from './PricingCard';

// Define AddOn interface here as it's needed for the handler, but not the card
export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
}

/**
 * Available optional add-ons
 */
export const availableAddOns: AddOn[] = [
  {
    id: 'negotiation',
    name: 'Negotiation Tips',
    description: "AI-generated advice on negotiating based on the car's condition and market value.",
    price: 10,
  },
  {
    id: 'market',
    name: 'Market Comparison',
    description: "Compares the car's cost of ownership to similar models in the user's region.",
    price: 15,
  },
];

/**
 * Default pricing tiers for Agentic Mechanic
 */
const defaultTiers: Omit<PricingCardProps, 'onSelect'>[] = [
  {
    title: 'Single Analysis',
    description: 'Full service log analysis + true cost of ownership. Perfect for one car.',
    price: '$35',
    features: [
      'Detailed service log insights',
      'Personalized cost of ownership',
      'Covers taxes, insurance, fuel, tires, and more',
      'Avoid costly mistakes and save thousands',
    ],
    buttonText: 'Get My Report',
    badge: undefined,
    highlight: false,
  },
  {
    title: 'Bundle of 3 Analyses',
    description: 'Best for comparing multiple cars. Save $15!',
    price: '$90',
    perAnalysis: '$30/report',
    features: [
      'Everything in Single Analysis',
      'Analyze up to 3 cars',
      'Ideal for car shoppers comparing options',
      'Priority support',
    ],
    buttonText: 'Compare 3 Cars',
    badge: 'Best Value',
    highlight: true,
  },
  {
    title: 'Bundle of 5 Analyses',
    description: 'For serious buyers or small resellers. Save $35!',
    price: '$140',
    perAnalysis: '$28/report',
    features: [
      'Everything in Bundle of 3',
      'Analyze up to 5 cars',
      'Great for families or resellers',
      'Maximum savings',
    ],
    buttonText: 'Get 5 Reports',
    badge: undefined,
    highlight: false,
  },
];

/**
 * Props for PricingSection
 */
export interface PricingSectionProps {
  tiers?: Omit<PricingCardProps, 'onSelect'>[];
  onSelectTier?: (tier: Omit<PricingCardProps, 'onSelect'>) => void;
}

export function PricingSection({
  tiers = defaultTiers,
  onSelectTier,
}: PricingSectionProps) {
  // Updated handler to just pass the selected tier
  const handleSelect = (tier: Omit<PricingCardProps, 'onSelect'>) => {
    if (onSelectTier) {
      onSelectTier(tier);
    }
    // Default behavior (e.g., log selection)
    console.log('Selected Tier:', tier.title);
  };

  return (
    <section id="pricing" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">All-in-One Car Buying Intelligence</h2>
          <p className="text-lg text-muted-foreground mb-2">
            Agentic Mechanic delivers <span className="font-semibold text-primary">service log analysis</span> and <span className="font-semibold text-primary">true cost of ownership</span> in one powerful tool.
          </p>
          <p className="text-base text-muted-foreground">
            Go beyond basic vehicle history checks. Get personalized, actionable insights to avoid costly mistakes and save thousands on your next car.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, index) => (
            <PricingCard
              key={index}
              {...tier}
              onSelect={() => handleSelect(tier)}
            />
          ))}
        </div>
        <div className="max-w-2xl mx-auto text-center mt-10">
          <p className="text-sm text-muted-foreground">
            All prices are one-time payments. No hidden fees. Questions? <a href="#contact" className="underline text-primary">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
