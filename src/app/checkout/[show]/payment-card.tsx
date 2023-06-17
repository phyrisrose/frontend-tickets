import { Card } from '@/components';

interface PaymentCard {
  className?: string;
}

export default function PaymentCard({ className = '' }) {
  return <Card className={className}>Payment info</Card>;
}
