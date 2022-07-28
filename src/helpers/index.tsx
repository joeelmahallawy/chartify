import { ChartConfiguration } from "chart.js";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import { loadImage, Image } from "canvas";
import { NextApiRequest } from "next";

export const isValidChartSize = (size: string): true | never => {
  if (!size.includes("x")) throw new Error("Invalid dimensions");
  const arrayOfDimensions = size.split("x");
  if (isNaN(Number(arrayOfDimensions[0]))) throw new Error("Invalid width");
  if (isNaN(Number(arrayOfDimensions[1]))) throw new Error("Invalid height");
  return true;
};

export const getChartDimensions = (
  size: string
): { width: number; height: number } => {
  const arrayOfDimensions = size.split("x");
  const dimensions = {
    width: Number(arrayOfDimensions[0]),
    height: Number(arrayOfDimensions[1]),
  };
  return dimensions;
};

export const createImage = async (
  req: NextApiRequest,
  configs: ChartConfiguration,
  size: { width: number; height: number },
  plugins?: ChartConfiguration["plugins"]
): Promise<Buffer> => {
  const chartCallback = (ChartJS) => {
    console.log("chart built");
  };

  const options: ChartConfiguration = {
    ...configs,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 0,
      backgroundColor: !configs.options?.backgroundColor
        ? "#40c057"
        : configs.options.backgroundColor,
      transitions: {
        show: {
          animations: {
            x: { from: 0 },
            y: { from: 0 },
          },
        },
        hide: {
          animations: { x: { from: 0 }, y: { from: 0 } },
        },
      },
    },
    plugins,
  };

  const canvasRenderService = new ChartJSNodeCanvas({
    width: size.width,
    height: size.height,
    chartCallback,
  });

  const dataUrl = await canvasRenderService.renderToBuffer(options); // converts chart to image
  return dataUrl;
};

export const plugin = async (
  id: string,
  imgSrc: string,
  size: { width: number; height: number },
  backgroundColor?: string
): Promise<ChartConfiguration["plugins"]> => {
  const image = new Image();
  const loadedImage = await loadImage(imgSrc);

  return [
    {
      id,

      beforeDraw: (chart) => {
        chart.aspectRatio;
        if (image.complete) {
          const ctx = chart.ctx;
          const { top, left, width, height, bottom, right } = chart.chartArea;

          const x = left + width / 2 - height / 2;
          const y = top + height / 2 - height / 2;
          // @ts-expect-error
          ctx.drawImage(loadedImage, x, y, height, height);

          // const x = size.width / 4;
          // const y = size.height / 4;

          // ctx.drawImage(loadedImage, x, y);
        } else {
          loadedImage.onload = () => chart.draw();
        }
      },
    },
    {
      id: "background_color_babyyy",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        // no passed in background
        ctx.fillStyle = !backgroundColor
          ? // default to white
            "white"
          : // check if color is hexcode
          isHexCode(backgroundColor)
          ? // if it is, append # infront of it
            `#${backgroundColor}`
          : // otherwise just use actual color
            backgroundColor;
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    },
  ];
};

export const isHexCode = (color: string) => {
  const hexCodeRegEx = /[0-9A-Fa-f]{6}/g;
  return hexCodeRegEx.test(color);
};

export const backgroundPlugin = (
  backgroundColor?: string
): ChartConfiguration["plugins"] => [
  {
    id: "background_color_babyyy",
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext("2d");
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";
      // no passed in background
      ctx.fillStyle = !backgroundColor
        ? // default to white
          "white"
        : // check if color is hexcode
        isHexCode(backgroundColor)
        ? // if it is, append # infront of it
          `#${backgroundColor}`
        : // otherwise just use actual color
          backgroundColor;
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  },
];
export const isInProduction = () => process.env.NODE_ENV === "production";

export const getEnvironmentUrl = () =>
  isInProduction()
    ? process.env.NEXT_PUBLIC_PRODUCTION_URL
    : process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

export const parseUrlIntoConfigs = (
  url: string
): { configs: string; bg: string; img: string; size: string } => {
  const passedIn = new URL(url);
  const params = passedIn.searchParams;
  return {
    configs: params.get("configs") ?? "",
    bg: params.get("bg") ?? "",
    img: params.get("img") ?? "",
    size: params.get("size") ?? "",
  };
};
