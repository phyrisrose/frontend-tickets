import type { PaymentInfo } from './checkout.types';

export type NumberOfTicketsAction = {
  payload: number;
  type: 'setNumberOfTickets';
};
export type UpdatePaymentAction = {
  payload: Partial<PaymentInfo>;
  type: 'updatePayment';
};
export type Action = NumberOfTicketsAction | UpdatePaymentAction;
export type Dispatch = (action: Action) => void;
export type State = { paymentInfo: PaymentInfo; numberOfTickets: number };

export const initialState = {
  paymentInfo: {
    cardholderName: '',
    cardNumber: '',
    expirationMonth: 'MM',
    expirationYear: 'YYYY',
    securityCode: '',
  } as PaymentInfo,
  numberOfTickets: 2,
};

export function checkoutReducer(state: State, action: Action) {
  switch (action.type) {
    case 'setNumberOfTickets': {
      return { ...state, numberOfTickets: action.payload };
    }

    case 'updatePayment': {
      return {
        ...state,
        paymentInfo: { ...state.paymentInfo, ...action.payload },
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${(action as Action).type}`);
    }
  }
}
