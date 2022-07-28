import {
  Box,
  ThemeIcon,
  Button,
  Center,
  List,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { ArrowNarrowRight, Check } from "tabler-icons-react";
import { laptopWidth, phoneWidth, tabletWidth } from "../../../../utils";

const PricingSection = () => {
  return (
    <Center
      sx={{
        width: "70%",
        margin: "5% auto",
        gap: "10%",
        [phoneWidth]: { flexDirection: "column" },
        [tabletWidth]: { flexDirection: "column" },
      }}
    >
      <Box
        sx={{
          width: "60%",
          [phoneWidth]: { width: "100%" },
          [tabletWidth]: { width: "100%" },
        }}
      >
        <Title sx={{ fontWeight: 800 }}>Simple Pricing</Title>
        <Text mt={10} color="dimmed">
          Try a free trial and decide if Chartify is best for your business.
          With Chartify, you can easily integrate charts into your apps and
          pitchdecks!
        </Text>
        <Button mt={20} color="pink" radius="xl" size="lg">
          Open an account{" "}
          <ArrowNarrowRight size={30} strokeWidth={1.5} color={"white"} />
        </Button>
      </Box>
      <Center sx={{ width: "40%", flexDirection: "column" }}>
        <Box
          // ml="auto"
          sx={{
            justifyContent: "flex-start",
            flexDirection: "column",
            boxShadow: "0px 0px 10px 1px #E1E1E1",
            borderRadius: 10,
            padding: "5%",
            width: 400,
            height: 450,
            [phoneWidth]: { marginTop: "20%", width: 350, height: 400 },
            [tabletWidth]: { marginTop: "20%", width: 350, height: 400 },
          }}
        >
          <Text
            mr="auto"
            size="xl"
            sx={{ fontSize: "25px" }}
            weight={300}
            color="#6968F7"
          >
            Starter bundle
          </Text>
          <Text mr="auto" size="lg" mt={30}>
            <span style={{ fontSize: "25px" }}>$6.99</span>
            <span style={{ color: "gray" }}> /month</span>
          </Text>

          <List
            spacing="md"
            size="lg"
            center
            icon={<Check size={26} strokeWidth={2} color={"#40bf44"} />}
            mt={30}
          >
            <List.Item>Unlimited charts</List.Item>
            <List.Item>Custom background images</List.Item>
            <List.Item>Custom plugins</List.Item>
            <List.Item>URL shorteners</List.Item>
            <List.Item>No watermarks</List.Item>
          </List>
        </Box>
      </Center>
    </Center>
  );
};
export default PricingSection;
