import styles from './shouye.module.css';
import Image from 'next/image';
import image from '@/../public/image.png';
export default function NotFound() {
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
          Page Not Found
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2vw' }}>
          We couldnt find the page you requested
        </div>
      </div>
    </div>
  );
}
