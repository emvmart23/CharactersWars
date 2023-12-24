"use client";
import { dataStar } from "@/context/context";
import { useEffect, useState } from "react";

const apiArrays = [
  fetch("https://swapi.dev/api/people/"),
  fetch("https://swapi.dev/api/planets/"),
  fetch("https://swapi.dev/api/vehicles/"),
];

interface InfoType {
  results: { name: any }[];
}

const GetData = () => {
  const [info, setInfo] = useState<InfoType[] | null>(null);
  const { setIsLoading, setError } = dataStar();

  useEffect(() => {
    setIsLoading(true);
    Promise.all(apiArrays)
      .then(async (responses) => {
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        setInfo(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { info };
};

export default GetData;
