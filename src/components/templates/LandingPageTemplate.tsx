"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { MainNavigation } from '@/components/organisms/navigation/MainNavigation';
import { HeroSection } from '@/components/organisms/sections/HeroSection';
import { FeaturesSection } from '@/components/organisms/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/organisms/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/organisms/sections/TestimonialsSection';
import { CtaSection } from '@/components/organisms/sections/CtaSection';
import { Footer } from '@/components/organisms/footer/Footer';
import { WaitlistModal } from '@/components/waitlist/WaitlistModal';
import { useUIStore } from '@/store/uiStore';
import { theme } from '@/styles/theme';
import { cn } from '@/lib/utils';

export function LandingPageTemplate() {
  const { isWaitlistOpen, closeWaitlist } = useUIStore();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Navigation */}
      <Section
        gradient="hero"
        gradientVariant="primary"
        className="overflow-hidden"
      >
        {/* Background gradients */}
        <div className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
          theme.gradients.hero.overlay1
        )}></div>
        <div className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]",
          theme.gradients.hero.overlay2
        )}></div>
        <div className={cn(
          "absolute inset-0 bg-[linear-gradient(120deg,_var(--tw-gradient-stops))]",
          theme.gradients.hero.overlay3
        )}></div>

        {/* Navigation */}
        <MainNavigation />

        {/* Hero Content */}
        <HeroSection />
      </Section>

      <main className="flex-grow">
        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}
