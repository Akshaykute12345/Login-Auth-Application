import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);

  const loginHandler = () => {
    setIsUserLogin(true);
  };

  const logoutHandler = () => {
    setIsUserLogin(false);
  };
  return (
    <AuthContext.Provider value={{ isUserLogin, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
