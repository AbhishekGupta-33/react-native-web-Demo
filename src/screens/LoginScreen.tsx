import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Container } from '../components/layout/Container';
import { TextInput } from '../components/common/TextInput';
import { Button } from '../components/common/Button';
import { useAuthViewModel } from '../viewmodels/AuthViewModel';
import { theme } from '../constants/theme';
import { strings } from '../constants/strings';
import { useNavigation } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';

interface LoginScreenProps {
  // onLoginSuccess: () => void
}

export const LoginScreen: React.FC<any> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading,error, login } = useAuthViewModel();

  const handleLogin = async () => {
    const success = await login(email, password);
    // const navigation = useNavigation();
    
    if (success) {
      // onLoginSuccess();
      navigation.navigate('BookList')
    } else if (error) {
       Alert.alert('Login Failed', error);
    }
  };

  return (
    <Container style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{strings.loginTitle}</Text>
        
        <TextInput
          placeholder={strings.emailPlaceholder}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          placeholder={strings.passwordPlaceholder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Button
          title={strings.loginButton}
          onPress={handleLogin}
          loading={loading}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    ...theme.typography.h1,
    textAlign: 'center',
    marginBottom: theme.spacing.xxl,
    color: theme.colors.text,
  },
});