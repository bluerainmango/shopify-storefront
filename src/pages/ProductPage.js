import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Image,
  Button,
  Text,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";

import { ShopContext } from "../context/shopContenxt";

const ProductPage = () => {
  const { handle } = useParams();

  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...{handle}</div>;

  return (
    <Box p="2rem">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
        <Flex justifyContent="center" alignItems="center">
          <Image src={product.images[0].src} />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px="2rem"
        >
          <Heading pb="2rem">{product.title}</Heading>
          <Text fontWeight="bold" pb="2rem">
            {product.variants[0].price}
          </Text>
          <Text pb="2rem" color="gray.500">
            {product.description}
          </Text>
          <Button
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
            }}
            _hover={{ opacity: "70%" }}
            w="10rem"
            backgroundColor="#FF38BD"
            color="white"
          >
            Add To Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProductPage;
