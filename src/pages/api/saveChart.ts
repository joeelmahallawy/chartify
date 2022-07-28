import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "redis";
import { v4 as randomHash } from "uuid";
import { client } from "../../lib/redis";
import fs from "fs";
import {
  backgroundPlugin,
  createImage,
  getChartDimensions,
  getEnvironmentUrl,
  isValidChartSize,
  plugin,
} from "../../helpers";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = new URL(`${""}${JSON.parse(req.body).imageUrl}`);
    console.log(req.body);
    const params = url.searchParams;
    const configs = JSON.parse(params.get("configs"));

    // const configs = JSON.parse(req.query.configs as string);
    let size: { width: number; height: number };
    // if the size wasn't specified, default to 400x400
    if (!params.get("size")) size = { width: 400, height: 400 };
    // otherwise if it was, then check if the size passed in was valid
    else if (isValidChartSize(params.get("size") as string)) {
      // get size
      const { height, width } = getChartDimensions(
        params.get("size") as string
      );
      size = { height, width };
    }

    // if (req.headers.retry == "1") {
    //   // create image
    //   const data = await axios.get(params.get("img") as string);
    //   // const data = await response.arrayBuffer();
    //   fs.writeFileSync(`./savedInvalidImages/${req.headers.id}.png`, data.data);
    //   // then set that as the directory for creating image
    //   params.get("img") = `./savedInvalidImages/${req.headers.id}.png`;
    // }

    const chartID = Math.random() * 1000000000;
    // create chart
    const data = await createImage(
      req,
      configs,
      size,
      // if user wants a background image for their chart, they can send a url of an image
      params.get("img")
        ? await plugin(
            String(chartID),
            params.get("img") as string,
            size,
            params.get("bg") as string
          )
        : // if we don't want a background image, but we want a background color
        params.get("bg")
        ? // then create a plugin for changing the background color
          backgroundPlugin(params.get("bg") as string)
        : backgroundPlugin()
    );

    await client.connect();
    const { imageUrl: value } = JSON.parse(req.body);
    const key = randomHash();

    console.log("THE VAL", value);
    await client.set(
      key,
      value
      // `${value}${
      //   params.get("size") ? `&size=${size.width}x${size.height}` : ""
      // }`
    );
    await client.disconnect();

    // await fs.writeFileSync(`./public/charts/${key}.png`, data);
    res.json({ id: key });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export default handler;
