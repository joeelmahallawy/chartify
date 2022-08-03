import { Heading, Link } from "@chakra-ui/layout";
import Logo from "../../assets/chartify-logo-trans.png";
import {
  Center,
  Text,
  JsonInput,
  TextInput,
  Title,
  Code,
  Image,
  Box,
} from "@mantine/core";
import React, { useState } from "react";
import HomePageHeader from "../components/Layouts/Header";
import { getEnvironmentUrl, parseUrlIntoConfigs } from "../helpers";
import { phoneWidth, tabletWidth } from "../utils";
import { Footer } from "../components/Layouts/Footer";

const LiveEditor = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [configs, setConfigs] = useState(`{
        "type": "line",
        "data": {
          "labels": [
            2018,
            2019,
            2020
          ],
          "datasets": [
            {
              "label": "Users",
              "data": [
                10,
                30,
                80
              ]
            }
          ]
        }
      }`);

  return (
    <Center sx={{ flexDirection: "column" }}>
      <Center
        sx={(theme) => ({
          width: "100%",
          padding: 10,
          justifyContent: "flex-start",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
        })}
        style={{ gap: 10 }}
      >
        <a
          // className={classes.logoLink}
          style={{
            display: "flex",
            gap: 3,
          }}
          href="/"
        >
          <Center sx={{ gap: 5 }}>
            <Image src={Logo.src} width={150} height={50} />
            <Heading
              color="white"
              fontSize={["xl", "2xl", "3xl", "3xl", "3xl", "3xl"]}
            >
              {/* Chartify */}
            </Heading>
          </Center>
        </a>
      </Center>
      <Title sx={{ fontSize: "40px", padding: 10 }}>Live editor</Title>
      <Center mb="3%" sx={{ gap: 20 }}>
        <Center sx={{ width: "50%", flexDirection: "column" }}>
          <JsonInput
            mt={3}
            sx={{ width: "80%" }}
            defaultValue={configs}
            onChange={(e) => setConfigs(e)}
            description={
              <Text size="sm">
                Read the{" "}
                <Link
                  color="blue.500"
                  isExternal
                  href="https://www.chartjs.org/docs/latest/configuration/"
                >
                  Chart.js documentation
                </Link>{" "}
                for more complex configurations{" "}
              </Text>
            }
            id="configs"
            required={true}
            // label={<Text>Chart.js Configurations</Text>}

            placeholder="Configs"
            validationError="Invalid json"
            formatOnBlur
            autosize
            minRows={4}
          />
          <TextInput
            sx={{ width: "80%" }}
            mt={10}
            onChange={(e) => setBackgroundImage(e.target.value)}
            label="Background image"
            placeholder="Please paste the image url"
            // {...form.getInputProps("backgroundImage")}
          />
          <TextInput
            sx={{ width: "80%" }}
            mt={10}
            onChange={(e) => setBackgroundColor(e.target.value)}
            label="Background color"
            placeholder="'red' or hexcode without '#' (e.g. '1720CB')"
            // {...form.getInputProps("backgroundColor")}
          />
        </Center>
        <Center
          mb="auto"
          sx={{
            width: "50%",
            flexDirection: "column",
          }}
        >
          <Link
            _hover={{}}
            isExternal
            w="80%"
            mt="2.5%"
            href={`${getEnvironmentUrl()}/api/chart?configs=${configs}${
              backgroundImage && `&img=${backgroundImage}`
            }${backgroundColor && `&bg=${backgroundColor}`}`}
          >
            <Code
              block
              sx={(t) => ({
                textAlign: "left",
                background: t.colors.gray[1],
                "&:hover": { cursor: "pointer", background: t.colors.gray[2] },
                // height: "100px",
              })}
            >
              {`${getEnvironmentUrl()}`}
              <span
                style={{
                  background: "pink",
                  paddingTop: "0.5%",
                  paddingBottom: "0.5%",
                }}
              >
                ?configs={configs.replaceAll(" ", "").replaceAll("\n", "")}
                {backgroundImage && `&img=${backgroundImage}`}
                {backgroundColor && `&bg=${backgroundColor}`}
              </span>
            </Code>
          </Link>
          <img
            style={{ marginBottom: "auto" }}
            src={`${getEnvironmentUrl()}/api/chart?configs=${configs}${
              backgroundImage && `&img=${backgroundImage}`
            }${backgroundColor && `&bg=${backgroundColor}`}`}
            width={500}
            height={500}
          />
        </Center>
      </Center>
    </Center>
  );
};
export default LiveEditor;
