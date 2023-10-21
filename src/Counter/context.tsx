"use client";
import React, { RefObject, createContext, useContext, useRef, useState } from "react";

interface PropsType {
  eye_color?: string;
  hair_color?: string;
  birth_year?: string;
}

interface CharactersContextType {
  isDataShowOpen: boolean;
  characterInfoData:
    | PropsType
    | {
        eye_color: string;
        hair_color: string;
        birth_year: string;
      };
  setCharacterInfoData: React.Dispatch<React.SetStateAction<{}>>;
  nav: RefObject<HTMLDivElement>;
  navContent: boolean
  setNavContent: React.Dispatch<React.SetStateAction<boolean>>;
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
  const nav = useRef<null | HTMLDivElement>(null);

  // react conditional rendering
  const [navContent, setNavContent] = useState<boolean>(false)
  return (
    <ContextStarWars.Provider
      value={{
        isDataShowOpen,
        characterInfoData,
        setCharacterInfoData,
        nav,
        setNavContent,
        navContent
      }}
    >
      {children}
    </ContextStarWars.Provider>
  );
};


export const dataStar = () => {
  const context = useContext(ContextStarWars);
  if (context === undefined) {
    throw new Error(`context is null.`);
  }
  return context;
};