"use client";
import { Button, Flex, Show, Text } from "@chakra-ui/react";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { useStar } from "@/context/context";

const Navbar = () => {
  const { setIsClickedItem, isClickedItem, isOpenDetails } = useStar();

  const handleInfo = () => {
    setIsClickedItem(!isClickedItem);
  };

  return (
    <Flex
      minW={{ base: "325px" }}
      bg={"#121212"}
      h={20}
      minWidth={"320px"}
      w={"full"}
      color={"white"}
      alignContent={"center"}
      alignItems={"center"}
    >
      {isClickedItem ? (
        <Flex justify={"between"} w={"full"}>
          <Show below="md">
            <Button pos={"absolute"} variant={"ghost"} onClick={handleInfo}>
              <IconArrowNarrowLeft color="white" />
            </Button>
          </Show>
          <Text
            mx={"auto"}
            fontWeight={700}
            fontSize={"17px"}
            lineHeight={"20.29px"}
          >
            {isOpenDetails?.name}
          </Text>
        </Flex>
      ) : (
        <Text
          mx={"auto"}
          fontWeight={700}
          fontSize={"17px"}
          lineHeight={"20.29px"}
        >
          People of Star Wars
        </Text>
      )}
    </Flex>
  );
};

export default Navbar;
