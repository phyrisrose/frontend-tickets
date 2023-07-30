## Project overview

This is a prototype for a simple portal for buying tickets to a show. The user lands on a page with a list of shows by location, and is able to select a show, and navigate to the checkout page. The checkout page shows a responsive layout of a few cards: the show summary, payment method, and pricing + being able to select the number of tickets.

## Getting started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project walkthrough

### The foundations

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is built on `Next.js` 13 using App Router
- It is primarily written with `TypeScript`
- Linting is setup with `eslint` & `prettier` configs
- [Lefthook](https://github.com/evilmartians/lefthook) is used as a pre-commit / pre-push hook. It runs formatting checks, and is ready to run tests once they are in place

### The UI

- `Tailwind CSS` is used for styling. It's configured with `postcss` & `autoprefixer`
- Using [`Heroicons`](https://heroicons.com/) as the icon library
- Any reusable components are built from scratch, and stored under `src/components`

### The data

- The data is being pulled from a designated data file, `shows-data.ts`

### Considerations / next steps

- Adding a way to select location. A way to implement it could be a list of locations as a landing page, and perhaps a modal that can pop up on the event list page to edit the location
- Adding a card on checkout page to enter the billing address
- Add some sort of breadcrumbs / navigation. Currently you have to press the browser back button to return to the event list page from checkout page
