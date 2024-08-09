'use client';
import '@/app/globals.css';
import React, { useEffect, useState } from 'react';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';

import { usePathname, useRouter } from '@/lib/language';
import { Props } from '@/types/Layout';
import { NextIntlClientProvider } from 'next-intl';
import useMainLayoutProps from '@/components/layouts/useMainLayoutProps';
import { staticRouter } from '@/static/staticRouter';
import { timeZone } from '@/static/locales';
import { ChangeLanguage, MockComponent, Navigation, NoSSR, FooterLayout } from '@/components';
import { en } from '@/i18n/en';
import { zh } from '@/i18n/zh';
import { PageContainer, ProLayout,} from '@ant-design/pro-components';
export default function MainLayout({ children, params: { locale } }: Props) {
  useEffect(() => {
  }, []);
  const router = useRouter();
  const currentRoute = usePathname() as string;
  const [pathname, setPathname] = useState(currentRoute || `${staticRouter.home}`);
  const [props, 
    settings
  ] = useMainLayoutProps();
  const messages = locale === 'en' ? en : zh;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <AntdStyledComponentsRegistry>
        <MockComponent></MockComponent>
        <NoSSR>
          <div
            id="pro-layout"
            className="h-full"
          >
            <ProLayout
              prefixCls="my-prefix"
              {...props}
              siderWidth={216}

              // location={{
              //   pathname,
              // }}
              token={{
                header: {
                  colorBgHeader:' rgba(0,0,0,0.2)',
                  colorTextMenu: '#fff',
                },
                pageContainer:{
                  paddingBlockPageContainerContent: 0,
                  paddingInlinePageContainerContent:0,
                }
              }}
              siderMenuType="group"  // 菜单类型
              menu={{
                collapsedShowGroupTitle: true,    
              }}
              headerTitleRender={(logo, title, _) => {
                // const defaultDom = (
                //   <a>
                //     {logo}
                //   </a>
                // );
                return (
                  <>
                    {/* <MenuCard /> */}
                          wwww
                  </>
                );
              }}
              actionsRender={(props) => {
                if (props.isMobile) return [];
                return [
                  <ChangeLanguage key="ChangeLanguage"></ChangeLanguage>,
                ];
              }}
              footerRender={(props) => {
                if (props?.collapsed) return undefined;
                return (
                  <FooterLayout/>
                );
              }}
              {...settings}
              menuItemRender={(item: any) => {
                return (
                  <Navigation name={item.name} onNavCLick={() => {
                    setPathname(`${item.path || staticRouter.home}`);
                    router.push(`${item.path}`);
                  }}></Navigation>
                );
              }}
              contentStyle={{
                marginTop: '-50px',
                backgroundColor: '#fafafa', // 设置背景颜色
                minHeight: 'calc(100vh - 64px)', // 设置最小高度，排除 header 的高度
                color: '#333', // 设置默认字体颜色
              }}
            >
              <PageContainer 
              >
                {children}
              </PageContainer>
            </ProLayout>
          </div>
        </NoSSR>
      </AntdStyledComponentsRegistry>
    </NextIntlClientProvider>
  )
    
}

