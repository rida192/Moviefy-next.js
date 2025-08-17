/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
        port: "",
      },
      // {
      //   protocol: "https",
      //   hostname: "themoviedb.org",
      //   pathname: "/t/p/**",
      //   // port: '',
      // },
      // {
      //   protocol: "https",
      //   hostname: "media.themoviedb.org",
      //   pathname: "/t/p/**",
      //   // port: '',
      // },
      // {
      //   protocol: "https",
      //   hostname: "cdn4.iconfinder.com",
      //   // port: '',
      //   // pathname: '/account123/**',
      // },
    ],
  },
  experimental: {
    optimizePackageImports: ["next/image"],
  },
};

export default nextConfig;
