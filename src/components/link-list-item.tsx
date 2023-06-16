import { PropsWithChildren } from 'react';
import Link from 'next/link';

import Card from './card';

/**
 * @note [x: string]: any; is for passing list item props through
 * Since LinkListItem is only meant to be a wrapper
 * Maybe there is a better way to do it, but this is a solution for now
 */
interface LinkListItemProps {
  href: string;
  [x: string]: any;
}

export default function LinkListItem({
  href,
  children,
  ...props
}: PropsWithChildren<LinkListItemProps>) {
  return (
    <Link href={href}>
      <li {...props}>{children}</li>
    </Link>
  );
}
