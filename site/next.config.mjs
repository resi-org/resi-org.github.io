/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/test',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
