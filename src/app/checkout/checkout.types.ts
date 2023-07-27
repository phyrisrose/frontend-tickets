export type PaymentInfo = {
  cardholderName: string /** @todo should these be nullable? */;
  cardNumber: string;
  expirationDate: string /** @todo this might need to be an object: month + year */;
  securityCode: number | null;
};
