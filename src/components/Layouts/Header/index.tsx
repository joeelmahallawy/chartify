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
import Logo from "../../../../public/chartify-logo-trans.png";
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
          href="/dashboard"
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
        <ChakraCenter
          gap={10}
          display={["none", "none", "flex", "flex", "flex", "flex"]}
        >
          <Text
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
          </Text>
          <Text
            color="black"
            fontWeight={500}
            onClick={() => router.push("/dashboard")}
            fontSize="lg"
            _hover={{ cursor: "pointer" }}
          >
            Get started
          </Text>
          <Text
            color="black"
            onClick={() => router.push("/pricing")}
            fontWeight={500}
            fontSize="lg"
            _hover={{ cursor: "pointer" }}
          >
            Pricing
          </Text>
          <Text
            color="black"
            fontWeight={500}
            fontSize="lg"
            _hover={{ cursor: "pointer" }}
          >
            <a href="mailto:">Contact us</a>
          </Text>
        </ChakraCenter>
        <ChakraCenter
          display={["none", "none", "flex", "flex", "flex", "flex"]}
          style={{ gap: 20 }}
        >
          {/* <Anchor
            sx={{
              "&:hover": { textDecoration: "none" },
              color: "white",
            }}
            href="/api/auth/login"
            size="lg"
          >
            <Text color="black" fontWeight={500} fontSize="lg">
              Login
            </Text>
          </Anchor> */}

          <Anchor href="/login">
            <Button color="pink" radius="xl" size="md">
              <Text fontSize="lg">Sign Up</Text>
            </Button>
          </Anchor>
        </ChakraCenter>
      </>

      <Box display={["block", "block", "none", "none", "none", "none"]}>
        <Hamburger />
      </Box>
    </Center>
  );
};
export default HomePageHeader;
