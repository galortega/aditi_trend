import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import ShopHome from "../components/shop/shop-home";
import { models } from "../utils/constants";
import get from "./api/get";
import _ from "lodash";

export async function getStaticProps() {
  const products = await get({
    include: [
      "modelo",
      "descripcion",
      "precio",
      "colores",
      "tallas",
      "imagen",
      "_created"
    ],
    model: models.PRODUCT
  });
  return {
    revalidate: 10,
    props: { products }
  };
}

const Shop = (props) => {
  return (
    <Layout pageTitle="Tienda || Aditi || Slow Fashion">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Tienda" crumbTitle="Tienda" />
      <ShopHome products={props.products} />
      <Footer />
    </Layout>
  );
};

export default Shop;
