import restDB from "./config";
import _ from "lodash";
import axios from "axios";

const { BASE_URL } = process.env;
const { headers } = restDB;

/**
 *
 * @param {{*}} query
 * @param {[*]} include
 */
export default async function put(id, body) {
  _.assign(headers, { "content-type": "application/json" });
  const url = `${BASE_URL}/blog/${id}`;
  try {
    const res = await axios.put(url, JSON.stringify(body), { headers });
    return res;
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.data.list);
  }
}
