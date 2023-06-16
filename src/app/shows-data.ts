import { Show } from './shows.types';

export const shows: Show[] = [
  {
    id: 0,
    musician: 'Youth Lagoon',
    date: new Date(2023, 5, 3),
    location: 'Fort Collins, CO',
    price: 30,
    imageUrl: '/musicians/youth-lagoon.jpeg',
  },
  {
    id: 1,
    musician: 'Nero',
    date: new Date(2023, 7, 6),
    location: 'Seattle, WA',
    price: 50,
    imageUrl: '/musicians/nero.png',
  },
  {
    id: 2,
    musician: 'Tycho',
    date: new Date(2023, 10, 14),
    location: 'Missoula, MT',
    price: 40,
    imageUrl: '/musicians/tycho.jpeg',
  },
];
