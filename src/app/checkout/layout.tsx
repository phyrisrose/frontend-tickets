import { PropsWithChildren } from 'react';
import { CheckoutProvider } from './checkout.context';

export default function CheckoutLayout({ children }: PropsWithChildren) {
  return <CheckoutProvider>{children}</CheckoutProvider>;
}
