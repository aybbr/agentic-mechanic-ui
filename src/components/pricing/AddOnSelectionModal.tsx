import React, { useState, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
  DialogPortal,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { PricingCardProps } from './PricingCard';
import { AddOn } from './PricingSection'; // Assuming AddOn is exported from PricingSection

interface AddOnSelectionModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedTier: Omit<PricingCardProps, 'onSelect'> | null;
  availableAddOns: AddOn[];
  onConfirm: (tier: Omit<PricingCardProps, 'onSelect'>, addOns: AddOn[]) => void;
}

export const AddOnSelectionModal: React.FC<AddOnSelectionModalProps> = ({
  isOpen,
  onOpenChange,
  selectedTier,
  availableAddOns,
  onConfirm,
}) => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handleToggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  // Reset selected add-ons when modal opens with a new tier
  React.useEffect(() => {
    if (isOpen) {
      setSelectedAddOns([]);
    }
  }, [isOpen, selectedTier]);

  const selectedAddOnObjects = useMemo(() => {
    return availableAddOns.filter((a) => selectedAddOns.includes(a.id));
  }, [availableAddOns, selectedAddOns]);

  const tierPrice = useMemo(() => {
    if (!selectedTier) return 0;
    // Extract numeric value from price string (e.g., "$90" -> 90)
    const match = selectedTier.price.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }, [selectedTier]);

  const addOnsTotal = useMemo(() => {
    return selectedAddOnObjects.reduce((sum, a) => sum + a.price, 0);
  }, [selectedAddOnObjects]);

  const totalPrice = tierPrice + addOnsTotal;

  const handleConfirmClick = () => {
    if (selectedTier) {
      onConfirm(selectedTier, selectedAddOnObjects);
    }
  };

  if (!selectedTier) return null; // Don't render if no tier is selected

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogPortal>
        {/* Custom overlay with higher opacity */}
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <DialogContent className="sm:max-w-[480px] bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Customize Your Analysis</DialogTitle>
            <DialogDescription className="text-base">
              You selected the <span className="font-semibold text-primary">{selectedTier.title}</span> plan.
              Enhance your report with these optional add-ons.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <Separator className="bg-gray-200 dark:bg-gray-800" />
            <h3 className="text-lg font-semibold">Optional Add-ons</h3>
            <ul className="space-y-3">
              {availableAddOns.map((addOn) => (
                <li key={addOn.id} className="flex items-start justify-between gap-4 p-4 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id={`addon-${addOn.id}`}
                      checked={selectedAddOns.includes(addOn.id)}
                      onCheckedChange={() => handleToggleAddOn(addOn.id)}
                      aria-label={`Add ${addOn.name}`}
                      className="mt-1"
                    />
                    <div className="grid gap-1">
                      <label htmlFor={`addon-${addOn.id}`} className="font-medium text-sm cursor-pointer">
                        {addOn.name}
                      </label>
                      <p className="text-xs text-muted-foreground">
                        {addOn.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary whitespace-nowrap">
                    +${addOn.price}
                  </span>
                </li>
              ))}
            </ul>
            <Separator className="bg-gray-200 dark:bg-gray-800" />
            <div className="flex justify-between items-center font-semibold">
              <span>Total Price:</span>
              <span className="text-xl text-primary">${totalPrice}</span>
            </div>
          </div>
          <DialogFooter className="pt-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button onClick={handleConfirmClick} size="lg" className="font-medium">Proceed to Checkout</Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
