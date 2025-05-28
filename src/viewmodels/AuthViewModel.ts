import { useState, useCallback } from 'react';
import { User } from '../models/User';

export const useAuthViewModel = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      if (email && password) {
        setUser({
          id: '1',
          email,
          name: email.split('@')[0],
        });
        return true;
      } else {
        setError('Invalid credentials');
        return false;
      }
    } catch {
      setError('Login failed');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    user,
    loading,
    error,
    login,
  };
};
