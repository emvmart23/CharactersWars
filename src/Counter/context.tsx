"use client";

import React, { createContext, useState } from "react";

interface MyContextType {
  isDataShowOpen: boolean;
  setIsDataShowOpen :React.Dispatch<React.SetStateAction<boolean>>; 
  isLoading: boolean; 
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  items: any[]
  setItems:React.Dispatch<React.SetStateAction<[]>>;
  
}

interface ContextProps {
  children: React.ReactNode;
}

const typeStateDefault = {
  isLoading: true,
  setIsLoading: () => '',
  error: false,
  setError: () => '',
  isDataShowOpen: false,
  setIsDataShowOpen: () => '',
  items : [], 
  setItems : () => []
}

export const ContextStarWars = createContext<MyContextType>(typeStateDefault);

export const ContextProvider: React.FC<ContextProps> = ({ children }) => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ error, setError ] = useState<boolean>(false)
  const [ isDataShowOpen, setIsDataShowOpen ] = useState(false)
  const [items, setItems] = useState<[]>([]);
 
  return (
    <ContextStarWars.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        isDataShowOpen,
        setIsDataShowOpen,
        items, 
        setItems
      }}
    >
      {children}
    </ContextStarWars.Provider>
  );
};

export default ContextProvider;
