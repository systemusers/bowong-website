'use client';
import type { ProSettings } from '@ant-design/pro-components';
import { staticRouter } from '@/static/staticRouter';

const useDefaultLayoutProps = () => {
  // 设置
  const settings: ProSettings | undefined = {
    fixedHeader: true,  // 固定侧边栏
    layout: 'top',
    splitMenus: true,  // 是否分割菜单
  };
  const props = {
    title: '',
    logo: false,
    location: {
      pathname: staticRouter.root,
    },
    route: {
      path: staticRouter.root,
      routes: [
        {
          path: staticRouter.home,
          name: 'home',
        },
        // {
        //   path: staticRouter.intro,
        //   name: 'intro',
        // },
        // {
        //   name: 'product',
        //   path: staticRouter.product,
        // },
        // {
        //   name: 'latestNews',
        //   path: staticRouter.latestNews,
        // },
        // {
        //   name: 'aboutUs',
        //   path: staticRouter.aboutUs,
        // },
      ],
      
    },
  };
  return [props, settings];
};


export default useDefaultLayoutProps;
