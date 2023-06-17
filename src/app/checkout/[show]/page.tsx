import { shows } from '@/app/shows-data';
import PaymentCard from './payment-card';

interface CheckoutProps {
  params: {
    show: number;
  };
}

export default function Checkout({ params }: CheckoutProps) {
  const show = shows[params.show];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
      <PaymentCard className="col-span-2" />
      <div className="col-span-1">
        Checkout page for {show.musician} in {show.location}
      </div>
    </div>
  );
}
