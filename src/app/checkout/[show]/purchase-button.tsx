'use client';

import { useCheckoutContext } from '../checkout.context';
import { purchase } from '../checkout.api';

export default function PurchaseButton() {
  const { state } = useCheckoutContext();

  const handlePurchase = async () => {
    await purchase(state);
  };

  return (
    <button
      type="button"
      onClick={handlePurchase}
      className="px-6 py-2 bg-primary-800 hover:bg-primary-700 shadow-md text-white rounded-full"
    >
      Purchase
    </button>
  );
}
