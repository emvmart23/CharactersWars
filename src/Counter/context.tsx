"use client";

import GetData from "@/Api";
import React, { createContext, useState } from "react";

interface MyContextType {
  isDataShowOpen: boolean;
  setIsDataShowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  info: any[];
  setInfo: React.Dispatch<React.SetStateAction<[]>>;
}

interface ContextProps {
  children: React.ReactNode;
}

const typeStateDefault = {
  isLoading: true,
  setIsLoading: () => "",
  error: false,
  setError: () => "",
  isDataShowOpen: false,
  setIsDataShowOpen: () => "",
  info: [],
  setInfo: () => [],
};

export const ContextStarWars = createContext<MyContextType>(typeStateDefault);

export const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  const { info, setInfo } = GetData();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // show details for characters
  const [isDataShowOpen, setIsDataShowOpen] = useState<boolean>(false);

  return (
    <ContextStarWars.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        isDataShowOpen,
        setIsDataShowOpen,
        info,
        setInfo,
      }}
    >
      {children}
    </ContextStarWars.Provider>
  );
};

export default ContextProvider;
