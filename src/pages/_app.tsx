import { AppProps } from "next/app";

import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { sizes } from "../utils";
import { NotificationsProvider } from "@mantine/notifications";
import icon from "../../assets/chartify.png";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  usePageViews();

  return (
    <>
      <Head>
        <title>Chartify</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href={icon.src} sizes="16x16"></link>
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
        <GoogleAnalytics gaMeasurementId="G-50M1PPDEQK" />
        <NotificationsProvider position="bottom-center" zIndex={99999999}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
