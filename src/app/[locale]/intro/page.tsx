import React from 'react'
// import { useTranslations } from 'next-intl';

import Image from 'next/image';

import miao from '@/../public/home/miao.png';
import styles from '@/app/shouye.module.css';

export default function Page() {
    // const t = useTranslations('home');
    return (
    <div>
        <div className={`${styles['miao_image']}`}>
          <Image src={miao}  style={{ width: '100%' }}  alt="" /> 
        {/* <div className={`${styles['title']}`}>
            <div style={{ fontSize: '7.5vw', lineHeight: '7vw' }}>BOWONG</div>
            <div className={`${styles['title_boder']}`} />
          <div style={{ marginTop: '3vw', fontSize: '1vw', lineHeight: '2vw', letterSpacing: '0.1vw' }}>
            <div>{t('head1')}</div>
            <div>{t('head2')}</div>
          </div>
        </div> */}
      </div>
    </div>
  )
}