import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

/**
 * Props for PricingCard
 */
export interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  perAnalysis?: string;
  features: string[];
  buttonText: string;
  highlight?: boolean;
  badge?: string;
  onSelect?: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  perAnalysis,
  features,
  buttonText,
  highlight = false,
  badge,
  onSelect,
}) => {
  return (
    <Card
      className={`flex flex-col h-full border-2 transition-all duration-200 group focus-within:ring-2 focus-within:ring-primary/60 ${
        highlight
          ? 'border-primary shadow-2xl scale-105 z-20 bg-primary/5'
          : 'border-muted bg-background/90'
      } backdrop-blur-sm hover:shadow-xl hover:-translate-y-1`}
      tabIndex={0}
      aria-label={title + ' pricing tier'}
    >
      <CardHeader className="pb-2 relative flex flex-col items-start">
        {badge && (
          <div className="mb-2 w-full flex justify-start">
            <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground shadow-md">
              {badge}
            </span>
          </div>
        )}
        <CardTitle className="text-2xl font-semibold mb-1 leading-tight">{title}</CardTitle>
        <CardDescription className="text-base text-muted-foreground mb-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center mb-4 flex-1 w-full">
        <div className="flex items-end gap-2 mb-2">
          <span className="text-4xl font-bold text-primary">{price}</span>
          {perAnalysis && (
            <span className="text-sm text-muted-foreground">{perAnalysis}</span>
          )}
        </div>
        <ul className="w-full space-y-2 mb-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-muted-foreground">
              <Check className="mr-2 h-4 w-4 text-primary" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto w-full">
        <Button
          className="w-full group-hover:scale-[1.03] group-active:scale-100 transition-transform"
          size="lg"
          variant={highlight ? 'default' : 'outline'}
          aria-label={buttonText}
          onClick={onSelect}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};
