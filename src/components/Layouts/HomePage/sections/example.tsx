import { Box, Heading } from "@chakra-ui/react";
import { Button, Center, Image } from "@mantine/core";
import React from "react";
import { isInProduction } from "../../../../helpers";

const TryItSection = () => {
  return (
    <Center sx={{ flexDirection: "column" }}>
      <Heading
        color="gray.700"
        fontWeight="extrabold"
        textAlign="center"
        letterSpacing="tight"
        width={["90%", "85%", "80%", "75%", "75%", "75%"]}
        // bg="red"
        fontSize={["3xl", "3xl", "4xl", "4xl", "4xl", "4xl"]}
      >
        Start creating charts and using them in your apps!
      </Heading>
      <Button
        mt="1%"
        size="lg"
        variant="gradient"
        gradient={{ from: "orange", to: "red" }}
      >
        Get started
      </Button>
    </Center>
  );
};
export default TryItSection;
