import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [orderQuantity, setOrderQuantity] = useState();

  return (
    <GlobalContext.Provider
      value={{
        orderQuantity,
        setOrderQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
