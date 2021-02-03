import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import _ from "lodash";
import get from "../api/get";
import { categories } from "../../utils/constants";
import BlogHome from "../../components/blog/blog-home";

export async function getStaticProps({ params }) {
  const { category } = params;
  const posts = await get({ category }, [
    "image",
    "body",
    "_created",
    "title",
    "slug",
    "category",
    "excerpt"
  ]);
  return {
    props: { posts, category }
  };
}
export async function getStaticPaths() {
  const paths = _.map(categories, (category) => {
    return { params: { category } };
  });

  return { paths, fallback: false };
}

const Post = (props) => {
  const { posts, category } = props;
  return (
    <Layout pageTitle="News Details || Azino || Charity React Next Template">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title={_.startCase(category)} crumbTitle={category} />
      <BlogHome posts={posts} grid={true} />
      <Footer />
    </Layout>
  );
};

export default Post;
