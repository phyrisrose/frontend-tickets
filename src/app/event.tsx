import Image from 'next/image';
import { Show } from './shows.types';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

interface EventProps {
  show: Show;
}

/**
 * @todo format date
 */
export default function Event({ show }: EventProps) {
  return (
    <div className="flex gap-12 items-center justify-between">
      <div className="flex gap-4">
        <Image
          className="h-20 w-20 rounded-full object-cover border-2 border-slate-100"
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
      <div className="w-200 shrink-0">
        <ArrowLongRightIcon
          className={[
            'fill-current',
            'text-slate-500',
            'inline',
            'invisible',
            'group-hover/item:visible',
            'opacity-0',
            'group-hover/item:opacity-100',
            'transition-all',
            '-translate-x-10',
            'group-hover/item:translate-x-0',
            'duration-500',
            'h-7',
            'ml-2',
          ].join(' ')}
        />
      </div>
    </div>
  );
}
