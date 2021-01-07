import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/images/resources/service-1-1.jpg";
import image2 from "../../assets/images/resources/service-1-2.jpg";
import image3 from "../../assets/images/resources/service-1-3.jpg";
import heart from "../../assets/images/shapes/leaves-2-2.png";
const SERVICE_TWO_DATA = [
  {
    extraClassName: "background-primary",
    image: image1,
    title: "Moda",
    text: "Tendencias sostenibles",
    link: "/news"
  },
  {
    extraClassName: "background-secondary",
    image: image2,
    title: "Lifestyle",
    text: "Vida sana y beauty",
    link: "/news"
  },
  {
    extraClassName: "background-base",
    image: image3,
    title: "Cultura",
    text: "Nuestro lado intelectual",
    link: "/news"
  }
];
const ServiceTwo = () => {
  const sliderOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };
  return (
    <section className="service-two">
      <Container>
        <Swiper {...sliderOptions}>
          {SERVICE_TWO_DATA.map(
            ({ extraClassName, image, title, text, link }, index) => (
              <SwiperSlide key={`service-two-key-${index}`}>
                <div
                  className={`service-two__box ${extraClassName}`}
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="service-two__box-inner">
                    <img src={heart} width="45" alt="" />
                    <h3>
                      <Link href={link}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <p>{text}</p>
                    <Link href={link}>
                      <a className="service-two__box-link">
                        <i className="far fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default ServiceTwo;
