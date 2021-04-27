import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context/storage";
import _ from "lodash";
import { Container, Row, Col } from "react-bootstrap";

import ProductCard from "./product-card";
import Cart from "./shop-cart";

const ShopHome = ({ products }) => {
  const [state, dispatch] = useContext(Context);
  const { items } = state;

  useEffect(() => {
    if (!_.isEmpty(items)) {
      dispatch({ type: "SET_CART", payload: true });
      dispatch({
        type: "SET_CART_TOTAL",
        payload: _.sumBy(
          _.values(items),
          (item) => parseFloat(item.precio) * item.qty
        )
      });
    } else {
      dispatch({ type: "SET_CART", payload: false });
      dispatch({
        type: "SET_CART_TOTAL",
        payload: 0
      });
    }
  }, [items]);

  return (
    <section className="news-page news-home pt-120 pb-120  site-card-border-less-wrapper">
      <Container>
        <Row className="row-eq-height">
          {products.map(
            (
              {
                modelo,
                descripcion,
                precio,
                colores,
                tallas,
                imagen,
                _created
              },
              index
            ) => (
              <Col xs="12" sm="4" key={index} className="mb-2">
                <ProductCard
                  modelo={modelo}
                  descripcion={descripcion}
                  precio={precio}
                  colores={colores}
                  tallas={tallas}
                  imagen={imagen}
                  _created={_created}
                  cart={items}
                />
              </Col>
            )
          )}
        </Row>
      </Container>
      <Cart />
    </section>
  );
};

export default ShopHome;
