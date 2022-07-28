import { AppProps } from "next/app";
import { DefaultSeo, NextSeoProps } from "next-seo";
import logo from "../../assets/chartify.png";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { sizes } from "../utils";
import { NotificationsProvider } from "@mantine/notifications";
import icon from "../../assets/chartify.png";

import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import Script from "next/script";

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

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-235997113-1"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-235997113-1');`}
      </Script>

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
        <GoogleAnalytics
          gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
        />
        <NotificationsProvider position="bottom-center" zIndex={99999999}>
          <ChakraProvider>
            <DefaultSeo {...createSEOConfig()} />
            <Component {...pageProps} />
          </ChakraProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

const config = {
  author: "Youssef El Mahallawy",
  siteName: "Chartify",
  siteDescription: "Create charts with a single configurable API.",
  defaultPageTitle: "Chartify",
  blogTitle: "Chart API",
  baseUrl: "www.chartify.dev",
  websiteLogo: logo.src,
};

type DataType = {
  title?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  slug?: string;
  publishDate?: string;
  modifiedDate?: string;
};

const getImage = (data: DataType = {}) => {
  if (data.imageUrl) {
    return [{ url: data.imageUrl, width: 600, height: 300, alt: data.title }];
  }

  if (data.slug) {
    return [
      {
        url: `/${data.slug}`,
        width: 600,
        height: 300,
        alt: data.title,
      },
    ];
  }

  return [
    {
      url: config.websiteLogo,
      width: 280,
      height: 280,
      alt: "Chart API",
    },
  ];
};

export function createSEOConfig(data: DataType = {}): NextSeoProps {
  const title = data.title || config.defaultPageTitle;
  const description = data.seoDescription
    ? data.seoDescription
    : config.siteDescription;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: data.canonicalUrl,
      title,
      description,
      images: getImage(data),
      site_name: config.siteName,
    },
  };
}
