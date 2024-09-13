import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  swcMinify: true, // Enable SWC-based minification for faster builds

  // Custom Webpack configuration
  webpack: (config) => {
    config.optimization.splitChunks = {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
          maxSize: 200000, // Set max chunk size to 200kB
        },
      },
    };

    // Conditionally add the BundleAnalyzerPlugin
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze.html',
        })
      );
    }

    return config;
  },
};

export default nextConfig;

