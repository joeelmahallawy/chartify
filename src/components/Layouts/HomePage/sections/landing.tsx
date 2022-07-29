import { Heading, Link } from "@chakra-ui/layout";
import {
  Center,
  Title,
  Text,
  Image,
  Box,
  Code,
  Button,
  Anchor,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import React from "react";
import { getEnvironmentUrl, isInProduction } from "../../../../helpers";
import { phoneWidth, tabletWidth } from "../../../../utils";
import customNotification from "../../../reusables/customNotification";

const Landing = () => {
  const clipboard = useClipboard();
  const router = useRouter();
  return (
    <Center
      sx={{
        flexDirection: "column",
        maxWidth: "100%",
        margin: "3% auto 0",
        padding: "2.5%",
      }}
    >
      {/* <Box sx={{ width: "50%" }}> */}
      <Heading
        color="gray.700"
        fontWeight="extrabold"
        textAlign="center"
        letterSpacing="tight"
        width={["90%", "85%", "80%", "75%", "75%", "75%"]}
        // bg="red"
        fontSize={["4xl", "4xl", "5xl", "5xl", "6xl", "6xl"]}
      >
        Create chart images through a single configurable
        <span
          style={{
            color: "linear-gradient(to right, #30CFD0 0%, #330867 100%)",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(185,112,238,1) 0%, rgba(230,73,128,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {" "}
          API
        </span>
      </Heading>
      <Text size="xl" color="dimmed">
        Embed charts in your emails, websites and pitchdecks quickly by passing
        in some data
      </Text>
      <Center sx={{ flexDirection: "column" }}>
        {/* <pre style={{ background: "red", margin: "0 auto", width: "50%" }}> */}
        <Anchor mt={10} href="/editor">
          <Button color="violet" mt="2.5%" radius="xl" size="xl">
            Start making charts
          </Button>
        </Anchor>
        <Link
          isExternal
          href={`${getEnvironmentUrl()}/api/chart?configs={"type":"line","data":{"labels":[2018,2019,2020,2021,2022],"datasets":[{"label":"Users","data":[10,30,80,190,350]}]}}`}
          _hover={{}}
        >
          <Code
            mt="3%"
            onClick={() => {
              clipboard.copy(
                `${getEnvironmentUrl()}/api/chart?configs={"type":"line","data":{"labels":[2018,2019,2020,2021,2022],"datasets":[{"label":"Users","data":[10,30,80,190,350]}]}}`
              );
              // return customNotification("Copied to clipboard!", "", "green");
            }}
            block
            sx={(t) => ({
              textAlign: "left",
              width: "100%",
              [phoneWidth]: { width: 300 },
              [tabletWidth]: { width: 300 },
              "&:hover": { cursor: "pointer", background: t.colors.gray[1] },
            })}
          >
            {getEnvironmentUrl()}

            <span
              style={{
                background: "pink",
                paddingTop: "0.5%",
                paddingBottom: "0.5%",
              }}
            >
              {`?configs={"type":"line",`}

              {`"data":{"labels":[2018,2019,2020,2021,2022],`}
              <br />
              {`"datasets":[{"label":"Users","data":[10,30,80,190,350]}]}`}
            </span>
          </Code>
        </Link>
        {/* </pre> */}
        <Image
          mt={20}
          sx={{
            width: 350,
            height: 350,
            [phoneWidth]: { width: 250, height: 250, marginBottom: 20 },
            [tabletWidth]: { width: 250, height: 250, marginBottom: 20 },
          }}
          src={`${getEnvironmentUrl()}/api/chart?configs={%22type%22:%22line%22,%22data%22:{%22labels%22:[2018,2019,2020,2021,2022],%22datasets%22:[{%22label%22:%22Users%22,%22data%22:[10,30,80,190,350]}]}}`}
        />
      </Center>
    </Center>
  );
};
export default Landing;
