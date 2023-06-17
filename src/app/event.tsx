import Image from 'next/image';
import { Show } from './shows.types';

interface EventProps {
  show: Show;
}

/**
 * @todo format date
 */
export default function Event({ show }: EventProps) {
  return (
    <div className="flex gap-4">
      <Image
        className="h-20 w-20 rounded-full object-cover border-2 border-slate-200"
        src={show.imageUrl}
        alt="show-avatar"
        height={40}
        width={40}
      />
      <div>
        <div>{show.date.getFullYear()}</div>
        <div>{show.musician}</div>
        <div>{show.location}</div>
      </div>
    </div>
  );
}
