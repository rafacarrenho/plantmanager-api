// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from "./server.json";
import { compareValues, paginate } from "../../helper/utils";

export default ({ query: { _sort, _order, _limit, _page = 1 } }, res) => {
  let result = api.plants;

  if (_sort) {
    result = result.sort(compareValues(_sort, _order));
  }

  if (_limit) {
    result = paginate(result, _page, _limit);
  }
  res.status(200).json(result);
};
