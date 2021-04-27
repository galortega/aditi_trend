import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/storage";
import {
  Drawer,
  List,
  Avatar,
  Divider,
  Badge as AntBadge,
  Button,
  Space
} from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import { Row, Col } from "react-bootstrap";
import { ColorBoton } from "../misc/colorBoton";
import _ from "lodash";

/*TODO
Eliminar item del carrito por variacion con una x
Cambiar estilo del título
*/

const eliminar = (item) => {
  console.log({ item });
  return true;
};

const ItemDescription = ({
  description,
  items,
  modelo,
  len = _.keys(description).length,
  i = 0 // Divider
}) => {
  return (
    <Row>
      {_.map(description, (variation, index) => {
        const { color, talla } = variation;
        /* 
        const [qty, setQty] = useState(variation.qty);
        const [isAdded, setIsAdded] = useState(true);

        const increase = () => {
          let copyCount = qty;
          setQty(++copyCount);
        };

        const decrease = () => {
          let copyCount = qty;
          setQty(--copyCount);
          if (copyCount <= 0) {
            setQty(0);
            setIsAdded(false);
          }
        };

        const handleDetalleItem = (item) =>
          _.chain(item[modelo].data)
            .groupBy("id")
            .toPairs()
            .forEach((v) => {
              const qty = v[1].length;
              v[1] = _.head(v[1]);
              v[1].qty = qty;
            })
            .fromPairs()
            .value();

        const handleCart = () => {
          const item = {
            qty,
            precio: items[modelo].precio,
            imagen: items[modelo].image
          };
          const copyOfCart = { ...items };
          if (isAdded) {
            // Item se encuentra en el carrito o se está agregando por primera vez
            const updatedItem = {};
            updatedItem[modelo] = item;

            if (copyOfCart[modelo].qty < qty) {
              // Subir cantidad
              updatedItem[modelo].data = _.concat(copyOfCart[modelo].data, {
                talla,
                color: colour,
                id: talla + colour
              });
            } else {
              // Bajar cantidad
              updatedItem[modelo].data = _.initial(copyOfCart[modelo].data);
            }

            updatedItem[modelo].description = handleDetalleItem(updatedItem);
            dispatch({
              type: "SET_CART_ITEMS",
              payload: _.assignIn(copyOfCart, updatedItem)
            });
          } else {
            delete copyOfCart[modelo];
            dispatch({ type: "SET_CART_ITEMS", payload: { ...copyOfCart } });
          }
        };

        useEffect(() => {
          handleCart();
        }, [qty, isAdded]);*/

        i++;
        return (
          <Col xs={12} key={index}>
            <div className="d-flex justify-content-between">
              <Space>
                <ColorBoton color={color} borderRadius="10%" />
                <ColorBoton color="#ffff" borderRadius="10%" text={talla} />
              </Space>
              <Space align="center">
                <Button
                  shape="circle"
                  icon={
                    <MinusCircleOutlined key="decrease" className="my-auto" />
                  }
                  type="text"
                  onClick={eliminar}
                />
                <AntBadge
                  count={variation.qty}
                  style={{
                    backgroundColor: "goldenrod"
                  }}
                />
              </Space>
            </div>
            {i !== len && <Divider className="my-1" />}
          </Col>
        );
      })}
    </Row>
  );
};

const Item = ({ modelo, items }) => {
  const { imagen, description, qty, precio, data } = items[modelo];
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
        description={
          <ItemDescription
            description={description}
            items={items}
            modelo={modelo}
          />
        }
      />
    </List.Item>
  );
};

export const Cart = ({}) => {
  const [state, dispatch] = useContext(Context);
  const { cart, items, total } = state;
  const onClose = () => {
    dispatch({ type: "SET_CART", payload: false });
  };

  return (
    <Drawer
      title={"Carrito de Compras: $" + total}
      placement="right"
      onClose={onClose}
      visible={cart}
      maskClosable={true}
      mask={false}
      getContainer={false}
    >
      <div className="my-auto">
        <List
          itemLayout="horizontal"
          dataSource={_.keys(items)}
          renderItem={(modelo) => <Item modelo={modelo} items={items} />}
        />
      </div>
    </Drawer>
  );
};

export default Cart;
