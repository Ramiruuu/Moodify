import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  email: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isSignout: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    username: string,
    password: string,
  ) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSignout, setIsSignout] = useState(false);

  // Check if user is already logged in on app start
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (e) {
        console.error("Failed to restore session:", e);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapAsync();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Get all users from storage
      const usersData = await AsyncStorage.getItem("users");
      const users = usersData ? JSON.parse(usersData) : [];

      // Find user by email
      const existingUser = users.find((u: any) => u.email === email);

      if (!existingUser) {
        throw new Error("User not found");
      }

      // Simple password verification (in production, use proper hashing)
      if (existingUser.password !== password) {
        throw new Error("Invalid password");
      }

      const userData = {
        email: existingUser.email,
        username: existingUser.username,
      };

      await AsyncStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      setIsSignout(false);
    } catch (error) {
      throw error;
    }
  };

  const register = async (
    email: string,
    username: string,
    password: string,
  ) => {
    try {
      // Get existing users
      const usersData = await AsyncStorage.getItem("users");
      const users = usersData ? JSON.parse(usersData) : [];

      // Check if user already exists
      if (users.some((u: any) => u.email === email)) {
        throw new Error("Email already registered");
      }

      if (users.some((u: any) => u.username === username)) {
        throw new Error("Username already taken");
      }

      // Add new user
      const newUser = { email, username, password };
      users.push(newUser);

      await AsyncStorage.setItem("users", JSON.stringify(users));

      // Auto login after registration
      const userData = {
        email,
        username,
      };
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      setIsSignout(false);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
      setIsSignout(true);
    } catch (error) {
      throw error;
    }
  };

  const value = {
    user,
    isLoading,
    isSignout,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
