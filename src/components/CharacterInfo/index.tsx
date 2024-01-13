"use client";
import { dataStar } from "@/context/context";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CharacterInfo = () => {
  const { isOpenDetails, isClickedItem, isDataShowOpen } = dataStar();

  const starWarsCharacters = [
    {
      id: 1,
      title: "Eye Color",
      description: isOpenDetails?.eye_color,
    },
    {
      id: 2,
      title: "Hair Color",
      description: isOpenDetails?.hair_color,
    },
    {
      id: 3,
      title: "Skin Color",
      description: isOpenDetails?.birth_year,
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
      <Text fontWeight={700} fontSize={"17px"} lineHeight={"20.29px"} mb={6} mt={10}>
        General information
      </Text>
      {starWarsCharacters.map((char) => (
        <Flex
          key={char.id}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderBottom={"1px"}
          borderColor={"gray.200"}
          py={5}
        >
          <Text
            fontSize={"17px"}
            lineHeight={"20.29px"}
            fontWeight={700}
            color={"#828282"}
          >
            {char.title}
          </Text>
          <Text
            fontWeight={700}
            fontSize={"17px"}
            lineHeight={"20.29px"}
            align={"right"}
          >
            {char.description}
          </Text>
        </Flex>
      ))}

      <Box borderBottom={"1px"} borderColor={"gray.200"} mt={20}>
        <Text
          fontSize={"17px"}
          lineHeight={"20.29px"}
          fontWeight={700}
          color={"#828282"}
        >
          Vehicles
        </Text>
        <Text
          as={"h2"}
          fontWeight={700}
          fontSize={"17px"}
          lineHeight={"20.29px"}
          py={5}
          px={2}
        >
          {isDataShowOpen?.name}
        </Text>
      </Box>
    </Flex>
  );
};

export default CharacterInfo;
