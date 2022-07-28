import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "redis";
import { v4 as randomHash } from "uuid";
import { client } from "../../lib/redis";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await client.connect();
    const { imageUrl: value } = JSON.parse(req.body);
    const key = randomHash();
    await client.set(key, value);
    await client.disconnect();
    res.json({ id: key });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export default handler;
