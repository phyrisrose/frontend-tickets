`use client`;

import { Card, LinkListItem, List } from '@/components';
import { shows } from './shows-data';
import Event from './event';

export default function MainClient() {
  return (
    <>
      <h1 className="text-2xl tracking-tight font-extrabold sm:text-3xl">
        Shows in Seattle, WA
      </h1>
      <Card className="p-8 min-w-40 mt-4">
        <List>
          {shows.map((show, index) => (
            <LinkListItem key={index} href={`/checkout/${show.id}`}>
              <Event show={show} />
            </LinkListItem>
          ))}
        </List>
      </Card>
    </>
  );
}
