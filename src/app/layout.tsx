import React from 'react';
import { Props } from '@/types/Layout';

export default function Layout({ children }: Props) {
  console.log(process.env.NEXT_PUBLIC_MOCK);
  
  return (
    <html lang="en">
    <body className="bg-gray-100">
    {children}
    </body>
    </html>
  );
}
