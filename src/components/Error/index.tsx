import { Text } from "@chakra-ui/react";

function Error() {
  return (
    <Text
      fontWeight={700}
      fontSize={"17px"}
      lineHeight={"20.29px"}
      mx={"auto"}
      letterSpacing={"1.25%"}
      color={"#EC5757"}
      pos={"relative"}
      top={10}
    >
      Failed to Load Data
    </Text>
  );
}

export default Error;
