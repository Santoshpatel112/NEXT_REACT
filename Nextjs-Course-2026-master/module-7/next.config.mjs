/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.daily.dev',
      
      },
    ],
  },
};

export default nextConfig;
