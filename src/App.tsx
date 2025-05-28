import React from 'react';
import { LoginScreen } from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    // <LoginScreen/>
  );
}
