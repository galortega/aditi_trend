import React, { useState, useEffect, Fragment } from "react";
import { ButtonGroup, Badge, Row, Col } from "react-bootstrap";
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
import "antd/dist/antd.css";
import _ from "lodash";

const { Meta } = Card;

const { MEDIA_URL } = process.env;

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

const RadioColores = ({ colour, colores, handleColor }) => (
  <Col xs="6" className="text-right">
    <div className="col-12 text-right mb-1">
      <Badge variant="light" pill>
        Colores
      </Badge>
    </div>
    <ButtonGroup value={colour}>
      {_.map(colores, (color, index) => {
        return (
          <AntButton
            key={index}
            onClick={(e) => handleColor(color)}
            size={colour !== color ? "small" : "middle"}
            className="px-0 py-0"
            style={{ borderColor: "rgb(28, 29, 22)" }}
            ghost
          >
            <Tag
              color={color}
              className="py-0 my-0"
              style={{ height: "100%", width: "100%" }}
            ></Tag>
          </AntButton>
        );
      })}
    </ButtonGroup>
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
  const [count, setCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [colour, setColour] = useState(colores[0]);
  const [talla, setTalla] = useState(tallas[0]);
  const [tab, setTab] = useState(TABS[0]);

  const increase = () => {
    let copyCount = count;
    setCount(++copyCount);
    setIsAdded(true);
  };

  const decrease = () => {
    let copyCount = count;
    setCount(--copyCount);
    if (copyCount <= 0) {
      setCount(0);
      setIsAdded(false);
    }
  };

  const handleCart = () => {
    const item = {
      count,
      precio
    };
    const copyOfCart = { ...cart };
    if (isAdded) {
      const updatedItem = {};
      updatedItem[modelo] = item;

      if (!cart[modelo]) {
        updatedItem[modelo].data = [{ talla, color: colour }];
      } else {
        if (cart[modelo].count < count)
          updatedItem[modelo].data = _.concat(cart[modelo].data, {
            talla,
            color: colour
          });
        else updatedItem[modelo].data = _.initial(cart[modelo].data);
      }

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
    datos: <Meta title={`$${precio}`} description={descripcion} />,
    opciones: (
      <Row>
        <Col xs="12" className="mb-1 ml-2">
          <Meta title={`$${precio}`} />
        </Col>
        <RadioTallas tallas={tallas} talla={talla} handleTalla={handleTalla} />
        <RadioColores
          colour={colour}
          colores={colores}
          handleColor={handleColor}
        />
      </Row>
    )
  };

  useEffect(() => {
    handleCart();
    return () => {
      handleCart();
    };
  }, [count, isAdded]);

  useEffect(() => {
    if (isAdded) handleTab("opciones", "key");
    else handleTab("datos", "key");
  }, [isAdded]);

  return (
    <Card
      hoverable
      tabList={TABS}
      activeTabKey={tab.key}
      onTabChange={(key) => handleTab(key, "key")}
      bodyStyle={{ height: "13vh" }}
      headStyle={{ textAlign: "center" }}
      title={_.toUpper(modelo)}
      cover={
        <img
          alt={modelo}
          src={
            _.isEmpty(imagen)
              ? "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              : imagen[0]
          }
        />
      }
      actions={ActionList({
        count,
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
