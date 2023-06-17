import { shows } from '@/app/shows-data';
import PaymentCard from './payment-card';
import CheckoutSummaryCard from './checkout-summary-card';

interface CheckoutProps {
  params: {
    show: number;
  };
}

export default function Checkout({ params }: CheckoutProps) {
  const show = shows[params.show];
  // Checkout page for {show.musician} in {show.location}

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
      <PaymentCard />
      <CheckoutSummaryCard />
    </div>
  );
}
