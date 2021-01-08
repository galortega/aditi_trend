import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BlogDetails from "../components/blog-details";
import Footer from "../components/footer";
import getPost from "./api/post";
import getPrevs from "./api/prevs";

export async function getStaticProps({ params }) {
  let post = await getPost(params.slug);
  console.log({params})
  return {
    props: post
  };
}

export async function getStaticPaths() {
  let posts = await getPrevs();

  // Get the paths we want to pre-render based on posts
  const paths = _.map(posts, (post) => {
    params: {
      slug: post.slug;
    }
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
      <BlogDetails props={props} />
      <Footer />
    </Layout>
  );
};

export default Post;
