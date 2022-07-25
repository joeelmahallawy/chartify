import { Heading } from "@chakra-ui/layout";
import { Center, Title, Image, Box, Code } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { isInProduction } from "../../../../helpers";
import customNotification from "../../../reusables/customNotification";

const Landing = () => {
  const clipboard = useClipboard();

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
        Create visuals with your company's data{" "}
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
          quickly
        </span>
      </Heading>
      <Center sx={{ flexDirection: "column" }}>
        {/* <pre style={{ background: "red", margin: "0 auto", width: "50%" }}> */}
        <Code
          mt="3%"
          onClick={() => {
            clipboard.copy(
              `http://localhost:3000/api/chart?configs={"type":"line","data":{"labels":[2018,2019,2020,2021,2022],"datasets":[{"label":"Users","data":[10,30,80,190,350]}]}}`
            );
            return customNotification("Copied to clipboard!", "", "green");
          }}
          block
          sx={(t) => ({
            textAlign: "left",
            width: "100%",
            "&:hover": { cursor: "pointer", background: t.colors.gray[1] },
          })}
        >
          {`http://localhost:3000/api/chart`}

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
        {/* </pre> */}
        <Image
          mt={20}
          width={350}
          height={350}
          src={`${
            isInProduction() ? "http://localhost:3000" : "http://localhost:3000"
          }/api/chart?configs={%22type%22:%22line%22,%22data%22:{%22labels%22:[2018,2019,2020,2021,2022],%22datasets%22:[{%22label%22:%22Users%22,%22data%22:[10,30,80,190,350]}]}}`}
        />
      </Center>
    </Center>
  );
};
export default Landing;
