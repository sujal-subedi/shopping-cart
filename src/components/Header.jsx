import { Link } from "react-router-dom";

import {
  Box,
  Button,
  CloseButton,
  useColorModeValue,
  VStack,
  chakra,
  Flex,
  useDisclosure,
  HStack,
  VisuallyHidden,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { VscThreeBars } from "react-icons/vsc";
import { TiShoppingCart } from "react-icons/ti";
import React, { useContext } from "react";
import { Cart } from "../Context";

const Header = () => {
  const { cart, setCart } = useContext(Cart);

  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <div>
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                <VisuallyHidden>Choc</VisuallyHidden>
              </chakra.a>

              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Shopping Cart
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <Link to="/">
                  <Button variant="ghost">Home</Button>
                </Link>
                <Link to="/cart">
                  <Button variant="ghost">Cart ({cart.length})</Button>
                </Link>
              </HStack>

              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <Icon
                  as={VscThreeBars}
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="50px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Link to="/">
                    <Button w="full" variant="ghost">
                      Home
                    </Button>
                  </Link>
                  <Link to="/cart">
                    <Button w="full" variant="ghost">
                      Cart
                    </Button>
                  </Link>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    </div>
  );
};

export default Header;
