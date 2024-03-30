/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",// build dir 
  swcMinify: true,
  images: {
  },
};

module.exports = nextConfig;
