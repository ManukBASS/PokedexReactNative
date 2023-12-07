// React Native Imports
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Components
import { FavoritesContextComponent } from './src/context/FavoritesContext';
import { TabNavigator } from './src/router/TabNavigator';

export default function App() {
  return (
    <FavoritesContextComponent>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </FavoritesContextComponent>
  );
}

