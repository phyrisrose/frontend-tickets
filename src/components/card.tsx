import { PropsWithChildren } from 'react';

interface CardProps {
  hoverEffect?: boolean;
  className?: string; // any additional class names as a string of space-separated classes
  group?: string;
}

export default function Card({
  children,
  hoverEffect = false,
  className = '',
  group,
}: PropsWithChildren<CardProps>) {
  const hoverEffectClasses = [
    'hover:scale-110',
    'hover:cursor-pointer',
    'transform',
    'transition',
    'duration-500',
  ];

  return (
    <div
      className={[
        'bg-white',
        'rounded-lg',
        'overflow-hidden',
        'shadow-md',
        hoverEffect && hoverEffectClasses.join(' '),
        group && `group/${group}`,
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
