import { Box, Heading } from "@chakra-ui/react";
import { Center, Title } from "@mantine/core";
import React from "react";
import { Footer } from "../Footer";
import { Image } from "@mantine/core";
import HomePageHeader from "../Header";
import FeatureSection from "./sections/features";

import LandingSection from "./sections/landing";
import PricingSection from "./sections/pricing";
import { getEnvironmentUrl } from "../../../helpers";
import { phoneWidth, tabletWidth } from "../../../utils";
import BuildAnyChartSection from "./sections/anyChart";

const HomePage = () => {
  return (
    <Box sx={{ background: "white" }}>
      <HomePageHeader />
      <LandingSection />
      <FeatureSection />
      <BuildAnyChartSection />
      {/* <PricingSection /> */}
      <Footer />
    </Box>
  );
};
export default HomePage;
