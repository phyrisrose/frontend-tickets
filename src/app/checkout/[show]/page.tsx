import { notFound } from 'next/navigation';
import { shows } from '@/app/shows-data';
import PaymentCard from './payment-card';
import CheckoutSummaryCard from './checkout-summary-card';
import ShowSummaryCard from './show-summary-card';
import PurchaseButton from './purchase-button';

interface CheckoutProps {
  params: {
    show: number;
  };
}

/** @todo make a fake API call when Purchase button is clicked */
export default function Checkout({ params }: CheckoutProps) {
  const show = shows[params.show];
  if (!show) {
    notFound();
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
      <ShowSummaryCard show={show} />
      <CheckoutSummaryCard price={show.price} />
      <PaymentCard />
      <div className="col-span-1 sm:col-span-3 order-4 flex justify-center sm:justify-end">
        <PurchaseButton />
      </div>
    </div>
  );
}
