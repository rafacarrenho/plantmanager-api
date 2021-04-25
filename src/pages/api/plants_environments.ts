// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from "./server.json";
import { compareValues } from "../../helper/utils";

export default ({ query: { _sort, _order } }, res) => {
  const result = api.plants_environments.sort(compareValues(_sort, _order));
  res.status(200).json(result);
};
