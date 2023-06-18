import { Card } from '@/components';

interface CheckoutSummaryCardProps {
  price: number;
}

/**
 * @note the number of tickets get selected here
 * and the total due is displayed
 * (you can add some fake fees)
 */
export default function CheckoutSummaryCard({
  price,
}: CheckoutSummaryCardProps) {
  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const formattedPrice = usdFormatter.format(price);

  return (
    <Card className="col-span-1 row-span-2 p-4 divide-y order-3 sm:order-2 w-full">
      <h1 className="text-xl font-extrabold text-slate-700">Summary</h1>
      <div className="mt-2 pt-2">
        <div>
          Ticket price:{' '}
          <span className="text-lg font-bold tracking-tighter">
            {formattedPrice}
          </span>
        </div>
        <div>Number of tickets</div>
        <div>Total</div>
      </div>
    </Card>
  );
}
