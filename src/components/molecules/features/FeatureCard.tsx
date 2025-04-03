import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Heading } from '@/components/atoms/typography/Heading';
import { Text } from '@/components/atoms/typography/Text';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bulletPoints?: string[];
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  bulletPoints,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-emerald-50 p-8 rounded-xl border border-emerald-100",
        className
      )}
      {...props}
    >
      <div className="bg-emerald-100 p-3 rounded-full w-fit mb-6">
        <Icon size={24} className="text-green-600" />
      </div>

      <Heading level={3} className="mb-3">
        {title}
      </Heading>

      <Text className="mb-4">
        {description}
      </Text>

      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <Text as="span" variant="body" className="text-gray-700">{point}</Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
