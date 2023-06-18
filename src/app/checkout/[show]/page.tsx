import { shows } from '@/app/shows-data';
import PaymentCard from './payment-card';
import CheckoutSummaryCard from './checkout-summary-card';
import ShowSummaryCard from './show-summary-card';

interface CheckoutProps {
  params: {
    show: number;
  };
}

export default function Checkout({ params }: CheckoutProps) {
  const show = shows[params.show];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
      <ShowSummaryCard show={show} />
      <CheckoutSummaryCard />
      <PaymentCard />
      <div className="col-span-1 sm:col-span-3 order-4 flex justify-center sm:justify-end">
        <button
          type="button"
          className="px-6 py-2 bg-pink-800 hover:bg-pink-700 shadow-md text-white rounded-full"
        >
          Purchase
        </button>
      </div>
    </div>
  );
}
