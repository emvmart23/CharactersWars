"use client";

import { fetchData } from "@/api";
import { useEffect, useState } from "react";

export function useStarWarsData() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
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
  return { planets, character, vehicles, isLoading, error };
}
