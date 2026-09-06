import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inline the stylesheet instead of a render-blocking <link>.
    inlineCss: true,
    // Import only the icons actually used rather than the package barrel.
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
