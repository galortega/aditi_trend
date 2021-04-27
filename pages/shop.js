import React, { useContext, useEffect } from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import ShopHome from "../components/shop/shop-home";
import { models } from "../utils/constants";
import get from "./api/get";
import _ from "lodash";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Context } from "../context/storage";

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
  const [state, dispatch] = useContext(Context);

  const { cart } = state;

  return (
    <Layout pageTitle="Tienda || Aditi || Slow Fashion">
      <HeaderOne />
      <StickyHeader />
      <PageHeader
        title="Tienda"
        crumbTitle="Tienda"
        children={
          <Button
            ghost
            onClick={() => dispatch({ type: "SET_CART", payload: !cart })}
            icon={<ShoppingCartOutlined />}
          />
        }
      />
      <ShopHome products={props.products} />
      <Footer />
    </Layout>
  );
};

export default Shop;
