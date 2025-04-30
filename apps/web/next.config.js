// eslint-disable-next-line @typescript-eslint/no-require-imports
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
    'react-native-date-picker',
    'expo-modules-core',
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

module.exports = nextConfig;
