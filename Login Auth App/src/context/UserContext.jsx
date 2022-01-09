import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const setUserDataHandler = (user) => {
    setUserData({ ...userData, ...user });
  };

  return (
    <UserContext.Provider value={{ userData, setUserDataHandler }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
