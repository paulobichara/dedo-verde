import { NewPlantModal } from '@repo/ui';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../styles/globals.css';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Expo + Next.js 👋</Text>
      <NewPlantModal />
      <h1 className="text-3xl font-bold underline text-gray-500"> Hello world! </h1>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
