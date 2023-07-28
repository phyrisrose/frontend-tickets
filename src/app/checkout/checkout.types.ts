export type ExpirationDate = {
  month: number | 'MM';
  year: number | 'YYYY';
};

export type PaymentInfo = {
  cardholderName: string /** @todo should these be nullable? */;
  cardNumber: string;
  expirationDate: ExpirationDate;
  securityCode: string;
};
