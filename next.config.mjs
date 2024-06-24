/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/(.*)',
          has: [
            {
              type: 'host',
              value: 'nwaspot.com', 
            },
          ],
          permanent: true,
          destination: 'https://www.nwaspot.com/$1',
        },
        {
          source: '/(.*)',
          has: [
            {
              type: 'host',
              value: 'www.nwaspot.com', 
            },
          ],
          permanent: true,
          destination: 'https://www.nwaspot.com/$1',
        },
      ];
    },
  };
  
  export default nextConfig;
  