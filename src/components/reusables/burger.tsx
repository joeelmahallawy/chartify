import {
  Link as ChakraLink,
  MenuButton,
  MenuList,
  Menu as ChakraMenu,
  MenuItem as ChakraMenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Box, Burger, Button, Divider } from "@mantine/core";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Hamburger = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  const router = useRouter();
  return (
    <Box sx={{ "&:hover": { cursor: "pointer" } }}>
      <ChakraMenu
        onClose={() => setOpened(false)}
        onOpen={() => setOpened(true)}
      >
        <MenuButton
          style={{ background: "transparent" }}
          _focus={{}}
          _hover={{}}
          as={Box}
        >
          {/* hello */}
          <Burger color="black" opened={opened} title={title} />
        </MenuButton>
        <MenuList
          outline="none"
          border="0.5px solid gray"
          bg="white"
          color="black"
        >
          <ChakraMenuItem
            onClick={() => {
              typeof window !== "undefined" &&
                window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
            }}
            _focus={{}}
            _hover={{ background: "gray.200" }}
          >
            Home
          </ChakraMenuItem>
          {/* <ChakraMenuItem _focus={{}} _hover={{ background: "gray.200" }}>
              Pricing
            </ChakraMenuItem> */}
          <ChakraMenuItem
            onClick={() => router.push("/app")}
            _focus={{}}
            _hover={{ background: "gray.200" }}
          >
            Get started
          </ChakraMenuItem>

          {/* <MenuDivider /> */}

          {/* <ChakraMenuItem
            onClick={() => router.push("/login")}
            _focus={{}}
            _hover={{ background: "gray.200" }}
          >
            Login
          </ChakraMenuItem>
          <ChakraMenuItem
            onClick={() => router.push("/login")}
            _focus={{}}
            _hover={{ background: "gray.200" }}
          >
            Sign up
          </ChakraMenuItem> */}
        </MenuList>
      </ChakraMenu>
    </Box>
  );
};
export default Hamburger;
