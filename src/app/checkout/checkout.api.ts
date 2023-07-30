import { postData } from '@/lib';

/** @ts-expect-error @todo add a type for data */
export const purchase = (data) => {
  return postData('https://jsonplaceholder.typicode.com/posts', data);
};
