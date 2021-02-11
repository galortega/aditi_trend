import restDB from "./config";
import _ from "lodash";
import axios from "axios";
import put from "./put";
import { categories } from "../../utils/constants";

const { BASE_URL } = process.env;
const { headers } = restDB;

/**
 *
 * @param {{*}} query
 * @param {[*]} include
 * @param {order: ["field", "1"], max: *} options
 */
export default async function get({ query, include, options, model }) {
  options = options || {};
  let { max, sort, groupBy } = options;

  groupBy = groupBy ? `&groupby=${groupBy}` : "";
  max = max ? `&max=${max}` : "";
  sort = !_.isEmpty(sort) ? `&sort=${sort[0]}&dir=${sort[1]}` : "";
  options = _.join([max, sort, groupBy], "");

  query = _.isEmpty(query)
    ? { published: true }
    : _.assign(query, { published: true });

  const fields = {};
  _.forEach(include, (i) => Object.assign(fields, { [i]: 1 }));

  const url = `${BASE_URL}/${model}?metafields=true&q=${JSON.stringify(
    query
  )}&h={"$fields":${JSON.stringify(fields)}}${options}`;

  try {
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    console.log(error.response.data);
  }
}

/*
    res.data.forEach(async (r) => {
      const { title, excerpt, date, slug } = r;
      await put(r._id, {
        category: Object.values(categories)[_.random(0, 2)],
        title,
        date,
        excerpt,
        slug,
        published: true
      });
    });
*/
