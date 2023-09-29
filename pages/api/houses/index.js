import dbConnect from "../../../util/connect";
import House from "../../../models/House";

export default async function handler(req, res) {
  const { method, query } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const houses = await House.find();
      res.status(200).json(houses);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (method === "POST") {
    try {
      const house = await House.create(req.body);
      res.status(201).json(house);
    } catch (err) {
      console.log(err);
      //   res.status(500).json({ error: "Internal Server Error" });
    }
  }
 
}
