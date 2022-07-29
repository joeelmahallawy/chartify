import { Box, Heading } from "@chakra-ui/react";
import styled from "styled-components";

import Highlight, { defaultProps } from "prism-react-renderer";
import { Prism } from "@mantine/prism";

import {
  Button,
  Center,
  Code,
  Divider,
  Image,
  Space,
  Title,
} from "@mantine/core";
import React from "react";
import { getEnvironmentUrl, isInProduction } from "../../../../helpers";

import { Plus } from "tabler-icons-react";
import { phoneWidth, tabletWidth } from "../../../../utils";

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const FeatureSection = () => {
  return (
    <Box sx={{ background: "#121314" }}>
      <Center sx={{ flexDirection: "column" }} mt="2.5%" pt="5%" pb="5%">
        <Heading
          color="white"
          fontWeight={700}
          textAlign="center"
          letterSpacing="tight"
          width={["90%", "85%", "80%", "75%", "75%", "75%"]}
          // bg="red"
          fontSize={["3xl", "3xl", "5xl", "5xl", "6xl", "6xl"]}
        >
          Chartify provides all the features you{" "}
          <span
            style={{
              color: "linear-gradient(to right, #30CFD0 0%, #330867 100%)",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(185,112,238,1) 0%, rgba(230,73,128,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            need
          </span>
        </Heading>
        <Center sx={{ gap: 30, flexDirection: "column" }}>
          <Center sx={{ flexDirection: "column" }}>
            <Image
              style={{ borderRadius: 40 }}
              mt={40}
              sx={{
                width: 400,
                height: 400,
                [phoneWidth]: { width: 300, height: 300 },
                [tabletWidth]: { width: 300, height: 300 },
              }}
              src={`${getEnvironmentUrl()}/api/chart?configs={%22type%22:%22bar%22,%22data%22:{%22labels%22:[%22April%22,%22May%22,%22June%22,%22July%22],%22datasets%22:[{%22label%22:%22Premium written (million)%22,%22data%22:[0.2,0.3,0.6,1.8],%22backgroundColor%22:[%22black%22,%22orange%22]}]}}`}
            />
            <Heading
              mt="5%"
              color="white"
              fontWeight="extrabold"
              textAlign="center"
              letterSpacing="tight"
              width={["90%", "85%", "80%", "75%", "75%", "75%"]}
              // bg="red"
              size="lg"
              // fontSize={["3xl", "3xl", "4xl", "4xl", "4xl", "4xl"]}
            >
              Personalized charts
            </Heading>
          </Center>
          <Plus size={100} strokeWidth={2} color={"white"} />
          <Center sx={{ flexDirection: "column", marginTop: 30 }}>
            <Code sx={{ margin: "0 auto", width: "60%" }} lang="javascript">
              {`<img src='${getEnvironmentUrl()}/api/chart?configs={"type":"bar","data":{"labels":["April","May","June","July"],"datasets":[{"label":"Premium written (million)","data":[0.2,0.3,0.6,1.8],"backgroundColor":["black","orange%22]}]}}' />`}
            </Code>
            <Heading
              mt="2%"
              color="white"
              fontWeight="extrabold"
              textAlign="center"
              letterSpacing="tight"
              width={["90%", "85%", "80%", "75%", "75%", "75%"]}
              // bg="red"
              size="lg"
              // fontSize={["3xl", "3xl", "4xl", "4xl", "4xl", "4xl"]}
            >
              In-app usage
            </Heading>
          </Center>
        </Center>
      </Center>
    </Box>
  );
};
export default FeatureSection;
