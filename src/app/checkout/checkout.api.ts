import { postData } from '@/lib';
import { PaymentInfo } from './checkout.types';

interface PurchaseData {
  paymentInfo: PaymentInfo;
  numberOfTickets: number;
}

/**
 * This is a fake submission endpoint for concert info
 *
 * @param data {PurchaseData}
 * @returns the data submitted is echoed, with an id
 */
export const purchase = ({ numberOfTickets, paymentInfo }: PurchaseData) => {
  return postData('https://jsonplaceholder.typicode.com/posts', {
    numberOfTickets,
    paymentInfo,
  });
};
