'use client';

import styles from '@/app/shouye.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import miao from '@/../public/home/miao.png';
import left from '@/../public/home/left.png';
import miao1 from '@/../public/home/17225999039292236797.png';
import centre from '@/../public/home/centre.png';
import right from '@/../public/home/right.png';
import ddbb from '@/../public/home/ddbbcd0578ef3d3deda8369da54a70cb.png';
import AI_2 from '@/../public/home/AI_2.png';
import img_v3 from '@/../public/home/img_v3_02dg_55f4d331-df12-4098-939d-4c583b5b57fg.png';
import c4b35 from '@/../public/home/f8764c4b35749fc4167531cdea8ae50b.png';
import AI_3 from '@/../public/home/17225999047454409255.png';
import img_v3_02 from '@/../public/home/img_v3_02df_90fc74f4-21e1-4975-9b34-71dde63e4fag.png';
export default function Page() {
  const t = useTranslations('home');

  return (
    <div>
      <div className={`${styles['miao_image']}`}>
          <Image src={miao}  alt="" /> 
        <div className={`${styles['title']}`}>
            <div style={{ fontSize: '7.5vw', lineHeight: '7vw' }}>BOWONG</div>
            <div className={`${styles['title_boder']}`} />
          <div style={{ marginTop: '3vw', fontSize: '1vw', lineHeight: '2vw', letterSpacing: '0.1vw' }}>
            <div>{t('head1')}</div>
            <div>{t('head2')}</div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-col justify-start items-center relative ${styles['group_3']}`}>
          <div  className={`${styles['image_5']}`}>          
           <Image src={miao1} alt="" />          
            </div>
          <div className={`${styles['pos_3']}`}>
            <div style={{width:"100%"}}>
             <Image src={left} alt=""/>
            </div>
            <div style={{ position: 'absolute', top: '10vw', right: '3vw', display: 'flex' }}>
              <div style={{ marginRight: '1vw' }}>
                <div className={`${styles['font_2']}`}>博</div>
                <div className={`${styles['font_2']}`}>望</div>
                <div className={`${styles['font_2']}`}>出</div>
                <div className={`${styles['font_2']}`}>海</div>
              </div>
              <div style={{ textAlign: 'right', marginTop: '20%' }}>
                <div className={`${styles['font_2']}`}>内</div>
                <div className={`${styles['font_2']}`}>容</div>
                <div className={`${styles['font_2']}`}>模</div>
                <div className={`${styles['font_2']}`}>型</div>
              </div>
            </div>
            <div style={{ width: '100%', paddingLeft: '10%', paddingRight: '10%' }} className={`absolute bottom-4`}>
              <div className={`${styles['font_4']}`}>
                TikTok/亚马逊内容模型，改变传统出海短视频生产和投放模式，以矩阵+AI生产模式快速布局，快速铺货
              </div>
            </div>
          </div>
          <div className={`flex-col ${styles['pos_4']}`}>
           <Image src={centre} alt=""/>
            <div style={{ position: 'absolute', top: '10vw', right: '3vw', display: 'flex' }}>
              <div style={{ marginRight: '1vw' }}>
                <div className={`${styles['font_2']}`}>博</div>
                <div className={`${styles['font_2']}`}>望</div>
                <div className={`${styles['font_2']}`}>斗</div>
                <div className={`${styles['font_2']}`}>彩</div>
              </div>
              <div style={{ textAlign: 'right', marginTop: '-35%' }}>
                <div className={`${styles['font_2']}`}>图</div>
                <div className={`${styles['font_2']}`}>片</div>
                <div className={`${styles['font_2']}`}>大</div>
                <div className={`${styles['font_2']}`}>模</div>
                <div className={`${styles['font_2']}`}>型</div>
              </div>
            </div>
            <div style={{ width: '100%', paddingLeft: '10%', paddingRight: '10%' }} className={`absolute bottom-4`}>
              <div className={`${styles['font_4']}`}>
                基于多年设计领域经验，建设面相真产品 + 真场景图文大模型，帮助电商客户快速完成内容生产和多渠道投放{' '}
              </div>
            </div>
          </div>
          <div className={`flex-col ${styles['pos_2']}`}>
           <Image src={right} alt="" />
            <div style={{ position: 'absolute', top: '5vw', right: '3vw', display: 'flex' }}>
              <div style={{ marginRight: '1vw' }}>
                <div className={`${styles['font_2']}`}>博</div>
                <div className={`${styles['font_2']}`}>望</div>
                <div className={`${styles['font_2']}`}>短</div>
                <div className={`${styles['font_2']}`}>视</div>
                <div className={`${styles['font_2']}`}>频</div>
              </div>
              <div style={{ textAlign: 'right', marginTop: '25%' }}>
                <div className={`${styles['font_2']}`}>大</div>
                <div className={`${styles['font_2']}`}>模</div>
                <div className={`${styles['font_2']}`}>型</div>
              </div>
            </div>
            <div style={{ width: '100%', paddingLeft: '10%', paddingRight: '10%' }} className={`absolute bottom-4`}>
              <div className={`${styles['font_4']}`}>
                AI内容+AI渠道能力匹配个性化算法，基于用户的个性化关注，生产内容并全方位触达用户{' '}
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles['group_18']}`}>
          <div className={`flex ${styles['AI_1']}`}>
            <div className={`${styles['left_1']}`}>
              <div className={`${styles['font_1']}`}>our</div>
              <div className={`${styles['font_8']}`}>tech</div>
              <div className={`${styles['sext_1']}`} />
            </div>
            <div className={`${styles['right_1']}`}>
              <div className={`flex ${styles['container']}`}>
                <div className={`${styles['image_4']}`}>
                 <Image src={ddbb} alt="" />
                  <div className={`${styles['font_6']}`}>适用产品 AI生成小红书文案</div>
                  <div style={{ textAlign: 'right' }} className={`${styles['font_7']}`}>
                    {t('TechnicalName1')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles['AI_2']}`}>
            <div className={`${styles['glide_down_text_1']}`}>Glide down</div>
            <div className={`${styles['image_6']}`}>
              <div className={`${styles['image_container']}`}>
               <Image src={AI_2} alt="" />
                <div className={`${styles['glide_down_text']}`}>Glide down</div>
                <div className={`${styles['sext_2']}`} />
              </div>
              <div className={`${styles['flide']} flex`} /* 添加样式类 */>
                <div>
                 <Image src={img_v3} alt="" />
                  <span className={`${styles['font_7']}`}>短视频/直播内容 RE-Director</span>
                </div>
                <span className={`${styles['font_6']}`}>适用产品 AI生成小红书文案</span>
              </div>
              <div className={`${styles['flide_1']}`}>
                <div className="flex">
                  <span className={`${styles['font_9']}`}>适用产品 AI生成小红书文案</span>
                 <Image src={c4b35} className={`${styles['img_11']}`} alt="" />
                </div>
                <span className={`${styles['font_7']}`}>还原真实的图片模型</span>
              </div>
            </div>
            <div className={`${styles['top']} flex`} style={{ width: '100%' }}>
              <div className={`${styles['image_container_1']}`}>
               <Image src={AI_3} alt="" className="blur-2xl" />
                <div className={`${styles['top_2']} flex`}>
                  <div className={`${styles['left_2']}  `}>
                    <div className={`${styles['img_10']}`}>
                      <div className={`${styles['text_overlay']}`}>
                        <div className={`${styles['font_10']}`}>行业/IP/渠道垂直模型</div>
                      </div>
                     <Image
                        style={{ width: ' 24vw' }}
                        src={img_v3_02}
                        alt=""
                      />
                    </div>
                    <div
                      className={`${styles['img_10']}`}
                      style={{ marginTop: '0.5vw', marginBottom: '0.5vw', width: '100%' }}
                    >
                      <div className={`${styles['text_overlay']}`}>
                        <div className={`${styles['font_10']}`}>多语言支持，语言语音无缝切换</div>
                      </div>
                     <Image
                        style={{ width: ' 29vw' }}
                        src={img_v3_02}
                        alt=""
                      />
                    </div>
                    <div className={`${styles['img_10']}`}>
                      <div className={`${styles['text_overlay']}`}>
                        <div className={`${styles['font_10']}`}>超高速高质量规模化生产</div>
                      </div>
                     <Image
                        style={{ width: ' 27vw' }}
                        src={img_v3_02}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
