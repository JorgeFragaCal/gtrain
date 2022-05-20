/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const path = require("path");

module.exports = {
  images:{
    domains:['lh3.googleusercontent.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
