"use client";

import React from 'react';
import { Heading } from '@/components/atoms/typography/Heading';
import { Text } from '@/components/atoms/typography/Text';

interface TestimonialProps {
  quote: string;
  author: string;
}

function Testimonial({ quote, author }: TestimonialProps) {
  return (
    <div className="bg-emerald-50 p-6 rounded-xl">
      <p className="text-gray-700 mb-4 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="font-medium text-gray-900">— {author}</p>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">
            Join Smart Car Buyers
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Be among the first to access our AI-powered car history analysis tool.
          </Text>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Testimonial
            quote="I almost bought a car with transmission issues that would have cost $4,000 to fix. This tool spotted the warning signs in the service history that I missed."
            author="Early Beta User"
          />

          <Testimonial
            quote="The cost predictions were spot on. I used them to negotiate $2,500 off the price because of upcoming maintenance needs."
            author="Early Beta User"
          />

          <Testimonial
            quote="Finally, a tool that makes sense of messy service records. Saved me hours of research and helped me avoid a money pit."
            author="Early Beta User"
          />
        </div>
      </div>
    </section>
  );
}
