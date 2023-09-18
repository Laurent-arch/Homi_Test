import dbConnect from "../../../util/connect";
import House from "../../../models/House";

export default async function handler(req, res) {
  
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const house = await House.findById(id);
      res.status(200).json(house);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
