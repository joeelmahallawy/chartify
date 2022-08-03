import { Box, Heading, Link } from "@chakra-ui/react";
import styled from "styled-components";

import Highlight, { defaultProps } from "prism-react-renderer";
import { Prism } from "@mantine/prism";

import {
  Button,
  Text,
  Center,
  Code,
  Divider,
  Image,
  Space,
  Title,
  Anchor,
  JsonInput,
} from "@mantine/core";
import React, { useState } from "react";
import { getEnvironmentUrl, isInProduction } from "../../../../helpers";

import { ArrowNarrowRight, ArrowRight, Plus } from "tabler-icons-react";
import {
  laptopWidth,
  monitorWidth,
  phoneWidth,
  tabletWidth,
} from "../../../../utils";

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const FeatureSection = () => {
  const [pieChartConfig, setPieChartConfig] = useState(`{
    "type": "pie",
    "options": {
      "plugins": {
        "title": {
          "display": true,
          "text": "A  developer's allocation of time"
        }
      }
    },
    "data": {
      "labels": [
        "Googling  errors",
        "Learning tools they will never use",
        "Stackoverflow",
        "Retrying failed builds",
        "Writing code"
      ],
      "datasets": [
        {
          "backgroundColor": [
            "rgb(255,99,132)",
            "rgb(54,162,235)",
            "rgb(255,205,86)",
            "rgb(0,125,82)",
            "purple"
          ],
          "data": [
            100,
            50,
            250,
            75,
            5
          ]
        }
      ]
    }
  }`);

  const [exampleChartConfigs, setExampleChartConfigs] = useState(`{
    "type": "line",
    "data": {
      "labels": [
        2018,
        2019,
        2020,
        2021,
        2022
      ],
      "datasets": [
        {
          "label": "Users",
          "data": [
            10,
            30,
            80,
            190,
            350
          ]
        }
      ]
    }
  }`);
  const [barGraphConfigs, setBarGraphConfigs] = useState(`{
    "type": "bar",
    "data": {
      "labels": [
        2012,
        2013,
        2014,
        2015,
        2016
      ],
      "datasets": [
        {
          "label": "User Growth",
          "data": [
            65,
            59,
            80,
            81,
            56,
            55,
            40
          ],
          "backgroundColor": [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)"
          ],
          "borderColor": [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)"
          ],
          "borderWidth": 1
        }
      ]
    }
  }`);

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
        {/* <Center sx={{ gap: 30, flexDirection: "column" }}>
          <Center sx={{ flexDirection: "row", gap: 20 }} mt={40}>
            <Image
              style={{ borderRadius: 40 }}
              sx={{
                width: 500,
                height: 500,
                [phoneWidth]: { width: 300, height: 300 },
                [tabletWidth]: { width: 300, height: 300 },
              }}
              src={`${getEnvironmentUrl()}/api/chart?configs={%22type%22:%22line%22,%22data%22:{%22labels%22:[%222001%22,%222002%22,%222003%22,%222004%22,%222005%22,%222006%22,%222007%22,%222008%22],%22datasets%22:[{%22label%22:%22Searches%20Made%20(billion)%22,%22data%22:[27.4,41,61.3,86.1,141,230.9,372,584.47],%22backgroundColor%22:[%22green%22,%22blue%22,%22red%22,%22yellow%22]}]}}&img=https://api.time.com/wp-content/uploads/2015/09/2003.jpg`}
            />
          </Center>

          <Center sx={{ flexDirection: "column" }} mt={40}>
            <Center
              sx={{
                flexDirection: "row",
                [tabletWidth]: { flexDirection: "column" },
                [phoneWidth]: { flexDirection: "column" },
                gap: 10,
              }}
            >
              <Box mb="auto" sx={{ width: "500px", height: "500px" }}>
                <Title order={2} sx={{ color: "white", height: "50px" }}>
                  Try it yourself
                </Title>
                <JsonInput
                  defaultValue={pieChartConfig}
                  validationError="Invalid json"
                  formatOnBlur
                  // autosize
                  onChange={(e) => setPieChartConfig(e)}
                  minRows={25}
                  sx={{ height: "450px" }}
                />
              </Box>
              <ArrowNarrowRight size={90} strokeWidth={2} color={"white"} />
              <Center sx={{ flexDirection: "column" }}>
                <Box
                  color="white"
                  sx={{
                    overflow: "scroll",
                    [phoneWidth]: {
                      width: "75%",
                    },
                    [tabletWidth]: {
                      width: "75%",
                    },
                    [laptopWidth]: {
                      width: "500px",
                      height: "50px",
                    },
                    [monitorWidth]: {
                      width: "500px",
                      height: "50px",
                    },
                  }}
                >
                  Chart URL:{" "}
                  <Link
                    isExternal
                    color="blue.500"
                    href={`${getEnvironmentUrl()}/api/chart?configs=${pieChartConfig}`}
                  >{`${getEnvironmentUrl()}/api/chart?configs=${pieChartConfig.replaceAll(
                    "\n",
                    ""
                  )}`}</Link>
                </Box>
                <Image
                  style={{ borderRadius: 40 }}
                  sx={{
                    width: 500,
                    height: 500,
                    [phoneWidth]: { width: 300, height: 300 },
                    [tabletWidth]: { width: 300, height: 300 },
                  }}
                  src={`${getEnvironmentUrl()}/api/chart?configs=${pieChartConfig}`}
                />
              </Center>
            </Center>
            <Heading
              mt="1%"
              color="white"
              fontWeight="extrabold"
              textAlign="center"
              letterSpacing="tight"
              width={["90%", "85%", "80%", "75%", "75%", "75%"]}
              // bg="red"
              size="lg"
              // fontSize={["3xl", "3xl", "4xl", "4xl", "4xl", "4xl"]}
            >
              Multiple chart types
            </Heading>
          </Center>
        </Center> */}
        {/* <Center sx={{ gap: 30, flexDirection: "column" }}>
          <Center sx={{ flexDirection: "row", gap: 20 }} mt={100}>
            <Image
              style={{ borderRadius: 40 }}
              sx={{
                width: 500,
                height: 500,
                [phoneWidth]: { width: 300, height: 300 },
                [tabletWidth]: { width: 300, height: 300 },
              }}
              src={`${getEnvironmentUrl()}/api/chart?configs={%22type%22:%22line%22,%22data%22:{%22labels%22:[%222001%22,%222002%22,%222003%22,%222004%22,%222005%22,%222006%22,%222007%22,%222008%22],%22datasets%22:[{%22label%22:%22Searches%20Made%20(billion)%22,%22data%22:[27.4,41,61.3,86.1,141,230.9,372,584.47],%22backgroundColor%22:[%22green%22,%22blue%22,%22red%22,%22yellow%22]}]}}&img=https://api.time.com/wp-content/uploads/2015/09/2003.jpg`}
            />
          </Center>

          <Center sx={{ flexDirection: "column" }} mt={40}>
            <Center
              sx={{
                flexDirection: "row",
                [tabletWidth]: { flexDirection: "column" },
                [phoneWidth]: { flexDirection: "column" },
                gap: 10,
              }}
            >
              <Box mb="auto" sx={{ width: "500px", height: "500px" }}>
                <Title order={2} sx={{ color: "white", height: "50px" }}>
                  Try it yourself
                </Title>
                <JsonInput
                  defaultValue={barGraphConfigs}
                  validationError="Invalid json"
                  formatOnBlur
                  // autosize
                  onChange={(e) => setBarGraphConfigs(e)}
                  minRows={25}
                  sx={{ height: "450px" }}
                />
              </Box>
              <ArrowNarrowRight size={90} strokeWidth={2} color={"white"} />

              <Center sx={{ flexDirection: "column" }}>
                <Box
                  color="white"
                  sx={{
                    overflow: "scroll",
                    [phoneWidth]: {
                      width: "75%",
                    },
                    [tabletWidth]: {
                      width: "75%",
                    },
                    [laptopWidth]: {
                      width: "500px",
                      height: "50px",
                    },
                    [monitorWidth]: {
                      width: "500px",
                      height: "50px",
                    },
                  }}
                >
                  Chart URL:{" "}
                  <Link
                    isExternal
                    color="blue.500"
                    href={`${getEnvironmentUrl()}/api/chart?configs=${barGraphConfigs}`}
                  >{`${getEnvironmentUrl()}/api/chart?configs=${barGraphConfigs.replaceAll(
                    "\n",
                    ""
                  )}`}</Link>
                </Box>
                <Image
                  style={{ borderRadius: 40 }}
                  sx={{
                    width: 500,
                    height: 500,
                    [phoneWidth]: { width: 300, height: 300 },
                    [tabletWidth]: { width: 300, height: 300 },
                  }}
                  src={`${getEnvironmentUrl()}/api/chart?configs=${barGraphConfigs}`}
                />
              </Center>
            </Center>
            <Heading
              mt="1%"
              color="white"
              fontWeight="extrabold"
              textAlign="center"
              letterSpacing="tight"
              width={["90%", "85%", "80%", "75%", "75%", "75%"]}
              // bg="red"
              size="lg"
              // fontSize={["3xl", "3xl", "4xl", "4xl", "4xl", "4xl"]}
            >
              Multiple chart types
            </Heading>
          </Center>
        </Center> */}
        <Center sx={{ gap: 30, flexDirection: "column" }}>
          <Center sx={{ flexDirection: "column" }} mt={20}>
            <Center
              sx={{
                flexDirection: "row",
                [tabletWidth]: { flexDirection: "column" },
                [phoneWidth]: { flexDirection: "column" },
                gap: 10,
              }}
            >
              <Box mb="auto" sx={{ width: "500px", height: "500px" }}>
                <Title order={2} sx={{ color: "white", height: "50px" }}>
                  Try it yourself
                </Title>
                <JsonInput
                  defaultValue={barGraphConfigs}
                  validationError="Invalid json"
                  formatOnBlur
                  // autosize
                  onChange={(e) => setBarGraphConfigs(e)}
                  minRows={25}
                  sx={{ height: "450px" }}
                />
              </Box>
              <ArrowNarrowRight size={90} strokeWidth={2} color={"white"} />
              {/* <ArrowRight size={90} strokeWidth={3} color={"white"} /> */}
              <Center sx={{ flexDirection: "column" }}>
                <Box
                  color="white"
                  style={{
                    width: "500px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",

                    // [phoneWidth]: {
                    //   width: "75%",
                    // },
                    // [tabletWidth]: {
                    //   width: "75%",
                    // },
                    // [laptopWidth]: {
                    //   width: "500px",
                    //   height: "50px",
                    // },
                    // [monitorWidth]: {
                    //   width: "500px",
                    //   height: "50px",
                    // },
                  }}
                >
                  Chart URL:{" "}
                  <Link
                    isExternal
                    color="blue.500"
                    href={`${getEnvironmentUrl()}/api/chart?configs=${barGraphConfigs}`}
                  >{`${getEnvironmentUrl()}/api/chart?configs=${barGraphConfigs.replaceAll(
                    "\n",
                    ""
                  )}`}</Link>
                </Box>
                <Image
                  style={{ borderRadius: 40 }}
                  sx={{
                    width: 500,
                    height: 500,
                    [phoneWidth]: { width: 300, height: 300 },
                    [tabletWidth]: { width: 300, height: 300 },
                  }}
                  src={`${getEnvironmentUrl()}/api/chart?configs=${barGraphConfigs}`}
                />
              </Center>
            </Center>
          </Center>
        </Center>
      </Center>
    </Box>
  );
};
export default FeatureSection;
