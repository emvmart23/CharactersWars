"use client";
import React, { createContext, useContext, useState } from "react";

interface CharactersContextType {
  isDataShowOpen: VehiclesType | null
  setIsDataShowOpen: React.Dispatch<React.SetStateAction<VehiclesType | null >>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isClickedItem: boolean;
  setIsClickedItem: React.Dispatch<React.SetStateAction<boolean>>;
  error: any;
  setError: React.Dispatch<React.SetStateAction<any>>;
  setIsOpenDetails: React.Dispatch<React.SetStateAction<CharacterType | null>>;
  isOpenDetails: CharacterType | null;
}

export const ContextStarWars = createContext<CharactersContextType | undefined>(
  undefined
);

export interface Props {
  children: React.ReactNode;
}

export const ContextCharacterProvider: React.FC<Props> = ({ children }) => {
  // show details for characters
  const [isDataShowOpen, setIsDataShowOpen] = useState<VehiclesType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // if clicked item of character
  const [isClickedItem, setIsClickedItem] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState<CharacterType | null>(
    null
  );

  return (
    <ContextStarWars.Provider
      value={{
        isDataShowOpen,
        setIsDataShowOpen,
        isLoading,
        setIsLoading,
        isClickedItem,
        setIsClickedItem,
        error,
        setError,
        isOpenDetails,
        setIsOpenDetails,
      }}
    >
      {children}
    </ContextStarWars.Provider>
  );
};

export const useStar = () => {
  const context = useContext(ContextStarWars);
  if (context === undefined) {
    throw new Error(`context's null.`);
  }
  return context;
};
