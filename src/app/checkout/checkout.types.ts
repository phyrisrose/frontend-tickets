export type PaymentInfo = {
  cardholderName: string;
  cardNumber: string;
  expirationMonth: number | 'MM';
  expirationYear: number | 'YYYY';
  securityCode: string;
};
