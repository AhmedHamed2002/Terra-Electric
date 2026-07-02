import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Target only modern browsers — removes unnecessary polyfill JS chunks (saves ~13 KiB)
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-tabs",
    ],
  },
  images: {
    dangerouslyAllowLocalIP: true,
    formats: ["image/avif", "image/webp"],
    qualities: [25, 50, 75, 80, 90, 100],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "121.4.89.144",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "9090",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
