import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../assets/images/shapes/testimonials-map-1-1.png";
import heart from "../../assets/images/shapes/leaves-2-1.png";
import image1 from "../../assets/images/resources/testimonial-1-1.jpg";
import image2 from "../../assets/images/resources/testimonial-1-2.jpg";
import image3 from "../../assets/images/resources/testimonial-1-3.jpg";

const TESTIMONIALS_ONE_DATA = [
  {
    image: image1,
    text:
      "There are many variations of passages of lorsum available but the majority have suffered alteration in form, by injected not humour.",
    name: "Alex Cooper",
    designation: "Customer"
  },
  {
    image: image2,
    text:
      "There are many variations of passages of lorsum available but the majority have suffered alteration in form, by injected not humour.",
    name: "Alex Cooper",
    designation: "Customer"
  },
  {
    image: image3,
    text:
      "There are many variations of passages of lorsum available but the majority have suffered alteration in form, by injected not humour.",
    name: "Alex Cooper",
    designation: "Customer"
  }
];

const TestimonialsOne = () => {
  return (
    <section
      className="testimonials-one pt-120 pb-90"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <div className="team-about__top">
          <Row className=" align-items-center">
            <Col md={12} lg={7}>
              <div className="block-title">
                <p>
                  <img src={heart} width="30" alt="" />
                  Our Testimonials
                </p>
                <h3>
                  Que opinan de <br /> Áditi Trend.
                </h3>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          {TESTIMONIALS_ONE_DATA.map(
            ({ image, designation, text, name }, index) => (
              <Col lg={4} key={`testimonials-post-key-${index}`}>
                <div className="testimonials-one__single">
                  <div className="testimonials-one__image">
                    <img src={image} alt="" />
                  </div>
                  <p>{text}</p>
                  <h3>{name}</h3>
                  <span>{designation}</span>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsOne;
