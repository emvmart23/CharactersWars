"use client";

import { dataStar } from "@/context/context";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CharacterInfo = () => {
  const { characterInfoData, isClickedItem } = dataStar();

  const starWarsCharacters = [
    {
      id: 1,
      title: "Eye Color",
      description: characterInfoData?.eye_color,
    },
    {
      id: 2,
      title: "Hair Color",
      description: characterInfoData?.hair_color,
    },
    {
      id: 3,
      title: "Skin Color",
      description: characterInfoData?.birth_year,
    },
  ];

  return (
    <Flex
      h={isClickedItem ? "full" : ""}
      px={{ base: "3rem", md: "9rem", lg: "15rem" }}
      py={{ base: "2rem", md: "3rem", lg: "5rem" }}
      w={
        isClickedItem ? { base: "100%", sm: "full" } : { base: "", sm: "full" }
      }
      pos={isClickedItem ? { base: "absolute", md: "relative" } : "relative"}
      fontSize={"xl"}
      bg={"white"}
      display={isClickedItem ? "block" : { base: "none", md: "block" }}
      color={"black"}
      minW={{ base: "320px" }}
    >
      <Text fontWeight={700} fontSize={"17px"} lineHeight={"20.29px"} mb={6}>
        General information
      </Text>
      {starWarsCharacters.map((char) => (
        <Flex key={char.id} justifyContent={"space-between"}>
          <Text
            fontSize={"17px"}
            lineHeight={"20.29px"}
            fontWeight={700}
            color={"#828282"}
            mb={6}
          >
            {char.title}
          </Text>
          <Text
            as={"p"}
            fontWeight={700}
            fontSize={"17px"}
            lineHeight={"20.29px"}
            align={"right"}
          >
            {char.description}
          </Text>
        </Flex>
      ))}

      <Text
        as={"h2"}
        fontWeight={700}
        fontSize={"17px"}
        lineHeight={"20.29px"}
        mb={6}
      >
        Vehicles
      </Text>
      <Flex justifyContent={"space-between"}>//faltante</Flex>
    </Flex>
  );
};

export default CharacterInfo;
