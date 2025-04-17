"use client";

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { MainNavigation } from '@/components/organisms/navigation/MainNavigation';
import { HeroSection } from '@/components/organisms/sections/HeroSection';
import { FeaturesSection } from '@/components/organisms/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/organisms/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/organisms/sections/TestimonialsSection';
import { PricingSection, PricingSectionProps, AddOn, availableAddOns } from '@/components/pricing/PricingSection';
import { AddOnSelectionModal } from '@/components/pricing/AddOnSelectionModal';
import { CtaSection } from '@/components/organisms/sections/CtaSection';
import { Footer } from '@/components/organisms/footer/Footer';
import { WaitlistModal } from '@/components/waitlist/WaitlistModal';
import { useUIStore } from '@/store/uiStore';
import { theme } from '@/styles/theme';
import { cn } from '@/lib/utils';

type Tier = NonNullable<PricingSectionProps['tiers']>[number];

export function LandingPageTemplate() {
  const { isWaitlistOpen, closeWaitlist } = useUIStore();

  const [isAddOnModalOpen, setIsAddOnModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

  const handleSelectTier = (tier: Tier) => {
    setSelectedTier(tier);
    setIsAddOnModalOpen(true);
    console.log("Tier selected, opening add-on modal:", tier.title);
  };

  const handleConfirmAddOns = (tier: Tier, addOns: AddOn[]) => {
    console.log("Checkout confirmed for:", tier.title, "with add-ons:", addOns);
    setIsAddOnModalOpen(false);
  };

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

        {/* Pricing Section */}
        <PricingSection onSelectTier={handleSelectTier} />

        {/* CTA Section */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />

      {/* Add-on Selection Modal */}
      <AddOnSelectionModal
        isOpen={isAddOnModalOpen}
        onOpenChange={setIsAddOnModalOpen}
        selectedTier={selectedTier}
        availableAddOns={availableAddOns}
        onConfirm={handleConfirmAddOns}
      />
    </div>
  );
}
