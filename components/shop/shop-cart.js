import React, { useEffect, useState } from "react";
import { Drawer, List, Avatar, Divider, Badge as AntBadge } from "antd";
import { Row, Col } from "react-bootstrap";
import { ColorBoton } from "../misc/colorBoton";
import _ from "lodash";

const ItemDescription = ({
  description,
  i = 0,
  len = _.keys(description).length
}) => (
  <Row>
    {_.map(description, (variation, index) => {
      const { color, qty, talla } = variation;
      i++;
      return (
        <Col xs={12} key={index}>
          <div className="d-flex justify-content-between">
            <div>
              <ColorBoton color={color} borderRadius="10%" />
              <ColorBoton color="#ffff" borderRadius="10%" text={talla} />
            </div>
            <AntBadge
              className="mb-1"
              count={qty}
              style={{
                backgroundColor: "goldenrod"
              }}
            />
          </div>
          {i !== len && <Divider className="my-1" />}
        </Col>
      );
    })}
  </Row>
);

const Item = ({ modelo, cart }) => {
  const { imagen, description, qty, precio, data } = cart[modelo];
  console.log(description);
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={imagen[0]} />}
        title={
          <div className="d-flex justify-content-between">
            <span>{_.capitalize(modelo)}</span>
            <b>${qty * precio}</b>
          </div>
        }
        description={<ItemDescription description={description} />}
      />
    </List.Item>
  );
};

export const Cart = ({ cart, drawer, setDrawer, total }) => {
  const onClose = () => {
    setDrawer(false);
  };

  return (
    <Drawer
      title={"Carrito de Compras: $" + total}
      placement="right"
      onClose={onClose}
      visible={drawer}
      maskClosable={true}
      mask={false}
      getContainer={false}
    >
      <div className="my-auto">
        <List
          itemLayout="horizontal"
          dataSource={_.keys(cart)}
          renderItem={(modelo) => <Item modelo={modelo} cart={cart} />}
        />
      </div>
    </Drawer>
  );
};

export default Cart;
