import { createContext, useContext, useState } from "react";

const GlobalContextForOrderAddition = createContext();

export const GlobalProviderForOrderAddition = ({ children }) => {
  const [orderNeedToAdd, setOrderNeedToAdd] =useState(false);


  return (
    <GlobalContextForOrderAddition.Provider
      value={{
        orderNeedToAdd,
        setOrderNeedToAdd,
      }}
    >
      {children}
    </GlobalContextForOrderAddition.Provider>
  );
};

export const useGlobalForOrderAddition = () => useContext(GlobalContextForOrderAddition);
