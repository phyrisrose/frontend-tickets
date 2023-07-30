'use client';

import { ChangeEvent } from 'react';

import { Card } from '@/components';

import { useCheckoutContext } from '../checkout.context';

interface CheckoutSummaryCardProps {
  price: number;
}

export default function CheckoutSummaryCard({
  price,
}: CheckoutSummaryCardProps) {
  const {
    state: { numberOfTickets },
    dispatch,
  } = useCheckoutContext();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'setNumberOfTickets', payload: Number(e.target.value) });
  };

  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const formattedPrice = usdFormatter.format(price);
  const formattedTotal = usdFormatter.format(price * numberOfTickets);

  return (
    <Card className="col-span-1 row-span-2 p-6 order-3 sm:order-2 w-full">
      <div className="block sm:flex sm:flex-col justify-between content-between divide-y h-full">
        <div className="divide-y">
          <h1 className="text-xl font-extrabold text-slate-700">Summary</h1>
          <div className="mt-2 pt-2">
            <div className="flex justify-between sm:block">
              <span>Ticket price:</span>{' '}
              <span className="text-lg font-bold tracking-tighter">
                {formattedPrice}
              </span>
            </div>
            <div className="flex justify-between items-baseline sm:block">
              <label htmlFor="numberOfTickets" className="mr-4">
                Number of tickets:{' '}
              </label>
              <select
                value={numberOfTickets}
                name="numberOfTickets"
                onChange={handleSelect}
                className="appearance-none block px-5 py-2 my-2 w-20 border rounded-lg bg-white shadow placeholder-slate-400 text-slate-700 focus:ring-primary-400 focus:outline-none text-right sm:text-left"
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
          </div>
        </div>
        <div className="border-t pt-2 mt-2 flex justify-between items-baseline sm:block">
          <span>Total:</span>{' '}
          <span className="text-lg font-bold tracking-tighter">
            {formattedTotal}
          </span>
        </div>
      </div>
    </Card>
  );
}
