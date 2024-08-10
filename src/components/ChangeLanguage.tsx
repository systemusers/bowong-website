import React, { useEffect, useState } from 'react';
import { Group } from 'antd/es/radio';
import { usePathname as useIntlPathname, useRouter as useIntlRouter } from '@/lib/language';
import useSettingStore from '@/store/useSettingStore';
import { RadioChangeEvent } from 'antd';

export default function ChangeLanguage() {
  const options = [
    { label: <div style={{color:'#fff'}}>EN</div>, value: 'en' },
    { label: <div style={{color:'#fff'}}>中</div>, value: 'zh' },
  ];

  const intlPathname = useIntlPathname();
  const intlRouter = useIntlRouter();
  const setDefaultLocale = useSettingStore((state) => state.setDefaultLocale);
  const defaultLocale = useSettingStore((state) => state.defaultLocale);

  // Initialize `value` to defaultLocale or 'en' if defaultLocale is not set
  const [value, setValue] = useState(defaultLocale || 'en');

  const onLanguageChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
    setDefaultLocale(value);
    intlRouter.replace(intlPathname, { locale: value });
  };

  // Update the local state if defaultLocale changes
  useEffect(() => {
    setValue(defaultLocale || 'en');
  }, [defaultLocale]);

  return (
    <>
      <Group options={options} onChange={onLanguageChange} value={value} key={value} />
    </>
  );
}