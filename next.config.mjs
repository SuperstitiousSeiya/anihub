/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          }
          
        ],
      },

      api: {
        bodyParser: {
          sizeLimit: '20mb',
        }
      }
};

export default nextConfig;
