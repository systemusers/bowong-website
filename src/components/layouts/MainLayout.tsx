'use client';
import '@/app/globals.css';
import React, { Suspense, useEffect, useState } from 'react';
import AntdStyledComponentsRegistry from '@/lib/antd-registry';
import type { ProSettings } from '@ant-design/pro-components';

import { usePathname, useRouter } from '@/lib/language';
import { Props } from '@/types/Layout';
import { NextIntlClientProvider } from 'next-intl';
import useMainLayoutProps from '@/components/layouts/useMainLayoutProps';
import { staticRouter } from '@/static/staticRouter';
import { timeZone } from '@/static/locales';
import { ChangeLanguage, MockComponent, Navigation, NoSSR } from '@/components';
import { en } from '@/i18n/en';
import { zh } from '@/i18n/zh';
import { PageContainer, ProCard, ProLayout,SettingDrawer} from '@ant-design/pro-components';

// const MenuCard = () => {
//   const { token } = theme.useToken();
//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//       }}
//     >logo
//     </div>
//   );
// };

export default function MainLayout({ children, params: { locale } }: Props) {
  useEffect(() => {
  }, []);
  const [num, setNum] = useState(40);
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  });
  const router = useRouter();
  const currentRoute = usePathname() as string;
  const [pathname, setPathname] = useState(currentRoute || `${staticRouter.home}`);
  const [props, 
    // settings
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
            {/* <ProLayout
            layout='top'
              {...props}
              siderWidth={216}
              {...settings}
              location={{
                pathname,
              }}
              actionsRender={(props) => {
                if (props.isMobile) return [];
                return [
                  <ChangeLanguage key="ChangeLanguage"></ChangeLanguage>,
                ];
              }}
              menuItemRender={(item: any) => {
                return (
                  <Navigation name={item.name} onNavCLick={() => {
                    setPathname(`${item.path || staticRouter.home}`);
                    router.push(`${item.path}`);
                  }}></Navigation>
                );
              }}
            >
              <PageContainer
                header={
                  {
                    title: false,
                  }
                }>
                  <Suspense fallback={<Spin />}>
                    {children}
                  </Suspense>
              </PageContainer>
            </ProLayout> */}
             <ProLayout
            prefixCls="my-prefix"
            {...props}
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
              },
            }}
            siderMenuType="group"
            menu={{
              collapsedShowGroupTitle: true,
            }}
            // headerTitleRender={(logo, title, _) => {
            //   // const defaultDom = (
            //   //   <a>
            //   //     {logo}
            //   //   </a>
            //   // );
            //   return (
            //     <>
            //       <MenuCard />
            //     </>
            //   );
            // }}
            // menuFooterRender={(props) => {
            //   if (props?.collapsed) return undefined;
            //   return (
            //     <div
            //       style={{
            //         textAlign: 'center',
            //         paddingBlockStart: 12,
            //       }}
            //     >
            //       <div>© 2021 Made with love</div>
            //       <div>by Ant Design</div>
            //     </div>
            //   );
            // }}
            
            // onMenuHeaderClick={(e) => console.log(e)}
            // menuItemRender={(item, dom) => (
            //   <div
            //     onClick={() => {
            //       setPathname(item.path || '/');
            //     }}
            //   >
            //     {dom}
            //   </div>
            // )}
            actionsRender={(props) => {
              if (props.isMobile) return [];
              return [
                <ChangeLanguage key="ChangeLanguage"></ChangeLanguage>,
              ];
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
          >
            <PageContainer>
             {children}
            </PageContainer>
          </ProLayout>
          </div>
        </NoSSR>
      </AntdStyledComponentsRegistry>
    </NextIntlClientProvider>
  )
    ;
}
