import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import getPost from "../api/post";
import getPrevs from "../api/prevs";
import _ from "lodash";

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  return {
    props: { post }
  };
}
export async function getStaticPaths() {
  let posts = await getPrevs({ limit: 10 });
  // Get the paths we want to pre-render based on posts
  const paths = _.map(posts, (post) => {
    return { params: { slug: post.slug } };
  });
  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

const Post = (props) => {
  return (
    <Layout pageTitle="News Details || Azino || Charity React Next Template">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="News Details" crumbTitle="News" />
      <BlogDetails post={props.post} />
      <Footer />
    </Layout>
  );
};

export default Post;
