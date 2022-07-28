import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import {
  backgroundPlugin,
  createImage,
  getChartDimensions,
  getEnvironmentUrl,
  isValidChartSize,
  plugin,
} from "../../helpers";
import { client } from "../../lib/redis";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, configs } = JSON.parse(req.body);
    await client.connect();
    await client.del(id);
    const url = new URL(`${getEnvironmentUrl()}${configs}`);
    const params = url.searchParams;

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

    const chartID = Math.random() * 1000000000;
    console.log(configs);
    // create chart
    const data = await createImage(
      req,
      JSON.parse(params.get("configs")),
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
    // await fs.writeFileSync(`./public/charts/${id}.png`, data);
    await client.set(id, `${getEnvironmentUrl()}${configs}`);
    await client.disconnect();
    res.json({ success: true });
  } catch (error) {
    res.send({ error: error.message });
  }
};
export default handler;
