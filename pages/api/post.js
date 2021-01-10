import Head from "next/head";
import ghostAPI from "./ghost";
import _ from "lodash";

export default async function getPost(slug) {
  const res = await ghostAPI.posts
    .read({
      slug
      // include: "slug,title,published_at,excerpt,feature_image"
    })
    .catch((err) => {
      console.error(err);
    });
  return res;
}
