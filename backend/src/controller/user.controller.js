import {getTest} from "../model/user.model.js";

export const getTesting = async (req, res) => {
  const result = await getTest();
  res.json(result);
}