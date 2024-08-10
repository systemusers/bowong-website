'use client';
import { redirect } from 'next/navigation';
import useSettingStore from '@/store/useSettingStore';
import { staticRouter } from '@/static/staticRouter';
import { locales } from '@/static/locales';

 export default function Home() {
  // const defaultLocale = useSettingStore((state) => {
  //   state.defaultLocale
  // });
  // // 静态 build 模式下 不能用 next/router 需要用next/navigation
  // redirect(`/${defaultLocale}/${staticRouter.home}`);、
  const defaultLocale = useSettingStore((state) => state.defaultLocale);
  if (!defaultLocale || !locales.includes(defaultLocale)) {
    redirect(`/en/${staticRouter.home}`); // Fallback to default if undefined
  }

  redirect(`/${defaultLocale}/${staticRouter.home}`);
}
