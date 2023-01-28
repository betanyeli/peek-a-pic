import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
