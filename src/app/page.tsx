"use client";
import React, { useEffect } from "react";
import GetData from "@/api";
import { Characters, CharacterInfo } from "../components/index";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { dataStar } from "@/context/context";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

export default function page() {
  const { info } = GetData();
  const { isLoading, error } = dataStar()

  return (
    <Flex>
      
      {isLoading && <Loading/>}
      {error && <Error/> }

      {info &&  (
        <Box  pos={"relative"} w={{base:"full", md:"320px"}} minW={{ base:"320px"}} borderRight={"2px solid gray"}>
          {info[0].results.map((item) => (
            <Characters key={item.name} data={item} />
          ))}
        </Box>
      )} 

      <CharacterInfo />
    </Flex>
  );
}
