"use client";
import { ContextStarWars } from "@/Counter/context";
import { CharactersProps, Props } from "@/components/Characters";
import { useContext, useEffect, useState } from "react";

const GetData = () => {

  const [ info, setInfo ] = useState<[]>([])

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setInfo(data.results))
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return { info };
};

export default GetData;