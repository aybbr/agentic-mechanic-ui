"use client";

import React from 'react';
import { ClipboardCheck, Sparkles, Receipt } from 'lucide-react';
import { Heading } from '@/components/atoms/typography/Heading';
import { Text } from '@/components/atoms/typography/Text';

interface StepProps {
  number: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

function Step({ number, icon: Icon, title, description }: StepProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
      <div className="absolute -top-4 -left-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div className="mb-6 flex justify-center">
        <Icon size={48} className="text-green-600" />
      </div>
      <Heading level={3} className="mb-3 text-center">
        {title}
      </Heading>
      <Text className="text-center">
        {description}
      </Text>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-emerald-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">
            Three Steps to Smarter Car Buying
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Get detailed insights about any used car in minutes, not hours.
          </Text>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Step
            number={1}
            icon={ClipboardCheck}
            title="Upload Service History"
            description="Simply snap a photo or upload the service history. We handle all formats - even messy handwritten logs."
          />

          <Step
            number={2}
            icon={Sparkles}
            title="Get Instant Analysis"
            description="Our AI analyzes the history, identifies issues, and predicts future maintenance needs and costs."
          />

          <Step
            number={3}
            icon={Receipt}
            title="Make Better Decisions"
            description="Use our insights to negotiate better prices, avoid problem cars, and budget for future costs."
          />
        </div>
      </div>
    </section>
  );
}
