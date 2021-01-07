import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";
import blockTitleHeart from "../../assets/images/shapes/leaves-2-1.png";

const serviceOneData = [
  {
    icon: "azino-icon-water-bottle",
    extraClassName: "background-secondary",
    title: "Moda",
    text: "Tendencias sostenibles.",
    link: "/news"
  },
  {
    icon: "azino-icon-hamburger",
    title: "Lifestyle",
    extraClassName: "background-base",
    text: "Vida sana y beauty.",
    link: "/news"
  },
  {
    icon: "azino-icon-reading-book",
    title: "Cultura",
    text: "Nuestro lado intelectual.",
    link: "/news",
    extraClassName: "background-primary"
  }
];

const ServiceOne = () => {
  return (
    <section
      className="service-one pt-50"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <div className="block-title">
          <p>
            <img src={blockTitleHeart} width="30" alt="" />
            Bienvenidxs al lado cool de la moda
          </p>
          <h3>
            En Áditi Trend creemos que <br /> la moda debe ser sustentable.
          </h3>
        </div>
        <Row>
          {serviceOneData.map(
            ({ icon, title, text, link, extraClassName }, index) => (
              <Col md={6} lg={3} key={`service-one-key-${index}`}>
                <div className={`service-one__box`}>
                  <div className={`service-one__icon ${extraClassName}`}>
                    <div className="service-one__icon-inner">
                      <i className={icon}></i>
                    </div>
                  </div>
                  <h3>
                    <Link href={link}>
                      <a>{title}</a>
                    </Link>
                  </h3>
                  <p>{text}</p>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;
