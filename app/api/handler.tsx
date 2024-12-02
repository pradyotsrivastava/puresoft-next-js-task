import { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";  // Import the mock data

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Respond with the mock data
  res.status(200).json(data);
}
