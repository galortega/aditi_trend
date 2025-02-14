import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/images/shapes/leaves-2-1.png";
import welcomeImage from "../../assets/images/resources/welcome-1-1.png";
import aboutImage from "../../assets/images/shapes/about-bag-1-2.png";

const AboutTwo = () => {
  return (
    <section className="about-two pt-120 pb-120">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-two__image">
              <img src={welcomeImage} alt="" />
              <div className="about-two__award">
                <img src={aboutImage} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-two__content">
              <div className="block-title">
                <p>
                  <img src={heart} width="30" alt="" /> About Azino Platform
                </p>
                <h3>
                  Conoce nuestros prendas social y ambientalmente responsables!
                </h3>
              </div>
              <p className="mb-40 pr-10">
                Nuestras prendas son elaboradas bajo la modalidad de slow
                fashion, que es la contraparte del movimiento fast fashion, en
                donde se rechaza la producción masiva, y se pretende que cada
                prenda o colección de ropa sea elaborada bajo procesos de
                conciencia ambiental y condiciones de trabajo éticas.
              </p>
              <Row>
                <Col md={6}>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Aplicamos el
                      principio menos es más.
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ametelit sed consectetur notted.
                    </p>
                  </div>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Tendencias
                      sostenibles
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ametelit sed consectetur notted.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-two__box-two">
                    <i className="azino-icon-support"></i>
                    <h3>Aplicamos el principio menos es más.</h3>
                  </div>
                </Col>
              </Row>
              <Link href="/about">
                <a className="thm-btn dynamic-radius">Descubre más</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
