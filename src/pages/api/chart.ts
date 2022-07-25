import { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import fs from "fs";
import crypto from "crypto";

import {
  backgroundPlugin,
  createImage,
  getChartDimensions,
  isHexCode,
  isValidChartSize,
  plugin,
} from "../../helpers";
import prisma from "../../prisma";

// image.src = "https://www.chartjs.org/img/chartjs-logo.svg";

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

    const chartID = Math.random() * 1000000000;
    // create chart
    const data = await createImage(
      req,
      configs,
      size,
      // if user wants a background image for their chart, they can send a url of an image
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
    res.send({ error: err.message });
  }
};
export default handler;

// WARNING:
// NOTE: if we want to create a chart, we need to pass in a "configs" parameter using chart.js configurations
// NOTE: if we want to set the size, we pass in a "size" parameter in url in format of (400x400)
// NOTE: if we want a background image, we pass in a "img" parameter in the request query of the image url
// NOTE: if we want a background color, we pass in a "bg" parameter of the color or hex code we want without the '#'
