import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string; 
  profilePic?: string;
  role?: string; 
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean; 
  registerUser: (email: string, password: string) => void;
  login: (userData: User) => Promise<void>; 
  logout: () => void;
  isLoading: boolean; 
  error: string | null; 
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
 // const [token, setToken] = useState<string | undefined>(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const registerUser = async (userData: User) => {
    try {
      setIsLoading(true);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setError(null);
      navigate('/dashboard'); 
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  
  const login = async (userData: User) => {
    try {
      setIsLoading(true);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setError(null);
      navigate('/dashboard'); 
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/'); 
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser) as User;
          setUser(parsedUser);
        }
      } catch (err) {
        console.error('Failed to initialize auth', err);
        localStorage.removeItem('user'); // Clear invalid data
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    registerUser,
    login,
    logout,
    isLoading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};