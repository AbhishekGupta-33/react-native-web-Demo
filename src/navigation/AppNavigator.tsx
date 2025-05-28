import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import { LoginScreen } from '../screens/LoginScreen';
import { Book } from '../models/Book';
import { theme } from '../constants/theme';
import BookListScreen from '../screens/BookListScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  BookList: undefined;
  BookDetail: { book: Book };
  MainTabs: undefined;
};


// Main App Navigator
export const AppNavigator: React.FC = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BookList" component={BookListScreen} />
      <Stack.Screen name="BookDetails" component={BookDetailScreen} />
      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  webListPanel: {
    width: '40%',
    borderRightWidth: 1,
    borderRightColor: theme.colors.border,
  },
  webDetailPanel: {
    width: '60%',
  },
});