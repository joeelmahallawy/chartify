import { Link } from "@chakra-ui/layout";
import {
  JsonInput,
  Title,
  Image,
  Button,
  Box,
  Center,
  Text,
  Tooltip,
  TextInput,
  Modal,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import React, { useState } from "react";
import { Help } from "tabler-icons-react";
import { getEnvironmentUrl, isInProduction } from "../../../helpers";
import customNotification from "../../reusables/customNotification";

export const isEmpty = (str: string | undefined) =>
  str?.replaceAll(" ", "").length === 0;

const ChartCreator = () => {
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [opened, setOpened] = useState(false);

  const [nameOfChart, setNameOfChart] = useState("");
  const form = useForm({
    initialValues: {
      configs: `{
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
      }`,
      backgroundImage: "",
      backgroundColor: "",
      width: "400",
      height: "400",
    },
  });

  const [image, setImage] = useState(
    `${getEnvironmentUrl()}/api/chart?configs={"type": "line","data": {"labels": [2018,2019,2020],"datasets": [{"label": "Users","data": [10,30,80]}]}}&size=400x400`
  );

  return (
    <>
      <Title>Create and visual charts here</Title>
      <Box>
        <form
          style={{ marginTop: "1%" }}
          onSubmit={form.onSubmit(async (values) => {
            setLoading(true);
            const response = await fetch(
              `/api/chart?configs=${values.configs}${
                // add background image of chart
                isEmpty(values.backgroundImage)
                  ? ""
                  : `&img=${values.backgroundImage}`
              }${
                // add background color of chart
                isEmpty(values.backgroundColor)
                  ? ""
                  : `&bg=${values.backgroundColor}`
              }&size=${values.width}x${values.height}`
            );

            // convert to blob so we can show the image
            const chartBlob = await response.blob();

            // turn to text so we can check if there was a possible error in the creation
            setLoading(false);
            const url = URL.createObjectURL(chartBlob);

            setImage(
              `${getEnvironmentUrl()}/api/chart?configs=${values.configs}${
                // add background image of chart
                isEmpty(values.backgroundImage)
                  ? ""
                  : `&img=${values.backgroundImage}`
              }${
                // add background color of chart
                isEmpty(values.backgroundColor)
                  ? ""
                  : `&bg=${values.backgroundColor}`
              }&size=${values.width}x${values.height}`
            );
          })}
        >
          <Center sx={{ justifyContent: "flex-start", gap: 5 }}>
            <label htmlFor="configs">Chart.js configurations</label>
          </Center>
          <JsonInput
            {...form.getInputProps("configs")}
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
            mt={10}
            label="Background image"
            placeholder="Please paste the image url"
            {...form.getInputProps("backgroundImage")}
          />
          <TextInput
            mt={10}
            label="Background color"
            placeholder="e.g. 'red' or hexcode without '#' (1720CB)"
            {...form.getInputProps("backgroundColor")}
          />
          <Center
            pt={10}
            pb={10}
            sx={{ justifyContent: "flex-start", gap: 10 }}
          >
            <TextInput
              required={true}
              label="Width"
              placeholder="e.g. 400"
              {...form.getInputProps("width")}
            />
            <Text mt="auto" mb={5}>
              x
            </Text>
            <TextInput
              required={true}
              label="Height"
              placeholder="e.g. 400"
              {...form.getInputProps("height")}
            />
          </Center>
          <Button
            mr={15}
            type="submit"
            loading={loading && !isLoading}
            color="blue"
          >
            Generate
          </Button>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            withCloseButton={false}
            // title="Create a name for this chart"
            title={
              <Text size="xl" weight={500}>
                Create a name for this chart
              </Text>
            }
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  if (typeof window !== "undefined") {
                    setIsLoading(true);
                    const saveChart = await fetch(`/api/saveChart`, {
                      method: "POST",
                      body: JSON.stringify({
                        imageUrl: image.replace("blob:", ""),
                      }),
                    });
                    const data = await saveChart.json();
                    if (data.error) throw new Error(data.error);
                    if (localStorage.getItem(nameOfChart))
                      throw new Error(
                        `You already have a chart with the name: '${nameOfChart}'`
                      );
                    localStorage.setItem(data.id, nameOfChart);
                  }
                  setIsLoading(false);
                  setOpened(false);
                  return customNotification(
                    "Success!",
                    `Chart: '${nameOfChart}' saved.`,
                    "green"
                  );
                } catch (err) {
                  setIsLoading(false);
                  setOpened(false);
                  return customNotification(
                    "Error occurred",
                    err.message,
                    "red"
                  );
                }
              }}
            >
              <Box sx={{ flexDirection: "column" }}>
                <TextInput
                  mr="auto"
                  placeholder="Create a name for this chart"
                  label="Name of chart"
                  required
                  width="100%"
                  onChange={(e) => {
                    setNameOfChart(e.currentTarget.value);
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  ml="auto"
                  loading={isLoading}
                  mt={10}
                >
                  Save
                </Button>
              </Box>
            </form>
          </Modal>
          <Button color="teal" onClick={() => setOpened(true)} mt={15}>
            Save chart
          </Button>
        </form>
      </Box>
      <Center sx={{ flexDirection: "column" }}>
        <Title mb={20}>Current chart generated</Title>
        <Center
          mt="1%"
          sx={{
            width: 400,
            height: 400,
            border: "1px solid black",
            borderRadius: 10,
          }}
        >
          {image ? (
            <Image width={400} height={400} src={image} />
          ) : (
            <Text color="dimmed">Chart will appear here</Text>
          )}
        </Center>
      </Center>
    </>
  );
};
export default ChartCreator;
