import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { sizes } from "../utils";
import { NotificationsProvider } from "@mantine/notifications";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          breakpoints: {
            ...sizes,
            xxxl: 1900,
          },
        }}
      >
        <NotificationsProvider position="bottom-center">
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
