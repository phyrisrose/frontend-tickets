import { Card } from '@/components';

/**
 * @note the number of tickets get selected here
 * and the total due is displayed
 * (you can add some fake fees)
 */
export default function CheckoutSummaryCard() {
  return (
    <Card className="col-span-1 row-span-2 p-4 divide-y">
      <h1 className="text-xl font-extrabold text-slate-700">Summary</h1>
      <div className="mt-2 pt-2"></div>
    </Card>
  );
}
