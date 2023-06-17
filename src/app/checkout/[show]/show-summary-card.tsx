import { Show } from '@/app/shows.types';
import { Card } from '@/components';

interface ShowSummaryCardProps {
  show: Show;
}

/**
 * @todo format date
 */
export default function ShowSummaryCard({ show }: ShowSummaryCardProps) {
  return (
    <Card className="col-span-2 p-6">
      <h1 className="text-xl font-semibold text-slate-700">You are going to</h1>
      <div>{show.musician}</div>
      <div>{show.location}</div>
      <div>{show.date.getFullYear()}</div>
    </Card>
  );
}
