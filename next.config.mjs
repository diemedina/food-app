/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig = {};

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav : true,
  aggresiveFrontEndNavCaching : true,
  reloadOnOnline : true,
  swcMinify : true,
  disable : false,
  workboxOptions: {
    disableDevLogs: true,
  }
});

export default withPWA({
  nextConfig
});