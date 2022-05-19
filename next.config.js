/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
