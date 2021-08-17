import React from "react";
import { Box, Button, Text, Image, Center } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box backgroundColor="#FFA8E2" w="100%" position="relative" h="70vh">
      <Image
        src="https://cdn.shopify.com/s/files/1/0417/6173/4805/files/planet3-1.jpg?v=1629156609"
        h="100%"
        m="auto"
        objectFit="contain"
        objectPosition={["top", "center"]}
      />
      <Text
        position="absolute"
        bottom="20%"
        w="100%"
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="4rem"
      >
        Introducing Bath Bombs
      </Text>
      <Center>
        <Button
          w="10rem"
          backgroundColor="#FF38BD"
          color="white"
          _hover={{ opacity: "70%" }}
          position="absolute"
          bottom="10%"
        >
          Shop Now
        </Button>
      </Center>
    </Box>
  );
};

export default Hero;
