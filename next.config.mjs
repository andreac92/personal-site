/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.rescuegroups.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
