'use client';
import styles from './shouye.module.css';
import Image from 'next/image';
import image from '@/../public/image.png';

export default function NotFound() {
  // const t = useTranslations('nofound');

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
    >
      <div className={`${styles['text_404']}`}>
          <Image src={image} alt="" />
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3vw', marginTop: '5vh' }}
        >
          未找到页面
          {/* {t('PageNotFound')} */}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2vw' }}>
          {/* {t('requested')} */}
          我们找不到您要求的页面
        </div>
      </div>
    </div>
  );
}
