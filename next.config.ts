import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      }
    ]
  },
  allowedDevOrigins: ['http://10.81.234.158:3000'],
  experimental: {
    
  }
};

export default nextConfig;
