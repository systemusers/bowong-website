import '@/app/globals.css';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import React from 'react';
import { Props } from '@/types/Layout';


export default async function RootLayout({ children }: Partial<Props>) {
  return (
    <html lang="en">
      <body>
      <AntdStyledComponentsRegistry>
        {children}
      </AntdStyledComponentsRegistry>
      </body>
    </html>
  );
}
