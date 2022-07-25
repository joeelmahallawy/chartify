import { Box } from "@mantine/core";
import React from "react";
import { Footer } from "../Footer";

import HomePageHeader from "../Header";
import TryItSection from "./sections/example";
import LandingSection from "./sections/landing";
import PricingSection from "./sections/pricing";

const HomePage = () => {
  return (
    <Box sx={{ background: "white" }}>
      <HomePageHeader />
      <LandingSection />
      <PricingSection />
      {/* <TryItSection /> */}
      <Footer />
    </Box>
  );
};
export default HomePage;
