/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  // Optimize for WebContainer environment
  experimental: {
    optimizePackageImports: ['@/components'],
    esmExternals: 'loose'
  },
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable compression
  compress: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true
  },
  webpack: (config) => {
    config.cache = false;
    // Enable module concatenation
    config.optimization = {
      ...config.optimization,
      concatenateModules: true,
    };
    return config;
  }
};

module.exports = nextConfig;