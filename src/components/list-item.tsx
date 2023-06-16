import { PropsWithChildren } from 'react';

interface ListItemProps {
  className?: string;
}

export default function ListItem({
  className = '',
  children,
}: PropsWithChildren<ListItemProps>) {
  return (
    <li
      className={[
        'p-4',
        'rounded-xl',
        'hover:bg-slate-100',
        'group/item',
        className,
      ].join(' ')}
    >
      {children}
    </li>
  );
}
