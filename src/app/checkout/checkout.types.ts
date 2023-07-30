export type PaymentInfo = {
  cardholderName: string /** @todo should these be nullable? */;
  cardNumber: string;
  expirationMonth: number | 'MM';
  expirationYear: number | 'YYYY';
  securityCode: string;
};
