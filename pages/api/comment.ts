import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const { _id, name, email, message } = JSON.parse(req.body);
  console.log(req.body);
  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      message,
    });
  } catch (err) {
    return res.status(500).json({ message: "could not submit comment", err });
  }
  console.log("comment submitted");
  return res.status(200).json({ message: "comment submitted" });
}
