import { NextApiRequest, NextApiResponse } from "next";
import Blob from "cross-blob";
import axios from "axios";
import fs from "fs";
import {
  backgroundPlugin,
  createImage,
  getChartDimensions,
  getEnvironmentUrl,
  isHexCode,
  isValidChartSize,
  plugin,
} from "../../helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!req.query.configs)
      throw new Error(
        "Please pass in some configurations. You can find some basic configs on at: https://www.chartjs.org/docs/latest/configuration/"
      );
    const configs = JSON.parse(req.query.configs as string);
    let size: { width: number; height: number };
    // if the size wasn't specified, default to 400x400
    if (!req.query.size) size = { width: 400, height: 400 };
    // otherwise if it was, then check if the size passed in was valid
    else if (isValidChartSize(req.query.size as string)) {
      // get size
      const { height, width } = getChartDimensions(req.query.size as string);
      size = { height, width };
    }

    // NOTE: this is for edge cases when we have a image that can't be supported, we save it in our project then use it by referencing the file directory
    // if (req.headers.retry == "1") {
    //   // create image
    //   const data = await axios.get(req.query.img as string);

    //   // const data = await response.arrayBuffer();
    //   // const blob = new Blob(data.data);
    //   // const arrayBuffer = await blob.arrayBuffer();
    //   const buf = Buffer.from(data.data, "binary");
    //   // const blob = new Blob([data.data]);
    //   await fs.writeFileSync(
    //     `./public/invalidImages/${req.headers.id}.png`,
    //     buf
    //   );
    //   // then set that as the directory for creating image
    //   req.query.img = `./public/invalidImages/${req.headers.id}.png`;
    // }

    const chartID = Math.random() * 1000000000;

    // create chart
    const data = await createImage(
      req,
      configs,
      size,
      //  if user wants a background image for their chart, they can send a url of an image
      req.query.img
        ? await plugin(
            String(chartID),
            req.query.img as string,
            size,
            req.query.bg as string
          )
        : // if we don't want a background image, but we want a background color
        req.query.bg
        ? // then create a plugin for changing the background color
          backgroundPlugin(req.query.bg as string)
        : backgroundPlugin()
    );
    // const detectedIp = requestIp.getClientIp(req);

    res.end(data);
  } catch (err) {
    // console.log(err);
    // if (/403/.test(err.message)) {
    //   const imageId = Math.random() * 1000000;
    //   const retryWithSavedImage = await fetch(
    //     `${getEnvironmentUrl()}/api/chart?configs=${req.query.configs}${
    //       !req.query.img ? "" : `&img=${req.query.img}`
    //     }${!req.query.bg ? "" : `&bg=${req.query.bg}`}&size=${
    //       req.query.size || `400x400`
    //     }`,
    //     { headers: { retry: "1", id: String(imageId) } }
    //   );

    //   const data = await retryWithSavedImage.blob();
    //   res.end(data);
    // }

    res.json({ error: err.message });
  }
};
export default handler;

// WARNING:
// NOTE: if we want to create a chart, we need to pass in a "configs" parameter using chart.js configurations
// NOTE: if we want to set the size, we pass in a "size" parameter in url in format of (400x400)
// NOTE: if we want a background image, we pass in a "img" parameter in the request query of the image url
// NOTE: if we want a background color, we pass in a "bg" parameter of the color or hex code we want without the '#'
