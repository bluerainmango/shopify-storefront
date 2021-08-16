import React, { useContext } from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContenxt";
import { MdMenu, MdShoppingBasket } from "react-icons/md";

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      backgroundColor="#FFA8E2"
      flexDir="row"
      justifyContent="space-between"
      p="2rem"
    >
      <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30}></Icon>
      <Image
        src="https://cdn.shopify.com/s/files/1/0417/6173/4805/files/pikachu.jpg?v=1629140589"
        w={100}
        h={100}
      />
      <Icon
        fill="white"
        cursor="pointer"
        as={MdShoppingBasket}
        w={30}
        h={30}
        onClick={() => {
          openCart();
        }}
      />
    </Flex>
  );
};

export default NavBar;
