'use client';

import {
  createContext,
  PropsWithChildren,
  useReducer,
  useContext,
} from 'react';

import type { PaymentInfo } from './checkout.types';

type NumberOfTicketsAction = { payload: number; type: 'setNumberOfTickets' };
type UpdatePaymentAction = {
  payload: Partial<PaymentInfo>;
  type: 'updatePayment';
};
type Action = NumberOfTicketsAction | UpdatePaymentAction;
type Dispatch = (action: Action) => void;
type State = { paymentInfo: PaymentInfo; numberOfTickets: number };

const initialState = {
  paymentInfo: {
    cardholderName: '',
    cardNumber: '',
    expirationMonth: 'MM',
    expirationYear: 'YYYY',
    securityCode: '',
  } as PaymentInfo,
  numberOfTickets: 2,
};

const CheckoutStateContext = createContext<
  { dispatch: Dispatch; state: State } | undefined
>(undefined);

/** @todo take the reducer out into a different file */
function checkoutReducer(state: State, action: Action) {
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

function useCheckoutContext() {
  const context = useContext(CheckoutStateContext);
  if (context === undefined) {
    throw new Error(
      'useCheckoutContext must be used within a CheckoutProvider',
    );
  }
  return context;
}

const CheckoutProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <CheckoutStateContext.Provider value={value}>
      {children}
    </CheckoutStateContext.Provider>
  );
};

export { CheckoutProvider, useCheckoutContext };
