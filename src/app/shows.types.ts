/**
 * @note nice to have: add a venue name
 */
export type Show = {
  id: number;
  musician: string;
  date: Date;
  location: string;
  price: number;
  imageUrl?: string;
};
