/* eslint-disable @typescript-eslint/no-require-imports */
const { withExpo } = require('@expo/next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'react-native-safe-area-context',
    'expo-modules-core',
    'react-native-vector-icons',
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot|svg)$/,
      loader: 'file-loader',
      options: {
        esModule: false,
        name: '[name].[ext]',
        outputPath: 'static/media/fonts/',
      },
    });
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@expo/vector-icons': 'react-native-vector-icons',
    };
    config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];
    return config;
  },
});

module.exports = nextConfig;
