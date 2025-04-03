"use client";

import React from 'react';
import { Receipt, History } from 'lucide-react';
import { Heading } from '@/components/atoms/typography/Heading';
import { Text } from '@/components/atoms/typography/Text';
import { FeatureCard } from '@/components/molecules/features/FeatureCard';

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-emerald-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {/* Background elements */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">
            Make Informed Decisions, Avoid Costly Mistakes
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Don&apos;t rely on guesswork or seller promises. Get data-driven insights about any used car&apos;s true condition and future costs.
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service History Analyzer */}
          <FeatureCard
            icon={History}
            title="Deep Service History Analysis"
            description="Our AI reads and analyzes any service history format, uncovering hidden issues, maintenance patterns, and potential red flags that could cost you thousands."
            bulletPoints={[
              "Identifies missed maintenance and potential future problems",
              "Verifies if service intervals match manufacturer recommendations",
              "Spots patterns that could indicate recurring problems"
            ]}
          />

          {/* Cost Estimator */}
          <FeatureCard
            icon={Receipt}
            title="Smart Cost Predictions"
            description="Know exactly what you're getting into with accurate maintenance and repair cost forecasts based on the car's actual history and condition."
            bulletPoints={[
              "Predicts upcoming maintenance costs with timeline estimates",
              "Compares costs against similar models in your area",
              "Helps negotiate better prices based on needed repairs"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
