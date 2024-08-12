import React from 'react';
import { Props } from '@/types/Layout';
export const metadata: { title: string } = {
  title: '不忘智能科技',
};

export default function Layout({ children }: Props) {
  return (
    <html lang="zh">
      <body>
        {children}
      </body>
    </html>
  );
}
