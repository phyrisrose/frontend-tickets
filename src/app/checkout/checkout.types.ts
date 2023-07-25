export type PaymentInfo = {
  nameOnCard: string;
  cardNumber: string;
  expirationDate: string /** @todo this might need to be an object: month + year */;
  securityCode: number;
};
