"use client";
import { ContextStarWars } from "@/Counter/context";
import { useContext, useEffect, useState } from "react";

const GetData = () => {
  const { isLoading, setIsLoading } =
    useContext(ContextStarWars);

  const [ info, setInfo ] = useState<[]>([])

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setInfo(data.results))
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  }, []);

  return { info, setInfo };
};

export default GetData;