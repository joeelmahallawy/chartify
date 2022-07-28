import { Spinner } from "@chakra-ui/spinner";
import {
  Center,
  Text,
  Divider,
  Title,
  Modal,
  Button,
  TextInput,
  JsonInput,
  Code,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { Link } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useAsyncFn } from "react-use";
import {
  getChartDimensions,
  getEnvironmentUrl,
  parseUrlIntoConfigs,
} from "../../../helpers";
import { isEmpty } from "../ChartCreator";
import customNotification from "../../reusables/customNotification";
import { useClipboard } from "@mantine/hooks";

const MyCharts = () => {
  const clipboard = useClipboard();

  const [deleteModalOpened, setDeleteModalOpened] = useState(false);
  const [state, doFetch] = useAsyncFn(async () => {
    const response = await fetch(`/api/getCharts`, {
      method: "POST",
      body: JSON.stringify({
        keys: Object.keys(localStorage).filter((val) =>
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
            val
          )
        ),
      }),
    });
    const result = await response.json();
    return result;
  }, []);

  useEffect(() => {
    doFetch();
  }, []);
  const [currentChartOpen, setCurrentChartOpen] = useState(undefined);

  const [opened, setOpened] = useState(false);
  const [nameOfChart, setNameOfChart] = useState("");
  const form = useForm({
    initialValues: {
      configs: "",
      backgroundImage: "",
      backgroundColor: "",
      width: null,
      height: null,
    },
  });

  if (state?.loading) {
    return (
      <Center sx={{ width: "90vw", height: "90vh" }}>
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <>
      <Title sx={{ fontSize: "50px" }} mt={10} ml={10}>
        Saved charts
      </Title>
      <Divider />
      <Modal
        size="sm"
        opened={deleteModalOpened}
        onClose={() => {
          setDeleteModalOpened(false);
        }}
        title={
          <Text>
            Are you sure you want to delete{" "}
            {typeof window !== "undefined" && (
              <span style={{ fontWeight: "700" }}>
                '
                {localStorage.getItem(
                  state?.value?.data[currentChartOpen]?.key
                )}
                '
              </span>
            )}
            ?
          </Text>
        }
        withCloseButton={false}
      >
        <Center sx={{ justifyContent: "flex-end", gap: 10 }}>
          <Button
            variant="default"
            onClick={() => {
              setDeleteModalOpened(false);
              setOpened(true);
            }}
          >
            Cancel
          </Button>
          <Button
            color="red"
            onClick={async () => {
              const response = await fetch("/api/deleteChart", {
                method: "DELETE",
                body: JSON.stringify({
                  id: state?.value?.data[currentChartOpen].key,
                }),
              });
              const data = await response.json();
              if (!data.error) {
                typeof window !== "undefined" &&
                  localStorage.removeItem(
                    state?.value?.data[currentChartOpen].key
                  );
                setDeleteModalOpened(false);
                doFetch();
                return customNotification("Successfully deleted!", "", "green");
              }
            }}
          >
            Yes
          </Button>
        </Center>
      </Modal>
      <Modal
        size="xl"
        opened={opened}
        onClose={() => {
          setOpened(false);
          setCurrentChartOpen(undefined);
        }}
        title={
          <Text size="xl" weight={600}>
            {typeof window !== "undefined" &&
              localStorage.getItem(state?.value?.data[currentChartOpen]?.key)}
          </Text>
        }
      >
        {/* {state?.value?.data[currentChartOpen]?.value} */}
        {console.log(nameOfChart)}
        <form
          style={{ marginTop: "1%" }}
          onSubmit={form.onSubmit(async (values) => {
            try {
              const response = await fetch("/api/updateChart", {
                method: "POST",
                body: JSON.stringify({
                  configs: `/api/chart?configs=${form.values.configs}${
                    // add background image of chart
                    isEmpty(form.values.backgroundImage)
                      ? ""
                      : `&img=${form.values.backgroundImage}`
                  }${
                    // add background color of chart
                    isEmpty(form.values.backgroundColor)
                      ? ""
                      : `&bg=${form.values.backgroundColor}`
                  }&size=${form.values.width}x${form.values.height}`,
                  id: state?.value?.data[currentChartOpen].key,
                }),
              });

              const data = await response.json();
              if (data.success) {
                typeof window !== "undefined" &&
                  // nameOfChart &&
                  localStorage.setItem(
                    state?.value?.data[currentChartOpen]?.key,
                    nameOfChart
                  );
                setOpened(false);
                doFetch();
                return customNotification("Successfully saved!", "", "green");
              }
            } catch (err) {
              return customNotification("Error occured", err.message, "red");
            }
          })}
        >
          <Text mb={5}>Grab your chart from this url:</Text>
          <Code
            p={7}
            onClick={() => {
              clipboard.copy(
                `${getEnvironmentUrl()}/charts/${
                  state?.value?.data[currentChartOpen]?.key
                }.png`
              );
              return customNotification("Copied to clipboard", "", "green");
            }}
            sx={(theme) => ({
              "&:hover": {
                background: theme.colors.gray[2],
                cursor: "pointer",
              },
            })}
          >
            {`${getEnvironmentUrl()}/charts/${
              state?.value?.data[currentChartOpen]?.key
            }.png`}
          </Code>
          <TextInput
            mt={10}
            label="Chart name"
            placeholder="Name of your chart"
            defaultValue={
              typeof window !== "undefined" &&
              localStorage.getItem(state?.value?.data[currentChartOpen]?.key)
            }
            onChange={(e) => {
              setNameOfChart(e.target.value);
            }}
          />
          <Center mt={10} sx={{ justifyContent: "flex-start", gap: 5 }}>
            <label htmlFor="configs">Chart.js configurations</label>
          </Center>
          <JsonInput
            mt={3}
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
          <Center mt={10} sx={{ flexDirection: "column" }}>
            <Title>{nameOfChart}</Title>
            <img
              style={{ marginTop: 10 }}
              src={`/api/chart?configs=${form.values.configs}${
                // add background image of chart
                isEmpty(form.values.backgroundImage)
                  ? ""
                  : `&img=${form.values.backgroundImage}`
              }${
                // add background color of chart
                isEmpty(form.values.backgroundColor)
                  ? ""
                  : `&bg=${form.values.backgroundColor}`
              }&size=${form.values.width}x${form.values.height}`}
            />
          </Center>
          <Center mt="5%" sx={{ justifyContent: "flex-end" }}>
            <Button
              mr={10}
              color="red"
              onClick={() => {
                setDeleteModalOpened(true);
                setOpened(false);
              }}
            >
              Delete
            </Button>
            <Button type="submit" color="blue">
              Save
            </Button>
          </Center>
        </form>
      </Modal>
      {state?.value?.data?.map(
        (value, i) =>
          value && (
            <Center
              key={i}
              onClick={() => {
                setOpened(true);
                setNameOfChart(
                  typeof window !== "undefined" &&
                    localStorage.getItem(state?.value?.data[i]?.key)
                );
                setCurrentChartOpen(i);

                const data = parseUrlIntoConfigs(
                  `${state?.value?.data[i].value}`
                );

                const { height, width } = getChartDimensions(data.size);
                form.setValues({
                  backgroundColor: data.bg,
                  backgroundImage: data.img,
                  configs: data.configs,
                  height,
                  width,
                });
                // setImage(
                //   `${getEnvironmentUrl()}/api/chart?configs=${data.configs}${
                //     // add background image of chart
                //     isEmpty(data.img) ? "" : `&img=${data.img}`
                //   }${
                //     // add background color of chart
                //     isEmpty(data.bg) ? "" : `&bg=${data.bg}`
                //   }&size=${width}x${height}`
                // );
              }}
              m={10}
              p={15}
              sx={(theme) => ({
                justifyContent: "space-around",
                display: "inline-block",
                borderRadius: 5,
                "&:hover": {
                  background: theme.colors.gray[2],
                  cursor: "pointer",
                },
              })}
            >
              <Title
                sx={{
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {typeof window !== "undefined" &&
                  localStorage.getItem(value.key)}
              </Title>
              <img
                width={300}
                height={300}
                style={{ marginTop: 10 }}
                key={i}
                src={value.value}
              />
            </Center>
          )
      )}
    </>
  );
};
export default MyCharts;
