import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import _ from "lodash";
import get from "../api/get";

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await get({ slug }, [
    "image",
    "body",
    "_created",
    "title",
    "slug"
  ]);
  console.log(post);
  return {
    props: { post: post[0] }
  };
}
export async function getStaticPaths() {
  let posts = await get(null, ["slug"]);
  // Get the paths we want to pre-render based on posts
  const paths = _.map(posts, (post) => {
    return { params: { slug: post.slug } };
  });
  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

const Post = (props) => {
  const { post } = props;
  return (
    <Layout pageTitle="News Details || Azino || Charity React Next Template">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title={post.title} crumbTitle="News" />
      <BlogDetails post={post} />
      <Footer />
    </Layout>
  );
};

export default Post;
