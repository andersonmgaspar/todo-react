import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(false);

  const [username, setUsername] = useState(null);

  function login(username, password) {
    if (username === 'andi' && password === 'dev23') {
      setAuth(true);
      setUsername(username);
      return true;
    } else {
      setAuth(false);
      setUsername(null);
      return false;
    }
  }

  function logout() {
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}
