import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "placehold.co",
      "i.ytimg.com",
      "media.istockphoto.com",
      "img.freepik.com",
      "preview.keenthemes.com",
    ],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  /* other config options here */
};

export default nextConfig;
