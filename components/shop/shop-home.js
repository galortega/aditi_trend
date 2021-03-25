import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Container, Row, Col } from "react-bootstrap";

import ProductCard from "./product-card";
import Cart from "./shop-cart";
import { Fragment } from "react";

const ShopHome = ({ products }) => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [drawer, setDrawer] = useState(null);

  useEffect(() => {
    if (!_.isEmpty(cart)) {
      setDrawer(true);
      setTotal(_.sumBy(_.values(cart), (item) => item.precio * item.qty));
    } else setDrawer(false);
  }, [cart]);

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
                  cart={cart}
                  setCart={setCart}
                />
              </Col>
            )
          )}
        </Row>
      </Container>
      <Cart
        cart={cart}
        setCart={setCart}
        drawer={drawer}
        setDrawer={setDrawer}
        total={total}
        setTotal={setTotal}
      />
    </section>
  );
};

export default ShopHome;
