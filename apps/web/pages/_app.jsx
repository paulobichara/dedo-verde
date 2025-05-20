import { Colors } from '@repo/ui';
import Head from 'next/head';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SessionProvider } from 'next-auth/react';

const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SafeAreaProvider>
        <PaperProvider theme={customLightTheme}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          <Component {...pageProps} />
        </PaperProvider>
      </SafeAreaProvider>
    </SessionProvider>
  );
}
