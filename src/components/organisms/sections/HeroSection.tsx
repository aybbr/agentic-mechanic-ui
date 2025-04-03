"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Heading } from '@/components/atoms/typography/Heading';
import { Text } from '@/components/atoms/typography/Text';
import { Button } from '@/components/atoms/buttons/Button';
import { useUIStore } from '@/store/uiStore';

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const { openWaitlist } = useUIStore();

  return (
    <div className={cn(
      "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36 pb-24",
      className
    )}>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div className="mb-12 lg:mb-0">
          <Heading level={1} className="mb-6">
            Discover the True Cost of Your Next Car.
          </Heading>

          <Text variant="lead" className="mb-8">
            Agentic Mechanic combines your driving habits, location, and car details to reveal every expense—from taxes to tires.
            Upload any car&apos;s service history and instantly understand its true condition and uncover future costs.
          </Text>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={openWaitlist}
              className="flex items-center justify-center"
            >
              Join Waitlist <ArrowRight size={18} className="ml-2" />
            </Button>
            {/* Temporarily hidden
            <Button
              variant="outline"
              size="lg"
              className="backdrop-blur-sm"
            >
              See How It Works
            </Button>
            */}
          </div>
        </div>

        <div className="relative">
          {/* Hero Image */}
          <div className="relative max-w-xl mx-auto">
            <Image
              src="/images/hero_landing.png"
              alt="Agentic Mechanic Hero"
              width={900}
              height={600}
              className="rounded-xl mix-blend-multiply backdrop-blur-sm animate-float-gentle p-1"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -z-10 top-1/3 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -z-10 bottom-1/4 right-1/4 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}
