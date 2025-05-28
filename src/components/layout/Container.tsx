import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../../constants/theme';

interface ContainerProps {
  children: React.ReactNode;
  style?: any;
}

export const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});