import { addDays } from 'date-fns';
import { Show } from './shows.types';

export const shows: Show[] = [
  {
    id: 0,
    musician: 'Youth Lagoon',
    date: addDays(new Date(), 10),
    location: 'Seattle, WA',
    venue: 'Neptune',
    price: 30,
    imageUrl: '/musicians/youth-lagoon.jpeg',
  },
  {
    id: 1,
    musician: 'Nero',
    date: addDays(new Date(), 33),
    location: 'Seattle, WA',
    venue: 'Neumos',
    price: 50,
    imageUrl: '/musicians/nero.png',
  },
  {
    id: 2,
    musician: 'Tycho',
    date: addDays(new Date(), 54),
    location: 'Seattle, WA',
    venue: 'The Showbox',
    price: 40,
    imageUrl: '/musicians/tycho.jpeg',
  },
  {
    id: 3,
    musician: 'Nym',
    date: addDays(new Date(), 79),
    location: 'Seattle, WA',
    venue: 'Chop Suey',
    price: 40,
    imageUrl: '/musicians/nym.jpeg',
  },
  {
    id: 4,
    musician: 'Manatee Commune',
    date: addDays(new Date(), 90),
    location: 'Seattle, WA',
    venue: 'The Crocodile',
    price: 40,
    imageUrl: '/musicians/manatee-commune.jpeg',
  },
];
