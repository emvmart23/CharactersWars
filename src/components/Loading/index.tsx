import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

function Loading() {
  return (
    <Flex gap={3} mx={"auto"} pos={"relative"} top={10}>
      <Spinner speed="0.60s" thickness="2px" size="lg" />
      <Text fontWeight={700} fontSize={17} lineHeight={"20.29px"}>
        Loading
      </Text>
    </Flex>
  );
}

export default Loading;
