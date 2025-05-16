import { NewPlantModal } from '@repo/ui';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const theme = useTheme();

  return (
    <SafeAreaView  style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <NewPlantModal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
