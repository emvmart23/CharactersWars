"use client";
import React from "react";
import { Characters, CharacterInfo, Loading, Error } from "../components/index";
import { Box, Flex } from "@chakra-ui/react";
import { useStar } from "@/context/context";
import { useStarWarsData } from "@/hooks/useStarWarsData";

export default function page() {
  const { isLoading, error } = useStar();
  const { character, planets, vehicles } = useStarWarsData();

  return (
    <Flex>
      <Box
        pos={"relative"}
        w={{ base: "full", md: "320px" }}
        minW={{ base: "320px" }}
        borderRight={"2px solid gray"}
        height={{ base: "77.2rem", md: "78rem", xl: "88rem" }}
      >
        {error && <Error />}
        {isLoading && <Loading />}

        {character.map((char, index) => {
          const currentPlanet = planets[index];
          const currentVehicles = vehicles[index];
          return (
            <>
              <Characters
                key={index}
                data={char}
                currentPlanet={currentPlanet}
                currentVehicles={currentVehicles}
              />
            </>
          );
        })}
      </Box>

      <CharacterInfo />
    </Flex>
  );
}
