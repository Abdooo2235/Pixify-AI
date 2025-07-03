import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  user: { email: string; name: string } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  const navigate = useNavigate();

  const login = (email: string, password: string): boolean => {
    // Simulate admin login with mock credentials
    if (email === 'admin@pixifyai.com' && password === 'admin123') {
      setIsAuthenticated(true);
      setIsAdmin(true);
      setUser({ email, name: 'Admin User' });
      navigate('/admin');
      return true;
    }
    // Simulate regular user login with mock credentials
    else if (email === 'user@pixifyai.com' && password === 'user123') {
      setIsAuthenticated(true);
      setIsAdmin(false);
      setUser({ email, name: 'Regular User' });
      navigate('/');
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUser(null);
    navigate('/auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};