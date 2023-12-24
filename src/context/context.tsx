"use client";
import React, { createContext, useContext, useRef, useState } from "react";

interface CharactersContextType {
  characterInfoData: People
  isDataShowOpen: boolean;
  setCharacterInfoData: React.Dispatch<React.SetStateAction<{}>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isClickedItem: boolean;
  setIsClickedItem: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextStarWars = createContext<CharactersContextType | undefined>(
  undefined
);

export interface Props {
  children: React.ReactNode;
} 

export const ContextCharacterProvider: React.FC<Props> = ({ children }) => {
  // show details for characters
  const [isDataShowOpen, setIsDataShowOpen] = useState<boolean>(false);
  const [characterInfoData, setCharacterInfoData] = useState<{}>({});
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  // if clicked item of character
  const [ isClickedItem, setIsClickedItem ] = useState(false)
  return (
    <ContextStarWars.Provider
      value={{
        isDataShowOpen,
        characterInfoData,
        setCharacterInfoData,
        isLoading,
        setIsLoading,
        isClickedItem,
        setIsClickedItem,
        error,
        setError
      }}
    >
      {children}
    </ContextStarWars.Provider>
  );
};


export const dataStar = () => {
  const context = useContext(ContextStarWars);
  if (context === undefined) {
    throw new Error(`context's null.`);
  }
  return context;
};