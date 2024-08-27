/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "plus.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "assets.aceternity.com",
          },
          {
            protocol: "https",
            hostname: "https://nextjs.org/docs/messages/next-image-unconfigured-host",
          },
          {
            protocol: "https",
            hostname: "esassoc.com",
          },
        ],
      },
};

export default nextConfig;
