import Head from "next/head";
import ghostAPI from "./ghost";
import _ from "lodash"

export default async function getPrevs(req, res) {
  res = await ghostAPI.posts
    .browse({
      limit: 3,
      include: "slug,title,published_at,excerpt,feature_image"
    })
    .then((posts) =>
      _.map(posts, (post) => {
        return {
          image: post.feature_image,
          title: post.title,
          date: post.published_at,
          text: post.excerpt,
          link: `/post/${post.slug}`,
          slug: post.slug,
          commentCount: 0,
          author: "Paula Contreras"
        };
      })
    )
    .catch((err) => {
      console.error(err);
    });
  return res;
}
