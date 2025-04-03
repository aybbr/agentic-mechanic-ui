"use client";

import React from 'react';
import { Heading } from '@/components/atoms/typography/Heading';
import { Text } from '@/components/atoms/typography/Text';
import { Button } from '@/components/atoms/buttons/Button';
import { useUIStore } from '@/store/uiStore';

export function CtaSection() {
  const { openWaitlist } = useUIStore();

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-600 via-emerald-400 to-emerald-600 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lime-400/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/30 via-transparent to-transparent"></div>

      {/* Car gauge background element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.07]">
        {/* Outer circle */}
        <div className="absolute inset-0 border-[40px] border-white/40 rounded-full"></div>
        {/* Inner circle */}
        <div className="absolute inset-[100px] border-[20px] border-white/30 rounded-full"></div>
        {/* Gauge markings */}
        <div className="absolute inset-[60px] flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-white/60"
              style={{ transform: `rotate(${i * 30}deg) translateY(-240px)` }}
            ></div>
          ))}
        </div>
        {/* Gauge numbers */}
        <div className="absolute inset-[80px] flex items-center justify-center">
          {[0, 2, 4, 6, 8].map((num, i) => (
            <div
              key={i}
              className="absolute text-white/60 text-2xl font-bold"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-220px) rotate(-${i * 45}deg)`
              }}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <Heading level={2} className="mb-6 text-white">
          Be First to Access Smart Car History Analysis
        </Heading>
        <Text variant="lead" className="mb-8 max-w-3xl mx-auto text-white">
          Join our waitlist to get early access and special launch pricing. Start making data-driven car buying decisions.
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={openWaitlist}
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}
