import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BlogDetails from "../components/blog-details";
import Footer from "../components/footer";
import { models } from "../utils/constants";

export async function getStaticProps() {
  const posts = await getPosts({ model: models.BLOG });
  return {
    revalidate: 10,
    props: { posts }
  };
}

const NewsDetails = () => {
  return (
    <Layout pageTitle="News Details || Azino || Charity React Next Template">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="News Details" crumbTitle="News" />
      <BlogDetails />
      <Footer />
    </Layout>
  );
};

export default NewsDetails;
