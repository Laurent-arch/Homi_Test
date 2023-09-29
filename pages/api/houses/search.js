import House from "../../../models/House";
import dbConnect from "../../../util/connect";

export default async function handler(req, res) {
  const {
    method,
    query: { suburb },
  } = req;
  

  dbConnect();

  if (method === "GET") {
    try {
      // Use a case-insensitive regex pattern to search for houses based on the suburb
      const regex = new RegExp(suburb, "i");
      const houses = await House.find({ suburb: regex });
      res.status(200).json(houses);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
