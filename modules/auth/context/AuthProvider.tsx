import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import storageModel from "../../../services/localStorage/storageModel";

interface AuthContextType {
 isAuthenticated: boolean;
 logIn: () => void;
 logOut: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
 const localStorage = new storageModel();

 useEffect(() => {
  const checkAuth = async () => {
   const token = await localStorage.getTokenFromLocal();
   setIsAuthenticated(!!token)
  };
  checkAuth();
 }, []);

 const logIn = () => setIsAuthenticated(true)
 const logOut = () => setIsAuthenticated(false);

 return (
  <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>
   {children}
  </AuthContext.Provider>
 );
};

export const useAuthProvider = () => {
 const context = useContext(AuthContext);
 if (!context) {
  throw new Error('useAuth must be used within an AuthProvider');
 }
 return context;
};

export default AuthProvider;
