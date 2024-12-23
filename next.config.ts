import type {NextConfig} from 'next';

// const port = process.env.PORT || 3000;

// if (process.env.NODE_ENV === 'development') {
//   console.log('info  - lanUrl:', `http://${require('address').ip()}:3000`);
//   console.log('🚀 ~ port:', port);
// }

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PORT: process.env.NODE_ENV === 'development' ? '6868' : '3000',
    VERSION: 'v1',
  },
  output: 'standalone',
  reactStrictMode: false,
};

export default nextConfig;
