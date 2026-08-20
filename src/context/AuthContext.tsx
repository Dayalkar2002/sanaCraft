'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

export interface User {
  username: string;
  mobile: string;
  email?: string;
}

export type AuthTab = 'signin' | 'signup' | 'forgot';

interface AuthContextType {
  user: User | null;
  isAuthModalOpen: boolean;
  authTab: AuthTab;
  authPrompt: string;
  setAuthTab: (tab: AuthTab) => void;
  openAuthModal: (tab?: AuthTab, prompt?: string) => void;
  closeAuthModal: () => void;
  requireAuth: (onAuthenticated?: () => void, prompt?: string) => boolean;
  login: (usernameOrEmail: string, password: string) => Promise<{ success: boolean; error?: string; needsSignup?: boolean }>;
  signup: (mobile: string, username: string, password: string, email?: string) => Promise<{ success: boolean; error?: string }>;
  forgotPassword: (identifier: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState<AuthTab>('signin');
  const [authPrompt, setAuthPrompt] = useState('');
  const pendingActionRef = useRef<(() => void) | null>(null);

  // Load saved session on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sanacraft_session_user');
      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const openAuthModal = (tab: AuthTab = 'signin', prompt?: string) => {
    setAuthTab(tab);
    setAuthPrompt(prompt || '');
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setAuthPrompt('');
    pendingActionRef.current = null;
  };

  const requireAuth = (onAuthenticated?: () => void, prompt?: string) => {
    if (user) return true;
    pendingActionRef.current = onAuthenticated ?? null;
    openAuthModal('signin', prompt || 'Please sign in to continue with your order.');
    return false;
  };

  const runPendingAction = () => {
    const action = pendingActionRef.current;
    pendingActionRef.current = null;
    if (action) {
      setTimeout(action, 180);
    }
  };

  const signup = async (mobile: string, username: string, password: string, email?: string) => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile, username, password, email })
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        return { success: false, error: data.error || 'Signup failed' };
      }

      setUser(data.user);
      localStorage.setItem('sanacraft_session_user', JSON.stringify(data.user));
      setIsAuthModalOpen(false);
      setAuthPrompt('');
      runPendingAction();
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Network error' };
    }
  };

  const login = async (usernameOrEmail: string, password: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail, password })
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        return {
          success: false,
          error: data.error || 'Invalid credentials',
          needsSignup: data.needsSignup
        };
      }

      setUser(data.user);
      localStorage.setItem('sanacraft_session_user', JSON.stringify(data.user));
      setIsAuthModalOpen(false);
      setAuthPrompt('');
      runPendingAction();
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Network error' };
    }
  };

  const forgotPassword = async (identifier: string, newPassword: string) => {
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, newPassword })
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        return { success: false, error: data.error || 'Password reset failed' };
      }

      if (data.user) {
        setUser(data.user);
        localStorage.setItem('sanacraft_session_user', JSON.stringify(data.user));
      }
      setAuthTab('signin');
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Network error' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sanacraft_session_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthModalOpen,
        authTab,
        authPrompt,
        setAuthTab,
        openAuthModal,
        closeAuthModal,
        requireAuth,
        login,
        signup,
        forgotPassword,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
