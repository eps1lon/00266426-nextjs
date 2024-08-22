import { setTimeout } from "node:timers/promises";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await setTimeout(2_000);
  res.status(200).json({ message: "Hello from Next.js!" });
}
