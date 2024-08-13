import React from 'react';
import { Props } from '@/types/Layout';
// import useSettingStore from '@/store/useSettingStore';
export const metadata: { title: string } = {
  title: '不忘智能科技',
};

export default function Layout({ children }: Props) {
  // const defaultLocale = useSettingStore((state) => state.defaultLocale);

  return (
    <html lang="en">
    <body>
    {children}
    </body>
    </html>
  );
}
