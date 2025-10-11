/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Comment out these two lines during local dev
  // basePath: '/Dipti_Portfolio',
  // assetPrefix: '/Dipti_Portfolio/',
};

export default nextConfig;
