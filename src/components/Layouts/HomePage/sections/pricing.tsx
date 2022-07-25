import { Box, Center, List, Text, Title } from "@mantine/core";
import React from "react";

const PricingSection = () => {
  return (
    <Center sx={{ width: "90%", margin: "0 auto" }}>
      <Box sx={{ width: "50%" }}>
        <Title>Simple pricing</Title>
        <Text>
          Try a free trial and decide if Chartify is best for your business.
          With Chartify, you can easily integrate charts into your apps and
          pitchdecks!
        </Text>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Center
          sx={{
            justifyContent: "flex-start",
            flexDirection: "column",
            boxShadow: "0px 0px 10px 1px #E1E1E1",
            borderRadius: 10,
            padding: "3%",
            width: 400,
            height: 500,
          }}
        >
          <Text mr="auto" size="xl" color="#6968F7">
            Starter bundle
          </Text>
          <Text mr="auto" size="lg" mt={10}>
            $6.99 /mo
          </Text>
          <List mt={20}>
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>
              To start development server run npm start command
            </List.Item>
            <List.Item>
              Run tests to make sure your changes do not break the build
            </List.Item>
            <List.Item>Submit a pull request once you are done</List.Item>
          </List>
        </Center>
      </Box>
    </Center>
  );
};
export default PricingSection;
