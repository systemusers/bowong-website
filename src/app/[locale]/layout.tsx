import { MainLayout } from '@/components';
import React from 'react';
import { Props } from '@/types/Layout';
import { locales } from '@/static/locales';

//function to generate the routes for all the locales
export function generateStaticParams() {
  console.log(locales);
  
  return locales.map((locale) => ({ locale }));
}

export default function Layout({ children, params: { locale } }: Props) {
  return (
    <>
      <MainLayout params={{
        locale: locale,
      }}>{children}</MainLayout>
    </>
  );
}
