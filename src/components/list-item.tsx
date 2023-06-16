import { PropsWithChildren } from 'react';

interface ListItemProps {
  className?: string;
}

/**
 * @todo style
 */
export default function ListItem({
  className = '',
  children,
}: PropsWithChildren<ListItemProps>) {
  return <li className={className}>{children}</li>;
}
