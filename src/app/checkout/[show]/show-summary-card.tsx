import { format } from 'date-fns';
import { Show } from '@/app/shows.types';
import { Card } from '@/components';

interface ShowSummaryCardProps {
  show: Show;
}

export default function ShowSummaryCard({ show }: ShowSummaryCardProps) {
  return (
    <Card className="col-span-1 sm:col-span-2 p-6 divide-y order-1">
      <h1 className="text-xl font-extrabold text-slate-700">Show details</h1>
      <div className="mt-2 pt-2">
        <div className="text-lg font-bold">{show.musician}</div>
        <div className="text-md text-slate-800">
          {show.venue} &bull; {show.location}
        </div>
        <div className=" text-slate-600 font-light">
          {format(show.date, 'MMMM do, yyyy')}
        </div>
      </div>
    </Card>
  );
}
