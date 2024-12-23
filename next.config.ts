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
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          {key: 'Access-Control-Allow-Credentials', value: 'true'},
          {key: 'Access-Control-Allow-Origin', value: '*'},
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
