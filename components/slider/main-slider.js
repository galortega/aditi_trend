import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

import banner1 from "../../assets/images/main-slider/banner-1.png";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSlider = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className="row justify-content-end">
              <Col xl={7} lg={12} className="text-right">
                <p>El mundo está cambiando y la moda también</p>
                <h2>
                  Libre, <br /> creativa <br /> y poderosa.
                </h2>
                <a
                  href="#"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn"
                >
                  ¡Compra ahora!
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className="row justify-content-end">
              <Col xl={7} lg={12} className="text-right">
                <p>El mundo está cambiando y la moda también</p>
                <h2>
                  Libre, <br /> creativa <br /> y poderosa.
                </h2>
                <a
                  href="#"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn"
                >
                  ¡Compra ahora!
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className="row justify-content-end">
              <Col xl={7} lg={12} className="text-right">
                <p>El mundo está cambiando y la moda también</p>
                <h2>
                  Libre, <br /> creativa <br /> y poderosa.
                </h2>
                <a
                  href="#"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn"
                >
                  ¡Compra ahora!
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
