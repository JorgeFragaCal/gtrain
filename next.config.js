/** @type {import('next').NextConfig} */

const path = require("path");
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/react",
  "@fullcalendar/daygrid",
]);
module.exports = withTM({
  // any other general next.js settings
  reactStrictMode: true,

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
});
