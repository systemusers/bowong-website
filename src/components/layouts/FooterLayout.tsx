'use client';

import React, { useState } from 'react';

import { message } from 'antd';

import styles from '@/app/shouye.module.css';
export default function FooterLayout() {
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [company, setCompany] = useState('');
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

  const handleSubmit = () => {
    console.log('Contact Person:', contactPerson);
    console.log('Email:', email);
    console.log('Contact Number:', contactPerson);
    console.log('Company:', company);
    if (!contactPerson || !email || !contactPerson || !company) {
      message.warning('所有字段都必须填写！');
      return;
    }
    message.success('已发送成功');
    setContactPerson('');
    setEmail('');
    setContactNumber('');
    setCompany('');
  };
  return (
    <div className={`${styles['group']}`}>
      <div className={`${styles['footer_contact']}`}>Contact Us</div>
      <div className="flex justify-between">
        <div className={`${styles['footer_text']}`}>
          {/* <div
            style={{
              fontWeight: '400',
              lineHeight: '2vw',
              fontSize: '1vw',
              color: 'rgba(102, 102, 102, 1)',
              height: '10vw',
            }}
          >
            若您遇到任何疑问或需要进一步的信息，您可以选择直接拨打我们的官方服务热线进行即时沟通，我们亦提供了在线留言功能。您只需在本页面右侧的反馈表单中详述您的问题或需求，我们的专业团队将在收到您的信息后，依据留言的时间顺序，尽快予以响应并提供针对性的解答。
          </div> */}
          <div style={{ fontSize: '1vw', color: 'rgba(51, 51, 51, 1)', paddingRight: '5vw' }}>
            <div className="flex justify-items-center">
              <img src="/phone.png" alt="" className={`${styles['size-6']}`} />
              &nbsp;&nbsp;<span style={{ fontSize: '1vw' }}>(201)555-0124</span>
            </div>
            <div className="flex justify-items-center" style={{ margin: '2vw 0' }}>
              <img src="/e-mail.png" alt="" className={`${styles['size-6']}`} />
              &nbsp;&nbsp;<span style={{ fontSize: '1vw' }}>bowong.studio@example.com</span>
            </div>
            <div className="flex justify-items-center">
              <img src="/gps.png" alt="" className={`${styles['size-6']}`} />
              &nbsp;&nbsp;
              <span style={{ fontSize: '1vw' }}>
                浙江省杭州市余杭区五常街道爱橙街1号10幢2单元4层E409室E409-1至E409-15
              </span>
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
            send
          </button>
        </div>
      </div>
      <div>
        <div className={`${styles['footer_contact_1']}`}>
          <span>Follow Us</span>
          <img src="/WeChat.png" alt="" className={`${styles['size-8']}`} />
          <img src="/MicroBlog.png" alt="" className={`${styles['size-8']}`} />
          <img src="/RedBook.png" alt="" className={`${styles['size-8']}`} />
          <img src="/Tubing.png" alt="" className={`${styles['size-8']}`} />
        </div>
        <div className={`${styles['footer_contact_2']}`}>
          <div>
            <div className={`${styles['footer_text_1']}`}>Company Overview</div>
            <div className={`${styles['footer_text_2']}`}>Core Values</div>
            <div className={`${styles['footer_text_2']}`}>Company Activities</div>
            <div className={`${styles['footer_text_2']}`}>Company Culture</div>
          </div>
          <div>
            <div className={`${styles['footer_text_1']}`}>Product</div>
            <div className={`${styles['footer_text_2']}`}>产品1</div>
            <div className={`${styles['footer_text_2']}`}>产品1</div>
          </div>
          <div>
            <div className={`${styles['footer_text_1']}`}>Latest News</div>
            <div className={`${styles['footer_text_2']}`}>Company News</div>
          </div>
          <div>
            <div className={`${styles['footer_text_1']}`}>About Us</div>
            <div className={`${styles['footer_text_2']}`}>Team Member</div>
          </div>
        </div>
      </div>
      <div className="footer_text_3_parent">
        <div className={`${styles['footer_text_3']}`}>
          <div>
            ICP备案号：<a href="http://www.miitbeian.gov.cn">浙ICP备XXXXXX号-1</a>
          </div>
        </div>
      </div>
    </div>
  );
}
