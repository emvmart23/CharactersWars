"use client";
import { ContextStarWars } from "@/Counter/context";
import CharacterInfo from "@/components/CharacterInfo";
import Characters from "@/components/Characters";
import InfoError from "@/components/InfoError";
import InfoList from "@/components/InfoList";
import Loading from "@/components/InfoLoading";
import IsEmmpty from "@/components/IsEmpty";
import React, { useContext, useEffect, useState } from "react";

// interface DataProps {
//   name : string
//   height : string 
// }

const GetData: React.FC = () => {
  const { isLoading, setIsLoading, items, setItems } =
    useContext(ContextStarWars);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setItems(data.results))
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false)
      });
  }, []);

  return (
    <>
        <InfoList>
          {items?.map((item) => (
              <Characters key={item.name} data={item}/>
            ))}
        </InfoList>
      
  
    </>
  );
};

export default GetData;
