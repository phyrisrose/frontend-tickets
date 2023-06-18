'use client';

import { useState, ChangeEvent } from 'react';

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
  const [numTickets, setNumTickets] = useState<number>(2);
  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setNumTickets(Number(e.target.value));
  };

  const formattedPrice = usdFormatter.format(price);
  const formattedTotal = usdFormatter.format(price * numTickets);

  return (
    <Card className="col-span-1 row-span-2 p-4 divide-y order-3 sm:order-2 w-full">
      <h1 className="text-xl font-extrabold text-slate-700">Summary</h1>
      <div className="mt-2 pt-2">
        <div className="flex justify-between sm:block">
          <span>Ticket price:</span>{' '}
          <span className="text-lg font-bold tracking-tighter">
            {formattedPrice}
          </span>
        </div>
        <label htmlFor="numTickets">Number of tickets: </label>
        <div className="flex justify-end sm:block">
          <select
            value={numTickets}
            name="numTickets"
            onChange={handleSelect}
            className="appearance-none block px-5 py-2 my-2 w-20 border rounded-lg bg-white shadow placeholder-slate-400 text-slate-700 focus:ring-primary-400 focus:outline-none"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div>
          Total:{' '}
          <span className="text-lg font-bold tracking-tighter">
            {formattedTotal}
          </span>
        </div>
      </div>
    </Card>
  );
}
