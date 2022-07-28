import { Box } from "@mantine/core";
import React from "react";
import { Footer } from "../Footer";

import HomePageHeader from "../Header";
import FeatureSection from "./sections/features";

import LandingSection from "./sections/landing";
import PricingSection from "./sections/pricing";

const HomePage = () => {
  return (
    <Box sx={{ background: "white" }}>
      <HomePageHeader />
      <LandingSection />
      <FeatureSection />
      <PricingSection />
      <Footer />
    </Box>
  );
};
export default HomePage;
