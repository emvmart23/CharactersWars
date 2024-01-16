"use client";
import React, { MouseEventHandler } from "react";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { IconChevronRight } from "@tabler/icons-react";
import { useStar } from "@/context/context";


interface characterProps {
  data: CharacterType;
  currentPlanet: PlanetsType;
  currentVehicles: VehiclesType;
}

const Characters = ({
  data,
  currentPlanet,
  currentVehicles,
}: characterProps) => {
  const { setIsOpenDetails, setIsClickedItem, setIsDataShowOpen } = useStar();

  const handleInfo: MouseEventHandler<HTMLButtonElement> = () => {
    setIsClickedItem(true);
    setIsOpenDetails(data);
    setIsDataShowOpen(currentVehicles);
  };

  return (
    <Flex
      w={{ base: "full", md: "320px" }}
      h={69}
      p={3}
      justifyContent={"space-between"}
      borderBlock={"1px solid gray"}
    >
      <Flex direction={"column"}>
        <Text
          lineHeight={"20.29px"}
          fontWeight={700}
          fontSize={17}
          as={"h1"}
          color={"#333333"}
          mb={1}
        >
          {data.name}
        </Text>

        <Text
          lineHeight={"16.71px"}
          fontWeight={400}
          fontSize={14}
          as={"p"}
          color={"#828282"}
        >
          {currentPlanet.name}
        </Text>
      </Flex>
      <Center>
        <Button variant={"ghost"} onClick={handleInfo} bg={"white"}>
          <IconChevronRight width={24} height={24} />
        </Button>
      </Center>
    </Flex>
  );
};

export default Characters;
