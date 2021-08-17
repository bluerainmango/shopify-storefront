import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

import { ShopContext } from "../context/shopContenxt";
import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Box>
      <Hero />
      <RichText
        heading="Consequat nostrud qui elit dolor adipisicing quis magna ad voluptate"
        text="Officia aliqua incididunt aliquip ad officia proident mollit."
      />
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.title}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign="center"
              position="relative"
            >
              <Image src={product.images[0].src} />
              <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                {product.title}
              </Text>
              <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                ${product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText
        heading="Consequat nostrud qu"
        text="Officia aliqua incididunt aliquip ad officia proident mollit."
      />
      <ImageWithText
        reverse
        image="https://cdn.shopify.com/s/files/1/0417/6173/4805/files/pikachu.jpg?v=1629140589"
        heading="Heading"
        text="Enim sint id sunt enim oc Est minim nulla incididunt culpa deserunt duis amet et ea nulla incididunt anim aliqua. Ad nulla tempor Lorem proident reprehenderit pariatur elit nisi officia."
      />
      <ImageWithText
        image="https://cdn.shopify.com/s/files/1/0417/6173/4805/files/pikachu.jpg?v=1629140589"
        heading="Heading"
        text="Enim sint id sunt enim oc Est minim nulla incididunt culpa deserunt duis amet et ea nulla incididunt anim aliqua. Ad nulla tempor Lorem proident reprehenderit pariatur elit nisi officia."
      />
    </Box>
  );
};

export default Home;
