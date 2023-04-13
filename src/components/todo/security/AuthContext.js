/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(false);

  const [username, setUsername] = useState(null);

  // eslint-disable-next-line no-shadow
  function login(username, password) {
    if (username === 'andi' && password === 'dev23') {
      setAuth(true);
      setUsername(username);
      return true;
    }
    setAuth(false);
    setUsername(null);
    return false;
  }

  function logout() {
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{
      isAuth, login, logout, username,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}
