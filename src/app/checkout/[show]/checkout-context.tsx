'use client';

import {
  createContext,
  PropsWithChildren,
  useReducer,
  useContext,
} from 'react';

import type { PaymentInfo } from './checkout.types';

/** @todo handle other action types */
type Action = { payload: number; type: 'setNumberOfTickets' };
type Dispatch = (action: Action) => void;
type State = { paymentInfo: PaymentInfo; numberOfTickets: number };

const initialState = {
  paymentInfo: {} as PaymentInfo,
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

    /** @todo add actions for manipulating payment info */

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
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
