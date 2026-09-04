'use client';

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 shadow-[var(--shadow-md)] ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className = '', ...props }: CardProps) {
  return (
    <div
      className={`mb-4 pb-4 border-b border-[var(--color-border)] ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className = '', ...props }: CardProps) {
  return <div className={`${className}`} {...props} />;
}

export function CardFooter({ className = '', ...props }: CardProps) {
  return (
    <div
      className={`mt-4 pt-4 border-t border-[var(--color-border)] ${className}`}
      {...props}
    />
  );
}
