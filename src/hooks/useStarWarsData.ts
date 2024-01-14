"use client";

import { fetchData } from "@/api";
import { useStar } from "@/context/context";
import { useEffect, useState } from "react";

export function useStarWarsData() {
  const { setIsLoading, setError } = useStar();
  const [character, setCharacter] = useState<CharacterType[]>([]);
  const [planets, setPlanets] = useState<PlanetsType[]>([]);
  const [vehicles, setVehicles] = useState<VehiclesType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const [characterResp, planetsResp, vehiclesResp] = await Promise.all([
          fetchData<{ results: CharacterType[] }>("people"),
          fetchData<{ results: PlanetsType[] }>("planets"),
          fetchData<{ results: VehiclesType[] }>("vehicles"),
        ]);
        setCharacter(characterResp.results);
        setPlanets(planetsResp.results);
        setVehicles(vehiclesResp.results);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return { planets, character, vehicles };
}
