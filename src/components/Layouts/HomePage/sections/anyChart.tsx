import { Box, Heading } from "@chakra-ui/react";

import React from "react";
import { Button, Center, Image } from "@mantine/core";
import { getEnvironmentUrl } from "../../../../helpers";
import { phoneWidth, tabletWidth } from "../../../../utils";

const BuildAnyChartSection = () => {
  return (
    <Box mb="3%">
      <Heading
        color="gray.700"
        fontWeight="extrabold"
        textAlign="center"
        letterSpacing="tight"
        mt="2.5%"
        mb="1%"
        fontSize={["4xl", "4xl", "5xl", "5xl", "6xl", "6xl"]}
      >
        Create
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
          any{" "}
        </span>
        chart
      </Heading>
      <Box m="0 auto" width="90%" pl="5%" pr="5%">
        <Image
          style={{ borderRadius: 40 }}
          sx={{
            display: "inline-grid",
            marginTop: 20,
            marginLeft: 30,
            width: 350,
            height: 300,
            [phoneWidth]: { width: 300, height: 300 },
            [tabletWidth]: { width: 300, height: 300 },
          }}
          src={`${getEnvironmentUrl()}/api/chart?configs={
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
      }`}
        />

        <Image
          style={{ borderRadius: 40 }}
          sx={{
            display: "inline-grid",
            marginTop: 20,
            marginLeft: 30,
            width: 350,
            height: 300,
            [phoneWidth]: { width: 300, height: 300 },
            [tabletWidth]: { width: 300, height: 300 },
          }}
          src={`${getEnvironmentUrl()}/api/chart?configs={
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
      }`}
        />

        <Image
          style={{ borderRadius: 40 }}
          sx={{
            display: "inline-grid",
            marginTop: 20,
            marginLeft: 30,
            width: 350,
            height: 300,
            [phoneWidth]: { width: 300, height: 300 },
            [tabletWidth]: { width: 300, height: 300 },
          }}
          src={`${getEnvironmentUrl()}/api/chart?configs={
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
        }`}
        />

        <Image
          style={{ borderRadius: 40 }}
          sx={{
            display: "inline-grid",
            marginTop: 20,
            marginLeft: 30,
            width: 350,
            height: 350,
            [phoneWidth]: { width: 300, height: 300 },
            [tabletWidth]: { width: 300, height: 300 },
          }}
          src={`${getEnvironmentUrl()}/api/chart?configs={
          "type": "polarArea",
          "data": {
            "labels": [
              "Red",
              "Green",
              "Yellow",
              "Grey",
              "Blue"
            ],
            "datasets": [
              {
                "label": "My First Dataset",
                "data": [
                  11,
                  16,
                  7,
                  3,
                  14
                ],
                "backgroundColor": [
                  "rgb(255, 99, 132)",
                  "rgb(75, 192, 192)",
                  "rgb(255, 205,86)",
                  "rgb(201, 203, 207)",
                  "rgb(54, 162, 235)"
                ]
              }
            ]
          }
        }`}
        />
        <Image
          style={{ borderRadius: 40 }}
          sx={{
            display: "inline-grid",
            marginTop: 20,
            marginLeft: 30,
            width: 350,
            height: 300,
            [phoneWidth]: { width: 300, height: 300 },
            [tabletWidth]: { width: 300, height: 300 },
          }}
          src={`${getEnvironmentUrl()}/api/chart?configs={
          "type": "scatter",
          "data":{
          "datasets": [{
            "label": "Scatter Dataset",
            "data": [{
              "x": -10,
              "y": 0
            }, {
              "x": 0,
              "y": 10
            }, {
              "x": 10,
              "y": 5
            }, {
              "x": 0,
              "y": 1
            }, {
              "x": 1,
              "y": 3.5
            }, {
              "x": -5,
              "y": 1
            }, {
              "x": -7.5,
              "y": 2
            }, {
              "x": -1.5,
              "y": 4
            }, {
              "x": -5,
              "y": 2
            }, {
              "x": -2,
              "y": 3
            }, {
              "x": -2.5,
              "y": 5
            }, {
              "x": -5,
              "y": 3
            }, {
              "x": 5,
              "y": 5
            }, {
              "x": 2,
              "y": 6
            }, {
              "x": 4,
              "y": 6
            }, {
              "x": 7,
              "y": 4
            }],
            "backgroundColor": "rgb(255, 99, 132)"
          }]
        },
          "options": {
            "scales": {
              "x": {
                "type": "linear",
                "position": "bottom"
              }
            }
          }
        }`}
        />
        <Image
          style={{ borderRadius: 40 }}
          sx={{
            display: "inline-grid",
            width: 350,
            height: 300,
            // marginTop: 20,
            marginLeft: 30,
            [phoneWidth]: { width: 300, height: 300 },
            [tabletWidth]: { width: 300, height: 300 },
          }}
          src={`${getEnvironmentUrl()}/api/chart?configs={%22type%22:%22line%22,%22data%22:{%22labels%22:[%222001%22,%222002%22,%222003%22,%222004%22,%222005%22,%222006%22,%222007%22,%222008%22],%22datasets%22:[{%22label%22:%22Searches%20Made%20(billion)%22,%22data%22:[27.4,41,61.3,86.1,141,230.9,372,584.47],%22backgroundColor%22:[%22green%22,%22blue%22,%22red%22,%22yellow%22]}]}}&img=https://api.time.com/wp-content/uploads/2015/09/2003.jpg`}
        />
      </Box>
      {/* <Center mt="3%">
        <Button size="lg">Get started now</Button>
      </Center> */}
    </Box>
  );
};
export default BuildAnyChartSection;
