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
        <Center sx={{ gap: 30, flexDirection: "row" }}>
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
              src={`${getEnvironmentUrl()}/api/chart?configs={%22type%22:%22line%22,%22data%22:{%22labels%22:[%222001%22,%222002%22,%222003%22,%222004%22,%222005%22,%222006%22,%222007%22,%222008%22],%22datasets%22:[{%22label%22:%22Searches%20Made%20(billion)%22,%22data%22:[27.4,41,61.3,86.1,141,230.9,372,584.47],%22backgroundColor%22:[%22green%22,%22blue%22,%22red%22,%22yellow%22]}]}}&img=https://api.time.com/wp-content/uploads/2015/09/2003.jpg`}
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
              Personalization
            </Heading>
          </Center>
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
              src={`${getEnvironmentUrl()}/api/chart?configs={%22type%22:%22bar%22,%22data%22:{%22labels%22:[2012,2013,2014,2015,2016],%22datasets%22:[{%20%22label%22:%20%22User Growth%22,%20%22data%22:%20[65,%2059,%2080,%2081,%2056,%2055,%2040],%20%22backgroundColor%22:%20[%20%22rgba(255,%2099,%20132,%200.2)%22,%20%22rgba(255,%20159,%2064,%200.2)%22,%20%22rgba(255,%20205,%2086,%200.2)%22,%20%22rgba(75,%20192,%20192,%200.2)%22,%20%22rgba(54,%20162,%20235,%200.2)%22,%20%22rgba(153,%20102,%20255,%200.2)%22,%20%22rgba(201,%20203,%20207,%200.2)%22%20],%20%22borderColor%22:%20[%20%22rgb(255,%2099,%20132)%22,%20%22rgb(255,%20159,%2064)%22,%20%22rgb(255,%20205,%2086)%22,%20%22rgb(75,%20192,%20192)%22,%20%22rgb(54,%20162,%20235)%22,%20%22rgb(153,%20102,%20255)%22,%20%22rgb(201,%20203,%20207)%22%20],%20%22borderWidth%22:%201%20}]}}`}
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
              Hundreds of themes
            </Heading>
          </Center>
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
              src={`${getEnvironmentUrl()}/api/chart?configs={%20%20%22type%22:%20%22pie%22,%20%20%22data%22:%20{%20%20%20%20%22labels%22:%20[%20%20%20%20%20%20%22Googling%20errors%22,%20%20%20%20%20%20%22Learning%20tools%20they%27ll%20never%20use%22,%20%20%20%20%20%20%22Stack%20overflow%22,%20%20%20%20%20%20%22Retrying%20failed%20builds%22,%20%20%20%20%20%20%22Writing%20meaningful%20code%22%20%20%20%20],%20%20%20%20%22datasets%22:%20[%20%20%20%20%20%20{%20%20%20%20%20%20%20%20%22data%22:%20[%20%20%20%20%20%20%20%20%20%20100,%20%20%20%20%20%20%20%20%20%2050,%20%20%20%20%20%20%20%20%20%20250,%20%20%20%20%20%20%20%20%20%2075,%20%20%20%20%20%20%20%20%20%205%20%20%20%20%20%20%20%20],%20%20%20%20%20%20%20%20%22backgroundColor%22:%20[%20%20%20%20%20%20%20%20%20%20%22rgb(255,%2099,%20132)%22,%20%20%20%20%20%20%20%20%20%20%22rgb(54,%20162,%20235)%22,%20%20%20%20%20%20%20%20%20%20%22rgb(255,%20205,%2086)%22,%20%20%20%20%20%20%20%20%20%20%22rgb(0,125,82)%22,%20%20%20%20%20%20%20%20%20%20%22purple%22%20%20%20%20%20%20%20%20],%20%20%20%20%20%20%20%20%22hoverOffset%22:%204%20%20%20%20%20%20}%20%20%20%20]%20%20},%20%20%22options%22:%20{%20%20%20%20%22plugins%22:%20{%20%20%20%20%20%20%22title%22:%20{%20%20%20%20%20%20%20%20%22display%22:%20true,%20%20%20%20%20%20%20%20%22text%22:%20%22A%20developer%27s%20allocation%20of%20time%22%20%20%20%20%20%20}%20%20%20%20}%20%20}}`}
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
              Multiple chart types
            </Heading>
          </Center>
          {/* <Plus size={100} strokeWidth={2} color={"white"} />
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
          </Center> */}
        </Center>
      </Center>
    </Box>
  );
};
export default FeatureSection;
