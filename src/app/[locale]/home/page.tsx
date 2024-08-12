'use client';
import styles from '@/app/shouye.module.css';
import { useTranslations } from 'next-intl';

import Image from 'next/image';
import mouse from '@/../public/home/mouse.png';
import miao from '@/../public/home/miao.png';
import hezuo from '@/../public/home/hezuo.png';
import left from '@/../public/home/left1.png';
import miao1 from '@/../public/home/17225999039292236797.png';
import centre from '@/../public/home/center1.png';
import right from '@/../public/home/right1.png';
import ddbb from '@/../public/home/hua.png';
import AI_2 from '@/../public/home/AI_2.png';
import img_v3 from '@/../public/home/img_v3_02dm_16a5f9ed-684f-47fb-8f02-ef0b7535781g.png';
import c4b35 from '@/../public/home/f8764c4b35749fc4167531cdea8ae50b.png';
import AI_3 from '@/../public/home/17225999047454409255.png';
import img_v3_02 from '@/../public/home/img_v3_02dj_9dd0a89a-922b-45bf-b469-13a7118c33dg.png';
export default function Page() {
  const t = useTranslations('home');
  const scrollToSection= ()=>{
      const targetElement = document.querySelector(`.${styles['group_3']}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'instant' });
      }
  }
  return (
    <div>
      <div className={`${styles['miao_image']}`}>
          <Image src={miao} priority style={{ width: '100%' }} alt="" /> 
        <div className={`${styles['title']}`}>
          <div style={{ width:'100%', fontSize: '7vw', lineHeight: '7vw',fontWeight: "600", }}>BOWONG</div>
          <div className={`${styles['title_boder']}`} />
          <div style={{ marginTop: '3vw', fontSize: '1vw', lineHeight: '2vw', letterSpacing: '0.1vw' }}>
            <div>{t('head1')}</div>
            <div>{t('head2')}</div>
          </div>
          <div className='flex justify-center'>
            <Image src={mouse} style={{ width: '10%' , marginTop: '10vw' }} alt=""  onClick={scrollToSection} ></Image>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-col justify-start items-center relative ${styles['group_3']}`}>
          <div  className={`${styles['image_5']}`}>          
           <Image src={miao1}  style={{ width: '100%' }} alt="" />          
            </div>
          <div className={`${styles['pos_3']}`}>
            <div style={{width:"100%"}}>
             <Image src={left}  style={{ width: '100%' }} alt=""/>
            </div>
            <div style={{ position: 'absolute', bottom: '5%', left: '0',paddingLeft: '6%',paddingRight: '10%'  }}>
              <div  className={`${styles['font_2']}`}>{t('product1')}</div>
              <div style={{ width: '100%'}}>
                <div className={`${styles['font_4']}`}>
                  {t('product1intro1')}
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-col ${styles['pos_4']}`}>
            <Image src={centre}   style={{ width: '100%' }} alt=""/>
            <div style={{ position: 'absolute', bottom: '5%', left: '0',paddingLeft: '6%',paddingRight: '10%'  }}>
              <div  className={`${styles['font_2']}`}>{t('product2')}</div>
              <div style={{ width: '100%'}}>
                <div className={`${styles['font_4']}`}>
                {t('product1intro2')}
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-col ${styles['pos_2']}`}>
            <Image src={right}  style={{ width: '100%' }} alt="" />
            <div style={{ position: 'absolute', bottom: '5%', left: '0',paddingLeft: '6%',paddingRight: '10%'  }}>
              <div  className={`${styles['font_2']}`}>{t('product3')}</div>
              <div style={{ width: '100%'}}>
                <div className={`${styles['font_4']}`}>
                {t('product2intro3')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles['group_18']}`}>
          <div className={`flex ${styles['AI_1']}`}>
            <div className={`${styles['left_1']}`}>
              <div className={`${styles['font_1']}`}>{t('our')}</div>
              <div className={`${styles['font_8']}`}>{t('tech')}</div>
              <div className={`${styles['sext_1']}`} />
            </div>
            <div className={`${styles['right_1']}`}>
              <div className={`flex ${styles['container']}`}>
                <div className={`${styles['image_4']}`}>
                 <Image src={ddbb}  style={{ width: '100%' }} alt="" />
                  {/* <div className={`${styles['font_6']}`}>适用产品 AI生成小红书文案</div> */}
                  <div style={{ textAlign: 'right' }} className={`${styles['font_7']}`}>
                    {t('TechnicalName1')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles['AI_2']}`}>
            <div className={`${styles['glide_down_text_1']}`}>{t('Glidedown')}</div>
            <div className={`${styles['image_6']}`}>
              <div className={`${styles['image_container']}`}>
               <Image src={AI_2}  style={{ width: '100%' }} alt="" />
                <div className={`${styles['glide_down_text']}`}>{t('Glidedown')}</div>
                <div className={`${styles['sext_2']}`} />
              </div>
              <div className={`${styles['flide']} flex`} /* 添加样式类 */>
                <div className={`${styles['flide_2']}`}>
                 <Image src={img_v3}  style={{ width: '100%' }} alt="" />
                  <span className={`${styles['font_7']}`}>{t('TechnicalName2')}</span>
                </div>
                {/* <span className={`${styles['font_6']}`}>适用产品 AI生成小红书文案</span> */}
              </div>
              <div className={`${styles['flide_1']}`}>
                <div className="flex">
                  {/* <span className={`${styles['font_9']}`}>适用产品 AI生成小红书文案</span> */}
                 <Image src={c4b35}   style={{ width: '100%' }} className={`${styles['img_11']}`} alt="" />
                </div>
                <span className={`${styles['font_7']}`}>{t('TechnicalName3')}</span>
              </div>
            </div>
            <div className={`${styles['top']} flex`} style={{ width: '100%' }}>
              <div className={`${styles['image_container_1']}`}>
               <Image src={AI_3}  style={{ width: '100%' }} alt="" className="blur-2xl" />
                <div className={`${styles['top_2']} flex`}>
                  <div className={`${styles['left_2']}  `}>
                    <div className={`${styles['img_10']}`}>
                      <div className={`${styles['text_overlay']}`}>
                        <div className={`${styles['font_10']}`}>{t('Technical1')}</div>
                      </div>
                     <Image src={img_v3_02} alt="" style={{ width: '100%' }}/>
                    </div>
                    <div
                      className={`${styles['img_10']}`}
                      style={{ marginTop: '0.5vw', marginBottom: '0.5vw', width: '100%' }}
                    >
                      <div className={`${styles['text_overlay']}`}>
                        <div className={`${styles['font_10']}`}>{t('Technical2')}</div>
                      </div>
                     <Image  style={{ width: '100%' }} src={img_v3_02} alt="" />
                    </div>
                    <div className={`${styles['img_10']}`}>
                      <div className={`${styles['text_overlay']}`}>
                        <div className={`${styles['font_10']}`}>{t('Technical3')}</div>
                      </div>
                      <Image  style={{ width: '100%' }}src={img_v3_02} alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles['titleContainer']}`}>
          <Image src={hezuo} priority style={{ width: '100%' }} alt="" /> 
        <div className={`${styles['titleWhy']}`}>
          <div style={{ fontSize: '2.5vw', lineHeight: '3vw',  marginBottom: '10vw' }}>{t('WhyChooseUs')}</div>
          <div className={`${styles['teamWhy']} flex justify-between`}>
            {/* <div style={{textAlign:'left'}}><div style={{fontSize: '5vw',  marginBottom: '2vw' }}> {t('num')}</div><div style={{fontSize: '1vw'}}> {t('experience')}</div></div> */}
            <div style={{textAlign:'left'}}>
              <div className={`${styles['teamWhy_text']}`}> {t('num1')}</div>
              <div className={`${styles['teamWhy_text1']}`}> {t('team')}</div>
            </div>
            <div style={{textAlign:'left'}}>
              <div className={`${styles['teamWhy_text']}`}> {t('num2')}</div>
              <div className={`${styles['teamWhy_text1']}`}> {t('ProjectDelivery')}</div>
            </div>
            <div style={{textAlign:'left'}}>
              <div className={`${styles['teamWhy_text']}`}> {t('num3')}</div>
              <div className={`${styles['teamWhy_text1']}`}> {t('satisfiedCustomer')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
