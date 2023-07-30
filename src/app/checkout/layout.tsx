import { PropsWithChildren } from 'react';
import { CheckoutProvider } from './checkout.context';

/** @todo there is some client / server error on HMR rerenders */
export default function CheckoutLayout({ children }: PropsWithChildren) {
  return <CheckoutProvider>{children}</CheckoutProvider>;
}
