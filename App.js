import { StatusBar } from 'expo-status-bar';

// React Native Imports
import { StyleSheet, Text, View } from 'react-native';

// Components
import HomeScreen from './src/components/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
