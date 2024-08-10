'use client';

import React, { useState } from 'react';
// import * as Sentry from "@sentry/browser";

import { message } from 'antd';
import Image from 'next/image';
import email1 from '@/../public/e-mail.png';
import styles from '@/app/shouye.module.css';
import { useTranslations } from 'next-intl';

export default function FooterLayout() {
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState<string>();
  const [company, setCompany] = useState('');
  const t = useTranslations('home');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'contactPerson':
        setContactPerson(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'contactNumber':
        setContactNumber(value);
        break;
      case 'company':
        setCompany(value);
        break;
      default:
        break;
    }
  };

  const sendFeedbackToSentry = (contactPerson: string, email: string, contactNumber: string, company:string) => {
    // Sentry.captureMessage('User Feedback', {
    //   extra: {
    //     contactPerson,
    //     email,
    //     contactNumber,
    //     company,
    //   },
    // });
  };
  const handleSubmit = () => {
    console.log('Contact Person:', contactPerson);
    console.log('Email:', email);
    console.log('Contact Number:', contactNumber);
    console.log('Company:', company);
    if (!contactPerson || !email || !contactNumber || !company) {
      message.warning('所有字段都必须填写！');
      return;
    }
    sendFeedbackToSentry(contactPerson, email, contactNumber, company);

    // const eventId = Sentry.captureMessage("User Feedback");
    // console.log(eventId);
    
    // const userFeedback = {
    //   name:contactPerson,
    //   email: email,
    //   message:contactPerson,
    //   associatedEventId: eventId,
    // };
    
    // Sentry.captureFeedback(userFeedback,{ captureContext: {
    //   tags: { company: company },
    // },})

    message.success('已发送成功');
    setContactPerson('');
    setEmail('');
    setContactNumber('');
    setCompany('');
  };
  return (
    <div className={`${styles['group']}`}>
      <div className={`${styles['footer_contact']}`}>{t('ContactUs')}</div>
      <div className="flex justify-between">
        <div className={`${styles['footer_text']}`}>
          <div
            style={{
              fontWeight: '400',
              lineHeight: '2vw',
              fontSize: '1vw',
              color: 'rgba(102, 102, 102, 1)',
              height: '10vw',
            }}
          >
            {t('enan')}
          </div>
          <div style={{ fontSize: '1vw', color: 'rgba(51, 51, 51, 1)', paddingRight: '5vw' }}>
            <div className="flex justify-items-center">
             <Image src={email1} alt="" className={`${styles['size-6']}`} />
              &nbsp;&nbsp;<span style={{ fontSize: '1vw' }}>HR@bowong.ai</span>
            </div>
          </div>
        </div>
        <div className={`${styles['footer_text1']}`}>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Contact Person"
              name="contactPerson"
              value={contactPerson}
              onChange={handleInputChange}
              className={`${styles['footer_input']}`}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className={`${styles['footer_input']}`}
            />
          </div>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Contact Number"
              name="contactNumber"
              value={contactNumber}
              onChange={handleInputChange}
              className={`${styles['footer_input']}`}
            />
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={handleInputChange}
              className={`${styles['footer_input']}`}
            />
          </div>
          <button className={`${styles['button']}`} onClick={handleSubmit}>
            {t('send')}
          </button>
        </div>
      </div>
      <div>
        <div className={`${styles['footer_contact_1']}`}>
          <span>{t('FollowUs')}</span>
         {/* <Image src="/WeChat.png" alt="" className={`${styles['size-8']}`} />
         <Image src="/MicroBlog.png" alt="" className={`${styles['size-8']}`} />
         <Image src="/RedBook.png" alt="" className={`${styles['size-8']}`} />
         <Image src="/Tubing.png" alt="" className={`${styles['size-8']}`} /> */}
        </div>
        <div className={`${styles['footer_contact_2']}`}>
          <div>
            <div className={`${styles['footer_text_1']}`}>{t('Overview')}</div>
            <div className={`${styles['footer_text_2']}`}>{t('CoreValues')}</div>
            <div className={`${styles['footer_text_2']}`}>{t('Company')}</div>
            <div className={`${styles['footer_text_2']}`}>{t('CompanyCulture')}</div>
          </div>
          <div>
            <div className={`${styles['footer_text_1']}`}>{t('Product')}</div>
            {/* <div className={`${styles['footer_text_2']}`}>产品1</div>
            <div className={`${styles['footer_text_2']}`}>产品1</div> */}
          </div>
          <div>
            <div className={`${styles['footer_text_1']}`}>{t('CompanyNews')}</div>
            <div className={`${styles['footer_text_2']}`}>{t('LatestNews')}</div>
          </div>
          <div>
            <div className={`${styles['footer_text_1']}`}>{t('AboutUs')}</div>
            {/* <div className={`${styles['footer_text_2']}`}>{t('TeamMember')}</div> */}
          </div>
        </div>
      </div>
      {/* <div className="footer_text_3_parent">
        <div className={`${styles['footer_text_3']}`}>
          <div>
            ICP备案号：<a href="http://www.miitbeian.gov.cn">浙ICP备XXXXXX号-1</a>
          </div>
        </div>
      </div> */}
    </div>
  );
}
