`use client`;

import { Card, LinkListItem, List } from '@/components';
import { shows } from './shows-data';

export default function MainClient() {
  return (
    <Card className="p-8">
      <List>
        {shows.map((show, index) => (
          <LinkListItem key={index} href={`/checkout/${show.id}`}>
            {show.musician}
          </LinkListItem>
        ))}
      </List>
    </Card>
  );
}
