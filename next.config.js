/** @type {import('next').NextConfig} */
module.exports = {
  distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
};
