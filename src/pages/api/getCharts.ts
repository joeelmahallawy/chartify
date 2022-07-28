import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/redis";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // get list of keys
    const { keys }: { keys: string[] } = JSON.parse(req.body);
    await client.connect();
    // const ids = [];

    const batchGet = keys.map((key) => {
      return client.get(key);
    });

    // get all keys
    const values = await Promise.all(batchGet);
    const keyValuePairs = values.map((val, i) => {
      return { key: keys[i], value: val };
    });
    await client.disconnect();
    // send it
    res.json({ data: keyValuePairs });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export default handler;
