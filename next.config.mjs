/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themoviedb.org",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "media.themoviedb.org",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "cdn4.iconfinder.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
