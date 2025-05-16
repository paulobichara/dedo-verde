import { Colors } from '@repo/ui';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
  PaperProvider
} from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const customDarkTheme: MD3Theme = { ...MD3DarkTheme, colors: Colors.dark };
const customLightTheme: MD3Theme = { ...MD3LightTheme, colors: Colors.light };

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? customDarkTheme : customLightTheme;

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" translucent={true} />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
