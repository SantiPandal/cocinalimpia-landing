import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/wa",
        destination: "https://wa.me/55564314241?text=Hola%2C%20me%20interesa%20una%20cotización",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
