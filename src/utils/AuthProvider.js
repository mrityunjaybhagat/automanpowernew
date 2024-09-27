import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('login_token');
    if (token) {
      setUserId(token);
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('login_token');
    setUserId(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
