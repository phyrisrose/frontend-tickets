'use client';

import {
  createContext,
  PropsWithChildren,
  useReducer,
  useContext,
} from 'react';

import {
  type Dispatch,
  type State,
  initialState,
  checkoutReducer,
} from './checkout.state';

const CheckoutStateContext = createContext<
  { dispatch: Dispatch; state: State } | undefined
>(undefined);

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
