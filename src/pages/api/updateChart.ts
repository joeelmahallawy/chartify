import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/redis";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, configs } = JSON.parse(req.body);
    await client.connect();
    await client.del(id);
    await client.set(id, configs);
    await client.disconnect();
    res.json({ success: true });
  } catch (error) {
    res.send({ error: error.message });
  }
};
export default handler;
