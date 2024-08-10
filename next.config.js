
// const createNextIntlPlugin = require('next-intl/plugin');
// const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
// 判断环境
// const isProd = ['production'].includes(process.env.NODE_ENV);
// // 转发
// const rewrites = () => {
//   if (!isProd) {
//     return [
//       {
//         source: '/api/:slug*',
//         destination: process.env.PROXY,
//       },
//     ];
//   } else {
//     return [];
//   }
// };
const nextConfig = {
  // rewrites,
  output: 'standalone',  // 打包成单文件
  reactStrictMode: false,
};

module.exports = nextConfig;


