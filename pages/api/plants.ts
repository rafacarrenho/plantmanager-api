// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from "./server.json";

export default (req, res) => {
  res.status(200).json(api.plants);
};
