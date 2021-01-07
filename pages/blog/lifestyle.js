import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogPage from "../../components/blog/blog-page";
import Footer from "../../components/footer";

const Lifestyle = () => {
  return (
    <Layout pageTitle="Blog || Áditi Trend || Lifestyle">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Lifestyle" crumbTitle="Lifestyle" />
      <BlogPage />
      <Footer />
    </Layout>
  );
};

export default Lifestyle;
