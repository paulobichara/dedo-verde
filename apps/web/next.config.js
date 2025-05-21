/* eslint-disable @typescript-eslint/no-require-imports */
const { withExpo } = require('@expo/next-adapter');
const { loadEnvConfig } = require('@next/env');

const projectDir = process.cwd();
loadEnvConfig(projectDir);

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'react-native-safe-area-context',
    'expo-modules-core',
    'react-native-vector-icons',
    'react-native-paper',
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|tsx?)$/,
      exclude: /node_modules[/\\](?!@react-native-community)/,
      use: {
        loader: 'babel-loader',
      },
    });

    config.module.rules.push({
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
      type: 'asset/resource',
    });

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@expo/vector-icons': 'react-native-vector-icons',
      '@react-native-vector-icons/material-design-icons':
        'react-native-vector-icons/MaterialCommunityIcons',
    };

    config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];

    return config;
  },
});

module.exports = nextConfig;
