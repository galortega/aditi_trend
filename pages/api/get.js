import restDB from "./config";
import _ from "lodash";
import axios from "axios";
import put from "./put";
import { categories } from "../../utils/constants";

const { BASE_URL, MEDIA_URL } = process.env;
const { headers } = restDB;

const handleImages = (data) => {
  return _.some(data, (r) => !_.isEmpty(r.imagen))
    ? _.map(data, (r) => {
        r.imagen = !_.isEmpty(r.imagen)
          ? _.map(r.imagen, (i) => {
              return MEDIA_URL + i;
            })
          : [
              "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            ];
        return r;
      })
    : data;
};

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

  const url = `${BASE_URL}${model}?metafields=true&q=${JSON.stringify(
    query
  )}&h={"$fields":${JSON.stringify(fields)}}${options}`;
  try {
    const res = handleImages(
      await axios.get(url, { headers }).then((r) => r.data)
    );
    return res;
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
