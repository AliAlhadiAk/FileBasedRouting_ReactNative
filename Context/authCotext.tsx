import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  email: string;
  userName: string;
  profileUrl: string | null;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean | undefined;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (
    email: string,
    password: string,
    userName: string,
    profileUrl: string | null
  ) => Promise<void>;
};

// Create the initial context with null values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: undefined,
  login: async (email: string, password: string) => {},
  logout: async () => {},
  register: async (
    email: string,
    password: string,
    userName: string,
    profileUrl: string | null
  ) => {},
});

export const AuthContextProvider: React.FC = ({ children }:any) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
       setTimeout(() => {
        setIsAuthenticated(false)
       }, 3000);
  }, []);

  const logout = async () => {
    try {
 
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const register = async (
    email: string,
    password: string,
    userName: string,
    profileUrl: string | null
  ) => {
    try {
  
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = (): AuthContextType => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return authContext;
};
