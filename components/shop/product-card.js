import React, { useState, useEffect, Fragment } from "react";
import { Badge, Row, Col } from "react-bootstrap";
import {
  Card,
  Button as AntButton,
  Tooltip,
  Badge as AntBadge,
  Radio,
  Tag
} from "antd";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  WhatsAppOutlined
} from "@ant-design/icons";
import _ from "lodash";
import { RadioColores } from "../misc/colorRadio";

const { Meta } = Card;

const TABS = [
  { key: "datos", tab: "👁‍🗨" },
  { key: "opciones", tab: "Talla y color" }
];

const RadioTallas = ({ tallas, talla, handleTalla, extra }) => (
  <Col xs={extra ? "12" : "6"}>
    {!extra && (
      <div className="mb-1 col-12">
        <Badge variant="light" pill>
          Tallas
        </Badge>
      </div>
    )}
    <Radio.Group value={talla}>
      {_.map(tallas, (t, index) => (
        <Radio.Button
          key={index}
          value={t}
          size={talla !== t ? "small" : "middle"}
          onClick={(e) => handleTalla(t)}
        >
          {t}
        </Radio.Button>
      ))}
    </Radio.Group>
  </Col>
);

const ActionList = ({ count, cartCount, increase, decrease }) => {
  return [
    <Tooltip title="Agregar" placement="left">
      <AntBadge
        count={count}
        style={{
          backgroundColor: "goldenrod"
        }}
        offset={[-8, 8]}
      >
        <AntButton
          shape="circle"
          icon={<PlusCircleOutlined key="increase" />}
          type="text"
          size="large"
          onClick={increase}
        ></AntButton>
      </AntBadge>
    </Tooltip>,
    <Tooltip title="Quitar" placement="left">
      <AntButton
        shape="circle"
        icon={<MinusCircleOutlined key="decrease" />}
        type="text"
        size="large"
        onClick={decrease}
      ></AntButton>
    </Tooltip>,
    <Tooltip title="Detalles" placement="left">
      <AntButton
        shape="circle"
        icon={<WhatsAppOutlined key="whatsapp" />}
        type="text"
        size="large"
      ></AntButton>
    </Tooltip>
  ];
};

const ProductCard = ({
  modelo,
  descripcion,
  precio,
  colores,
  tallas,
  imagen,
  _created,
  cart,
  setCart
}) => {
  const [qty, setQty] = useState(0);
  const [added, setAdded] = useState(false);
  const [colour, setColour] = useState(colores[0]);
  const [talla, setTalla] = useState(tallas[0]);
  const [tab, setTab] = useState(TABS[0]);

  const increase = () => {
    let copyCount = qty;
    setQty(++copyCount);
    setAdded(true);
  };

  const decrease = () => {
    let copyCount = qty;
    setQty(--copyCount);
    if (copyCount <= 0) {
      setQty(0);
      setAdded(false);
    }
  };

  const handleItemDetail = (item) =>
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
      precio,
      imagen
    };
    const copyOfCart = { ...cart };
    if (added) {
      const updatedItem = {};
      updatedItem[modelo] = item;

      if (_.isEmpty(copyOfCart[modelo])) {
        _.assign(updatedItem[modelo], {
          data: [{ talla, color: colour, id: talla + colour }],
          imagen
        });
      } else {
        if (copyOfCart[modelo].qty < qty) {
          updatedItem[modelo].data = _.concat(copyOfCart[modelo].data, {
            talla,
            color: colour,
            id: talla + colour
          });
        } else {
          updatedItem[modelo].data = _.initial(copyOfCart[modelo].data);
        }
      }

      updatedItem[modelo].description = handleItemDetail(updatedItem);
      setCart({ ...cart, ...updatedItem });
    } else {
      delete copyOfCart[modelo];
      setCart({ ...copyOfCart });
    }
  };

  const handleColor = (e) => {
    setColour(e);
  };

  const handleTalla = (e) => {
    setTalla(e);
  };

  const handleTab = (key, type) => {
    setTab({ [type]: key });
  };

  const contentList = {
    datos: (
      <Row>
        <Col xs="12" className="mb-1 ml-2">
          <Meta title={`$${precio}`} description={descripcion} />
        </Col>
      </Row>
    ),
    opciones: (
      <Row>
        <Col xs="12">
          <Meta title={`$${precio}`} />
        </Col>
        <RadioTallas tallas={tallas} talla={talla} handleTalla={handleTalla} />
        <RadioColores
          botonClassNames="mr-1"
          colour={colour}
          colores={colores}
          handleColor={handleColor}
        />
      </Row>
    )
  };

  useEffect(() => {
    handleCart();
  }, [qty, added]);

  useEffect(() => {
    if (added) handleTab("opciones", "key");
    else handleTab("datos", "key");
  }, [added]);

  return (
    <Card
      hoverable
      tabList={TABS}
      activeTabKey={tab.key}
      onTabChange={(key) => handleTab(key, "key")}
      bodyStyle={{ height: "14vh" }}
      headStyle={{ textAlign: "center" }}
      title={_.toUpper(modelo)}
      cover={<img alt={modelo} src={imagen[0]} />}
      actions={ActionList({
        count: qty,
        cartCount: cart[modelo] ? cart[modelo].count : 0,
        increase,
        decrease
      })}
    >
      {contentList[tab.key]}
    </Card>
  );
};

export default ProductCard;
