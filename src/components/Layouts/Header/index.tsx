import {
  Heading,
  Text,
  Box,
  Link as ChakraLink,
  Menu as ChakraMenu,
  MenuItem as ChakraMenuItem,
  Center as ChakraCenter,
} from "@chakra-ui/react";
import Image from "next/image";
import { Anchor, Button, Center, Code, createStyles } from "@mantine/core";
import Logo from "../../../../assets/chartify-logo-trans.png";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Hamburger from "../../reusables/burger";

const useStyles = createStyles((theme) => ({
  logoLink: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  logoText: {
    "&:hover": {
      opacity: "0.9",
    },
  },
}));

const HomePageHeader = () => {
  const { classes } = useStyles();

  const router = useRouter();

  return (
    <Center
      id="navbar"
      sx={(theme) => ({
        justifyContent: "space-between",
        color: "white",
        padding: "0.75%",
        paddingLeft: "1.5%",
        paddingRight: "1.5%",
        position: "sticky",
        top: 0,
        // background: "#131415",
        background: "white",
        zIndex: 99,

        boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
      })}
    >
      <Center style={{ gap: 10 }}>
        <a
          className={classes.logoLink}
          style={{
            display: "flex",
            gap: 3,
          }}
          href="/"
        >
          <Center sx={{ gap: 5 }}>
            <Image src={Logo.src} width={150} height={50} />
            <Heading
              color="white"
              fontSize={["xl", "2xl", "3xl", "3xl", "3xl", "3xl"]}
            >
              {/* Chartify */}
            </Heading>
          </Center>
        </a>
      </Center>

      <>
        {/* <Text
            color="black"
            fontWeight={500}
            onClick={() => {
              if (router.pathname !== "/") router.push("/");
              else {
                typeof window !== "undefined" &&
                  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
              }
            }}
            fontSize="lg"
            _hover={{ cursor: "pointer" }}
          > 
            Docs
          </Text> */}
        {/* <Text
            color="black"
            fontWeight={500}
            // onClick={() => router.push("/dashboard")}

            fontSize="lg"
            _hover={{ cursor: "pointer" }}
          >
            <Anchor href="/editor">Get started</Anchor>
          </Text> */}

        {/* <Text
            color="black"
            fontWeight={500}
            fontSize="lg"
            _hover={{ cursor: "pointer" }}
            onClick={() =>
              window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
            }
          >
            Home
          </Text> */}
        {/* <Text
            color="black"
            fontWeight={500}
            fontSize="lg"
            _hover={{ cursor: "pointer" }}
          >
            <a href="/editor">Live editor</a>
          </Text> */}
        {/* <Text
            color="black"
            fontWeight={500}
            fontSize="lg"
            _hover={{ cursor: "pointer" }}
          >
            <a href="/editor">Get started</a>
          </Text> */}
        <ChakraCenter
          // {/* // display={["none", "none", "flex", "flex", "flex", "flex"]} */}
          style={{ gap: 20 }}
        >
          <Text
            color="black"
            fontWeight={500}
            fontSize="lg"
            _hover={{ cursor: "pointer" }}
          >
            <a href="mailto:youssef.elmahallawy01@gmail.com">Contact us</a>
          </Text>

          <Anchor href="/editor">
            <Button color="pink" radius="xl" size="md">
              Live editor
            </Button>
          </Anchor>
        </ChakraCenter>
      </>

      {/* <Box display={["block", "block", "none", "none", "none", "none"]}>
        <Hamburger />
      </Box> */}
    </Center>
  );
};
export default HomePageHeader;
