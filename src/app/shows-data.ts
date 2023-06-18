import { Show } from './shows.types';

export const shows: Show[] = [
  {
    id: 0,
    musician: 'Youth Lagoon',
    date: new Date(2023, 5, 3),
    location: 'Seattle, WA',
    venue: 'Neptune',
    price: 30,
    imageUrl: '/musicians/youth-lagoon.jpeg',
  },
  {
    id: 1,
    musician: 'Nero',
    date: new Date(2023, 7, 6),
    location: 'Seattle, WA',
    venue: 'Neumos',
    price: 50,
    imageUrl: '/musicians/nero.png',
  },
  {
    id: 2,
    musician: 'Tycho',
    date: new Date(2023, 10, 14),
    location: 'Seattle, WA',
    venue: 'The Showbox',
    price: 40,
    imageUrl: '/musicians/tycho.jpeg',
  },
  {
    id: 3,
    musician: 'Nym',
    date: new Date(2023, 9, 10),
    location: 'Seattle, WA',
    venue: 'Chop Suey',
    price: 40,
    imageUrl: '/musicians/nym.jpeg',
  },
  {
    id: 3,
    musician: 'Manatee Commune',
    date: new Date(2023, 12, 18),
    location: 'Seattle, WA',
    venue: 'The Crocodile',
    price: 40,
    imageUrl: '/musicians/manatee-commune.jpeg',
  },
];
