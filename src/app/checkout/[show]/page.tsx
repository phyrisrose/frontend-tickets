import { shows } from '@/app/shows-data';

interface CheckoutProps {
  params: {
    show: number;
  };
}

export default function Checkout({ params }: CheckoutProps) {
  const show = shows[params.show];

  return (
    <div>
      Checkout page for {show.musician} at {show.location}
    </div>
  );
}
