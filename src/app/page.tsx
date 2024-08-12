'use client';
import { redirect } from 'next/navigation';
import useSettingStore from '@/store/useSettingStore';
import { staticRouter } from '@/static/staticRouter';

 export default function Home() {
  const defaultLocale = useSettingStore((state) => state.defaultLocale);
  redirect(`/${defaultLocale}/${staticRouter.home}`);
}
