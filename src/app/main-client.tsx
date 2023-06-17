`use client`;

import { Card, LinkListItem, List } from '@/components';
import { shows } from './shows-data';
import Event from './event';

export default function MainClient() {
  return (
    <Card className="p-8">
      <List>
        {shows.map((show, index) => (
          <LinkListItem key={index} href={`/checkout/${show.id}`}>
            <Event show={show} />
          </LinkListItem>
        ))}
      </List>
    </Card>
  );
}
