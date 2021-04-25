// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from "./server.json";
import { compareValues } from "../../helper/utils";

export default ({ query: { _sort, _order } }, res) => {
  const result = compareValues;
  res.status(200).json(api.plants.sort(compareValues(_sort, _order)));
};
