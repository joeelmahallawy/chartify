import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { client } from "../../lib/redis";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = JSON.parse(req.body);
    await client.connect();
    await client.del(id);
    await fs.unlinkSync(`./public/charts/${id}.png`);
    await client.disconnect();
    res.json({ success: true });
  } catch (error) {
    res.send({ error: error.message });
  }
};
export default handler;
