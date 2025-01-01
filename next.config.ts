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
  async redirects() {
    return [
      {
        source: '/:path*', // Matches all routes
        has: [
          {
            type: 'host',
            value: 'myportfolio296.netlify.app', // subdomain
          },
        ],
        destination: 'https://www.phamgiatrihieu.io.vn/:path*', //My primary domain
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
