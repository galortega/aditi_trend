import React, { Fragment } from "react";
import { ButtonGroup, Badge, Col } from "react-bootstrap";
import { ColorBoton } from "./colorBoton";

export const RadioColores = ({
  botonClassNames,
  colour,
  colores,
  handleColor,
  borderRadius,
  children
}) => (
  <Col xs="6" className="text-right">
    <div className="col-12 text-right mb-1">
      <Badge variant="light" pill>
        Colores
      </Badge>
    </div>
    <ButtonGroup value={colour}>
      {_.map(colores, (color, index) => {
        return (
          <Fragment key={index}>
            <ColorBoton
              classNames={botonClassNames}
              color={color}
              colour={colour}
              handleColor={handleColor}
              borderRadius={borderRadius}
              children={children}
            />
          </Fragment>
        );
      })}
    </ButtonGroup>
  </Col>
);
