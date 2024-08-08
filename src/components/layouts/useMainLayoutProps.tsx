'use client';
import useAccessStore from '@/store/useAccessStore';
import type { ProSettings } from '@ant-design/pro-components';
import { staticRouter } from '@/static/staticRouter';

const useDefaultLayoutProps = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const canAccessSystem = useAccessStore((state) => state.canAccessSystem);
  // 设置
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };
  const props = {
    title: '',
    siderWidth: 216,
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
          access: canAccessSystem,
        },
        {
          path: staticRouter.intro,
          name: 'intro',
          access: canAccessSystem,
        },
        {
          name: 'product',
          path: staticRouter.product,
          access: canAccessSystem,
        },
        {
          name: 'latestNews',
          path: staticRouter.latestNews,
          access: canAccessSystem,
        },
        {
          name: 'aboutUs',
          path: staticRouter.aboutUs,
          access: canAccessSystem,
        },
      ],
      
    },
  };
  return [props, settings];
};


export default useDefaultLayoutProps;
