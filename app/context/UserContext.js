"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
